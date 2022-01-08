import {MigrationInterface, QueryRunner} from "typeorm";

export class userAdminGradeFacultyBooks1641639667680 implements MigrationInterface {
    name = 'userAdminGradeFacultyBooks1641639667680'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "faculty" ("id" SERIAL NOT NULL, "faculty" character varying NOT NULL, CONSTRAINT "PK_635ca3484f9c747b6635a494ad9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "grade" ("id" SERIAL NOT NULL, "grade" character varying NOT NULL, CONSTRAINT "PK_58c2176c3ae96bf57daebdbcb5e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "details" character varying NOT NULL, "publication" character varying NOT NULL, "quantity" character varying NOT NULL, "gradeId" integer, "facultyId" integer, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'students', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_0163b6309e86ab8c295615b548e" FOREIGN KEY ("gradeId") REFERENCES "grade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_0bb971cd85e11e9e44dc0808acd" FOREIGN KEY ("facultyId") REFERENCES "faculty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_0bb971cd85e11e9e44dc0808acd"`);
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_0163b6309e86ab8c295615b548e"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "books"`);
        await queryRunner.query(`DROP TABLE "grade"`);
        await queryRunner.query(`DROP TABLE "faculty"`);
    }

}
