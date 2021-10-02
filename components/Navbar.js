import Link from "next/link";

const Navbar = () => (
	<nav className='navbar navbar-expand navbar-dark bg-dark mb-4'>
		<div className='container'>
			<div className='collapse navbar-collapse'>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item'>
						<Link href='/'>
							<a className='nav-link'>Home</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
		<style jsx>
			{`
				nav {
					position: fixed;
					width: 100%;
					z-index: 9999;
					font-family: "Neucha", -apple-system, system-ui, BlinkMacSystemFont,
						"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
				}
			`}
		</style>
	</nav>
);

export default Navbar;
