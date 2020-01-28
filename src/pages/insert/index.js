import React, { useState } from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';

import api from '../../services/api';

export default function Insert({ history }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');


    async function handleSubmit(event) {


      const response = await api.post('/products', { title, description, url });

      window.location.href ='/';
    }

    async function handleBack(){
        window.location.href ='/';
    }

    return (
        <div className="product-list">
            <article>
                <p>
                    Insira informações da Biblioteca de <strong>JavaScript</strong>
                </p>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="title" >Title *</label>
                    <input 
                        type="text" 
                        id="title" 
                        placeholder="Seu melhor e-mail" 
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <br/>

                    <label htmlFor="description" >Description *</label>
                    <input 
                        type="text" 
                        id="description" 
                        placeholder="Seu melhor e-mail" 
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                    <br/>

                    
                    <label htmlFor="url" >URL *</label>
                    <input 
                        type="text" 
                        id="url" 
                        placeholder="Seu melhor e-mail" 
                        value={url}
                        onChange={event => setUrl(event.target.value)}
                    />
                    <br/>
                    <div className="actions">
                        <Link to="/">Voltar</Link>
                        <button className="btn" type="submit">Entrar</button>
                    </div>
                </form>
            </article>
        </div>
        )
}