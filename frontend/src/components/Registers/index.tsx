import axios from "axios";
import { useEffect, useState } from "react";
import { Colaborador } from "../../types/colaborador";
import { BASE_URL } from "../../utils/requests";
import Table from 'react-bootstrap/Table';
import Card from "../CardRegister";
import './styles.css';


function Registers() {

    const [registers, setRegisters] = useState<Colaborador[]>();

    useEffect(() => {
        axios.get(`${BASE_URL}/colaborador`)
            .then(response => {
                const data = response.data as Colaborador[];
                setRegisters(data);
            });
    }, []);

    return (
        <div>
            <h2>Registros</h2>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>CEP</th>
                            <th>Rua</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>UF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registers?.map(item => (
                            <Card item={item} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Registers;