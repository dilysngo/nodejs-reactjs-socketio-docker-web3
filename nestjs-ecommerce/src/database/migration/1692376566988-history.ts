import { MigrationInterface, QueryRunner } from "typeorm";

export class History1692376566988 implements MigrationInterface {
    name = 'History1692376566988'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "firstname" character varying(200)`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastname" character varying(200)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastname"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstname"`);
    }

}
