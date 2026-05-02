import { ArrowLeft, Home, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

function NotFound() {
	return (
		<div className="px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-2xl text-center">
				<div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-red-400 to-orange-500 text-white shadow-lg shadow-red-500/30">
					<span className="text-4xl font-black">404</span>
				</div>

				<p className="text-xs font-bold uppercase tracking-[0.35em] text-amber-300">Page Not Found</p>
				<h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Oops! We can't find that page</h1>
				<p className="mt-5 text-base leading-7 text-slate-300">
					The page you're looking for doesn't exist or has been moved. Don't worry, you can find thousands of amazing home items on our shop.
				</p>

				<div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
					<Link
						to="/"
						className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-400 px-8 py-3.5 text-sm font-bold text-slate-950 transition duration-200 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
					>
						<ArrowLeft className="h-4 w-4" />
						Back to home
					</Link>

					<Link
						to="/shop"
						className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white transition duration-200 hover:border-amber-300 hover:bg-white/10"
					>
						<Home className="h-4 w-4" />
						Browse shop
					</Link>
				</div>

				<div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
					<p className="text-sm text-slate-300">Need help? Drop us a message</p>
					<Link
						to="/contact"
						className="mt-4 inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition"
					>
						<MessageCircle className="h-4 w-4" />
						<span className="font-semibold">Contact our team</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NotFound