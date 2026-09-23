import pg from 'pg';
const { Client } = pg;

const client = new Client({
  connectionString: 'postgresql://db_90s_collection_db_user:hoyhUrJRiwUY6GOCBw5TfqsNDHZCEgRf@dpg-dapqvslg1s2s73d4q3mg-a.oregon-postgres.render.com/db_90s_collection_db',
  ssl: {
    rejectUnauthorized: false
  }
});

const categories = [
  'T-Shirts', 'Shirts', 'Jeans', 'Trousers & Pants', 'Shorts',
  'Hoodies & Sweatshirts', 'Jackets & Coats', 'Kurtas & Ethnic Wear',
  'Tracksuits & Activewear', 'Suits & Blazers'
];

const mockProducts = [];

categories.forEach((category, i) => {
  for (let j = 1; j <= 4; j++) {
    // Generate some variation in price depending on category
    let basePrice = 1000;
    if (category.includes('Jackets') || category.includes('Suits')) basePrice = 3000;
    if (category.includes('T-Shirts') || category.includes('Shorts')) basePrice = 500;
    
    const price = basePrice + (Math.floor(Math.random() * 20) * 50); // add random 50 increments
    
    mockProducts.push({
      name: `Premium Men's ${category.split(' ')[0]} - Style ${j}`,
      price: price,
      description: `High-quality ${category.toLowerCase()} perfect for the modern man. Experience comfort and 90's vintage style.`,
      category: category,
      image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=600', // Generic clothing image
      isTrending: j === 1 // Make the first item of each category trending
    });
  }
});

async function seed() {
  try {
    await client.connect();
    console.log('Connected to database.');
    
    // Clear existing products
    await client.query('DELETE FROM "product"');
    console.log('Cleared existing products.');

    for (const product of mockProducts) {
      await client.query(
        `INSERT INTO "product" (name, price, description, category, image, "isTrending", "updatedAt") 
         VALUES ($1, $2, $3, $4, $5, $6, NOW())`,
        [product.name, product.price, product.description, product.category, product.image, product.isTrending]
      );
    }
    
    console.log(`Successfully seeded ${mockProducts.length} products.`);
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    await client.end();
    console.log('Database connection closed.');
  }
}

seed();
