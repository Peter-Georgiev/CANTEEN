<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191105064821 extends AbstractMigration
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
        $this->addSql('ALTER TABLE price_per_day DROP FOREIGN KEY FK_48860539A76ED395');
        $this->addSql('DROP INDEX UNIQ_48860539A76ED395 ON price_per_day');
        $this->addSql('ALTER TABLE price_per_day ADD user_create VARCHAR(255) NOT NULL, ADD user_last_edit VARCHAR(255) NOT NULL, DROP user_id');
        $this->addSql('ALTER TABLE product CHANGE students_id students_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE student CHANGE classes_id classes_id INT DEFAULT NULL, CHANGE teachers_id teachers_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE payment CHANGE products_id products_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE price_per_day ADD user_id INT DEFAULT NULL, DROP user_create, DROP user_last_edit');
        $this->addSql('ALTER TABLE price_per_day ADD CONSTRAINT FK_48860539A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_48860539A76ED395 ON price_per_day (user_id)');
        $this->addSql('ALTER TABLE product CHANGE students_id students_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE student CHANGE classes_id classes_id INT DEFAULT NULL, CHANGE teachers_id teachers_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_bin`');
    }
}
