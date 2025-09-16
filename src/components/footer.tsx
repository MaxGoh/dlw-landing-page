import Link from "next/link";
import Image from "next/image";

export function Footer() {
	return (
		<footer className="w-full border-t border-gray-200 bg-white">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					{/* Company Info */}
					<div className="col-span-1 md:col-span-2">
						<Image
							src="/dlw-logo-1.svg"
							alt="DLW Logo"
							width={60}
							height={100}
							className="mb-4"
						/>
						<p className="mt-3 text-sm text-gray-600">
							Supercharge your Reddit marketing with AI-powered insights and
							engagement tools. Find your audience, track trends, and grow your
							brand on Reddit.
						</p>
						<div className="mt-6 flex space-x-6">
							<a
								href="https://x.com/dolessworkAI"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-gray-500"
							>
								<span className="sr-only">X</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
							</a>
							<a
								href="https://www.linkedin.com/company/dolesswork"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-gray-500"
							>
								<span className="sr-only">LinkedIn</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
								</svg>
							</a>
						</div>
					</div>

					{/* Product Links */}
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
							Product
						</h3>
						<ul className="mt-4 space-y-3">
							<li>
								<Link
									href="#features"
									className="text-sm text-gray-600 hover:text-gray-900"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									href="/pricing"
									className="text-sm text-gray-600 hover:text-gray-900"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href="#api"
									className="text-sm text-gray-600 hover:text-gray-900"
								>
									API Documentation
								</Link>
							</li>
							<li>
								<Link
									href="#integrations"
									className="text-sm text-gray-600 hover:text-gray-900"
								>
									Integrations
								</Link>
							</li>
						</ul>
					</div>

					{/* Company Links */}
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
							Company
						</h3>
						<ul className="mt-4 space-y-3">
							<li>
								<Link
									href="/about"
									className="text-sm text-gray-600 hover:text-gray-900"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/blog"
									className="text-sm text-gray-600 hover:text-gray-900"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="/careers"
									className="text-sm text-gray-600 hover:text-gray-900"
								>
									Careers
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-sm text-gray-600 hover:text-gray-900"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-12 border-t border-gray-200 pt-8">
					<div className="flex flex-col items-center justify-between md:flex-row">
						<p className="text-sm text-gray-500">
							© {new Date().getFullYear()} Do Less Work PTE. LTD. All rights
							reserved.
						</p>
						<div className="mt-4 flex space-x-6 md:mt-0">
							<Link
								href="/privacy"
								className="text-sm text-gray-500 hover:text-gray-900"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="text-sm text-gray-500 hover:text-gray-900"
							>
								Terms of Service
							</Link>
							<Link
								href="/cookies"
								className="text-sm text-gray-500 hover:text-gray-900"
							>
								Cookie Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
