import { ArrowRight, Sofa, Lightbulb, Sparkles, Utensils } from 'lucide-react'
import SectionHeader from '../component/sectionHeader'
import { categories } from '../data/storefront'

const categoryIcons = {
	'Furniture': Sofa,
	'Lighting': Lightbulb,
	'Decor': Sparkles,
	'Kitchen': Utensils,
}

function Categories() {
	return (
		<div className="px-4 py-10 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<SectionHeader 
					eyebrow="Categories" 
					title="Shop by room and mood" 
					description="A simple map into the product range, designed to help visitors move quickly to the items they want."
					variant="dark"
				/>

				<div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
					{categories.map((category) => {
						const Icon = categoryIcons[category.name] || Sparkles
						return (
							<div 
								key={category.name} 
								className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.1)] transition duration-300 hover:border-amber-300/40 hover:shadow-[0_20px_60px_rgba(255,193,7,0.15)] cursor-pointer"
							>
								{/* Background accent */}
								<div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-r ${category.accent} opacity-0 transition duration-300 group-hover:opacity-10`} />
								
								{/* Icon */}
								<div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} text-white shadow-lg transition duration-300 group-hover:scale-110`}>
									<Icon className="h-6 w-6" />
								</div>
								
								{/* Content */}
								<h3 className="mt-5 text-2xl font-bold text-white">{category.name}</h3>
								<p className="mt-2 text-sm text-slate-400">{category.count}</p>
								
								{/* Divider */}
								<div className={`mt-5 h-1 w-0 rounded-full bg-gradient-to-r ${category.accent} transition-all duration-300 group-hover:w-8`} />
								
								{/* Button */}
								<button 
									type="button" 
									className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition duration-200 hover:text-amber-200"
								>
									Explore now
									<ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
								</button>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Categories