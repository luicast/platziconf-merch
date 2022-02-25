import { useState, useEffect } from 'react'
import axios from 'axios'
import 'regenerator-runtime/runtime'


const useGoogleAddress = address => {
    const [map, setMap] = useState({lat: 0, lng: 0});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDxcNhULsIiom9Cy7ejI8MDlJh7MHpX2go`;

    // useEffect(() => {
    //     const address = async() => {
    //         const response = await fetch(API);
    //         setMap(response.data.results[0].geometry.location);
    //     }
    //     address()
    //     .catch(console.error);
    // }, []);
    useEffect(() => {
        async function handler() {
            const response = await axios(API);
            setMap(response.data.results[0].geometry.location);
        }
        handler();
    }, []);
    return map;
};

export default useGoogleAddress