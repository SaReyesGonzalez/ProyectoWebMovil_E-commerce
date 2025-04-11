-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id");
