import ProductListing from '../component/productListing'
import SectionHeader from '../component/sectionHeader'

function Shop() {
	return (
		<div className="px-4 py-10 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<SectionHeader 
					eyebrow="Shop" 
					title="Browse the full home collection" 
					description="Furniture, lighting, and decor arranged in a calm, premium shopping layout."
					variant="dark"
				/>
				<ProductListing />
			</div>
		</div>
	)
}

export default Shop