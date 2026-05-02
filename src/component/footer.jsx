import { ArrowRight, Globe, Mail, MapPin, MessageCircle, Phone, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
	shop: [
		{ label: 'Home', to: '/' },
		{ label: 'Shop', to: '/shop' },
		{ label: 'Categories', to: '/categories' },
		{ label: 'Deals', to: '/deals' },
	],
	helps: [
		{ label: 'Contact Us', to: '/contact' },
		{ label: 'Shipping Info', to: '/contact' },
		{ label: 'Returns', to: '/contact' },
		{ label: 'Cart', to: '/cart' },
	],
}

function Footer() {
	return (
		<footer className="mt-16 border-t border-white/10 bg-slate-950 text-white">
			<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
				<div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
					<div>
						<Link to="/" className="inline-flex items-center gap-3">
							<span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-300 text-slate-950">
								<ArrowRight className="h-5 w-5 -rotate-45" />
							</span>
							<span>
								<span className="block text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Home Haven</span>
								<span className="block text-lg font-bold">Designed for better living</span>
							</span>
						</Link>
						<p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
							Shop modern home items with a polished collection of furniture, lighting, decor, and everyday essentials.
						</p>

						<div className="mt-6 space-y-3 text-sm text-slate-300">
							<div className="flex items-center gap-3">
								<MapPin className="h-4 w-4 text-amber-300" />
								<span>New York, USA</span>
							</div>
							<div className="flex items-center gap-3">
								<Phone className="h-4 w-4 text-amber-300" />
								<span>+1 (555) 019-2026</span>
							</div>
							<div className="flex items-center gap-3">
								<Mail className="h-4 w-4 text-amber-300" />
								<span>hello@homehaven.shop</span>
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Shop</h3>
						<ul className="mt-5 space-y-3 text-sm text-slate-400">
							{footerLinks.shop.map((link) => (
								<li key={link.label}>
									<Link className="transition hover:text-amber-300" to={link.to}>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Support</h3>
						<ul className="mt-5 space-y-3 text-sm text-slate-400">
							{footerLinks.helps.map((link) => (
								<li key={link.label}>
									<Link className="transition hover:text-amber-300" to={link.to}>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Newsletter</h3>
						<p className="mt-5 text-sm leading-6 text-slate-400">
							Get styling ideas, drop alerts, and exclusive home-decor offers in your inbox.
						</p>
						<form className="mt-5 space-y-3">
							<input
								type="email"
								placeholder="Email address"
								className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-amber-300"
							/>
							<button
								type="submit"
								className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-300 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-200"
							>
								Subscribe
								<ArrowRight className="h-4 w-4" />
							</button>
						</form>
						<div className="mt-6 flex items-center gap-3 text-slate-400">
							<a href="#" aria-label="Website" className="rounded-full border border-white/10 p-2 transition hover:border-amber-300 hover:text-amber-300">
								<Globe className="h-4 w-4" />
							</a>
							<a href="#" aria-label="Messages" className="rounded-full border border-white/10 p-2 transition hover:border-amber-300 hover:text-amber-300">
								<MessageCircle className="h-4 w-4" />
							</a>
							<a href="#" aria-label="Share" className="rounded-full border border-white/10 p-2 transition hover:border-amber-300 hover:text-amber-300">
								<Share2 className="h-4 w-4" />
							</a>
						</div>
					</div>
				</div>

				<div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
					<p>© 2026 Home Haven. Crafted for modern home shopping.</p>
					<div className="flex flex-wrap gap-4">
						<Link to="/contact" className="transition hover:text-amber-300">Privacy Policy</Link>
						<Link to="/contact" className="transition hover:text-amber-300">Terms of Service</Link>
						<Link to="/contact" className="transition hover:text-amber-300">Cookie Policy</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
