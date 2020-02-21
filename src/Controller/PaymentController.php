<?php

namespace App\Controller;

use App\Entity\ClassTable;
use App\Entity\Payment;
use App\Entity\Product;
use App\Entity\Student;
use App\Entity\User;
use App\Form\PaymentType;
use mysql_xdevapi\RowResult;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

// Include Dompdf required namespaces
use Dompdf\Dompdf;
use Dompdf\Options;
use Symfony\Component\Validator\Tests\Fixtures\ToString;
use function Composer\Autoload\includeFile;

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
     * @Route("/payment/test", name="payment_test")
     */
    public function test(Request $request)
    {
        $date = new \DateTime('now');
        $classes = $this->getDoctrine()->getRepository(ClassTable::class)
            ->findPaymentByMonth_OLD($date->modify('+1 month'));

        $result = array();
        $i = 0;
        foreach ($classes as $class) {
            $result[$i] = array(
                'id' => $class['id'],
                'name' => $class['name'],
                'seller' => $this->getUser()->getFullName(),
                'students' => array(),
            );

            $tokens = array_map('trim',explode("||", $class['students']));
            foreach ($tokens as $token) {
                $obj = array();
                $t = array_map('trim', explode(',', $token));
                foreach ($t as $a) {
                    list($k, $v) = explode('=>', $a);
                    $obj[$k] = $v;
                }
                $result[$i]['students'][] = $obj;
                //dd($obj);
            }
            $i++;
        }
        dd($result);
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
        $date = new \DateTime('now');
        $classes = $this->getDoctrine()->getRepository(ClassTable::class)
            ->findPaymentByMonth();
            //->findPaymentByMonth($date->modify('+1 month')->format('m.Y'));

        $result = array();
        $i = 0;
        /** @var ClassTable $class */
        foreach ($classes as $class) {
            $result[$i] = array(
                'id' => $class->getId(),
                'name' => $class->getName(),
                'seller' => $this->getUser()->getFullName(),
                'students' => array(),
            );

            /** @var Student $student */
            foreach ($class->getStudents() as $student) {
                /** @var Product $product */
                foreach ($student->getProducts() as $product) {
                    $result[$i]['students'][] = array(
                        'studentId' => $student->getId(),
                        'student' => $student->getFullName(),
                        'price' => $product->getPrice(),
                        'productId' => $product->getId(),
                        'isPaid' => $product->getIsPaid(),
                        'feeInDays' => $product->getFeeInDays(),
                        'forMonth' => date_format($product->getForMonth(), 'm.Y'),
                        'dateCreate' => date_format($product->getDateCreate(), 'd.m.Y H:i:s'),
                        'lasDate' => date_format($product->getLastEdit(), 'd.m.Y H:i:s'),
                    );
                    break;
                }
            }
            $i++;
        }

        if ($request->isXmlHttpRequest() || $request->query->get('showJson') == 1) {
            return new JsonResponse(['classes' => $result]);
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
                $namePayer = $this->strToLoweAndUcFirst($payment->getNamePayer());
                $payment->setNamePayer($namePayer);
                $product = $this->getDoctrine()->getRepository(Product::class)
                    ->find($request->get('product')['id']);

                if (!$product) {
                    throw new \Exception('Задължението не е намерено!');
                }

                $product->setIsPaid(true);
                $payment->setProducts($product);
                $em = $this->getDoctrine()->getManager();
                $em->persist($product);
                $em->persist($payment);
                $em->flush();

                return $this->render('payment/view.html.twig', ['payment' => $payment]);
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
     *  @Route("/payment/view-end-months", name="payment_view_end_months")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @return Response
     * @throws \Exception
     */
    public function viewEndMonths(Request $request)
    {
        if (!($this->getUser()->isAdmin() || $this->getUser()->isSeller())) {
            return $this->redirectToRoute('home');
        }

        $classTables = $this->getDoctrine()->getRepository(ClassTable::class)
            ->findByClosingMonth(false);

        $closingMonths = array();
        /** @var ClassTable $classTable */
        foreach ($classTables as $classTable) {
            /** @var Student $student */
            foreach ($classTable->getStudents() as $student) {
                /** @var Product $product */
                foreach ($student->getProducts() as $product) {
                    $forMonth = ($product->getForMonth())->format('m.Y');
                    $name = $classTable->getName();

                    if (!array_key_exists($forMonth, $closingMonths)) {
                        $closingMonths[$forMonth] = array();
                    }
                    if (!array_key_exists($name, $closingMonths[$forMonth])) {
                        $closingMonths[$forMonth][$name] = array(
                            'count' => 0,
                            'id' => $classTable->getId(),
                            'countPaid' =>  0,
                            'countDontPaid' => 0,
                        );
                    }

                    $closingMonths[$forMonth][$name]['count'] = ++$closingMonths[$forMonth][$name]['count'];
                    if ($product->getIsPaid()) {
                        $closingMonths[$forMonth][$name]['countPaid'] = ++$closingMonths[$forMonth][$name]['countPaid'];
                    } else {
                        $closingMonths[$forMonth][$name]['countDontPaid'] = ++$closingMonths[$forMonth][$name]['countDontPaid'];
                    }
                }
            }
        }

        $json =  json_encode($closingMonths, JSON_UNESCAPED_UNICODE);
        return $this->render('payment/closing_month.html.twig', ['json' => $json]);
    }

    /**
     * @Route("/payment/end-month/{id}", name="payment_end_month")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param $id
     * @param Request $request
     * @return JsonResponse|Response
     */
    public function endedByMonthAction($id, Request $request)
    {
        if (!($this->getUser()->isAdmin() || $this->getUser()->isSeller())) {
            return $this->redirectToRoute('home');
        }

        try {
            if (count(explode('.', $id)) !== 2) {
                return $this->redirectToRoute('payment_ended_mont_info');
            }

            $payments = array();
            $classTables = $this->getDoctrine()->getRepository(ClassTable::class)
                ->findByClosingMonth(false, $id);
            //Затварчне на останалите непреключени месеци.
            $productsDontMonth = $this->getDoctrine()->getRepository(Product::class)
                ->findByDateDontPaidMonth($id);

            $em = $this->getDoctrine()->getManager();
            /** @var ClassTable $classTable */
            foreach ($classTables as $classTable) {
                /** @var Student $student */
                foreach ($classTable->getStudents() as $student) {
                    /** @var Product $product */
                    foreach ($student->getProducts() as $product) {
                        /** @var Payment $payment */
                        $payments[] = $product->getPayment();
                        $product->getPayment()->setIsMonthEnded(true);
                        $product->setIsMonthEnded(true);
                        $em->persist($product);
                    }
                }
            }
            //Затварчне на останалите непреключени месеци.
            /** @var Product $productDontMonth */
            foreach ($productsDontMonth as $productDontMonth) {
                $productDontMonth->setIsMonthEnded(true);
            }
            $em->flush();

            return $this->render('payment/ended-month-info.html.twig', ['payments' => $payments]);
        } catch (\Exception $e) {
            return $this->render('payment/ended-month-info.html.twig', ['danger' => $e->getMessage()]);
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
        $requestTokens = $request->get('class');
        $forMonth = $request->get('month');
        $token = array();
        if (strlen($forMonth) === 7) {
            $token = explode('.', $forMonth);
        }

        if (count($token) !== 2) {
            $classTable = $this->getDoctrine()->getRepository(ClassTable::class)->findAll();
            return $this->render('payment/by-month-class.html.twig', [
                'dateTime' => $dateTime, 'classes' => $classTable
            ]);
        }

        $dateTime->setDate($token[1], $token[0], 1);

        if (array_key_exists('all', $requestTokens)) {
            $payments = $this->getDoctrine()->getRepository(Payment::class)
                ->findBydMonth($dateTime, true, true);
            $classes = $this->getDoctrine()->getRepository(ClassTable::class)->findAll();
            return $this->render('payment/ended-month-info.html.twig', [
                'dateTime' => $dateTime, 'classes' => $classes,'payments' => $payments
            ]);
        }

        if (array_key_exists('id', $requestTokens)) {
            $classId = intval($requestTokens['id']);
            $payments = $this->getDoctrine()->getRepository(Payment::class)
                ->findEndedMonthByClassIdAndDate($classId, $dateTime);
            $class = $this->getDoctrine()->getRepository(ClassTable::class)->find($classId);
            return $this->render('payment/ended-month-info.html.twig', [
                'dateTime' => $dateTime, 'class' => $class, 'payments' => $payments
            ]);
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
                'user' => $payment->getSeller(),
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

    private function classTablesToArray($classes)
    {
        $result = array();
        $i = 0;
        foreach ($classes as $class) {
            $result[$i] = array(
                'id' => $class['id'],
                'name' => $class['name'],
                'seller' => $this->getUser()->getFullName(),
                'students' => array(),
            );

            $tokens = array_map('trim',explode("||", $class['students']));
            foreach ($tokens as $token) {
                $obj = array();
                $t = array_map('trim', explode(',', $token));
                foreach ($t as $a) {
                    list($k, $v) = explode('=>', $a);
                    $obj[$k] = $v;
                }
                $result[$i]['students'][] = $obj;
            }
            $i++;
        }
        return $result;
    }

    private function strToLoweAndUcFirst(string $str)
    {
        $string = '';
        $token = array_map('trim', explode(' ', $str));
        for ($i = 0; $i < count($token); $i++) {
            if ($token[$i] !== '') {
                $string .= mb_convert_case($token[$i], MB_CASE_TITLE,  'UTF-8');
                if ($i < count($token) - 1) {
                    $string .= ' ';
                }
            }
        }
        return $string;
    }
}
