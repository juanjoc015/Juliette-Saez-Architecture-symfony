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

    #[Route('/project/gentilly', name: 'project_gentilly')]
    public function gentilly(): Response
    {
        return $this->render('architecture/projects/gentilly.html.twig');
    }

    #[Route('/project/sceaux', name: 'project_sceaux')]
    public function sceaux(): Response
    {
        return $this->render('architecture/projects/sceaux.html.twig');
    }

    #[Route('/project/tudeils', name: 'project_tudeils')]
    public function tudeils(): Response
    {
        return $this->render('architecture/projects/tudeils.html.twig');
    }

    #[Route('/project/chuelles', name: 'project_chuelles')]
    public function chuelles(): Response
    {
        return $this->render('architecture/projects/chuelles.html.twig');
    }

    #[Route('/project/lyon', name: 'project_lyon')]
    public function lyon(): Response
    {
        return $this->render('architecture/projects/lyon.html.twig');
    }
}
