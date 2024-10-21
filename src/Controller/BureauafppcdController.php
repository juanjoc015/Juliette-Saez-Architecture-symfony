<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class BureauafppcdController extends AbstractController
{
    #[Route('/bureauafppcd', name: 'bureauafppcd')]
    public function index(): Response
    {
        return $this->render('bureauafppcd/index.html.twig', [
        ]);
    }
}
