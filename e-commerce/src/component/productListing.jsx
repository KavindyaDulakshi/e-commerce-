import { ArrowRight, Heart, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchProducts } from '../lib/api'

function ProductListing() {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [searchParams] = useSearchParams()
	const query = searchParams.get('q')?.trim().toLowerCase() || ''

	useEffect(() => {
		let mounted = true
		setLoading(true)
		fetchProducts()
			.then((data) => {
				if (!mounted) return
				setProducts(data)
			})
			.catch((err) => {
				if (!mounted) return
				setError(err.message)
			})
			.finally(() => mounted && setLoading(false))

		return () => {
			mounted = false
		}
	}, [])

	const productList = products
		.filter((product) => {
			if (!query) return true
			const searchableText = [product.name, product.description, product.category]
				.filter(Boolean)
				.join(' ')
				.toLowerCase()
			return searchableText.includes(query)
		})

	return (
		<section className="px-4 py-10 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.15)] backdrop-blur sm:p-8 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-2xl">
						<p className="text-xs font-bold uppercase tracking-[0.35em] text-amber-300">Featured collection</p>
						<h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
							{query ? `Search results for "${query}"` : 'Home items with a polished, editorial feel'}
						</h2>
						<p className="mt-4 text-base leading-7 text-slate-300">
							{query
								? 'Showing matching products from the catalog.'
								: 'A curated set of furniture and decor essentials for warm, modern interiors. Built to feel premium without feeling cold.'}
						</p>
					</div>
					<div className="grid grid-cols-3 gap-3 text-center sm:min-w-[320px]">
						<div className="rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 px-4 py-5 text-slate-950 shadow-lg shadow-amber-500/30">
							<p className="text-2xl font-bold">{productList.length}</p>
							<p className="mt-1 text-xs uppercase tracking-[0.2em] font-semibold">Products</p>
						</div>
					<div className="rounded-2xl bg-white/10 border border-white/20 px-4 py-5 text-white">
							<p className="text-2xl font-bold text-amber-300">4.8</p>
							<p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">Rating</p>
						</div>
						<div className="rounded-2xl bg-white/5 px-4 py-5 text-white border border-white/10">
							<p className="text-2xl font-bold">2 Day</p>
							<p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">Delivery</p>
						</div>
					</div>
				</div>

				{loading && <p className="mt-6 text-center text-slate-400">Loading products…</p>}
				{error && <p className="mt-6 text-center text-red-400">{error}</p>}
				{!loading && !error && query && productList.length === 0 && (
					<p className="mt-6 text-center text-slate-400">
						No products found for "{query}". Try a different search term.
					</p>
				)}

				<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
					{productList.map((product) => (
						<article key={product.id} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950 shadow-[0_20px_50px_rgba(15,23,42,0.1)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_25px_65px_rgba(15,23,42,0.2)]">
							<div className="relative aspect-[4/4.1] overflow-hidden bg-slate-800">
								<img 
									src={product.image || product.image_url}
									alt={product.name}
									className="h-full w-full object-cover transition duration-500 group-hover:scale-110" 
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent group-hover:from-slate-950/60 transition duration-300" />
                                
								<div className="absolute inset-4 flex items-start justify-between opacity-0 transition duration-300 group-hover:opacity-100">
									<span className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-700">Best seller</span>
									<button 
										type="button" 
										className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 backdrop-blur transition hover:bg-amber-300 hover:text-slate-950" 
										aria-label={`Save ${product.name}`}
									>
										<Heart className="h-5 w-5" />
									</button>
								</div>
							</div>

							<div className="space-y-4 p-5">
								<div>
									<div className="flex items-start justify-between gap-3">
										<h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition">{product.name}</h3>
										<p className="shrink-0 text-lg font-bold text-amber-300">${(product.price ?? product.unit_price ?? 0).toFixed(2)}</p>
									</div>
									<div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
										<Star className="h-4 w-4 fill-amber-400 text-amber-400" />
										<span className="text-white">4.9</span>
										<span>•</span>
										<span>Free returns</span>
									</div>
								</div>

								<button 
									type="button" 
									className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:shadow-lg hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0"
								>
									View details
									<ArrowRight className="h-4 w-4" />
								</button>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProductListing
