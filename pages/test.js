import axios from 'axios';

export default function test() {
  return (
    <div>test</div>
  )
}

/*
export async function getServerSideProps() {
    try {
        const response = await axios.get("https://api.ipregistry.co/?key=qupk12wx543w661g");
        const country = response.data.location.country;
        console.log(response)
        return {
            props: {
                country
            }
        };
    } catch (error) {
        console.log(error);
        return {
            props: {
                country: null
            }
        };
    }
}
*/