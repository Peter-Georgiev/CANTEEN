<?php

namespace App\Repository;

use App\Entity\Student;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Student|null find($id, $lockMode = null, $lockVersion = null)
 * @method Student|null findOneBy(array $criteria, array $orderBy = null)
 * @method Student[]    findAll()
 * @method Student[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StudentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Student::class);
    }

    public function findByFullName(Student $student)
    {
         return $this->createQueryBuilder('s')
            ->innerJoin('s.class', 'c')
            ->where('s.fullName = ?1')
            ->andWhere('c.name = ?2')
            ->setParameter(1, $student->getFullName())
            ->setParameter(2, $student->getClass()->getName())
            ->getQuery()
            ->getResult();
    }

    public function findAllStudentsByUserId($userId)
    {
        return $this->createQueryBuilder('student')
            ->innerJoin('student.users', 'users')
            ->where('users.id = ?1')
            ->setParameter(1, $userId)
            ->getQuery()
            ->getResult();
    }


    // /**
    //  * @return Student[] Returns an array of Student objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Student
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
