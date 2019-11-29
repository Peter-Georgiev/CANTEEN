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
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @param GuardAuthenticatorHandler $guardHandler
     * @param LoginFormAuthenticator $authenticator
     * @return Response
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder,
                             GuardAuthenticatorHandler $guardHandler, LoginFormAuthenticator $authenticator): Response
    {
        if (!$this->getUser()->isAdmin()) {
            return $this->redirectToRoute('home');
        }

        $user = new User();
        $user->setRoles(['ROLE_USER']);
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $role = strtoupper(trim($request->get('role')['name']));
            if (array_key_exists($role, $this->roles())) {
                $user->setRoles([$role]);
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
     * @return Response
     */
    public function editAction(int $id, Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $currentUser = $this->getUser();
        $user = $this->getDoctrine()->getRepository(User::class)->find($id);
        if (!$user) {
            return $this->redirectToRoute('home');
        }

        if (!$currentUser->isAdmin() && $currentUser->getId() !== $user->getId() ) {
            return $this->redirectToRoute('user_all');
        }

        $token = $request->get('pass');
        $isEditPass = false;
        if ($token !== null && array_key_exists('edit', $token)) {
            if (intval($token['edit']) === 1) {
                $isEditPass = true;
            }
        }

        $form = $this->editPass($request, $user, $isEditPass);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($this->getUser()->isAdmin()) {
                $role = strtoupper(trim($request->get('role')['name']));
                if (array_key_exists($role, $this->roles())) {
                    $user->setRoles([$role]);
                }
            }

            if ($isEditPass) {
                $user->setPassword(
                    $passwordEncoder->encodePassword(
                        $user,
                        $form->get('password')->getData()
                    )
                );
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('user_all');
        }
        return $this->render('registration/edit.html.twig', ['registrationForm' => $form->createView()]);
    }

    /**
     * @Route("/user/all", name="user_all")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     */
    public function allView()
    {
        if (!$this->getUser()->isAdmin()) {
            return $this->redirectToRoute('home');
        }

        $users = $this->getDoctrine()->getRepository(User::class)->findAll();
        if (!$users) {
            return $this->redirectToRoute('home');
        }

        return $this->render('registration/all.html.twig', [
            'users' => $users,
        ]);
    }

    public function roles()
    {
        return [
            'ROLE_USER' => 'Потребител',
            'ROLE_ADMIN' => 'Администратор',
            'ROLE_SELLER' => 'Касиер',
            'ROLE_TEACHER' => 'Учител'
        ];
    }

    private function editPass($request, $user, $isEditPass)
    {
        $form = $this->formWithPass($request, $user);

        if ($form->isSubmitted() && !$isEditPass) {
            return $this->formWithoutPass($request, $user);
        }

        return $form;
    }

    private function formWithoutPass($request, $user)
    {
        $form = $this->createFormBuilder($user)
            ->add('username', TextType::class, array(
                'attr' => ['readonly' => true],
            ))
            ->add('fullName', TextType::class)
            ->getForm();

        $form->handleRequest($request);
        return $form;
    }

    private function formWithPass($request, $user)
    {
        $form = $this->createFormBuilder($user)
            ->add('username', TextType::class, array(
                'attr' => ['readonly' => true],
            ))
            ->add('fullName', TextType::class)
            ->add('password', RepeatedType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'type' => PasswordType::class,
                'options' => ['attr' => ['class' => 'password-field', 'disabled' => false]],
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
        return $form;
    }
}
