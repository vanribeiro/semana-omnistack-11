import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../service/api';

import './style.css';
import logo from "../../assets/logo.svg";

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();
        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });
            history.push('/profile');
        } catch (error) {
            alert("Erro ao cadastrar caso... Tente novamente!")
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero"/>
                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente 
                    para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input  
                       value={title} 
                       placeholder="Título do Caso"
                       onChange = {e => setTitle(e.target.value)}
                    />
                    <textarea   
                       value={description}
                       placeholder="Descrição..." 
                       onChange = {e => setDescription(e.target.value)}
                    />
                    <input  
                       value={value.replace(",", ".")} 
                       placeholder="Valor em Reais(R$)"
                       onChange = {e => setValue(e.target.value)}
                    />
                    
                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}