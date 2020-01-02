import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';



const InfoPage = ({ data }) => {
    console.log('info data: ',data)
    return (
        <Layout>
            <div className='landingPG'>
                <h1 className='welcomeHeading'>Movie Info</h1>
                <br />
                <h4 className="movieTitle">{data.title}</h4>
                <br />
                <p className=" container movieDescription">{data.opening_crawl}</p>
                <br />
                <ul className="moreInfo">
                    <li>Episode: {data.episode_id}</li>
                    <li>Release Date: {data.release_date}</li>
                    <li>Director: {data.director}</li>
                </ul>
                
            </div>
            <style jsx>{`
            .welcomeHeading {
                font-weight: bolder;
                font-size: 72px;
                text-shadow: 6px 1px #FFF;
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
                list-style-type:none;
                font-size: 28px;
            }
        `}</style>
        </Layout>
    );
};

InfoPage.getInitialProps = async function (context) {
    console.log(context)
    const { id } = context.query
    const res = await fetch(`https://swapi.co/api/films/${id}`)
    const data = await res.json()
    console.log('Info Page Data: ', data)
  
    return { data }
}

export default InfoPage