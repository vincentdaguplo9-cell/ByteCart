import React, { useState, useMemo, useEffect } from "react";
import { products, Product, Category } from "@/data/products";
import { showSuccess, showError } from "@/utils/toast";

export interface CartItem extends Product {
  quantity: number;
  subtotal: number;
}

export const useByteCart = () => {
  const allCategories: Category[] = ["CPU", "GPU", "RAM", "Storage", "PSU", "Case", "Cooling"];
  const [selectedCategory, setSelectedCategory] = useState<Category>(allCategories[0]);
  const [availableProducts, setAvailableProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setAvailableProducts(products.filter((p) => p.category === selectedCategory));
    setSelectedProduct(null); // Clear selected product when category changes
    setQuantity(1); // Reset quantity
  }, [selectedCategory]);

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.subtotal, 0);
  }, [cart]);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1); // Reset quantity when a new product is selected
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const addToCart = () => {
    if (!selectedProduct) {
      showError("Please select a product first.");
      return;
    }

    const existingCartItemIndex = cart.findIndex((item) => item.id === selectedProduct.id);

    if (existingCartItemIndex > -1) {
      const updatedCart = [...cart];
      const existingItem = updatedCart[existingCartItemIndex];
      existingItem.quantity += quantity;
      existingItem.subtotal = existingItem.price * existingItem.quantity;
      setCart(updatedCart);
    } else {
      const newItem: CartItem = {
        ...selectedProduct,
        quantity: quantity,
        subtotal: selectedProduct.price * quantity,
      };
      setCart((prev) => [...prev, newItem]);
    }
    showSuccess(`${quantity}x ${selectedProduct.name} added to cart.`);
    setQuantity(1); // Reset quantity after adding to cart
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    showSuccess("Item removed from cart.");
  };

  const checkout = () => {
    if (cart.length === 0) {
      showError("Your cart is empty!");
      return;
    }
    showSuccess("Thank you for your purchase!");
    setCart([]);
    setSelectedProduct(null);
    setQuantity(1);
  };

  return {
    allCategories,
    selectedCategory,
    availableProducts,
    selectedProduct,
    quantity,
    cart,
    total,
    handleCategoryChange,
    handleProductSelect,
    increaseQuantity,
    decreaseQuantity,
    addToCart,
    removeFromCart,
    checkout,
  };
};