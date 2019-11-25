<?php

namespace App\Controller;

use App\Entity\ClassTable;
use App\Entity\Payment;
use App\Entity\Product;
use App\Entity\Student;
use App\Form\PaymentType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

// Include Dompdf required namespaces
use Dompdf\Dompdf;
use Dompdf\Options;

class PaymentController extends AbstractController
{
    /**
     * @Route("/payment", name="payment")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @return JsonResponse|Response
     * @throws \Exception
     */
    public function index(Request $request)
    {
        $payments = $this->getDoctrine()->getRepository(Payment::class)->findAll();

        if ($request->isXmlHttpRequest() || $request->query->get('showJson') == 1) {
            $jsonData = $this->jsonData($payments, null);
            return new JsonResponse($jsonData);
        } else {
            return $this->render('payment/index.html.twig');
        }
        /*      $data = json_encode(['students' => $arrStudent, 'products' => $arrProduct], JSON_UNESCAPED_UNICODE);
                return $this->render('product/index.html.twig');
                return new JsonResponse($data,200, [], JSON_UNESCAPED_UNICODE);  */
    }

    /**
     * @Route("/payment/create.ajax", name="payment_create.ajax")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @return JsonResponse|Response
     * @throws \Exception
     */
    public function createAjax(Request $request)
    {
        $classes = $this->getDoctrine()->getRepository(ClassTable::class)->findOnlyForPayment();

        if ($request->isXmlHttpRequest() || $request->query->get('showJson') == 1) {
            $jsonData = $this->jsonData(null, null, $classes);
            return new JsonResponse($jsonData);
        } else {
            return $this->render('payment/create.html.twig');
        }
    }

