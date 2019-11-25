<?php

namespace App\Repository;

use App\Entity\Payment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Payment|null find($id, $lockMode = null, $lockVersion = null)
 * @method Payment|null findOneBy(array $criteria, array $orderBy = null)
 * @method Payment[]    findAll()
 * @method Payment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PaymentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Payment::class);
    }


    public function findAllNotCompletedMonth()
    {
        return $this->createQueryBuilder('payment')
            ->select()
            ->innerJoin('payment.products', 'products')
            ->innerJoin('products.students', 'students')
            ->where('payment.isMonthEnded = false')
            //->orWhere('products.isMonthEnded = false')
            ->getQuery()
            ->getResult();
    }

    public function findNotCompleteMonthByClassIdAndMonth($classId, \DateTime $date)
    {
        return $this->createQueryBuilder('payment')
            ->select()
            ->innerJoin('payment.products', 'products')
            ->innerJoin('products.students', 'students')
            ->innerJoin('students.class', 'class')
            ->where('class.id = ?1')
            ->andWhere('payment.isMonthEnded = false')
            ->andWhere('products.isMonthEnded = false')
            ->andWhere( "DATE_FORMAT(products.forMonth, '%Y-%m') = ?2" )
            ->setParameter(1, $classId)
            ->setParameter(2, $date->format('Y-m'))
            ->getQuery()
            ->getResult();
    }

    public function findEndedMonthByClassIdAndDate($classId, \DateTime $date)
    {
        return $this->createQueryBuilder('payment')
            ->select()
            ->innerJoin('payment.products', 'products')
            ->innerJoin('products.students', 'students')
            ->innerJoin('students.class', 'class')
            ->where('class.id = ?1')
            ->andWhere('payment.isMonthEnded = true')
            ->andWhere('products.isMonthEnded = true')
            ->andWhere( "DATE_FORMAT(products.forMonth, '%Y-%m') = ?2" )
            ->setParameter(1, $classId)
            ->setParameter(2, $date->format('Y-m'))
            ->getQuery()
            ->getResult();
    }

    // /**
    //  * @return Payment[] Returns an array of Payment objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Payment
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
