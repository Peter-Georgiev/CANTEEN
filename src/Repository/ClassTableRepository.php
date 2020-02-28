<?php

namespace App\Repository;

use App\Entity\ClassTable;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use phpDocumentor\Reflection\DocBlock\Tags\Return_;
use function Doctrine\ORM\QueryBuilder;

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
            ->orderBy('c.name', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findAllActiveStudentsByUserId($userId)
    {
        return $this->createQueryBuilder('c')
            ->select( )
            ->innerJoin('c.students', 's')
            ->innerJoin('s.users', 'u')
            ->where('s.isActive = 1')
            ->andWhere('u.id = ?1')
            ->setParameter(1, $userId)
            ->orderBy('c.name', 'ASC')
            ->addOrderBy('s.fullName', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findAllActiveStudents()
    {
        return $this->createQueryBuilder('c')
            ->select( )
            ->innerJoin('c.students', 's')
            ->innerJoin('s.users', 'u')
            ->where('s.isActive = 1')
            ->orderBy('c.name', 'ASC')
            ->addOrderBy('s.fullName', 'ASC')
            ->getQuery()
            ->getResult();
    }

    private function findByDateCreateProduct()
    {
        $date = new \DateTime('now');
        $date->modify('+1 month');

        $qbSub  = $this->getEntityManager()->createQueryBuilder();
        return $qbSub
            ->select('s.id')
            ->from('App:ClassTable', 'c')
            ->innerJoin('c.students', 's')
            ->innerJoin('s.users', 'u')
            ->leftJoin('s.products', 'p')
            ->where('s.isActive = true')
            ->andWhere("DATE_FORMAT(p.forMonth, '%m.%Y') LIKE :date")
            ->setParameter('date', '%' . $date->format('m.Y'))
            //->setParameter('date', '%03.2020')
            ->getQuery()
            ->getArrayResult();
    }

    public function findForCreateProduct($userID = 0)
    {
       $qbSub2  = $this->getEntityManager()->createQueryBuilder();
        $query  =  $qbSub2->select('c, s')
            ->from('App:ClassTable', 'c')
            ->innerJoin('c.students', 's')
            ->innerJoin('s.users', 'u')
            ->where($qbSub2->expr()->notIn('s.id',':sub'))
            ->andWhere('s.isActive = true')
            ->setParameter('sub', $this->findByDateCreateProduct());

        if ($userID > 0) {
            $query->andWhere('u.id =?1')
                ->setParameter(1, $userID);
        }

        return $query->orderBy('c.name', 'ASC')
            ->addOrderBy('s.fullName', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findPaymentByMonth_OLD(\DateTime $date, $isPaid = false, $isMonthEnded = false)
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
            -- AND DATE_FORMAT(p.for_month, '%m.%Y') = :month                
            GROUP BY id";
        $conn = $this->getEntityManager()->getConnection();
        $stmt = $conn->prepare($sql);
        $stmt->bindValue('isPaid', $isPaid);
        $stmt->bindValue('isMonthEnded', $isMonthEnded);
        //$stmt->bindValue('month', $date->format('m.Y'));
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function findPaymentByMonth($strDate = '', $isPaid = false, $isMonthEnded = false)
    {
        return $this->createQueryBuilder('c')
            ->select('c, s, p')
            ->innerJoin('c.students', 's')
            ->innerJoin('s.products', 'p')
            ->where('p.isPaid = ?1' )
            ->andWhere('p.isMonthEnded = ?2' )
            ->andWhere('p.price > 0')
            ->andWhere('p.feeInDays > 0')
            ->andWhere("DATE_FORMAT(p.forMonth, '%m.%Y') LIKE :date")
            ->setParameter(1, $isPaid)
            ->setParameter(2, $isMonthEnded)
            ->setParameter('date', '%' . $strDate)
            ->orderBy('c.name', 'ASC')
            ->addOrderBy('s.fullName', 'ASC')
            ->addOrderBy('p.forMonth', 'DESC')
            ->addOrderBy('p.isPaid', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByClosingMonth($isMonthEnded = false, $strDate = '')
    {
        return $this->createQueryBuilder('c')
            ->select('c, s, p, pay')
            ->innerJoin('c.students', 's')
            ->innerJoin('s.products', 'p')
            ->innerJoin('p.payment', 'pay')
            ->where('p.isMonthEnded = ?1')
            ->andWhere('p.isPaid = ?2')
            ->andWhere("DATE_FORMAT(p.forMonth, '%m.%Y') LIKE :date")
            ->setParameter(1, $isMonthEnded)
            ->setParameter(2, true)
            ->setParameter('date', '%' . $strDate)
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
