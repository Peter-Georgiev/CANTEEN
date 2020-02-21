<?php

namespace App\Repository;

use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Product|null find($id, $lockMode = null, $lockVersion = null)
 * @method Product|null findOneBy(array $criteria, array $orderBy = null)
 * @method Product[]    findAll()
 * @method Product[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Product::class);
    }

    public function findAllActiveStudents()
    {
        return $this->createQueryBuilder('p')
            ->select( )
            ->innerJoin('p.students', 'students')
            ->innerJoin('students.class', 'class')
            ->innerJoin('students.users', 'users')
            ->where('students.isActive = 1')
            ->getQuery()
            ->getResult()
        ;
    }

    public function findAllActiveStudentsByUserId($userId)
    {
        return $this->createQueryBuilder('p')
            ->select( )
            ->innerJoin('p.students', 'students')
            ->innerJoin('students.class', 'class')
            ->innerJoin('students.users', 'users')
            ->where('students.isActive = 1')
            ->andWhere('users.id = ?1')
            ->setParameter(1, $userId)
            ->getQuery()
            ->getResult()
            ;
    }

    public function findByExistingProduct(Product $product)
    {
        return $this->createQueryBuilder('product')
            ->innerJoin('product.students', 'students')
            ->innerJoin('students.class', 'class')
            ->where( "DATE_FORMAT(product.forMonth, '%Y-%m') = ?1" )
            ->andWhere('students.id = ?2')
            ->andWhere('class.id = ?3')
            ->andWhere('product.id != ?4')
            ->setParameter(1, $product->getForMonth()->format('Y-m'))
            ->setParameter(2, $product->getStudent()->getId())
            ->setParameter(3, $product->getStudent()->getClass()->getId())
            ->setParameter(4, intval($product->getId()))
            ->getQuery()
            ->getResult();
    }

    public function findByDateDontPaidMonth($strDate = '')
    {
        return $this->createQueryBuilder('p')
            ->select('p')
            ->where('p.isPaid = 0')
            ->andWhere('p.isMonthEnded = 0')
            ->andWhere("DATE_FORMAT(p.forMonth, '%m.%Y') LIKE :date")
            ->setParameter('date', $strDate . '%')
            ->getQuery()
            ->getResult();
    }

    // /**
    //  * @return Product[] Returns an array of Product objects
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
    public function findOneBySomeField($value): ?Product
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
