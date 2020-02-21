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

    public function findAllCompletedByMonth(\DateTime $date, $isPaid = true, $isMonthEnded = false)
    {
        $sql = "SELECT *
            FROM payment AS p 
            INNER JOIN product AS pr ON pr.id = p.products_id
            -- WHERE pr.is_paid = :isPaid
            WHERE pr.is_month_ended = :isMonthEnded 
            AND pr.is_month_ended = :isMonthEnded
            AND DATE_FORMAT(pr.for_month, '%m.%Y') = :month
				ORDER BY pr.for_month ASC";
        $conn = $this->getEntityManager()->getConnection();
        $stmt = $conn->prepare($sql);
        //$stmt->bindValue('isPaid', $isPaid);
        $stmt->bindValue('isMonthEnded', $isMonthEnded);
        $stmt->bindValue('month', $date->format('m.Y'));
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function findBydMonth(\DateTime $date, $isPaid = false, $isMonthEnded = false)
    {
        return $this->createQueryBuilder('payment')
            ->select('payment, products, students, class')
            ->innerJoin('payment.products', 'products')
            ->innerJoin('products.students', 'students')
            ->innerJoin('students.class', 'class')
            ->where('products.isPaid = ?1')
            ->andWhere('payment.isMonthEnded = ?2')
            ->andWhere('products.isMonthEnded = ?3')
            ->andWhere( "DATE_FORMAT(products.forMonth, '%m.%Y') LIKE :date" )
            ->setParameter(1, $isPaid)
            ->setParameter(2, $isMonthEnded)
            ->setParameter(3, $isMonthEnded)
            ->setParameter('date', $date->format('m.Y') . '%')
            ->orderBy('products.forMonth', 'DESC')
            ->addOrderBy('class.name', 'ASC')
            ->addOrderBy('students.fullName', 'ASC')
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
            ->where('payment.isMonthEnded = true')
            ->andWhere('products.isMonthEnded = true')
            ->andWhere('class.id = ?1')
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
