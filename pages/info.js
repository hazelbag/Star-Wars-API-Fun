import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";

const InfoPage = ({ data }) => {
	return (
		<Layout>
			<div className='landingPG'>
				<h1 className='welcomeHeading'>{data.title}</h1>
				<br />
				<ul className='moreInfo'>
					<li>Episode: {data.episode_id}</li>
					<li>Release Date: {data.release_date}</li>
					<li>Director: {data.director}</li>
					<li>Producer: {data.producer}</li>
				</ul>
				<br />
				<p className=' container movieDescription'>{data.opening_crawl}</p>
			</div>
			<style jsx>{`
				.welcomeHeading {
					font-weight: bolder;
					font-size: 72px;
					text-shadow: 6px 1px #fff;
				}
				.movieTitle {
					font-weight: 600;
					font-size: 30px;
				}
				.movieDescription {
					text-align: center;
					font-size: 27px;
					width: 950px;
				}
				ul {
					list-style-type: none;
					font-size: 28px;
				}
			`}</style>
		</Layout>
	);
};

InfoPage.getInitialProps = async function (context) {
	const { id } = context.query;
	const newID = id.replace("http://", "");
	const res = await fetch(`${newID}`);
	const data = await res.json();
	return { data };
};

export default InfoPage;
