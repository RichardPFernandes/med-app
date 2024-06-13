import React, { useState } from 'react';
import '../styles/Form.css';

export default function Form() {
    const [nome, setNome] = useState('');
    const [dosagem, setDosagem] = useState('');
    const [imagem, setImagem] = useState('');


    return (
        <div className="cadastrarMedicamento">
            <h1>Cadastro de Medicamentos</h1>
            <form>
                <label>Nome:</label>
                <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)} />
                <label>Dosagem:</label>
                <input type="text" required value={dosagem} onChange={(e) => setDosagem(e.target.value)} />
                <label>Imagem:</label>
                <input type="file" required value={imagem} onChange={(e) => setImagem(e.target.value)} />
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    console.log('Nome:', nome);
                    console.log('Dosagem:', dosagem);
                    console.log('Imagem:', imagem);
                }
                }>Cadastrar</button>
            </form>
        </div>
    );

}
