import Layout from '../components/MyLayout';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

const Index = ({ data }) => {
    console.log(data)
    console.log(data.results[0].url)
    return (
        <Layout>
            <div className='landingPG'>
                <h1 className='welcomeHeading'>Star Wars Film Info</h1>
                <br />
                <h3 className='infoHeading'>Use the APP to learn or expand your knowldege of all thing Star Wars Related</h3>
                <br />
                <h4 className='infoSection'>You can view items relating to the movies listed below</h4>
                <br />
                <ul>
                    {data.results.map(result => (
                        <li key={result.episode_id}>
                            <Link as={`/info/${result.title}`} href={`info/?id=${result.url}`}>
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
                text-shadow: 6px 1px #FFF;
            }
            .infoHeading {
                font-weight: 600;
            }
            .infoSection { 
            }
            ul {
                list-style-type:none;
                font-size: 28px;
                display: inline;
            }
        `}</style>
        </Layout>
    );
};

Index.getInitialProps = async function () {
    const res = await fetch(`https://swapi.co/api/films/`);
    const data = await res.json();
    console.log(`Data has been fetched. Count is:\n `, data.count)
    return {
        data,
    }
}

export default Index;