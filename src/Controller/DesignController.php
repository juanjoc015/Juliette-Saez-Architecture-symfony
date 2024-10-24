<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/design')]
class DesignController extends AbstractController
{
    #[Route('/', name: 'design')]
    public function index(): Response
    {
        return $this->render('design/index.html.twig');
    }

    #[Route('/project/bureauafppcdII', name: 'project_bureauafppcdII')]
    public function bureauafppcdII(): Response
    {
        return $this->render('design/projects/bureauafppcdII.html.twig');
    }

    #[Route('/project/bureauafppcdI', name: 'project_bureauafppcdI')]
    public function bureauafppcdI(): Response
    {
        return $this->render('design/projects/bureauafppcdI.html.twig');
    }

    #[Route('/project/sareelight', name: 'project_sareelight')]
    public function sareelight(): Response
    {
        return $this->render('design/projects/sareelight.html.twig');
    }
}
