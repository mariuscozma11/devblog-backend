import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitMigration1763551453347 implements MigrationInterface {
  name = 'InitMigration1763551453347';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "post" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "slug" text NOT NULL, "title" character varying(150) NOT NULL, "content" text NOT NULL, "category" character varying(100), "tags" text NOT NULL, "status" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "post"`);
  }
}
