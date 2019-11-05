<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191105064007 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE price_per_day (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, day INT NOT NULL, price NUMERIC(10, 2) NOT NULL, date_create DATETIME NOT NULL, is_active TINYINT(1) NOT NULL, last_edit DATETIME NOT NULL, UNIQUE INDEX UNIQ_48860539A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE price_per_day ADD CONSTRAINT FK_48860539A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE payment CHANGE products_id products_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE product CHANGE students_id students_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE student CHANGE classes_id classes_id INT DEFAULT NULL, CHANGE teachers_id teachers_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE price_per_day');
        $this->addSql('ALTER TABLE payment CHANGE products_id products_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE product CHANGE students_id students_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE student CHANGE classes_id classes_id INT DEFAULT NULL, CHANGE teachers_id teachers_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_bin`');
    }
}
