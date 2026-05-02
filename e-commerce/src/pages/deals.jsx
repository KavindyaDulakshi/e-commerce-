import { ArrowRight, Heart, Flame, Gift, Lightbulb, RotateCcw, Star, Tag, TimerReset, Truck, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../component/sectionHeader'

const dealCards = [
{ title: 'Bundle savings', value: 'Up to 25% off', description: 'Pair furniture and decor pieces for coordinated rooms.', icon: Tag },
{ title: 'Weekly drops', value: 'New markdowns', description: 'Fresh items added every week for living room and bedroom refreshes.', icon: TimerReset },
{ title: 'Free shipping', value: 'Orders over $99', description: 'Keep the value high with free delivery on most large-item baskets.', icon: Truck },
]

const featuredDeals = [
{
badge: 'Hot Deal',
title: 'Nordic Chair Collection',
discount: '30% OFF',
description: 'Scandinavian-inspired seating with premium comfort',
image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
icon: Flame,
},
{
badge: 'New Arrival',
title: 'Minimalist Lighting',
discount: '20% OFF',
description: 'Modern light fixtures that brighten any space',
image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=400&fit=crop',
icon: Lightbulb,
},
{
badge: 'Flash Sale',
title: 'Decor Essentials',
discount: '40% OFF',
description: 'Transform your walls and shelves instantly',
image: 'https://images.unsplash.com/photo-1612196808214-b40f04f2f617?w=600&h=400&fit=crop',
icon: Zap,
},
]

function Deals() {
return (
<div className="px-4 py-10 sm:px-6 lg:px-8">
<div className="mx-auto max-w-7xl space-y-12">
<SectionHeader
eyebrow="Deals"
title="Promotions that feel premium"
description="Discover curated offers on our finest home essentials, designed to bring value without compromising quality."
variant="dark"
/>

{/* Main Deal Cards */}
<div className="grid gap-6 lg:grid-cols-3">
{dealCards.map((deal) => {
const Icon = deal.icon
return (
<div
key={deal.title}
className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/5 via-slate-900/40 to-slate-950 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.15)] transition duration-300 hover:border-amber-300/40 hover:shadow-[0_20px_60px_rgba(255,193,7,0.2)]"
>
<div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-r from-amber-300 to-orange-500 opacity-0 transition duration-300 group-hover:opacity-5 blur-2xl" />

<div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30 transition duration-300 group-hover:scale-110">
<Icon className="h-6 w-6" />
</div>
<h3 className="mt-6 text-2xl font-bold text-white">{deal.title}</h3>
<p className="mt-3 text-3xl font-bold text-amber-300">{deal.value}</p>
<p className="mt-4 text-sm leading-6 text-slate-300">{deal.description}</p>

<button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-amber-200">
Learn more
<ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
</button>
</div>
)
})}
</div>

{/* Featured Deals Section */}
<div className="space-y-6">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<h2 className="text-3xl font-bold text-white">Featured Deals</h2>
<p className="mt-2 text-sm text-slate-400">Limited-time offers on our most-loved items</p>
</div>
<Link
to="/shop"
className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-amber-300 transition duration-200 hover:border-amber-300 hover:bg-white/10"
>
View all deals
<ArrowRight className="h-4 w-4" />
</Link>
</div>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
{featuredDeals.map((deal) => {
const IconComponent = deal.icon
return (
<div
key={deal.title}
className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950 shadow-[0_20px_50px_rgba(15,23,42,0.1)] transition duration-300 hover:border-white/20 hover:shadow-[0_25px_65px_rgba(15,23,42,0.2)]"
>
<div className="relative aspect-video overflow-hidden bg-slate-800">
<img
src={deal.image}
alt={deal.title}
className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

<div className="absolute inset-4 flex items-start justify-between">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1.5 backdrop-blur-sm border border-white/10">
<IconComponent className="h-4 w-4 text-amber-300" />
<span className="text-xs font-bold text-amber-300">{deal.badge}</span>
</div>
<div className="rounded-full bg-gradient-to-br from-red-500 to-orange-500 px-4 py-2 shadow-lg shadow-red-500/30">
<span className="text-sm font-black text-white">{deal.discount}</span>
</div>
</div>
</div>

<div className="p-6">
<h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition">{deal.title}</h3>
<p className="mt-2 text-sm text-slate-400">{deal.description}</p>

<div className="mt-6 flex gap-3">
<button className="flex-1 rounded-full bg-gradient-to-r from-amber-300 to-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition duration-200 hover:shadow-lg hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0">
Shop now
</button>
<button className="rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-white transition duration-200 hover:border-amber-300 hover:bg-white/10 hover:text-amber-300">
<Heart className="h-4 w-4" />
</button>
</div>
</div>
</div>
)
})}
</div>
</div>

{/* Special Offers Banner */}
<div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 p-8 shadow-[0_20px_60px_rgba(255,193,7,0.08)]">
<div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2">
<Gift className="h-4 w-4 text-amber-300" />
<span className="text-sm font-semibold text-amber-300">Limited time offer</span>
</div>
<h3 className="mt-6 text-3xl font-bold text-white">
Subscribe & Save
<span className="block text-2xl text-amber-300 mt-2">Extra 15% OFF</span>
</h3>
<p className="mt-4 text-slate-300 leading-relaxed">
Get weekly updates on our newest arrivals, exclusive deals, and styling inspiration. Plus, save 15% on your first order when you sign up today.
</p>

<button className="mt-8 rounded-full bg-gradient-to-r from-amber-300 to-amber-400 px-8 py-3.5 text-sm font-bold text-slate-950 transition duration-200 hover:shadow-lg hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0">
Subscribe now
</button>
</div>

<div className="space-y-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/10">
<div className="flex items-start gap-4">
<div className="rounded-full bg-gradient-to-br from-amber-300 to-orange-500 p-3 text-slate-950 flex-shrink-0">
<RotateCcw className="h-5 w-5" />
</div>
<div>
<p className="font-semibold text-white">Easy exchanges</p>
<p className="mt-1 text-sm text-slate-400">Change your mind? Full exchanges within 30 days.</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/10">
<div className="flex items-start gap-4">
<div className="rounded-full bg-gradient-to-br from-amber-300 to-orange-500 p-3 text-slate-950 flex-shrink-0">
<Star className="h-5 w-5" />
</div>
<div>
<p className="font-semibold text-white">Premium support</p>
<p className="mt-1 text-sm text-slate-400">24/7 customer support via chat, phone, and email.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
)
}

export default Deals
