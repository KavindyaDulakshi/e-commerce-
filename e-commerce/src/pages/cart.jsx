import { ArrowRight, Heart, MapPin, Package, Shield, ShoppingBag, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const initialCart = [
	{
		id: 1,
		product_id: 1,
		name: 'Nordic Lounge Chair',
		price: 249.99,
		quantity: 1,
		image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
	},
	{
		id: 2,
		product_id: 2,
		name: 'Minimal Table Lamp',
		price: 89.0,
		quantity: 2,
		image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop',
	},
]

function Cart() {
	const [cartItems, setCartItems] = useState(initialCart)
	const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(null)

	const handleCheckout = async () => {
		setLoading(true)
		setError(null)
		setSuccess(null)

		try {
			const session = (await supabase.auth.getSession()).data.session
			const user = session?.user
			if (!user) throw new Error('You must be logged in to place an order')

			const items = cartItems.map((it) => ({ product_id: it.product_id, quantity: it.quantity, unit_price: it.price }))
			const total_price = parseFloat((cartTotal * 1.1).toFixed(2))

			const res = await fetch('/api/orders', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${session.access_token}`,
				},
				body: JSON.stringify({ user_id: user.id, items, total_price }),
			})

			const json = await res.json()
			if (!res.ok) throw new Error(json?.error?.message || 'Failed to place order')

			setSuccess('Order placed successfully')
			setCartItems([])
		} catch (err) {
			setError(err.message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="px-4 py-10 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				{cartItems.length === 0 ? (
					<div className="rounded-[2rem] border border-white/70 bg-gradient-to-br from-slate-900 to-slate-950 p-12 text-center text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
						<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-300/20">
							<ShoppingBag className="h-10 w-10 text-amber-300" />
						</div>
						<h1 className="mt-6 text-3xl font-bold">Your cart is ready for products</h1>
						<p className="mt-4 text-slate-300">
							Explore our carefully curated collection of home items and add your favorites to get started.
						</p>
						<Link
							to="/shop"
							className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-400 px-8 py-3.5 text-sm font-bold text-slate-950 transition duration-200 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
						>
							Continue shopping
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				) : (
					<div className="grid gap-8 lg:grid-cols-[1fr_380px]">
						<div className="space-y-6">
							<div>
								<h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
								<p className="mt-2 text-slate-300">{cartItems.length} items in your cart</p>
							</div>

							<div className="space-y-4">
								{cartItems.map((item) => (
									<div
										key={item.id}
										className="group flex gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950 p-4 transition duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-amber-500/10 sm:p-6"
									>
										<div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-slate-800 sm:h-32 sm:w-32 shadow-lg">
											<img
												src={item.image}
												alt={item.name}
												className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
										</div>

										<div className="flex flex-1 flex-col justify-between">
											<div>
												<h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition">{item.name}</h3>
												<p className="mt-2 text-sm text-slate-400">Premium home decor item</p>
											</div>

											<div className="flex items-center justify-between">
												<div>
													<p className="text-xs text-slate-400">Price each</p>
													<p className="text-xl font-bold text-amber-300">${item.price.toFixed(2)}</p>
												</div>

												<div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-1">
													<button className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/10 hover:text-amber-300">
														−
													</button>
													<span className="w-6 text-center text-sm font-semibold text-white">{item.quantity}</span>
													<button className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/10 hover:text-amber-300">
														+
													</button>
												</div>
											</div>
										</div>

										<div className="flex flex-col items-end justify-between">
											<button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-red-500 hover:text-red-500 hover:bg-red-500/10">
												<Heart className="h-5 w-5" />
											</button>
											<div className="text-right">
												<p className="text-xs text-slate-400">Subtotal</p>
												<p className="text-lg font-bold text-white">${(item.price * item.quantity).toFixed(2)}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="space-y-4">
							<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950 p-6 shadow-lg">
								<h2 className="text-xl font-bold text-white">Order Summary</h2>

								<div className="mt-6 space-y-3 border-b border-white/10 pb-6">
									<div className="flex justify-between text-sm text-slate-300">
										<span>Subtotal</span>
										<span className="font-semibold text-white">${cartTotal.toFixed(2)}</span>
									</div>
									<div className="flex justify-between text-sm text-slate-300">
										<span>Shipping</span>
										<span className="font-semibold text-amber-300">Free</span>
									</div>
									<div className="flex justify-between text-sm text-slate-300">
										<span>Tax (10%)</span>
										<span className="font-semibold text-white">${(cartTotal * 0.1).toFixed(2)}</span>
									</div>
								</div>

								<div className="mt-6 flex justify-between">
									<span className="text-lg font-bold text-white">Total</span>
									<span className="text-2xl font-bold text-amber-300">${(cartTotal * 1.1).toFixed(2)}</span>
								</div>

								{error && <div className="mt-4 text-sm text-red-400">{error}</div>}
								{success && <div className="mt-4 text-sm text-amber-300">{success}</div>}

								<button onClick={handleCheckout} disabled={loading} className="mt-6 w-full rounded-full bg-gradient-to-r from-amber-300 to-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition duration-200 hover:shadow-lg hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
									{loading ? 'Placing order…' : 'Proceed to checkout'}
									<ArrowRight className="h-4 w-4" />
								</button>

								<Link
									to="/shop"
									className="mt-3 w-full inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition duration-200 hover:border-amber-300 hover:bg-white/10 hover:text-amber-300"
								>
									Continue shopping
								</Link>
							</div>

							<div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
								<div className="flex items-start gap-3">
									<span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-amber-300">
										<Truck className="h-3 w-3" />
									</span>
									<div>
										<p className="text-xs font-semibold text-white">Free Shipping</p>
										<p className="text-xs text-slate-400">On orders over $99</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-amber-300">
										<Shield className="h-3 w-3" />
									</span>
									<div>
										<p className="text-xs font-semibold text-white">Secure Checkout</p>
										<p className="text-xs text-slate-400">SSL encrypted</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-amber-300">
										<Package className="h-3 w-3" />
									</span>
									<div>
										<p className="text-xs font-semibold text-white">Easy Returns</p>
										<p className="text-xs text-slate-400">30-day money-back</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart