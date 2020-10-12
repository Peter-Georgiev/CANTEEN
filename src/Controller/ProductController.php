<?php

namespace App\Controller;

use App\Entity\ClassTable;
use App\Entity\PricePerDay;
use App\Entity\Product;
use App\Entity\Student;
use App\Form\ProductType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    /**
     * @Route("/product")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @throws \Exception
     */
    public function index(Request $request)
    {
        //Only active students!!!
        $products = null;
        $classTables = null;
        if ($this->getUser()->isAdmin() || $this->getUser()->isSeller()) {
            $classTables = $this->getDoctrine()->getRepository(ClassTable::class)->findAllActiveStudents();
            $products = $this->getDoctrine()->getRepository(Product::class)->findAllActiveStudents();
        } else {
            $classTables = $this->getDoctrine()->getRepository(ClassTable::class)
                ->findAllActiveStudentsByUserId($this->getUser()->getId());
            $products = $this->getDoctrine()->getRepository(Product::class)
                ->findAllActiveStudentsByUserId($this->getUser()->getId());
        }

        if ($request->isXmlHttpRequest() || $request->query->get('showJson') == 1) {

            $jsonData = $this->jsonData($products, $classTables, null);

            return new JsonResponse($jsonData);
        } else {
            return $this->render('product/index.html.twig');
        }
        /*      $data = json_encode(['students' => $arrStudent, 'products' => $arrProduct], JSON_UNESCAPED_UNICODE);
                return $this->render('product/index.html.twig');
                return new JsonResponse($data,200, [], JSON_UNESCAPED_UNICODE);    */
    }

    /**
     * @Route("/product/test", name="product_test")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @return JsonResponse|Response
     * @throws \Exception
     */
    public function testAction(Request $request)
    {
        if (!$this->getUser()->isAdmin()) {
            return $this->redirectToRoute('home');
        }
        $userID = 4;
        $classTables = $this->getDoctrine()->getRepository(ClassTable::class)
            //->findAllActiveStudents();
            ->findForCreateProduct();
        //->findForCreateProduct($userID);

        dd($classTables);
    }

    /**
     * @Route("/product/ajax_cr_ed", name="product_ajax_cr_ed")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @return JsonResponse|Response
     * @throws \Exception
     */
    public function createEditActionAjax(Request $request)
    {
        if (!($this->getUser()->isAdmin() || $this->getUser()->isTeacher())) {
            return $this->redirectToRoute('home');
        }

        $classTables = null;
        if ($this->getUser()->isAdmin()) {
            $classTables = $this->getDoctrine()->getRepository(ClassTable::class)
                //->findAllActiveStudents();
                ->findForCreateProduct();
        } else {
            $classTables = $this->getDoctrine()->getRepository(ClassTable::class)
                //->findAllActiveStudentsByUserId($this->getUser()->getId());
                ->findForCreateProduct($this->getUser()->getId());
        }

        $pricePerDays = $this->getDoctrine()->getRepository(PricePerDay::class)->findOnlyActivePrice();

        if ($request->isXmlHttpRequest() || $request->query->get('showJson') == 1) {

            $jsonData = $this->jsonData(null, $classTables, $pricePerDays);

            return new JsonResponse($jsonData);
        } else {
            return $this->render('product/index.html.twig');
        }
    }

    /**
     * @Route("/product/create", name="product_create")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     */
    public function createAction(Request $request)
    {
        if (!($this->getUser()->isAdmin() || $this->getUser()->isTeacher())) {
            return $this->redirectToRoute('home');
        }

        try {
            $product = new Product();
            $form = $this->createForm(ProductType::class, $product);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $student = $this->getDoctrine()->getRepository(Student::class)
                    ->find($request->get('student')['id']);

                if (!$student) {
                    throw new \Exception('Ученика не беше намерен!');
                }

                $product->setStudent($student);

                if ($this->findExistingProduct($product)) {
                    throw new \Exception('Ученика от ' . $product->getStudent()->getClass()->getName() .
                        ' клас ' . $product->getStudent()->getFullName() . ' вече е добавен' . ' за месец ' .
                        $product->getForMonth()->format('m.Y')
                    );
                }

                $em = $this->getDoctrine()->getManager();
                $em->persist($product);
                $em->flush();
                return $this->render('product/view.html.twig', ['product' => $product]);
            }

            return $this->render('product/create.html.twig', ['form' => $form->createView()]);
        } catch (\Exception $e) {
            return $this->render('product/index.html.twig', ['danger' => $e->getMessage()]);
        }
    }

    /**
     * @Route("/product/edit/{id}", name="product_edit")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @param int $id
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     * @throws \Exception
     */
    public function editAction(Request $request, $id)
    {
        if (!($this->getUser()->isAdmin() || $this->getUser()->isTeacher())) {
            return $this->redirectToRoute('app_product_index');
        }

        try {
            $product = $this->getDoctrine()->getRepository(Product::class)->find($id);

            if (!$product) {
                return $this->redirectToRoute('app_product_index');
            }

            if ($product->getIsPaid() || $product->getIsMonthEnded()) {
                return $this->redirectToRoute('app_product_index');
            }

            $form = $this->createForm(ProductType::class, $product);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {

                $product->setLastEdit(new \DateTime('now'));
                $student = $this->getDoctrine()->getRepository(Student::class)
                    ->find($request->get('student')['id']);

                if (!$student) {
                    throw new \Exception('Ученика не беше намерен!');
                }
                $product->setStudent($student);

                if ($this->findExistingProduct($product)) {
                    throw new \Exception('Ученика от ' . $product->getStudent()->getClass()->getName() .
                        ' клас ' . $product->getStudent()->getFullName() . ' вече е добавен' . ' за месец ' .
                        $product->getForMonth()->format('m.Y')
                    );
                }

                $em = $this->getDoctrine()->getManager();
                $em->persist($product);
                $em->flush();
                return $this->render('product/view.html.twig', ['product' => $product]);
            }

            return $this->render('product/edit.html.twig', ['form' => $form->createView(),
                'classID' => $product->getStudent()->getClass()->getId(), 'product' => $product
            ]);
        } catch (\Exception $e) {
            return $this->render('product/index.html.twig', ['danger' => $e->getMessage()]);
        }
    }

    /**
     * @Route("/product/delete/{id}", name="product_delete")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param $id
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     * @throws \Exception
     */
    public function daleteAction($id)
    {
        if (!($this->getUser()->isAdmin() || $this->getUser()->isTeacher())) {
            return $this->redirectToRoute('app_product_index');
        }

        $product = $this->getDoctrine()->getRepository(Product::class)->find($id);
        if (!$product) {
            return $this->redirectToRoute('app_product_index');
        }

        if ($product->getIsPaid() || $product->getIsMonthEnded()) {
            return $this->redirectToRoute('app_product_index');
        }

        try {
            $em = $this->getDoctrine()->getManager();
            $em->remove($product);
            $em->flush();
        } catch (\Exception $e) {
            throw new \Exception('Плащане за месец ' . $product->getForMonth() . ' от ' .
                $product->getStudent()->getFullName() . ' ' . $product->getStudent()->getClass()->getName() .
                ' не може да бъде изтрито.'
            );
        }
        return $this->redirectToRoute('app_product_index');
    }

    /**
     * @param array|Product $products
     * @param array|ClassTable $classTables
     * @return array
     */
    private function jsonData($products = null, $classTables = null, $pricePerDays = null)
    {
        $arrClasses = array();
        if ($classTables !== null) {
            $arrClasses = $this->classTablesToArray($classTables);
        }

        $arrProduct = array();
       if ($products !== null) {
           $arrProduct = $this->productToArray($products);
       }

        $arrPricePerDay = array();
        if ($pricePerDays !== null) {
            $arrPricePerDay = $this->pricePerDayToArray($pricePerDays);
        }

    return ['products' => $arrProduct, 'classes' => $arrClasses, 'pricePerDays' => $arrPricePerDay];
    }

    private function productToArray($products)
    {
        $arrProduct = array();
        /** @var Product $p */
        foreach($products as $p) {
            $arrProduct[] = array(
                'id' => $p->getId(),
                'studentId' => $p->getStudent()->getId(),
                'student' => $p->getStudent()->getFullName(),
                'classId' => $p->getStudent()->getClass()->getId(),
                'class' => $p->getStudent()->getClass()->getName(),
                'price' => $p->getPrice(),
                'isPaid' => $p->getIsPaid(),
                'isMonthEnded' => $p->getIsMonthEnded(),
                'forMonth' => $p->getForMonth()->format('m.Y'),
                'feeInDays' => $p->getFeeInDays(),
                'dateCreate' => $p->getDateCreate()->format('d.m.Y H:i'),
                'lastEdit' => $p->getLastEdit()->format('d.m.Y H:i'),
            );
        }
        return $arrProduct;
    }

    private function pricePerDayToArray($pricePerDays)
    {
        $arrPricePerDay = array();
        /** @var PricePerDay $p */
        foreach ($pricePerDays as $p) {
            $arrPricePerDay[] = array(
                'id' => $p->getId(),
                'price' => $p->getPrice(),
                'isActive' => $p->getIsActive()
            );
        }
        return $arrPricePerDay;
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
                $arrClasses[$i]['students'][] = array(
                    'studentId' => $s->getId(),
                    'student' => $s->getFullName(),
                    'userId' => $s->getUser()->getId(),
                    'user' => $s->getUser()->getFullName(),
                );
            }
        }
        return $arrClasses;
    }

    private function findExistingProduct(Product $product)
    {
        $existingArrayProduct = $this->getDoctrine()->getRepository(Product::class)
            ->findByExistingProduct($product);

        if ($existingArrayProduct) {
            /** @var Product $existingProduct */
            $existingProduct = $existingArrayProduct[0];
            return $existingProduct->getId() > 0;
        }
        return false;
    }
}
