export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
}

export type Category = "CPU" | "GPU" | "RAM" | "Storage" | "PSU" | "Case" | "Cooling";

export const products: Product[] = [
  // CPU
  { id: "cpu-1", name: "Intel i5-12400F", description: "6c/12t 4.4GHz", price: 7500, category: "CPU" },
  { id: "cpu-2", name: "Intel i7-12700K", description: "12c/20t 5.0GHz", price: 13500, category: "CPU" },
  { id: "cpu-3", name: "AMD Ryzen 5 7600X", description: "6c/12t 5.3GHz", price: 12000, category: "CPU" },
  { id: "cpu-4", name: "AMD Ryzen 7 7800X3D", description: "8c/16t 5.0GHz", price: 22000, category: "CPU" },

  // GPU
  { id: "gpu-1", name: "RTX 4060", description: "12GB GDDR6", price: 18500, category: "GPU" },
  { id: "gpu-2", name: "RTX 4070", description: "12GB GDDR6X", price: 32000, category: "GPU" },
  { id: "gpu-3", name: "RX 7800 XT", description: "16GB GDDR6", price: 28000, category: "GPU" },
  { id: "gpu-4", name: "RX 7900 GRE", description: "16GB GDDR6", price: 35000, category: "GPU" },

  // RAM
  { id: "ram-1", name: "Corsair 16GB DDR4", description: "3200MHz", price: 3500, category: "RAM" },
  { id: "ram-2", name: "Trident Z 32GB DDR4", description: "3600MHz RGB", price: 7200, category: "RAM" },
  { id: "ram-3", name: "Kingston Fury 16GB DDR5", description: "6000MHz", price: 4500, category: "RAM" },
  { id: "ram-4", name: "G.Skill Flare X5 32GB DDR5", description: "6000MHz", price: 8500, category: "RAM" },

  // Storage
  { id: "storage-1", name: "Samsung 1TB NVMe SSD", description: "PCIe Gen4", price: 4500, category: "Storage" },
  { id: "storage-2", name: "Crucial 2TB NVMe SSD", description: "PCIe Gen4", price: 8000, category: "Storage" },
  { id: "storage-3", name: "Seagate 4TB HDD", description: "7200 RPM", price: 3000, category: "Storage" },

  // PSU
  { id: "psu-1", name: "Corsair RM750e", description: "750W 80+ Gold", price: 6000, category: "PSU" },
  { id: "psu-2", name: "Seasonic Focus GX-850", description: "850W 80+ Gold", price: 8500, category: "PSU" },

  // Case
  { id: "case-1", name: "Lian Li Lancool 216", description: "Mid-Tower ATX", price: 5000, category: "Case" },
  { id: "case-2", name: "NZXT H5 Flow", description: "Compact Mid-Tower", price: 4800, category: "Case" },

  // Cooling
  { id: "cooling-1", name: "Deepcool AK620", description: "Dual Tower Air Cooler", price: 3000, category: "Cooling" },
  { id: "cooling-2", name: "Arctic Liquid Freezer II 240", description: "240mm AIO Liquid Cooler", price: 5500, category: "Cooling" },
];