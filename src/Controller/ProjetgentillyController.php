<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProjetgentillyController extends AbstractController
{
    #[Route('/projetgentilly', name: 'projetgentilly')]
    public function index(): Response
    {
        return $this->render('projet_gentilly/index.html.twig', [
        ]);
    }
}
