<?php

namespace App\Controller;

use App\Entity\PricePerDay;
use App\Form\PricePerDayType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PricePerDayController extends AbstractController
{
    /**
     * @Route("/price_per_day", name="price_per_day")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @throws \Exception
     */
    public function index(Request $request)
    {
        if (!$this->getUser()->isAdmin()) {
            return $this->redirectToRoute('home');
        }

        $pricesPerDays = $this->getDoctrine()->getRepository(PricePerDay::class)->findAll();

        if ($request->isXmlHttpRequest() || $request->query->get('showJson') == 1) {

            $jsonData = $this->jsonData($pricesPerDays);

            return new JsonResponse($jsonData);
        } else {
            return $this->render('price_per_day/index.html.twig');
        }
    }

    /**
     * @param Request $request
     * @Route("/price_per_day/create", name="price_per_day_create")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     */
    public function createAction(Request $request)
    {
        try {
            $pricePerDay = new PricePerDay();
            $form = $this->createForm(PricePerDayType::class, $pricePerDay);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $pricesPerDays = $this->getDoctrine()->getRepository(PricePerDay::class)->findAll();
                $pricePerDay->setUserCreate($this->getUser()->getFullName());
                $pricePerDay->setUserLastEdit($this->getUser()->getFullName());

                try {
                    $em = $this->getDoctrine()->getManager();
                    if ($pricesPerDays) {
                        $noActivePriceDay = $pricesPerDays[count($pricesPerDays) - 1];
                        $noActivePriceDay->setIsActive(false);
                        $em->persist($noActivePriceDay);
                    }
                    $em->persist($pricePerDay);
                    $em->flush();
                    return $this->redirectToRoute('price_per_day');
                } catch (\Exception $e) {
                    throw new \Exception('Възникана грешка при запис!');
                }
            }

            $pricesPerDays = $this->getDoctrine()->getRepository(PricePerDay::class)->findAll();
            return $this->render('price_per_day/create.html.twig', ['form' => $form->createView(),
                'pricesPerDays' => $pricesPerDays ]);
        } catch (\Exception $e) {
            $pricesPerDays = $this->getDoctrine()->getRepository(PricePerDay::class)->findAll();
            return $this->render('price_per_day/index.html.twig', ['pricesPerDays' => $pricesPerDays,
                'danger' => $e->getMessage()
            ]);
        }
    }

    /**
     * @Route("/price_per_day/edit/{id}", name="price_per_day_edit")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @param $id
     * @return Response
     * @throws \Exception
     */
    public function editAction(Request $request, $id)
    {
        $pricePerDay = $this->getDoctrine()->getRepository(PricePerDay::class)->find($id);
        if (!$pricePerDay) {
            return $this->redirectToRoute('price_per_day');
        }

        $form = $this->createForm(PricePerDayType::class, $pricePerDay);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $pricePerDay->setLastEdit(new \DateTime('now'));
            $pricePerDay->setUserLastEdit($this->getUser()->getFullName());

            $em = $this->getDoctrine()->getManager();
            $em->persist($pricePerDay);
            $em->flush();

            return $this->redirectToRoute('price_per_day');
        }

        return $this->render('price_per_day/edit.html.twig', ['form' => $form->createView(),
            'pricePerDay', $pricePerDay
        ]);

    }

    /**
     * @Route("/price_per_day/delete/{id}", name="price_per_day_delete")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param $id
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     * @throws \Exception
     */
    public function daleteAction($id)
    {
        $pricePerDay = $this->getDoctrine()->getRepository(PricePerDay::class)->find($id);

        if (!$pricePerDay) {
            return $this->redirectToRoute('price_per_day');
        }

        try {
            $pricesPerDays = $this->getDoctrine()->getRepository(PricePerDay::class)->findAll();
            $length = count($pricesPerDays) - 1;

            if ($length === 0) {
                throw new \Exception();
            }

            $activePricePerDey = $pricesPerDays[$length - 1];
            $activePricePerDey->setIsActive(true);

            $em = $this->getDoctrine()->getManager();
            $em->persist($activePricePerDey);
            $em->remove($pricePerDay);
            $em->flush();

        } catch (\Exception $e) {
            throw new \Exception('Hе може да бъде изтрито.');
        }
        return $this->redirectToRoute('price_per_day');
    }

    /**
     * @param array|PricePerDay $pricesPerDays
     * @return array
     */
    private function jsonData($pricesPerDays)
    {
        $arrPricesPerDays = array();
        /** @var PricePerDay $pricePerDay */
        foreach ($pricesPerDays as $pricePerDay) {
            $arrPricesPerDays[] = array(
                'id' => $pricePerDay->getId(),
                'price' => $pricePerDay->getPrice(),
                //'day' => $pricePerDay->getDay(),
                'dateCreate' => $pricePerDay->getDateCreate()->format('d.m.Y H:i'),
                'lastEdit' => $pricePerDay->getLastEdit()->format('d.m.Y H:i'),
                'userCreate' => $pricePerDay->getUserCreate(),
                'userLastEdit' => $pricePerDay->getUserLastEdit(),
                'isActive' => $pricePerDay->getIsActive(),
                'user' => $this->getUser()->getFullName(),
                'userRole' => $this->getUser()->getRoles()[0],
            );
        }

        return ['pricesPerDays' => $arrPricesPerDays];
    }
}
