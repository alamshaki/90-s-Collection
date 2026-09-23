TRUNCATE TABLE "product" RESTART IDENTITY;

INSERT INTO "product" ("name", "price", "category", "image", "description", "isTrending", "createdAt", "updatedAt") VALUES
('Classic Fit White T-Shirt', 799, 'T-Shirts', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800', 'Essential white crewneck t-shirt made from premium cotton.', true, NOW(), NOW()),
('Vintage Wash Denim Jeans', 2499, 'Jeans', 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800', 'Classic 90s vintage wash jeans with a relaxed fit.', true, NOW(), NOW()),
('Oversized Black Hoodie', 1899, 'Hoodies & Sweatshirts', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800', 'Comfortable heavyweight hoodie perfect for layering.', false, NOW(), NOW()),
('Slim Fit Chino Trousers', 1599, 'Trousers & Pants', 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800', 'Versatile chino trousers suitable for both casual and formal settings.', false, NOW(), NOW()),
('Lightweight Windbreaker Jacket', 2299, 'Jackets & Coats', 'https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=800', 'Retro colorblock windbreaker, perfect for transitional weather.', true, NOW(), NOW()),
('Embroidered Cotton Kurta', 1999, 'Kurtas & Ethnic Wear', 'https://images.unsplash.com/photo-1597983073493-88cd35fc88f3?auto=format&fit=crop&q=80&w=800', 'Elegant cotton kurta with subtle embroidery for festive occasions.', false, NOW(), NOW()),
('Performance Tracksuit Set', 2999, 'Tracksuits & Activewear', 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800', 'Matching track jacket and pants with moisture-wicking technology.', true, NOW(), NOW()),
('Tailored Navy Blazer', 4599, 'Suits & Blazers', 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800', 'Classic single-breasted navy blazer for a sharp look.', false, NOW(), NOW());
