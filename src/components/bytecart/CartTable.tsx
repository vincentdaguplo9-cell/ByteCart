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
import { cn } from "@/lib/utils";
import { Product } from "@/data/products";

interface CartTableProps {
  cart: CartItem[];
  className?: string;
  selectedProduct: Product | null;
  onItemSelect: (product: Product) => void;
}

const CartTable: React.FC<CartTableProps> = ({ cart, className, selectedProduct, onItemSelect }) => {
  return (
    <ScrollArea className={cn("flex-1 w-full rounded-lg border bg-card shadow-sm", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xs">Product</TableHead>
            <TableHead className="text-right text-xs">Price</TableHead>
            <TableHead className="text-right text-xs">Qty</TableHead>
            <TableHead className="text-right text-xs">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-muted-foreground py-4 text-xs">
                Cart is empty.
              </TableCell>
            </TableRow>
          ) : (
            cart.map((item) => (
              <TableRow
                key={item.id}
                className={cn(
                  "cursor-pointer hover:bg-accent transition-colors",
                  selectedProduct?.id === item.id && "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                onClick={() => onItemSelect(item)}
              >
                <TableCell className="font-medium text-xs">{item.name}</TableCell>
                <TableCell className="text-right text-xs">₱{item.price.toFixed(2)}</TableCell>
                <TableCell className="text-right text-xs">{item.quantity}</TableCell>
                <TableCell className="text-right text-xs">₱{item.subtotal.toFixed(2)}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

export default CartTable;