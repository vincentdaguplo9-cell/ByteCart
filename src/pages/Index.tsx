"use client";

import React from "react";
import { MadeWithZeninClan } from "@/components/made-with-zenin-clan";
import CategorySelector from "@/components/bytecart/CategorySelector";
import ProductList from "@/components/bytecart/ProductList";
import ProductDetails from "@/components/bytecart/ProductDetails";
import CartTable from "@/components/bytecart/CartTable";
import CartControls from "@/components/bytecart/CartControls";
import { useByteCart } from "@/hooks/useByteCart";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/ThemeToggle"; // Import ThemeToggle

const Index = () => {
  const {
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
  } = useByteCart();

  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground p-2 md:p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl md:text-4xl font-bold flex-1 text-center md:text-left">ByteCart POS</h1>
        <ThemeToggle /> {/* Add ThemeToggle here */}
      </div>

      {/* Top: Category Dropdown (always visible) */}
      <div className="mb-4">
        <CategorySelector
          categories={allCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {isMobile ? (
        <div className="flex-1 flex flex-col gap-4">
          <Tabs defaultValue="products" className="flex-1 flex flex-col">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="cart">Cart ({cart.length})</TabsTrigger>
            </TabsList>
            <TabsContent value="products" className="flex-1 flex flex-col gap-4 mt-4 overflow-y-auto">
              <Card className="p-2 bg-card shadow-sm flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-2">Products</h2>
                <ProductList
                  products={availableProducts}
                  selectedProduct={selectedProduct}
                  onProductSelect={handleProductSelect}
                  className="flex-1"
                />
              </Card>
              <Card className="p-2 bg-card shadow-sm">
                <h2 className="text-xl font-semibold mb-2">Product Details</h2>
                <ProductDetails product={selectedProduct} />
              </Card>
              <CartControls
                selectedProduct={selectedProduct}
                quantity={quantity}
                total={total}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                checkout={checkout}
                cartIsEmpty={cart.length === 0}
              />
            </TabsContent>
            <TabsContent value="cart" className="flex-1 flex flex-col gap-4 mt-4 overflow-y-auto">
              <Card className="p-2 bg-card shadow-sm flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-2">Cart</h2>
                <CartTable
                  cart={cart}
                  className="flex-1"
                  selectedProduct={selectedProduct}
                  onItemSelect={handleProductSelect}
                />
              </Card>
              <CartControls
                selectedProduct={selectedProduct}
                quantity={quantity}
                total={total}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                checkout={checkout}
                cartIsEmpty={cart.length === 0}
              />
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <>
          {/* Desktop Layout: Left (Products + Details), Right (Cart + Controls) */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Left Panel: Product List and Product Details */}
            <div className="flex flex-col gap-4">
              <Card className="p-4 bg-card shadow-sm flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-2">Products</h2>
                <ProductList
                  products={availableProducts}
                  selectedProduct={selectedProduct}
                  onProductSelect={handleProductSelect}
                  className="flex-1"
                />
              </Card>
              <Card className="p-4 bg-card shadow-sm">
                <h2 className="text-xl font-semibold mb-2">Product Details</h2>
                <ProductDetails product={selectedProduct} />
              </Card>
            </div>

            {/* Right Panel: Cart Table and Cart Controls */}
            <div className="flex flex-col gap-4">
              <Card className="p-4 bg-card shadow-sm flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-2">Cart</h2>
                <CartTable
                  cart={cart}
                  selectedProduct={selectedProduct}
                  onItemSelect={handleProductSelect}
                  className="flex-1"
                />
              </Card>
              <CartControls
                selectedProduct={selectedProduct}
                quantity={quantity}
                total={total}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                checkout={checkout}
                cartIsEmpty={cart.length === 0}
              />
            </div>
          </div>
        </>
      )}

      <MadeWithZeninClan />
    </div>
  );
};

export default Index;