import React, { useState } from 'react';
import api from '../../services/api';

export default function Login(){
  const [email, setEmail] = useState('');
// email é a variável atualizada e o setEmail é para atualizar o estado da variável email
    async function handleSubmit(event){ 
        event.preventDefault();
        // event prevent, previne que o formulário faça seu funcionamento padrão que é enviar o usuário pra outra tela
    
        const response = await api.post('/sessions', { email })
    
    
        console.log(email)
        // pegar o id dentro do network
    
        const { _id } = response.data;
        // banco de dados do navegador 
        localStorage.setItem('user_id', _id);
      }
    return (
        // <> tag vazia para não atrapalhar css
        <>
        <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>
        <form onSubmit={handleSubmit}>
         
        <label htmlFor="email">E-mail *</label>
          <input
           id="email" 
           type="text"
            placeholder="Seu melhor e-mail"
           value={email}  
           onChange={event => setEmail(event.target.value)}
             ></input>
          <button className="btn" type="submit">Entrar</button>
        </form>
        </>
    );
}