"use client";

import React from "react";
import { Product } from "@/data/products";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProductListProps {
  products: Product[];
  selectedProduct: Product | null;
  onProductSelect: (product: Product) => void;
  className?: string;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  selectedProduct,
  onProductSelect,
  className,
}) => {
  return (
    <ScrollArea className={cn("flex-1 w-full rounded-lg border bg-card shadow-sm", className)}>
      <div className="p-2">
        {products.length === 0 ? (
          <p className="text-center text-muted-foreground py-4">No products in this category.</p>
        ) : (
          products.map((product) => (
            <Card
              key={product.id}
              className={cn(
                "mb-2 cursor-pointer hover:bg-accent transition-colors",
                selectedProduct?.id === product.id && "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
              onClick={() => onProductSelect(product)}
            >
              <CardContent className="flex justify-between items-center p-3">
                <span className="font-medium">{product.name}</span>
                <span className="text-sm font-semibold">
                  ₱{product.price.toFixed(2)}
                </span>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </ScrollArea>
  );
};

export default ProductList;