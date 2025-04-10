-- CreateTable
CREATE TABLE "Proveedores" (
    "id" SERIAL NOT NULL,
    "rut" TEXT NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "ubicacion" VARCHAR(255) NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "servicio" TEXT NOT NULL,

    CONSTRAINT "Proveedores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Proveedores_rut_key" ON "Proveedores"("rut");

-- CreateIndex
CREATE UNIQUE INDEX "Proveedores_telefono_key" ON "Proveedores"("telefono");

-- CreateIndex
CREATE UNIQUE INDEX "Proveedores_email_key" ON "Proveedores"("email");
