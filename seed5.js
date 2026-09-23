import pg from 'pg';
const { Client } = pg;

const client = new Client({
  connectionString: 'postgresql://db_90s_collection_db_user:hoyhUrJRiwUY6GOCBw5TfqsNDHZCEgRf@dpg-dapqvslg1s2s73d4q3mg-a.oregon-postgres.render.com/db_90s_collection_db',
  ssl: {
    rejectUnauthorized: false
  }
});

const validImages = [
  'https://images.unsplash.com/photo-1495105787522-5334e3ffa0e7?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1628035411756-34091ab7cc0a?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1588620753817-2f3b9004e0e5?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1618354691438-25bc04584c23?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=600'
];

const categoriesList = [
  "T-Shirts", "Shirts", "Jeans", "Trousers & Pants", "Shorts", 
  "Hoodies & Sweatshirts", "Jackets & Coats", "Kurtas & Ethnic Wear", 
  "Tracksuits & Activewear", "Suits & Blazers"
];

const mockProducts = [];

    categoriesList.forEach((category) => {
  for (let j = 0; j < 4; j++) {
    let basePrice = 1000;
    if (category.includes('Jackets') || category.includes('Suits')) basePrice = 3000;
    if (category.includes('T-Shirts') || category.includes('Shorts')) basePrice = 500;
    
    const price = basePrice + (Math.floor(Math.random() * 20) * 50);
    const imageSeed = encodeURIComponent(`${category}-${j}`);
    
    mockProducts.push({
      name: `Premium Men's ${category.split(' ')[0]} - Style ${j + 1}`,
      price: price,
      description: `High-quality ${category.toLowerCase()} perfect for the modern man. Experience comfort and 90's vintage style.`,
      category: category,
      image: `https://picsum.photos/seed/${imageSeed}/600/750`,
      isTrending: j === 0 // Make the first item of each category trending
    });
  }
});

async function seed() {
  try {
    await client.connect();
    console.log('Connected to database.');
    
    await client.query('DELETE FROM "product"');
    console.log('Cleared existing products.');

    for (const product of mockProducts) {
      await client.query(
        `INSERT INTO "product" (name, price, description, category, image, "isTrending", "updatedAt") 
         VALUES ($1, $2, $3, $4, $5, $6, NOW())`,
        [product.name, product.price, product.description, product.category, product.image, product.isTrending]
      );
    }
    
    console.log(`Successfully seeded ${mockProducts.length} products with unique images.`);
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    await client.end();
    console.log('Database connection closed.');
  }
}

seed();
