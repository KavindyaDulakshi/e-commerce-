import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X, Heart, User, LogOut, LogIn } from 'lucide-react'

const navLinks = [
	{ label: 'Home', to: '/' },
	{ label: 'Shop', to: '/shop' },
	{ label: 'Categories', to: '/categories' },
	{ label: 'Deals', to: '/deals' },
	{ label: 'Contact', to: '/contact' },
]

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isSearchOpen, setIsSearchOpen] = useState(false)
	const [isProfileOpen, setIsProfileOpen] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [cartCount, setCartCount] = useState(3)
	const [wishlistCount, setWishlistCount] = useState(2)

	const handleLogout = () => {
		setIsLoggedIn(false)
		setIsProfileOpen(false)
	}

	return (
		<header className="sticky top-0 z-50 border-b border-white/20 bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-slate-950/20">
			<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
				<nav className="flex flex-wrap items-center justify-between gap-4" aria-label="Main navigation">
					{/* Logo */}
					<Link to="/" className="group inline-flex items-center gap-3 flex-shrink-0">
						<span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30 transition group-hover:shadow-amber-500/50 group-hover:scale-105">
							<ShoppingBag className="h-5 w-5" />
						</span>
						<span className="leading-tight hidden sm:block">
							<span className="block text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Home Haven</span>
							<span className="block text-sm font-bold text-white">Living Essentials</span>
						</span>
					</Link>

					{/* Desktop Navigation Links */}
					<div className="hidden items-center gap-2 lg:flex">
						{navLinks.map((link) => (
							<NavLink
								key={link.to}
								to={link.to}
								className={({ isActive }) =>
									`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
										isActive
											? 'bg-white text-slate-950 shadow-lg shadow-amber-500/20'
											: 'text-slate-300 hover:bg-white/10 hover:text-white'
									}`
								}
							>
								{link.label}
							</NavLink>
						))}
					</div>

					{/* Desktop Action Buttons */}
					<div className="hidden items-center gap-3 lg:flex">
						{/* Search Button */}
						<div className="relative">
							<button
								type="button"
								className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:text-white"
								aria-label="Search products"
								onClick={() => setIsSearchOpen(!isSearchOpen)}
							>
								<Search className="h-5 w-5" />
							</button>
							
							{/* Search Dropdown */}
							{isSearchOpen && (
								<div className="absolute right-0 mt-2 w-72 rounded-2xl border border-white/10 bg-slate-900 p-4 shadow-xl">
									<input
										type="text"
										placeholder="Search products, furniture, decor..."
										className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none placeholder:text-slate-400 focus:border-amber-300 transition"
										autoFocus
									/>
									<div className="mt-3 space-y-2 text-xs text-slate-400">
										<p className="font-semibold text-slate-300">Recent searches:</p>
										<div className="flex flex-wrap gap-2">
											<button className="rounded-full bg-white/5 px-3 py-1 hover:bg-white/10">Sofa</button>
											<button className="rounded-full bg-white/5 px-3 py-1 hover:bg-white/10">Lighting</button>
											<button className="rounded-full bg-white/5 px-3 py-1 hover:bg-white/10">Decor</button>
										</div>
									</div>
								</div>
							)}
						</div>

						{/* Wishlist Button */}
						<button
							type="button"
							className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:text-white"
							aria-label="Wishlist"
						>
							<Heart className="h-5 w-5" />
							{wishlistCount > 0 && (
								<span className="absolute top-2 right-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
									{wishlistCount}
								</span>
							)}
						</button>

						{/* Cart Button */}
						<Link
							to="/cart"
							className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/30"
						>
							<ShoppingBag className="h-4 w-4" />
							<span className="hidden sm:inline">Cart</span>
							{cartCount > 0 && (
								<span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-950 px-1.5 text-xs font-bold text-amber-300">
									{cartCount}
								</span>
							)}
						</Link>

						{/* Profile/User Button */}
						<div className="relative">
							<button
								type="button"
								className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:text-white"
								aria-label="User account"
								onClick={() => setIsProfileOpen(!isProfileOpen)}
							>
								<User className="h-5 w-5" />
							</button>

							{/* Profile Dropdown */}
							{isProfileOpen && (
								<div className="absolute right-0 mt-2 w-48 rounded-2xl border border-white/10 bg-slate-900 p-2 shadow-xl">
									{isLoggedIn ? (
										<>
											<Link
												to="/"
												className="block rounded-xl px-4 py-2 text-sm text-slate-200 hover:bg-white/10 transition"
											>
												My Account
											</Link>
											<Link
												to="/"
												className="block rounded-xl px-4 py-2 text-sm text-slate-200 hover:bg-white/10 transition"
											>
												Orders
											</Link>
											<Link
												to="/"
												className="block rounded-xl px-4 py-2 text-sm text-slate-200 hover:bg-white/10 transition"
											>
												Settings
											</Link>
											<hr className="my-2 border-white/10" />
											<button
												onClick={handleLogout}
												className="flex w-full items-center gap-2 rounded-xl px-4 py-2 text-sm text-red-400 hover:bg-white/10 transition"
											>
												<LogOut className="h-4 w-4" />
												Logout
											</button>
										</>
									) : (
										<>
											<button
												onClick={() => setIsLoggedIn(true)}
												className="flex w-full items-center gap-2 rounded-xl px-4 py-2 text-sm text-amber-300 hover:bg-white/10 transition font-semibold"
											>
												<LogIn className="h-4 w-4" />
												Login
											</button>
											<Link
												to="/"
												className="block rounded-xl px-4 py-2 text-sm text-slate-200 hover:bg-white/10 transition"
											>
												Sign Up
											</Link>
										</>
									)}
								</div>
							)}
						</div>
					</div>

					{/* Mobile: Search & Cart Icons */}
					<div className="flex items-center gap-2 lg:hidden">
						<button
							type="button"
							className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:text-white"
							aria-label="Search"
							onClick={() => setIsSearchOpen(!isSearchOpen)}
						>
							<Search className="h-5 w-5" />
						</button>
						<Link
							to="/cart"
							className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:text-white"
							onClick={() => setIsSearchOpen(false)}
						>
							<ShoppingBag className="h-5 w-5" />
							{cartCount > 0 && (
								<span className="absolute top-1 right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-slate-950">
									{cartCount}
								</span>
							)}
						</Link>
					</div>

					{/* Mobile Menu Toggle */}
					<button
						type="button"
						className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition lg:hidden"
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={isMenuOpen}
						onClick={() => setIsMenuOpen((value) => !value)}
					>
						{isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</nav>

				{/* Mobile Search Bar */}
				{isSearchOpen && (
					<div className="mt-4 lg:hidden">
						<input
							type="text"
							placeholder="Search products..."
							className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-amber-300 transition"
							autoFocus
						/>
					</div>
				)}

				{/* Mobile Navigation Menu */}
				{isMenuOpen && (
					<div className="mt-4 space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 lg:hidden">
						<div className="flex flex-col gap-2">
							{navLinks.map((link) => (
								<NavLink
									key={link.to}
									to={link.to}
									onClick={() => setIsMenuOpen(false)}
									className={({ isActive }) =>
										`rounded-xl px-4 py-3 text-sm font-semibold transition ${
											isActive
												? 'bg-white/15 text-white'
												: 'text-slate-200 hover:bg-white/10'
										}`
									}
								>
									{link.label}
								</NavLink>
							))}
						</div>

						<hr className="my-3 border-white/10" />

						<div className="space-y-2">
							<button
								type="button"
								className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10 transition"
							>
								<Heart className="h-4 w-4" />
								Wishlist
								{wishlistCount > 0 && <span className="ml-auto rounded-full bg-red-500 px-2 text-xs text-white">{wishlistCount}</span>}
							</button>
							<button
								type="button"
								className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10 transition"
								onClick={() => setIsProfileOpen(!isProfileOpen)}
							>
								<User className="h-4 w-4" />
								{isLoggedIn ? 'Account' : 'Login'}
							</button>
						</div>
					</div>
				)}
			</div>
		</header>
	)
}

export default Navbar
