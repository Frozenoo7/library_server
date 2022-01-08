import {MigrationInterface, QueryRunner} from "typeorm";

export class books1641640184369 implements MigrationInterface {
    name = 'books1641640184369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "details" character varying NOT NULL, "publication" character varying NOT NULL, "quantity" character varying NOT NULL, "gradeId" integer, "facultyId" integer, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_0163b6309e86ab8c295615b548e" FOREIGN KEY ("gradeId") REFERENCES "grade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_0bb971cd85e11e9e44dc0808acd" FOREIGN KEY ("facultyId") REFERENCES "faculty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_0bb971cd85e11e9e44dc0808acd"`);
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_0163b6309e86ab8c295615b548e"`);
        await queryRunner.query(`DROP TABLE "books"`);
    }

}
