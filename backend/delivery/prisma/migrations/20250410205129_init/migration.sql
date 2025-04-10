-- CreateTable
CREATE TABLE "Repartidores" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "calificacion" DOUBLE PRECISION,

    CONSTRAINT "Repartidores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Repartidores_userId_key" ON "Repartidores"("userId");
