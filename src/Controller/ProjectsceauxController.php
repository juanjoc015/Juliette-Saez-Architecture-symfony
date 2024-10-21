<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProjectsceauxController extends AbstractController
{
    #[Route('/projectsceaux', name: 'projectsceaux')]
    public function index(): Response
    {
        return $this->render('project_sceaux/index.html.twig', [
        ]);
    }
}
