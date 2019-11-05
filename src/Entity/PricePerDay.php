<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PricePerDayRepository")
 */
class PricePerDay
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    //private $day;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=4)
     */
    private $price;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateCreate;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isActive;

    /**
     * @ORM\Column(type="datetime")
     */
    private $lastEdit;

    /**
     * @ORM\Column(type="string")
     */
    private $userCreate;

    /**
     * @ORM\Column(type="string")
     */
    private $userLastEdit;

    public function __construct()
    {
        $datetime = new \DateTime('now');
        $this->dateCreate = $datetime;
        $this->lastEdit = $datetime;
        $this->isActive = true;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /*public function getDay(): ?int
    {
        return $this->day;
    }

    public function setDay(int $day): self
    {
        $this->day = $day;

        return $this;
    }*/

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getDateCreate(): ?\DateTimeInterface
    {
        return $this->dateCreate;
    }

    public function setDateCreate(\DateTimeInterface $dateCreate): self
    {
        $this->dateCreate = $dateCreate;

        return $this;
    }

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getLastEdit(): ?\DateTimeInterface
    {
        return $this->lastEdit;
    }

    public function setLastEdit(\DateTimeInterface $lastEdit): self
    {
        $this->lastEdit = $lastEdit;

        return $this;
    }

    public function getUserCreate(): string
    {
        return $this->userCreate;
    }

    public function setUserCreate(string $userCreate): self
    {
        $this->userCreate = $userCreate;

        return $this;
    }

    public function getUserLastEdit(): string
    {
        return $this->userLastEdit;
    }

    public function setUserLastEdit(string $userLastEdit): self
    {
        $this->userLastEdit = $userLastEdit;

        return $this;
    }
}
