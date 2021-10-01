let d = new Date();
let year = d.getFullYear();

const Footer = () => (
	<div className='footer bg-dark'>
		<footer id='sticky-footer' className='py-4 bg-dark text-white-50'>
			<div className='container text-center'>
				<small>Copyright &copy; Jacques Olivier - {year}</small>
			</div>
			<style jsx>
				{`
					footer {
						background-color: #343a40;
						position: fixed;
						bottom: 0;
						width: 100%;
						height: 60px;
						font-family: "Neucha", -apple-system, system-ui, BlinkMacSystemFont,
							"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
					}
					div {
						color: rgba(255, 255, 255, 0.8);
						text-align: center;
					}
				`}
			</style>
		</footer>
	</div>
);

export default Footer;
