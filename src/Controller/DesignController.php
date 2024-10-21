<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DesignController extends AbstractController
{
    #[Route('/design', name: 'design')]
    public function index(): Response
    {
        return $this->render('design/index.html.twig', [
        ]);
    }
}
