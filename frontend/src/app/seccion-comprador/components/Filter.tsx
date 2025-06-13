import { Funnel } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Filter() {
    return(
        <Sheet>
            <SheetTrigger className="p-2 border rounded-md bg-gray-200 text-white hover:bg-blue-300">
                <a>
                    <Funnel color="#9CA3AF" strokeWidth={2} />
                </a>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <Accordion type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <SheetTitle>Categoría</SheetTitle>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <SheetTitle>Tienda</SheetTitle>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <SheetTitle>Precio</SheetTitle>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                
                {/*Agregar caracteristicas por tipo de producto*/}
                </SheetHeader>
            </SheetContent>
            </Sheet>
    
)
}
