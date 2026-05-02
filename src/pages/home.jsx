import { ArrowRight, CheckCircle2, Sparkles, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductListing from '../component/productListing'
import SectionHeader from '../component/sectionHeader'
import { categories, homeStats, serviceHighlights } from '../data/storefront'

function Home() {
	return (
		<div className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl space-y-8">
				<section className="overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 text-white shadow-[0_25px_80px_rgba(15,23,42,0.18)]">
					<div className="grid gap-10 px-6 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-14">
						<div>
							<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
								<Sparkles className="h-4 w-4 text-amber-300" />
								Modern home shopping experience
							</div>
							<h1 className="mt-6 max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
								Home items that make every room feel intentional.
							</h1>
							<p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
								Discover furniture, decor, and essentials styled like a premium interiors brand. Clean layout, warm materials, and practical products.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Link to="/shop" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-amber-200">
									Shop the collection
									<ArrowRight className="h-4 w-4" />
								</Link>
								<Link to="/deals" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
									View deals
								</Link>
							</div>

							<div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
								{homeStats.map((stat) => (
									<div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
										<p className="text-2xl font-bold text-amber-300">{stat.value}</p>
										<p className="mt-1 text-sm text-slate-300">{stat.label}</p>
									</div>
								))}
							</div>
						</div>

						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
							<div className="rounded-[1.75rem] bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=1200&fit=crop')] bg-cover bg-center p-6 min-h-[260px] shadow-2xl">
								<div className="inline-flex rounded-full bg-slate-950/70 px-4 py-2 text-sm font-medium backdrop-blur">Designer pick</div>
							</div>
							<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
								<div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
									<div className="flex items-start gap-4">
										<div className="rounded-2xl bg-amber-300 p-3 text-slate-950">
											<Truck className="h-5 w-5" />
										</div>
										<div>
											<p className="font-semibold">Fast delivery</p>
											<p className="mt-2 text-sm leading-6 text-slate-300">Most featured items ship within 2 business days.</p>
										</div>
									</div>
								</div>
								<div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
									<div className="flex items-start gap-4">
										<div className="rounded-2xl bg-white p-3 text-slate-950">
											<CheckCircle2 className="h-5 w-5" />
										</div>
										<div>
											<p className="font-semibold">Premium quality</p>
											<p className="mt-2 text-sm leading-6 text-slate-300">Carefully selected products for lived-in, modern spaces.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
					<SectionHeader 
						eyebrow="Browse by category" 
						title="Everything for a well-styled home" 
						description="Move through a focused collection built around the rooms people actually shop for most."
						variant="light"
					/>

					<div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
						{categories.map((category) => (
							<div key={category.name} className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
								<div className={`h-1.5 w-14 rounded-full bg-gradient-to-r ${category.accent}`} />
								<h3 className="mt-5 text-xl font-bold">{category.name}</h3>
								<p className="mt-2 text-sm text-slate-400">{category.count}</p>
								<Link to="/categories" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
									Explore category
									<ArrowRight className="h-4 w-4" />
								</Link>
							</div>
						))}
					</div>
				</section>

				<ProductListing />

				<section className="grid gap-4 lg:grid-cols-3">
					{serviceHighlights.map((item) => (
						<div key={item.title} className="rounded-[1.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
							<h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
							<p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
						</div>
					))}
				</section>
			</div>
		</div>
	)
}

export default Home