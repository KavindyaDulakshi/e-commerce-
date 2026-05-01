import { useState } from 'react';

function ProductListing() {
	const [selectedFilter, setSelectedFilter] = useState('all');
	const [sortBy, setSortBy] = useState('featured');

	const products = [
		{
			id: 1,
			name: 'Luna Ceramic Lamp',
			category: 'LIGHTING',
			price: 345.00,
			image: 'https://images.unsplash.com/photo-1565182999555-2142d4d407b0?w=500&h=500&fit=crop',
			isNew: false
		},
		{
			id: 2,
			name: 'Arco Dining Chair',
			category: 'FURNITURE',
			price: 580.00,
			image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
			isNew: true
		},
		{
			id: 3,
			name: 'Heritage Wool Throw',
			category: 'TEXTILES',
			price: 190.00,
			image: 'https://images.unsplash.com/photo-1577716453202-59e81cd43e27?w=500&h=500&fit=crop',
			isNew: false
		},
		{
			id: 4,
			name: 'Terra Ceramic Set (5)',
			category: 'DECOR',
			price: 125.00,
			image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
			isNew: false
		},
		{
			id: 5,
			name: 'Linen Bedding Set',
			category: 'TEXTILES',
			price: 280.00,
			image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop',
			isNew: true
		},
		{
			id: 6,
			name: 'Minimalist Wall Clock',
			category: 'DECOR',
			price: 95.00,
			image: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500&h=500&fit=crop',
			isNew: false
		},
		{
			id: 7,
			name: 'Oak Wood Bookshelf',
			category: 'FURNITURE',
			price: 450.00,
			image: 'https://images.unsplash.com/photo-1585299676815-e21cc028cb29?w=500&h=500&fit=crop',
			isNew: false
		},
		{
			id: 8,
			name: 'Ambient Table Lamp',
			category: 'LIGHTING',
			price: 220.00,
			image: 'https://images.unsplash.com/photo-1565182999555-2142d4d407b0?w=500&h=500&fit=crop',
			isNew: false
		}
	];

	const filteredProducts = selectedFilter === 'all' 
		? products 
		: products.filter(p => p.category === selectedFilter);

	const categories = ['all', 'LIGHTING', 'FURNITURE', 'TEXTILES', 'DECOR'];

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<div className="bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
						Curated Living
					</h1>
					<p className="mt-4 text-lg text-slate-600">
						Timeless pieces designed for a peaceful, tactile environment. Explore our seasonal
						selection of handcrafted essentials.
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				{/* Filter and Sort Section */}
				<div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<div className="flex items-center gap-4">
						<span className="text-sm font-semibold text-slate-700">Filters</span>
						<div className="flex flex-wrap gap-2">
							{categories.map(cat => (
								<button
									key={cat}
									onClick={() => setSelectedFilter(cat)}
									className={`rounded-full px-4 py-2 text-xs font-medium transition ${
										selectedFilter === cat
											? 'bg-slate-900 text-white'
											: 'bg-slate-100 text-slate-700 hover:bg-slate-200'
									}`}
								>
									{cat.charAt(0).toUpperCase() + cat.slice(1)}
								</button>
							))}
						</div>
					</div>

					<select
						value={sortBy}
						onChange={(e) => setSortBy(e.target.value)}
						className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 focus:border-amber-400 focus:outline-none"
					>
						<option value="featured">Featured</option>
						<option value="price-low">Price: Low to High</option>
						<option value="price-high">Price: High to Low</option>
						<option value="newest">Newest</option>
					</select>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{filteredProducts.map(product => (
						<div key={product.id} className="group cursor-pointer">
							{/* Product Image */}
							<div className="relative mb-4 overflow-hidden rounded-lg bg-slate-200">
								<img
									src={product.image}
									alt={product.name}
									className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
								/>
								{product.isNew && (
									<div className="absolute right-3 top-3 rounded-full bg-slate-700 px-3 py-1 text-xs font-semibold text-white">
										New
									</div>
								)}
								<button className="absolute bottom-3 right-3 rounded-full bg-white p-2 shadow-md transition hover:bg-slate-50">
									<svg 
										className="h-5 w-5 text-slate-700" 
										fill="none" 
										stroke="currentColor" 
										viewBox="0 0 24 24"
									>
										<path 
											strokeLinecap="round" 
											strokeLinejoin="round" 
											strokeWidth={2} 
											d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
										/>
									</svg>
								</button>
							</div>

							{/* Product Info */}
							<div>
								<p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
									{product.category}
								</p>
								<h3 className="mt-2 text-lg font-semibold text-slate-900">
									{product.name}
								</h3>
								<p className="mt-2 text-xl font-bold text-slate-900">
									${product.price.toFixed(2)}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Load More */}
				<div className="mt-12 text-center">
					<button className="rounded-lg border border-slate-300 px-8 py-3 font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50">
						Load More
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductListing;
