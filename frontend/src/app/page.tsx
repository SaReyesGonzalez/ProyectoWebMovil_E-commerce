"use client"
import React from "react";
import { ProductCard } from "./seccion-comprador/components/ProductCard";

import { useEffect, useState } from 'react'


export default function Home() {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/catalogos') // Ajusta tu endpoint
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error('Error al obtener productos:', err))
  }, [])

  return(
  <div className="min-h-screen bg-gray-100 flex flex-col">
    
      <main className="flex-grow flex items-center justify-center px-6">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {productos.map((producto) => (
      <ProductCard
        key={producto.id}
        id={producto.id}
        nombre={producto.nombre}
        descripcion={producto.descripcion}
        urlImagen={producto.urlImagen}
      />
    ))}
  </div>

      </main>

      
    </div>
  );
}
