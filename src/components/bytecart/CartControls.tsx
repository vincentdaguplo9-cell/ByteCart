"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "@/data/products";
import { Minus, Plus, ShoppingCart, Trash2, CheckCircle } from "lucide-react";

interface CartControlsProps {
  selectedProduct: Product | null;
  quantity: number;
  total: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  addToCart: () => void;
  removeFromCart: (productId: string) => void;
  checkout: () => void;
  cartIsEmpty: boolean;
}

const CartControls: React.FC<CartControlsProps> = ({
  selectedProduct,
  quantity,
  total,
  increaseQuantity,
  decreaseQuantity,
  addToCart,
  removeFromCart,
  checkout,
  cartIsEmpty,
}) => {
  return (
    <div className="p-2 md:p-4 bg-card rounded-lg shadow-sm flex flex-col gap-3">
      {/* Quantity Selector */}
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          value={quantity}
          readOnly
          className="w-20 text-center"
        />
        <Button
          variant="outline"
          size="icon"
          onClick={increaseQuantity}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <Button onClick={addToCart} disabled={!selectedProduct}>
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
        <Button
          variant="destructive"
          onClick={() => selectedProduct && removeFromCart(selectedProduct.id)}
          disabled={!selectedProduct || cartIsEmpty}
        >
          <Trash2 className="mr-2 h-4 w-4" /> Remove
        </Button>
        <Button onClick={checkout} disabled={cartIsEmpty}>
          <CheckCircle className="mr-2 h-4 w-4" /> Checkout
        </Button>
      </div>

      {/* Total Label */}
      <div className="text-right text-2xl font-bold mt-2">
        Total: ₱{total.toFixed(2)}
      </div>
    </div>
  );
};

export default CartControls;