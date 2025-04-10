-- CreateTable
CREATE TABLE "Transaccion" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "tiendaId" INTEGER NOT NULL,
    "metodoPago" TEXT NOT NULL,
    "montoTotal" INTEGER NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pedidoId" INTEGER NOT NULL,

    CONSTRAINT "Transaccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "transaccionId" INTEGER NOT NULL,
    "productoID" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaccion_pedidoId_key" ON "Transaccion"("pedidoId");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_transaccionId_key" ON "Pedido"("transaccionId");

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_transaccionId_fkey" FOREIGN KEY ("transaccionId") REFERENCES "Transaccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
