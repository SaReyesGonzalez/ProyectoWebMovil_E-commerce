import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from 'next/image'
import { ShoppingCart } from "lucide-react";

export function ProductCard({ id, nombre, descripcion, urlImagen }: {
  id: string;
  nombre: string;
  descripcion: string;
  urlImagen: string;
}) {
  return (
    <Link href={`/producto/${id}`}>
        <Card className="w-full max-w-sm">
            <CardHeader>
                <Image
                    src={urlImagen}
                    alt={nombre}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 640px) 100vw, 384px"
                />
                <CardTitle>${nombre}</CardTitle>
                <CardDescription>${descripcion}</CardDescription>
                <CardAction>
                    <Button>
                        Agregar al carrito
                        <ShoppingCart/>
                    </Button>
                </CardAction>
            </CardHeader>
        </Card>
    </Link>
    
  )
}
