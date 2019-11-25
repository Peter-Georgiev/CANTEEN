<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Security\LoginFormAuthenticator;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class RegistrationController extends AbstractController
{
    /**
     * @Route("/register", name="app_register")
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder,
                             GuardAuthenticatorHandler $guardHandler, LoginFormAuthenticator $authenticator): Response
    {
        $user = new User();
        $user->setRoles(['ROLE_USER']);
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $roles = strtoupper(trim($request->get('role')['name']));
            if ($roles === 'ROLE_ADMIN') {
                $user->setRoles(['ROLE_ADMIN']);
            } elseif ($roles === 'ROLE_SELLER') {
                $user->setRoles(['ROLE_SELLER']);
            } elseif ($roles === 'ROLE_TEACHER') {
                $user->setRoles(['ROLE_TEACHER']);
            } else {
                $user->setRoles(['ROLE_USER']);
            }
            // encode the plain password
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('password')->getData()
                )
            );

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            // do anything else you need here, like send an email
            return $this->redirectToRoute('user_all');

            /*
            return $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $authenticator,
                'main' // firewall name in security.yaml
            );
            */
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    /**
     * @Route("/user/edit/{id}", name="user_edit")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param int $id
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @param GuardAuthenticatorHandler $guardHandler
     * @param LoginFormAuthenticator $authenticator
     * @return Response
     */
    public function editAction(int $id, Request $request, UserPasswordEncoderInterface $passwordEncoder,
                               GuardAuthenticatorHandler $guardHandler, LoginFormAuthenticator $authenticator): Response
    {
        $currentUser = $this->getUser();
        $user = $this->getDoctrine()->getRepository(User::class)->find($id);
        if (!$user) {
            return $this->redirectToRoute('home');
        }

        if (!$currentUser->isAdmin() && $currentUser->getId() !== $user->getId() ) {
            return $this->redirectToRoute('user_all');
        }

        //$form = $this->createForm(RegistrationFormType::class, $user);
        $form = $this->createFormBuilder($user)
            ->add('fullName', TextType::class)
            ->getForm();
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $roles = strtoupper(trim($request->get('role')['name']));
            if ($roles === 'ROLE_ADMIN') {
                $user->setRoles(['ROLE_ADMIN']);
            } elseif ($roles === 'ROLE_SELLER') {
                $user->setRoles(['ROLE_SELLER']);
            } elseif ($roles === 'ROLE_TEACHER') {
                $user->setRoles(['ROLE_TEACHER']);
            } else {
                $user->setRoles(['ROLE_USER']);
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('user_all');
        }
        return $this->render('registration/edit.html.twig', ['registrationForm' => $form->createView()]);
    }
    /**
     * @Route("/user/edit/pass/{id}", name="user_edit_pass")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param int $id
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @param GuardAuthenticatorHandler $guardHandler
     * @param LoginFormAuthenticator $authenticator
     * @return Response
     */
    public function editPassAction(int $id, Request $request, UserPasswordEncoderInterface $passwordEncoder,
                               GuardAuthenticatorHandler $guardHandler, LoginFormAuthenticator $authenticator): Response
    {
        $currentUser = $this->getUser();
        $user = $this->getDoctrine()->getRepository(User::class)->find($id);
        if (!$user) {
            return $this->redirectToRoute('home');
        }

        if (!$currentUser->isAdmin() && $currentUser->getId() !== $user->getId() ) {
            return $this->redirectToRoute('user_all');
        }

        $form = $this->createFormBuilder($user)
            ->add('username')
            ->add('password', RepeatedType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'type' => PasswordType::class,
                'options' => ['attr' => ['class' => 'password-field']],
                'required' => true,
                'first_options'  => ['label' => 'Парола'],
                'second_options' => ['label' => 'Повтори паролата'],
                'invalid_message' => 'Полетата за парола трябва да съвпадат.',
                'mapped' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Моля, въведете парола.',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Паролата ви трябва да бъде поне  {{ limit }} символа',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
            ])
            ->getForm();
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('password')->getData()
                )
            );

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('user_all');
        }
        return $this->render('registration/edit-pass.html.twig', ['registrationForm' => $form->createView()]);
    }

    /**
     * @Route("/user/all", name="user_all")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     */
    public function allAction()
    {
        $users = $this->getDoctrine()->getRepository(User::class)->findAll();
        if (!$users) {
            return $this->redirectToRoute('home');
        }

        return $this->render('registration/all.html.twig', [
            'users' => $users,
        ]);
    }
}
