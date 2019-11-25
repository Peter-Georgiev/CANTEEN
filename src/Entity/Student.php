<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StudentRepository")
 */
class Student
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $fullName;

    /**
     * @var bool
     * @ORM\Column(name="is_active", type="boolean")
     */
    private $isActive;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ClassTable", inversedBy="students")
     */
    private $class;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="user")
     */
    private $users;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Product", mappedBy="students")
     */
    private $products;

    public function __construct()
    {
        $this->isActive = true;
        //$this->classes = new ArrayCollection();
        //$this->teachers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFullName(): ?string
    {
        return $this->fullName;
    }

    public function setFullName(string $fullName): self
    {
        $this->fullName = $fullName;

        return $this;
    }

    public function isActive(): bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getClass(): ?ClassTable
    {
        return $this->class;
    }

    public function setClass(?ClassTable $class): self
    {
        $this->class = $class;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->users;
    }

    public function setUser(?User $user): self
    {
        $this->users = $user;

        return $this;
    }

    /**
     * @return Collection|Product[]
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products[] = $product;
            $product->setStudent($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->contains($product)) {
            $this->products->removeElement($product);
            // set the owning side to null (unless already changed)
            if ($product->getStudent() === $this) {
                $product->setStudent(null);
            }
        }

        return $this;
    }
}
