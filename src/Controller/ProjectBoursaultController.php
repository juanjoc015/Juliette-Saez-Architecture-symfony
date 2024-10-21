<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProjectBoursaultController extends AbstractController
{
    #[Route('/projectBoursault', name: 'projectBoursault')]
    public function index(): Response
    {
        return $this->render('project_boursault/index.html.twig', [
        ]);
    }
}
