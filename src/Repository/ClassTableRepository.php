<?php

namespace App\Repository;

use App\Entity\ClassTable;
use App\Entity\User;
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

    public function findOnlyForPayment()
    {
        return $this->createQueryBuilder('c')
            ->innerJoin('c.students', 's')
            ->innerJoin('s.products', 'p')
            ->where('p.isPaid = false' )
            ->andWhere('p.isMonthEnded = false' )
            ->andWhere( "DATE_FORMAT(p.forMonth, '%Y-%m') = ?1" )
            ->setParameter(1, (new \DateTime('now'))
                ->modify('+1 month')->format('Y-m')
            )
            ->orderBy('c.name', 'ASC')
            ->addOrderBy('s.fullName', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByMonth(\DateTime $date)
    {
        return $this->createQueryBuilder('c')
            ->innerJoin('c.students', 's')
            ->innerJoin('s.products', 'p')
            ->where('p.isPaid = true' )
            ->andWhere('p.isMonthEnded = false' )
            ->andWhere( "DATE_FORMAT(p.forMonth, '%Y-%m') = ?1" )
            ->setParameter(1, $date->format('Y-m')
            )
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
