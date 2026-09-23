import { db } from '../src/prisma/db.ts';

const products = [
  {
    name: "Men's Vintage Wash Denim Jacket",
    price: 89.99,
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0e7?auto=format&fit=crop&q=80&w=800",
    description: "A timeless classic. This vintage wash denim jacket brings the quintessential 90s look to any outfit.",
    isTrending: true
  },
  {
    name: "Retro Colorblock Windbreaker",
    price: 65.00,
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=800",
    description: "Bold colors and lightweight material make this windbreaker a must-have for nostalgic streetwear.",
    isTrending: true
  },
  {
    name: "Relaxed Fit Cargo Pants",
    price: 55.00,
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1628035411756-34091ab7cc0a?auto=format&fit=crop&q=80&w=800",
    description: "Maximum comfort and maximum pockets. The definitive 90s silhouette.",
    isTrending: false
  },
  {
    name: "Classic High-Top Sneakers",
    price: 120.00,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=800",
    description: "Essential streetwear kicks. Perfect for hitting the court or the streets.",
    isTrending: true
  },
  {
    name: "Oversized Graphic Tee",
    price: 35.00,
    category: "Tops",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800",
    description: "Faded vintage print on a soft, oversized cotton tee.",
    isTrending: false
  },
  {
    name: "Retro Rectangular Sunglasses",
    price: 25.00,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    description: "Sharp rectangular frames to complete the 90s aesthetic.",
    isTrending: true
  },
  {
    name: "Heavyweight Plannel Shirt",
    price: 45.00,
    category: "Tops",
    image: "https://images.unsplash.com/photo-1588620753817-2f3b9004e0e5?auto=format&fit=crop&q=80&w=800",
    description: "Essential grunge wear. Warm, durable, and effortlessly cool.",
    isTrending: false
  },
  {
    name: "Corduroy Bucket Hat",
    price: 20.00,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?auto=format&fit=crop&q=80&w=800",
    description: "Corduroy bucket hat with a classic silhouette. Perfect for sunny days.",
    isTrending: false
  }
];

async function main() {
  console.log('Start seeding...');
  for (const p of products) {
    const product = await db.product.create({
      data: p,
    });
    console.log(`Created product with id: ${product.id}`);
  }
  console.log('Seeding finished.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