    /**
     * @Route("/payment/create", name="payment_create")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @return Response
     */
    public function createAction(Request $request)
    {
        if (!($this->getUser()->isAdmin() || $this->getUser()->isSeller())) {
            return $this->redirectToRoute('home');
        }

        try {
            $payment = new Payment();
            $form = $this->createForm(PaymentType::class, $payment);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $payment->setSeller($this->getUser()->getFullName());
                $payment->setLastEditUser($this->getUser()->getFullName());
                $product = $this->getDoctrine()->getRepository(Product::class)
                    ->find($request->get('product')['id']);
                if ($product) {
                    $product->setIsPaid(true);
                    $payment->setProducts($product);
                    $em = $this->getDoctrine()->getManager();
                    $em->persist($product);
                    $em->persist($payment);
                    $em->flush();
                    return $this->render('payment/view.html.twig', ['payment' => $payment]);
                }
            }
            return $this->render('payment/create.html.twig', ['form' => $form->createView()]);
        } catch (\Exception $e) {
            return $this->render('payment/index.html.twig', ['danger' => $e->getMessage()]);
        }
    }

    /**
     * @Route("/payment/edit/{id}", name="payment_edit")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param $id
     * @param Request $request
     * @return Response
     */
    public function editAction($id, Request $request)
    {
        if (!($this->getUser()->isAdmin() || $this->getUser()->isSeller())) {
            return $this->redirectToRoute('home');
        }

        try {
            $payment = $this->getDoctrine()->getRepository(Payment::class)->find($id);

            $form = $this->createForm(PaymentType::class, $payment);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $payment->setLastEditUser($this->getUser()->getFullName());
                $payment->setLastEdit(new \DateTime('now'));

                $em = $this->getDoctrine()->getManager();
                $em->persist($payment);
                $em->flush();
                return $this->render('payment/view.html.twig', ['payment' => $payment]);
            }
            return $this->render('payment/edit.html.twig', ['form' => $form->createView(),
                'payment'=> $payment
            ]);
        } catch (\Exception $e) {
            return $this->render('payment/index.html.twig', ['danger' => 'Грешка в записа'
            ]);
        }
    }

    /**
     * @Route("/payment/delete/{id}", name="payment_delete")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param $id
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     * @throws \Exception
     */
    public function daleteAction($id)
    {
        if (!($this->getUser()->isAdmin() || $this->getUser()->isSeller())) {
            return $this->redirectToRoute('home');
        }

        try {
            $payment = $this->getDoctrine()->getRepository(Payment::class)->find($id);
            $product = $this->getDoctrine()->getRepository(Product::class)
                ->find($payment->getProducts()->getId());

            if ($payment->getIsMonthEnded() || $product->getIsMonthEnded()) {
                throw new \Exception('Плащане за месец ' . $payment->getProducts()->getForMonth() . ' от ' .
                    $payment->getProducts()->getStudent()->getFullName() . ' ' .
                    $payment->getProducts()->getStudent()->getClass()->getName() . ' не може да бъде изтрито.'
                );
            }

            $product->setIsPaid(false);
            $em = $this->getDoctrine()->getManager();
            $em->persist($product);
            $em->remove($payment);
            $em->flush();

            return $this->redirectToRoute('payment');
        } catch (\Exception $e) {
           return $this->render('payment/index.html.twig', ['danger' =>  $e->getMessage()]);
        }
    }

    /**
     * @Route("/payment/pdf/{id}", name="payment_pdf")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param $id
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */

    public function pdfAction($id, Request $request)
    {
        $payment = $this->getDoctrine()->getRepository(Payment::class)->find($id);
        if (!$payment) {
            return $this->redirectToRoute('payment');
        }
        // Configure Dompdf according to your needs
        $pdfOptions = new Options();
        $pdfOptions->set('defaultFont', 'Arial');

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);

        // Retrieve the HTML generated in our twig file
        $html = $this->renderView('payment/pdf.html.twig', [
            'payment' => $payment
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper('A4', 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("mypdf.pdf", [
            "Attachment" => false
        ]);
    }

    /**
     *  @Route("/payment/classes", name="payment_by_class")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @return Response
     * @throws \Exception
     */
    public function viewAllClasses(Request $request)
    {
        if (!($this->getUser()->isAdmin() || $this->getUser()->isSeller())) {
            return $this->redirectToRoute('home');
        }

        $date = (new \DateTime('now'))->modify('-1 month');
        $classTables = $this->getDoctrine()->getRepository(ClassTable::class)
            ->findByMonth($date);
        $classId = intval($request->get('class')['id']);
        if ($classId > 0) {
            $payments = $this->getDoctrine()->getRepository(Payment::class)
                ->findNotCompleteMonthByClassIdAndMonth($request->get('class')['id'], $date);
            $class =  $this->getDoctrine()->getRepository(ClassTable::class)->find($classId);

            return $this->render('payment/byclass.html.twig', [ 'month' => $date,
                'classes' => $classTables, 'payments' => $payments, 'class' => $class
                ]);
        }
        if (!$classTables) {
            return $this->render('payment/byclass.html.twig', ['month' => $date,
                'classes' => [['id' => '0', 'name' => 'Няма за преключване!']]
            ]);
        }
        return $this->render('payment/byclass.html.twig', ['month' => $date, 'classes' => $classTables]);
    }

    /**
     * @Route("/payment/ended-month/{id}", name="payment_ended_mont")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param $id
     * @param Request $request
     * @return JsonResponse|Response
     */
    public function endedMonthAction($id, Request $request)
    {
        if (!($this->getUser()->isAdmin() || $this->getUser()->isSeller())) {
            return $this->redirectToRoute('home');
        }

        try {
            $date = (new \DateTime('now'))->modify('-1 month');
            $payments = $this->getDoctrine()->getRepository(Payment::class)
                ->findNotCompleteMonthByClassIdAndMonth($id, $date);

            if ($payments) {
                $em = $this->getDoctrine()->getManager();
                foreach ($payments as $payment) {
                    /** @var Payment $payment */
                    $payment->setIsMonthEnded(true);
                    $payment->getProducts()->setIsMonthEnded(true);
                    $em->persist($payment);
                }
                $em->flush();
                return $this->render('payment/endmonth.html.twig', ['payments' => $payments]);
            }
            return $this->redirectToRoute('payment_by_class');

        } catch (\Exception $e) {
            return $this->render('payment/endmonth.html.twig', ['danger' => $e->getMessage()]);
        }
    }

    /**
     * @Route("/payment/ended-month-info", name="payment_ended_mont_info")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @return Response
     * @throws \Exception
     */
    public function endedMonthInfo(Request $request)
    {
        $dateTime = new \DateTime('now');
        $classId = intval($request->get('class')['id']);
        $forMonth = $request->get('month');
        $token = array();
        if (strlen($forMonth) === 7) {
            $token = explode('.', $forMonth);
        }

        if ($classId > 0 && count($token) === 2) {
            $dateTime->setDate($token[1], $token[0], 1);

            $payments = $this->getDoctrine()->getRepository(Payment::class)
                ->findEndedMonthByClassIdAndDate($classId, $dateTime);

            return $this->render('payment/endmonth.html.twig', ['dateTime' => $dateTime, 'payments' => $payments
            ]);
        }

        $classTable = $this->getDoctrine()->getRepository(ClassTable::class)->findAll();
        return $this->render('payment/endedMonthInfo.html.twig', [
            'dateTime' => $dateTime, 'classes' => $classTable
        ]);
    }



    /**
     * @Route("/payment/create/by/{id}", name="payment_create_id")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param $id
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function createByIdAction($id, Request $request)
    {
        if (!($this->getUser()->isAdmin() || $this->getUser()->isSeller())) {
            return $this->redirectToRoute('home');
        }

        try {
            $payment = new Payment();
            $product = $this->getDoctrine()->getRepository(Product::class)->find($id);
            $payment->setProducts($product);

            $form = $this->createForm(PaymentType::class, $payment);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $payment->setSeller($this->getUser()->getFullName());
                $payment->setLastEditUser($this->getUser()->getFullName());
                $product = $this->getDoctrine()->getRepository(Product::class)
                    ->find($request->get('product')['id']);
                if ($product) {
                    $product->setIsPaid(true);
                    $payment->setProducts($product);
                    $em = $this->getDoctrine()->getManager();
                    $em->persist($product);
                    $em->persist($payment);
                    $em->flush();
                    return $this->render('payment/view.html.twig', ['payment' => $payment]);
                }
            }
            return $this->render('payment/create.html.twig', ['form' => $form->createView()]);
        } catch (\Exception $e) {
            return $this->render('payment/index.html.twig', ['danger' => $e->getMessage()]);
        }
    }

    /**
     * @param array|Payment $payments
     * @param null $products
     * @param null $classes
     * @return array
     */
    private function jsonData($payments = null, $products = null, $classes = null)
    {
        $arrProducts = array();
        if ($products !== null && $classes !== null) {
            $arrProducts = $this->productToArrayByClassId($products, $classes);
        }

        $arrClasses = array();
        if ($products === null && $classes !== null) {
            $arrClasses = $this->classTablesToArray($classes);
        }

        $arrPayment = array();
        if ($payments !== null) {
            $arrPayment = $this->paymentToArray($payments);
        }


        return ['payments' => $arrPayment, 'classes' => $arrClasses, 'products' => $arrProducts];
    }

    private function paymentToArray($payments)
    {
        $arrPayment = array();
        /** @var Payment $payment */
        foreach ($payments as $payment) {
            $arrPayment[] = array(
                'id' => $payment->getId(),
                'price' => $payment->getPrice(),
                'isPaid' => $payment->getProducts()->getIsPaid(),
                'isMontEnded' => $payment->getIsMonthEnded(),
                'payment' => $payment->getPayment(),
                'datePurchases' => $payment->getDatePurchases()->format('d.m.Y H:i'),
                'lastEdit' => $payment->getLastEdit()->format('d.m.Y H:i'),
                'namePayer' => $payment->getNamePayer(),
                'student' => $payment->getProducts()->getStudent()->getFullName(),
                'class' => $payment->getProducts()->getStudent()->getClass()->getName(),
                'teacher' => $payment->getProducts()->getStudent()->getUser()->getFullName(),
                'forMonth' => $payment->getProducts()->getForMonth()->format('m.Y'),
                'user' => $this->getUser()->getFullName(),
                'userRole' => $this->getUser()->getRoles()[0],
                'lastEditUser' =>$payment->getLastEditUser(),
            );
        }
        return $arrPayment;
    }

    private function productToArrayByClassId($products, $classes)
    {
        /** @var Product $p */
        $arrClassesId = array();
        /** @var ClassTable $c */
        foreach ($classes as $c) {
            $arrClassesId[] = [];
            foreach ($products as $p) {
                if (1 === $p->getStudent()->getClass()->getId()) {
                    $arrClassesId[] = array(
                        'id' => $p->getId(),
                        'studentId' => $p->getStudent()->getId(),
                        'student' => $p->getStudent()->getFullName(),
                        'classId' => $p->getStudent()->getClass()->getId(),
                        'class' => $p->getStudent()->getClass()->getName(),
                        'price' => $p->getPrice(),
                        'isPaid' => $p->getIsPaid(),
                        'forMonth' => $p->getForMonth()->format('m.Y'),
                        'feeInDays' => $p->getFeeInDays(),
                        'dateCreate' => $p->getDateCreate()->format('d.m.Y H:i'),
                        'lastEdit' => $p->getLastEdit()->format('d.m.Y H:i'),
                    );
                }
            }
        }
        return $arrClassesId;
    }

    private function classTablesToArray($classTables)
    {
        $arrClasses = array();
        $i = 0;

        /** @var ClassTable $c */
        foreach ($classTables as $c) {
            $i++;
            $arrClasses[$i] = array(
                'id' => $c->getId(),
                'name' => $c->getName(),
                'students' => array(),
            );

            /** @var Student| $s */
            foreach ($c->getStudents() as $s) {
                foreach ($s->getProducts() as $p) {
                   if ($p->getIsPaid() == true) {
                       continue;
                   }
                    $arrClasses[$i]['students'][] = array(
                        'productId' => $p->getId(),
                        'studentId' => $s->getId(),
                        'student' => $s->getFullName(),
                        'userId' => $s->getUser()->getId(),
                        'user' => $s->getUser()->getFullName(),
                        'price' => $p->getPrice(),
                        'feeInDays' => $p->getFeeInDays(),
                        'forMonth' => $p->getForMonth()->format('m.Y'),
                        'isPaid' => $p->getIsPaid(),
                        'seller' => $this->getUser()->getFullName()
                    );
                }
            }
        }
        return $arrClasses;
    }
}
