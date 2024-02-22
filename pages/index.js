import Image from 'next/image';
import styles from '../styles/home.module.scss';
import Header from '../components/header/';
import Footer from '../components/footer/';
import axios from 'axios';

export default function Home({ country }) {
    //console.log(country);

    return (
        <div>
            <Header country={country} />
            <Footer country={country} />
        </div>
    )
}

export async function getServerSideProps() {
    /* Comentado para não consumir dinheiro no https://dashboard.ipregistry.co/overview
    let data = await axios
        .get("https://api.ipregistry.co/?key=qupk12wx543w661g")
        .then((res) => {
            return res.data.location.country;
        })
        .catch((err) => {
            console.log(err);
        });
    */
    //console.log(data);
    return {
        props: {
            //country: { name: data.name, flag: data.flag.emojitwo }, // consome da api
            country: { name: "Marroco", flag: "https://www.seekpng.com/png/full/323-3232715_marroco-flag-png-angel-tube-station.png" },
        },
    };
}