import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import './style.css';
import api from '../../service/api';


export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    useEffect(() => {
        api.get('profile',{
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data)
        })

    }, [ongId]);

    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be The Hero"/>
                <span>Bem-vindo, {ongName}</span>
                <Link className="button" to="/incidents/new">
                    Cadastrar Novo Caso
                </Link>
                <button type="button">
                    <FiPower size={18} color="#e0204e" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {
                    incidents.map(incident =>(
                        <li key={incident.id}>
                            <strong>CASO</strong>
                            <p>{incident.title}</p>

                            <strong>Descrição:</strong>
                            <p>{incident.description}</p>
                            
                            <strong>Valor:</strong>
                            <p>{incident.value}</p>

                            <button type="button">
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                        </li>
                    ))
                }
 
            </ul>
        </div>
    );
}