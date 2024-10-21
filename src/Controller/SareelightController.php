<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SareelightController extends AbstractController
{
    #[Route('/sareelight', name: 'sareelight')]
    public function index(): Response
    {
        return $this->render('sareelight/index.html.twig', [
        ]);
    }
}
