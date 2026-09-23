import pg from 'pg';
const { Client } = pg;

const client = new Client({
  connectionString: 'postgresql://db_90s_collection_db_user:hoyhUrJRiwUY6GOCBw5TfqsNDHZCEgRf@dpg-dapqvslg1s2s73d4q3mg-a.oregon-postgres.render.com/db_90s_collection_db',
  ssl: {
    rejectUnauthorized: false
  }
});

const categoryImages = {
  'T-Shirts': [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=600'
  ],
  'Shirts': [
    'https://images.unsplash.com/photo-1596755094514-f87e32f85e23?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1626497764746-6dc36546b388?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1588359348358-141de8b201f1?auto=format&fit=crop&q=80&w=600'
  ],
  'Jeans': [
    'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&q=80&w=600'
  ],
  'Trousers & Pants': [
    'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600'
  ],
  'Shorts': [
    'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1550246140-5119ae4790b8?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1611099525287-43f1cb12128b?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=600'
  ],
  'Hoodies & Sweatshirts': [
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1572495641004-28421ae52e52?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1517457210597-9e7ee33989e7?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=80&w=600'
  ],
  'Jackets & Coats': [
    'https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&q=80&w=600'
  ],
  'Kurtas & Ethnic Wear': [
    'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1618210134444-2fbf00e4ab58?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1603517178351-ad0ad7bc794f?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1582298701931-e11fffa2bbfb?auto=format&fit=crop&q=80&w=600'
  ],
  'Tracksuits & Activewear': [
    'https://images.unsplash.com/photo-1515243061678-10fd97cdb04e?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&q=80&w=600'
  ],
  'Suits & Blazers': [
    'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1598808503746-f34c53b93f3b?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=600'
  ]
};

const mockProducts = [];

Object.entries(categoryImages).forEach(([category, images]) => {
  for (let j = 0; j < 4; j++) {
    let basePrice = 1000;
    if (category.includes('Jackets') || category.includes('Suits')) basePrice = 3000;
    if (category.includes('T-Shirts') || category.includes('Shorts')) basePrice = 500;
    
    const price = basePrice + (Math.floor(Math.random() * 20) * 50);
    
    mockProducts.push({
      name: `Premium Men's ${category.split(' ')[0]} - Style ${j + 1}`,
      price: price,
      description: `High-quality ${category.toLowerCase()} perfect for the modern man. Experience comfort and 90's vintage style.`,
      category: category,
      image: images[j] || 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=600',
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
