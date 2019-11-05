<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191105104419 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE payment CHANGE products_id products_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE price_per_day CHANGE user_last_edit user_last_edit VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE product CHANGE students_id students_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE student CHANGE classes_id classes_id INT DEFAULT NULL, CHANGE teachers_id teachers_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE payment CHANGE products_id products_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE price_per_day CHANGE user_last_edit user_last_edit VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE product CHANGE students_id students_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE student CHANGE classes_id classes_id INT DEFAULT NULL, CHANGE teachers_id teachers_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_bin`');
    }
}
