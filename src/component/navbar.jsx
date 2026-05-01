function Navbar() {
	return (
		<header className="w-full border-b border-slate-700 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-[0_8px_24px_rgba(2,6,23,0.45)]">
			<nav
				className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:flex-nowrap lg:px-8"
				aria-label="Main navigation"
			>
				<a href="#" className="inline-flex items-baseline gap-1.5" aria-label="Shop home">
					<span className="text-lg font-extrabold uppercase tracking-wide text-amber-400">Shop</span>
					<span className="text-xl font-bold text-slate-100">Nest</span>
				</a>

				<ul className="order-3 flex w-full flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-300 lg:order-2 lg:w-auto lg:gap-5">
					<li>
						<a href="#" className="transition hover:text-white focus-visible:text-white">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="transition hover:text-white focus-visible:text-white">
							Shop
						</a>
					</li>
					<li>
						<a href="#" className="transition hover:text-white focus-visible:text-white">
							Categories
						</a>
					</li>
					<li>
						<a href="#" className="transition hover:text-white focus-visible:text-white">
							Deals
						</a>
					</li>
					<li>
						<a href="#" className="transition hover:text-white focus-visible:text-white">
							Contact
						</a>
					</li>
				</ul>

				<div className="order-2 flex items-center gap-2 lg:order-3">
					<button
						type="button"
						className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-600 bg-slate-900/60 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-amber-400"
						aria-label="Search"
					>
						Search
					</button>
					<button
						type="button"
						className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-600 bg-slate-900/60 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-amber-400"
						aria-label="View cart"
					>
						Cart
						<span
							className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-400 px-1 text-xs font-extrabold text-slate-900"
							aria-label="3 items in cart"
						>
							3
						</span>
					</button>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
