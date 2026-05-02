import { ArrowRight, CheckCircle2, Clock, Shield, Sparkles, Truck, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductListing from '../component/productListing'
import SectionHeader from '../component/sectionHeader'
import { categories, homeStats } from '../data/storefront'

function Home() {
	const highlights = [
		{ icon: Truck, title: 'Fast shipping', description: 'Delivered quickly with premium packaging and live tracking.' },
		{ icon: Shield, title: 'Styled for real homes', description: 'A balanced collection of warm textures, clean lines, and useful designs.' },
		{ icon: Clock, title: 'Safe checkout', description: 'Simple cart flow with secure payment support for every order.' },
	]

	return (
		<div className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl space-y-12">
				<section className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950 text-white shadow-[0_25px_80px_rgba(15,23,42,0.25)]">
					<div className="grid gap-10 px-6 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-16">
						<div>
							<div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm text-amber-200">
								<Sparkles className="h-4 w-4" />
								Curated home essentials
							</div>
							<h1 className="mt-8 max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
								Transform your space into something special
							</h1>
							<p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
								Premium furniture, lighting, and decor handpicked for modern living. Every piece is designed for quality, style, and everyday functionality.
							</p>

							<div className="mt-10 flex flex-col gap-3 sm:flex-row">
								<Link to="/shop" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/30 transition duration-200 hover:-translate-y-0.5 hover:shadow-amber-500/50">
									Explore collection
									<ArrowRight className="h-4 w-4" />
								</Link>
								<Link to="/deals" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition duration-200 hover:border-amber-300/40 hover:bg-white/10">
									<Zap className="h-4 w-4" />
									View special offers
								</Link>
							</div>

							<div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
								{homeStats.map((stat) => (
									<div key={stat.label} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[2%] p-4 backdrop-blur-sm">
										<p className="text-2xl font-bold text-amber-300">{stat.value}</p>
										<p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">{stat.label}</p>
									</div>
								))}
							</div>
						</div>

						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
							<div className="group relative overflow-hidden rounded-[1.75rem] bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=1200&fit=crop')] bg-cover bg-center p-6 min-h-[260px] shadow-xl transition duration-300 hover:shadow-2xl">
								<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40 transition duration-300 group-hover:opacity-50" />
								<div className="relative z-10 inline-flex rounded-2xl bg-gradient-to-r from-amber-300 to-amber-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg">
									Designer pick
								</div>
							</div>
							<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
								<div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[2%] p-5 backdrop-blur-sm transition duration-200 hover:border-white/20 hover:bg-white/10">
									<div className="flex items-start gap-4">
										<div className="flex-shrink-0 rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 p-3 text-slate-950 shadow-lg shadow-amber-500/30">
											<Truck className="h-5 w-5" />
										</div>
										<div>
											<p className="font-semibold text-white">Fast delivery</p>
											<p className="mt-1 text-sm leading-5 text-slate-400">Most items arrive within 2 business days with tracking.</p>
										</div>
									</div>
								</div>
								<div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[2%] p-5 backdrop-blur-sm transition duration-200 hover:border-white/20 hover:bg-white/10">
									<div className="flex items-start gap-4">
										<div className="flex-shrink-0 rounded-2xl bg-gradient-to-br from-emerald-300 to-teal-500 p-3 text-slate-950 shadow-lg shadow-emerald-500/30">
											<CheckCircle2 className="h-5 w-5" />
										</div>
										<div>
											<p className="font-semibold text-white">Premium quality</p>
											<p className="mt-1 text-sm leading-5 text-slate-400">Handpicked products designed to last and look great.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="space-y-8">
					<SectionHeader
						eyebrow="Discover categories"
						title="Shop by room and style"
						description="Find everything you need for the spaces you use every day."
						variant="dark"
					/>

					<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
						{categories.map((category) => (
							<Link key={category.name} to="/categories" className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/40 to-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
								<div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${category.accent} transition duration-300 group-hover:w-20`} />
								<h3 className="mt-5 text-xl font-bold text-white group-hover:text-amber-300 transition">{category.name}</h3>
								<p className="mt-2 text-sm text-slate-400">{category.count}</p>
								<div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition group-hover:translate-x-1">
									Shop now
									<ArrowRight className="h-4 w-4" />
								</div>
							</Link>
						))}
					</div>
				</section>

				<ProductListing />

				<section className="space-y-8">
					<SectionHeader
						eyebrow="Why shop with us"
						title="Premium experience, every time"
						description="We handle the details so you can enjoy beautiful spaces."
						variant="dark"
					/>
					<div className="grid gap-6 lg:grid-cols-3">
						{highlights.map((item) => {
							const Icon = item.icon
							return (
								<div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/40 to-slate-950 p-8 transition duration-200 hover:-translate-y-1 hover:border-white/20">
									<div className="inline-flex rounded-2xl border border-amber-300/30 bg-amber-300/10 p-4 text-amber-300">
										<Icon className="h-6 w-6" />
									</div>
									<h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
									<p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
								</div>
							)
						})}
					</div>
				</section>
			</div>
		</div>
	)
}

export default Home