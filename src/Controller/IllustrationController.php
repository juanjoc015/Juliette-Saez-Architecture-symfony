<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class IllustrationController extends AbstractController
{
    #[Route('/illustration', name: 'illustration')]
    public function index(): Response
    {
        return $this->render('illustration/index.html.twig', [
        ]);
    }
}
