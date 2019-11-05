<?php

namespace App\Repository;

use App\Entity\PricePerDay;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PricePerDay|null find($id, $lockMode = null, $lockVersion = null)
 * @method PricePerDay|null findOneBy(array $criteria, array $orderBy = null)
 * @method PricePerDay[]    findAll()
 * @method PricePerDay[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PricePerDayRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PricePerDay::class);
    }

    // /**
    //  * @return PricePerDay[] Returns an array of PricePerDay objects
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
    public function findOneBySomeField($value): ?PricePerDay
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
