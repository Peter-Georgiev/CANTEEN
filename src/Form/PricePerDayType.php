<?php

namespace App\Form;

use App\Entity\PricePerDay;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PricePerDayType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('price')
            //->add('day')
            //->add('dateCreate')
            //->add('isActive')
            //->add('lastEdit')
            //->add('userCreate')
            //->add('userLastEdit')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PricePerDay::class,
        ]);
    }
}
