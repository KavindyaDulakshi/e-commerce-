import { ArrowRight, Clock, Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import SectionHeader from '../component/sectionHeader'

function Contact() {
	return (
		<div className="px-4 py-10 sm:px-6 lg:px-8">
			<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr]">
				<div>
					<SectionHeader
						align="left"
						eyebrow="Contact us"
						title="We're here to help"
						description="Have questions about delivery, styling, products, or anything else? Reach out and we'll respond within 24 hours."
						variant="dark"
					/>

					<div className="mt-10 space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
						<div className="flex items-start gap-4">
							<div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30">
								<MapPin className="h-5 w-5" />
							</div>
							<div>
								<p className="font-semibold text-white">Physical Showroom</p>
								<p className="mt-1 text-sm text-slate-400">Visit our flagship store to experience our furniture in person.</p>
								<p className="mt-2 text-sm font-medium text-amber-300">New York, USA 10001</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30">
								<Phone className="h-5 w-5" />
							</div>
							<div>
								<p className="font-semibold text-white">Phone Support</p>
								<p className="mt-1 text-sm text-slate-400">Call us for immediate assistance with orders and questions.</p>
								<p className="mt-2 text-sm font-medium text-amber-300">+1 (555) 019-2026</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30">
								<Mail className="h-5 w-5" />
							</div>
							<div>
								<p className="font-semibold text-white">Email Support</p>
								<p className="mt-1 text-sm text-slate-400">Send us a detailed message and we'll respond promptly.</p>
								<p className="mt-2 text-sm font-medium text-amber-300">hello@homehaven.shop</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30">
								<Clock className="h-5 w-5" />
							</div>
							<div>
								<p className="font-semibold text-white">Business Hours</p>
								<p className="mt-1 text-sm text-slate-400">We're available during these times to assist you.</p>
								<div className="mt-2 space-y-1 text-sm font-medium text-amber-300">
									<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
									<p>Saturday: 10:00 AM - 4:00 PM</p>
									<p>Sunday: Closed</p>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
						<div className="flex items-start gap-4">
							<MessageSquare className="mt-1 h-5 w-5 flex-shrink-0 text-amber-300" />
							<div>
								<p className="font-semibold text-white">Chat with us</p>
								<p className="mt-1 text-sm text-slate-400">
									Our support team is ready to help with styling advice, product questions, or anything else.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/50 via-slate-950 to-slate-950 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.3)]">
						<h3 className="text-2xl font-bold text-white">Send us a message</h3>
						<p className="mt-2 text-sm text-slate-400">Fill out the form below and we'll get back to you as soon as possible.</p>

						<form className="mt-8 space-y-5">
							<div className="grid gap-5 sm:grid-cols-2">
								<div>
									<label className="block text-sm font-medium text-slate-300">First name</label>
									<input
										type="text"
										placeholder="John"
										className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 transition duration-200 focus:border-amber-300 focus:ring-1 focus:ring-amber-300/30"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-slate-300">Last name</label>
									<input
										type="text"
										placeholder="Doe"
										className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 transition duration-200 focus:border-amber-300 focus:ring-1 focus:ring-amber-300/30"
									/>
								</div>
							</div>

							<div>
								<label className="block text-sm font-medium text-slate-300">Email address</label>
								<input
									type="email"
									placeholder="john@example.com"
									className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 transition duration-200 focus:border-amber-300 focus:ring-1 focus:ring-amber-300/30"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-slate-300">Subject</label>
								<select className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition duration-200 focus:border-amber-300 focus:ring-1 focus:ring-amber-300/30">
									<option value="">Select a subject...</option>
									<option value="order">Order inquiry</option>
									<option value="shipping">Shipping question</option>
									<option value="return">Returns & exchanges</option>
									<option value="product">Product information</option>
									<option value="feedback">Feedback</option>
									<option value="other">Other</option>
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium text-slate-300">Message</label>
								<textarea
									rows="6"
									placeholder="Tell us how we can help you..."
									className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 transition duration-200 focus:border-amber-300 focus:ring-1 focus:ring-amber-300/30"
								/>
							</div>

							<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
								<input
									type="checkbox"
									id="terms"
									className="h-4 w-4 rounded border-white/20 bg-white/5 text-amber-300"
								/>
								<label htmlFor="terms" className="text-sm text-slate-400">
									I agree to be contacted about my inquiry
								</label>
							</div>

							<button
								type="submit"
								className="w-full rounded-full bg-gradient-to-r from-amber-300 to-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition duration-200 hover:shadow-lg hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
							>
								Send message
								<ArrowRight className="h-4 w-4" />
							</button>

							<p className="text-xs text-center text-slate-500">
								We'll respond to your message within 24 business hours.
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact