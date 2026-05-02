function SectionHeader({ eyebrow, title, description, align = 'center', variant = 'dark' }) {
	const isDark = variant === 'dark'
	
	return (
		<div className={align === 'left' ? 'max-w-3xl' : 'mx-auto max-w-3xl text-center'}>
			<p className={`text-xs font-bold uppercase tracking-[0.35em] ${isDark ? 'text-amber-300' : 'text-amber-600'}`}>
				{eyebrow}
			</p>
			<h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${isDark ? 'text-white' : 'text-slate-950'}`}>
				{title}
			</h2>
			<p className={`mt-4 text-base leading-7 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
				{description}
			</p>
		</div>
	)
}

export default SectionHeader