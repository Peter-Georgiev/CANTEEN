<?php

namespace App\Repository;

use App\Entity\ClassTable;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ClassTable|null find($id, $lockMode = null, $lockVersion = null)
 * @method ClassTable|null findOneBy(array $criteria, array $orderBy = null)
 * @method ClassTable[]    findAll()
 * @method ClassTable[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClassTableRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ClassTable::class);
    }

    public function findByClassName(ClassTable $classTable)
    {
        return $this->createQueryBuilder('c')
            ->where('c.name = ?1')
            ->setParameter(1, $classTable->getName())
            ->getQuery()
            ->getResult();
    }

    public function findAllActiveStudentsByUserId($userId)
    {
        return $this->createQueryBuilder('class_table')
            ->select( )
            ->innerJoin('class_table.students', 'students')
            ->innerJoin('students.users', 'users')
            ->where('students.isActive = 1')
            ->andWhere('users.id = ?1')
            ->setParameter(1, $userId)
            ->getQuery()
            ->getResult();
    }

    public function findAllActiveStudents()
    {
        return $this->createQueryBuilder('c')
            ->select( )
            ->innerJoin('c.students', 'student')
            ->innerJoin('student.users', 'users')
            ->where('student.isActive = 1')
            ->getQuery()
            ->getResult();
    }

    public function findPaymentByMonth(\DateTime $date, $isPaid = false, $isMonthEnded = false)
    {
        $sql = "SELECT c.id AS `id`, c.name AS `name`,           
            CONCAT(
            GROUP_CONCAT( 'productId=>', p.id, ', studentId=>', s.id, ', student=>', s.full_name,', " .
            "price=>', p.price, ', isPaid=>', p.is_paid,', forMonth=>', DATE_FORMAT(p.for_month, '%m.%Y'), ', " .
            "feeInDays=>', p.fee_in_days,', dateCreate=>', DATE_FORMAT(p.date_create, '%d.%m.%Y %H:%i:%s'), ', " .
            "lasDate=>',  DATE_FORMAT(p.last_edit, '%d.%m.%Y %H:%i:%s') SEPARATOR '||')
            ) AS students
            FROM class_table AS c 
            INNER JOIN student AS s ON s.class_id = c.id 
            INNER JOIN product AS p ON p.students_id = s.id
            WHERE p.is_paid = :isPaid
            AND p.is_month_ended = :isMonthEnded
            AND DATE_FORMAT(p.for_month, '%m.%Y') = :month                
            GROUP BY id";
        $conn = $this->getEntityManager()->getConnection();
        $stmt = $conn->prepare($sql);
        $stmt->bindValue('isPaid', $isPaid);
        $stmt->bindValue('isMonthEnded', $isMonthEnded);
        $stmt->bindValue('month', $date->format('m.Y'));
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function findByMonth(\DateTime $date, $isPaid = true, $isMonthEnded = false)
    {
        return $this->createQueryBuilder('c')
            ->innerJoin('c.students', 's')
            ->innerJoin('s.products', 'p')
            ->where('p.isPaid = ?1' )
            ->andWhere('p.isMonthEnded = ?2' )
            ->andWhere( "DATE_FORMAT(p.forMonth, '%m.%Y') = ?3" )
            ->setParameter(1, $isPaid)
            ->setParameter(2, $isMonthEnded)
            ->setParameter(3, $date->format('m.Y'))
            ->orderBy('c.name', 'ASC')
            //->addOrderBy('s.fullName', 'ASC')
            ->getQuery()
            ->getResult();
    }

    // /**
    //  * @return ClassTable[] Returns an array of ClassTable objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ClassTable
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
