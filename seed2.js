import pg from 'pg';
import fs from 'fs';

const { Client } = pg;

const client = new Client({
  connectionString: 'postgresql://db_90s_collection_db_user:hoyhUrJRiwUY6GOCBw5TfqsNDHZCEgRf@dpg-dapqvslg1s2s73d4q3mg-a.oregon-postgres.render.com/db_90s_collection_db?sslmode=require',
});

async function main() {
  await client.connect();
  const sql = fs.readFileSync('seed2.sql', 'utf8');
  await client.query(sql);
  console.log('Database seeded with new modern collection successfully!');
  await client.end();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
