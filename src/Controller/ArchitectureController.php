<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/architecture')]
class ArchitectureController extends AbstractController
{
    #[Route('/', name: 'architecture')]
    public function index(): Response
    {
        return $this->render('architecture/index.html.twig');
    }

    #[Route('/project/boursault', name: 'project_boursault')]
    public function boursault(): Response
    {
        return $this->render('architecture/projects/boursault.html.twig');
    }

    #[Route('/project/gentilly', name: 'projet_gentilly')]
    public function gentilly(): Response
    {
        return $this->render('architecture/projects/gentilly.html.twig');
    }

    #[Route('/project/sceaux', name: 'project_sceaux')]
    public function sceaux(): Response
    {
        return $this->render('architecture/projects/sceaux.html.twig');
    }
}
