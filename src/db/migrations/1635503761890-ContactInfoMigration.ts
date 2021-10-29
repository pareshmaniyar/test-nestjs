import {MigrationInterface, QueryRunner} from "typeorm";

export class ContactInfoMigration1635503761890 implements MigrationInterface {
    name = 'ContactInfoMigration1635503761890'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`contact_info\` ADD \`country\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`contact_info\` DROP COLUMN \`country\``);
    }

}
