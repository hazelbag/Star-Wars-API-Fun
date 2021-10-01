import Layout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = ({ data }) => {
	return (
		<Layout>
			<div className='landingPG'>
				<h1 className='welcomeHeading'>Star Wars Movie Info</h1>
				<br />
				<h3 className='infoHeading'>
					Use the APP to learn or expand your knowldege of all thing Star Wars
					Movie Related
				</h3>
				<br />
				<h4 className='infoSection'>
					You can view items relating to the movies listed below
				</h4>
				<br />
				<ul>
					{data.results.map((result) => (
						<li key={result.episode_id}>
							<Link
								as={`/info/${result.title.replace(/\s+/g, "-").toLowerCase()}`}
								href={`/info/?id=http://${result.url}`}
							>
								<a>{result.title}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
			<style jsx>{`
				.welcomeHeading {
					font-weight: bolder;
					font-size: 72px;
					text-shadow: 6px 1px #fff;
				}
				.infoHeading {
					font-weight: 600;
				}
				.infoSection {
				}
				ul {
					list-style-type: none;
					font-size: 28px;
					display: inline;
				}
			`}</style>
		</Layout>
	);
};

Index.getInitialProps = async function () {
	const res = await fetch(`https://swapi.dev/api/films/`);
	const data = await res.json();
	return {
		data,
	};
};

export default Index;
