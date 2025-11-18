"use client";

import React from "react";
import { Product } from "@/data/products";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface ProductDetailsProps {
  product: Product | null;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  if (!product) {
    return (
      <Card className="w-full h-full bg-card shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl">Select a Product</CardTitle>
          <CardDescription>Details will appear here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No product selected.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full h-full bg-card shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <CardDescription>₱{product.price.toFixed(2)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;