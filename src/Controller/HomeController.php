<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        if ($this->getUser() && $this->getUser()->isSeller()) {
            return $this->render('home/index_seller.html.twig', [ ]);
        }

        if ($this->getUser() && $this->getUser()->isTeacher()) {
            return $this->render('home/index_teachar.html.twig', [ ]);
        }

        return $this->render('home/index.html.twig', [ ]);
    }
}
