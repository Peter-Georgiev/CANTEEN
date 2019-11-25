<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191107122717 extends AbstractMigration
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
        $this->addSql('ALTER TABLE product CHANGE students_id students_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE student DROP FOREIGN KEY FK_B723AF3384365182');
        $this->addSql('ALTER TABLE student DROP FOREIGN KEY FK_B723AF339E225B24');
        $this->addSql('DROP INDEX IDX_B723AF3384365182 ON student');
        $this->addSql('DROP INDEX IDX_B723AF339E225B24 ON student');
        $this->addSql('ALTER TABLE student ADD class_id INT DEFAULT NULL, ADD users_id INT DEFAULT NULL, DROP classes_id, DROP teachers_id');
        $this->addSql('ALTER TABLE student ADD CONSTRAINT FK_B723AF33EA000B10 FOREIGN KEY (class_id) REFERENCES class_table (id)');
        $this->addSql('ALTER TABLE student ADD CONSTRAINT FK_B723AF3367B3B43D FOREIGN KEY (users_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_B723AF33EA000B10 ON student (class_id)');
        $this->addSql('CREATE INDEX IDX_B723AF3367B3B43D ON student (users_id)');
        $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE payment CHANGE products_id products_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE product CHANGE students_id students_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE student DROP FOREIGN KEY FK_B723AF33EA000B10');
        $this->addSql('ALTER TABLE student DROP FOREIGN KEY FK_B723AF3367B3B43D');
        $this->addSql('DROP INDEX IDX_B723AF33EA000B10 ON student');
        $this->addSql('DROP INDEX IDX_B723AF3367B3B43D ON student');
        $this->addSql('ALTER TABLE student ADD classes_id INT DEFAULT NULL, ADD teachers_id INT DEFAULT NULL, DROP class_id, DROP users_id');
        $this->addSql('ALTER TABLE student ADD CONSTRAINT FK_B723AF3384365182 FOREIGN KEY (teachers_id) REFERENCES teacher (id)');
        $this->addSql('ALTER TABLE student ADD CONSTRAINT FK_B723AF339E225B24 FOREIGN KEY (classes_id) REFERENCES class_table (id)');
        $this->addSql('CREATE INDEX IDX_B723AF3384365182 ON student (teachers_id)');
        $this->addSql('CREATE INDEX IDX_B723AF339E225B24 ON student (classes_id)');
        $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_bin`');
    }
}
