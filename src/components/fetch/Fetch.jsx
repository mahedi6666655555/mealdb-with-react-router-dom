import React, { useEffect, useState } from 'react';
import Single from '../Single.jsx/Single';

const Fetch = () => {
    let [api, setAPi] = useState([])
    useEffect(() => {

        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish&fbclid=IwAR1qe8Q8XDAeRX79KJOZrF_QakdNzidPt-HstbXgegNFkikUfWAN1MYTjkI
        `
        fetch(url)
            .then(res => res.json())
            .then((data) => setAPi(data.meals))

    }, [])
    return (
        <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto'>
            {
                api.map(res => <Single


                    Single={res}




                ></Single>)
            }
        </div>
    );
};

export default Fetch;