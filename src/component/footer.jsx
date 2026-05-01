function Footer() {
	return (
		<footer className="mt-16 w-full border-t border-slate-700 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-[0_-8px_24px_rgba(2,6,23,0.45)]">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					{/* Brand Section */}
					<div>
						<a href="#" className="inline-flex items-baseline gap-1.5 mb-4">
							<span className="text-lg font-extrabold uppercase tracking-wide text-amber-400">Shop</span>
							<span className="text-xl font-bold text-slate-100">Nest</span>
						</a>
						<p className="text-sm text-slate-400">
							Your one-stop shop for quality products at unbeatable prices.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="mb-4 font-semibold text-slate-100">Quick Links</h3>
						<ul className="space-y-2 text-sm text-slate-400">
							<li>
								<a href="#" className="transition hover:text-amber-400 focus-visible:text-amber-400">
									Home
								</a>
							</li>
							<li>
								<a href="#" className="transition hover:text-amber-400 focus-visible:text-amber-400">
									Shop
								</a>
							</li>
							<li>
								<a href="#" className="transition hover:text-amber-400 focus-visible:text-amber-400">
									Categories
								</a>
							</li>
							<li>
								<a href="#" className="transition hover:text-amber-400 focus-visible:text-amber-400">
									Deals
								</a>
							</li>
						</ul>
					</div>

					{/* Customer Service */}
					<div>
						<h3 className="mb-4 font-semibold text-slate-100">Customer Service</h3>
						<ul className="space-y-2 text-sm text-slate-400">
							<li>
								<a href="#" className="transition hover:text-amber-400 focus-visible:text-amber-400">
									Contact Us
								</a>
							</li>
							<li>
								<a href="#" className="transition hover:text-amber-400 focus-visible:text-amber-400">
									FAQs
								</a>
							</li>
							<li>
								<a href="#" className="transition hover:text-amber-400 focus-visible:text-amber-400">
									Shipping Info
								</a>
							</li>
							<li>
								<a href="#" className="transition hover:text-amber-400 focus-visible:text-amber-400">
									Returns
								</a>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="mb-4 font-semibold text-slate-100">Newsletter</h3>
						<p className="mb-3 text-sm text-slate-400">
							Subscribe to get special offers and updates!
						</p>
						<form className="flex flex-col gap-2">
							<input
								type="email"
								placeholder="Your email"
								className="rounded-lg border border-slate-600 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 transition focus:border-amber-400 focus:outline-none"
							/>
							<button
								type="submit"
								className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>

				{/* Divider */}
				<div className="my-8 border-t border-slate-700"></div>

				{/* Bottom Section */}
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<p className="text-sm text-slate-400">
						&copy; 2026 ShopNest. All rights reserved.
					</p>
					<div className="flex gap-4 text-sm text-slate-400">
						<a href="#" className="transition hover:text-amber-400 focus-visible:text-amber-400">
							Privacy Policy
						</a>
						<span>|</span>
						<a href="#" className="transition hover:text-amber-400 focus-visible:text-amber-400">
							Terms of Service
						</a>
						<span>|</span>
						<a href="#" className="transition hover:text-amber-400 focus-visible:text-amber-400">
							Cookie Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
