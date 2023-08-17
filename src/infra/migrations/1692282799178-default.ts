import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1692282799178 implements MigrationInterface {
  name = "Default1692282799178";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`email\` text NOT NULL, \`password\` text NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`room_subject\` (\`room_id\` int NOT NULL, \`subject_id\` int NOT NULL, INDEX \`IDX_f227421d2ef64ab086261ac07f\` (\`room_id\`), INDEX \`IDX_a05f10c497f5f7db3022664a6d\` (\`subject_id\`), PRIMARY KEY (\`room_id\`, \`subject_id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`videos\` ADD CONSTRAINT \`FK_64bb2d8544299bbde670698ac37\` FOREIGN KEY (\`room_id\`) REFERENCES \`rooms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`room_subject\` ADD CONSTRAINT \`FK_f227421d2ef64ab086261ac07fd\` FOREIGN KEY (\`room_id\`) REFERENCES \`subject\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE \`room_subject\` ADD CONSTRAINT \`FK_a05f10c497f5f7db3022664a6d6\` FOREIGN KEY (\`subject_id\`) REFERENCES \`rooms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      "CREATE UNIQUE INDEX idx_unique_email ON user(email);"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`room_subject\` DROP FOREIGN KEY \`FK_a05f10c497f5f7db3022664a6d6\``
    );
    await queryRunner.query(
      `ALTER TABLE \`room_subject\` DROP FOREIGN KEY \`FK_f227421d2ef64ab086261ac07fd\``
    );
    await queryRunner.query(
      `ALTER TABLE \`videos\` DROP FOREIGN KEY \`FK_64bb2d8544299bbde670698ac37\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_a05f10c497f5f7db3022664a6d\` ON \`room_subject\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_f227421d2ef64ab086261ac07f\` ON \`room_subject\``
    );
    await queryRunner.query(`DROP TABLE \`room_subject\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``
    );
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
