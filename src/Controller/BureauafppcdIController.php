<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class BureauafppcdIController extends AbstractController
{
    #[Route('/bureauafppcdI/', name: 'bureauafppcdI')]
    public function index(): Response
    {
        return $this->render('bureauafppcdI/index.html.twig', [
        ]);
    }
}
