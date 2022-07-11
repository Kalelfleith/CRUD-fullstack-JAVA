import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import './styles.css';
import { API_URL, BASE_URL } from '../../utils/requests';

function Form() {
    async function handleCep(event: any) {
        if (event.target.value != "") {
            let rua = document.getElementById("rua") as any;
            let bairro = document.getElementById("bairro") as any;
            let cidade = document.getElementById("cidade") as any;
            let uf = document.getElementById("uf") as any;

            axios.get(`${API_URL}${event.target.value}/json/`)
                .then(response => {
                    if (response.data != null) {
                        rua.value = response.data.logradouro;
                        bairro.value = response.data.bairro;
                        cidade.value = response.data.localidade;
                        uf.value = response.data.uf;
                    }
                })
                .catch ((error) => {
                    console.log("CEP Inválido");
                });
        }

    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const nome = (event.target as any).nome.value;
        const telefone = (event.target as any).telefone.value;
        const cep = (event.target as any).cep.value;

        const rua = (event.target as any).rua.value;
        const bairro = (event.target as any).bairro.value;
        const cidade = (event.target as any).cidade.value;
        const uf = (event.target as any).uf.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/colaborador',
            data: {
                nome: nome,
                telefone: telefone,
                cep: cep,
                rua: rua,
                bairro: bairro,
                cidade: cidade,
                uf: uf
            }
        }
    }; 

    return (
        <div>
            <h2>Cadastro</h2>

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group_line">
                        <label htmlFor="nome">Nome</label>
                        <input id="nome" name="nome" type="text" />
                    </div>
                    <div className="form-group_line">
                        <label htmlFor="telefone">Telefone</label>
                        <input id="telefone" name="telefone" type="text" />
                    </div>
                    <div className="form-group_line">
                        <label htmlFor="cep">CEP</label>
                        <input id="cep" name="cep" type="text" onBlur={handleCep} />
                    </div>

                    <div className="form-group_line">
                        <label htmlFor="rua">Rua</label>
                        <input id="rua" name="rua" type="text" />
                    </div>
                    <div className="form-group_line">
                        <label htmlFor="bairro">Bairro</label>
                        <input id="bairro" name="bairro" type="text" />
                    </div>
                    <div className="form-group_line">
                        <label htmlFor="cidade">Cidade</label>
                        <input id="cidade" name="cidade" type="text" />
                    </div>
                    <div className="form-group_line">
                        <label htmlFor="uf">Estado</label>
                        <input id="uf" name="uf" type="text" />
                    </div>
                    <div className="divButtons">
                        <button type="submit">Salvar</button>
                        <button type="reset">Limpar Dados</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;