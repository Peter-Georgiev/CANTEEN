<?php

namespace App\Form;

use App\Entity\Product;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('price', TextType::class, array(
                'attr' => ['readonly' => true],
            ))
            ->add('forMonth', DateType::class, array(
                'widget' => 'single_text',
                'format' => 'MM.yyyy',
                'disabled' => true,
            ))
            ->add('feeInDays')
            //->add('isPaid')
            //->add('dateCreate')
            //->add('lastEdit')
            //->add('students')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
        ]);
    }
}
