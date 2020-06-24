import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

export default function Dashboard(){
    // sposts nome do state, setSposts para atualizar o state
const [spots, setSpots] = useState([]);

let spot = spots.slice(4,8)
    // useEffect pra carregar funçao ao criar componente
    useEffect(() => {
            async function loadSpots(){
                const user_id = localStorage.getItem('user_id');
                console.log(user_id)
                const response = await api.get('/dashboard', {
                    headers: { user_id }
                });

                console.log(response.data)
                console.log('oi')

                setSpots(response.data);
            }

            loadSpots()
        // toda vez que tiver valor no Array, ele executa novamente a função
        // array vazio executa apenas uma vez
     }, []);

     return (
         <>
         <ul className="spot-list">
            {spot.map(spot => (
                <li key={spot._id}>
                    <header style={{ backgroundImage: `url(${spot.thumbnail_url})`}} />
                    <strong>{spot.company}</strong>
                    <span >{spot.price ?  `R${spot.price}/dia`: 'GRATUÍTO'}</span>
                </li>
            ))}
         </ul>

         <Link to="/new">
             <button className="btn">Cadastrar novo Spot</button>
         </Link>
         </>
     )
}