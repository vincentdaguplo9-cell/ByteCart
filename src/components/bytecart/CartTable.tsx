"use client";

import React from "react";
import { CartItem } from "@/hooks/useByteCart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils"; // Import cn for utility classes

interface CartTableProps {
  cart: CartItem[];
  className?: string; // Added className prop
}

const CartTable: React.FC<CartTableProps> = ({ cart, className }) => { // Destructure className
  return (
    <ScrollArea className={cn("h-[300px] md:h-[calc(100vh-280px)] w-full rounded-lg border bg-card shadow-sm", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Qty</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-muted-foreground py-4">
                Cart is empty.
              </TableCell>
            </TableRow>
          ) : (
            cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="text-right">₱{item.price.toFixed(2)}</TableCell>
                <TableCell className="text-right">{item.quantity}</TableCell>
                <TableCell className="text-right">₱{item.subtotal.toFixed(2)}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

export default CartTable;