import Navbar from "../../Components/Navbar";
import "../../assets/cadastroVeiculo.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function CadastroVeiculos(){

    const [tipoVeiculoInput, setTipo] = useState(0);
    const [placaInput, setPlaca] = useState('');
    const [anoInput, setAno] = useState(0);
    const [seguroInput, setSeguro] = useState(false);
    const [corInput, setCor] = useState('');
    const [chassiInput, setChassi] = useState('');
    const [quilometragemInput, setKm] = useState(0);
    const [estadoVeiculoInput, setEstado] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function cadastrarVeiculo(veiculo) {
        veiculo.preventDefault();

        setIsLoading(true);

        axios.post('http://localhost:5000/api/veiculos', {

            idTipoVeiculo: tipoVeiculoInput,
            placa: placaInput,
            anoFabricacao: anoInput,
            seguro: seguroInput,
            cor: corInput,
            chassi: chassiInput,
            estadoVeiculo: estadoVeiculoInput,
            quilometragem: quilometragemInput

        }, {
            headers: {
                //'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZHJlbWVsb0BlbWFpbC5jb20iLCJqdGkiOiIxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiMSIsIlRlbGVmb25lIjoiMTE5ODc2NTQzMjEiLCJleHAiOjE2NTIxMDM0NTcsImlzcyI6IkxvZ2dleC53ZWJBUEkiLCJhdWQiOiJMb2dnZXgud2ViQVBJIn0.s5YxTqVrgD025rlCLq4Ldhg5Fnm6jTFpyo8VYr4tvII'
            }
        })
            .then(resposta => {
                if (resposta.status === 201) {
                    console.log('Veiculo cadastrado!');

                    setTipo(0)
                    setPlaca('')
                    setAno(0)
                    setSeguro(false)
                    setCor('')
                    setChassi('')
                    setKm(0)
                    setEstado(false)
                    setIsLoading(false);
                }
            })

            .catch(erro => console.log(erro), setInterval(() => {
                setIsLoading(false)
            }, 5000));
    };

    return(
        <div className="backgroundapp">
            <Navbar></Navbar>
            <main>
                <div className="container">
                    <div className="fundoCadastroV">
                        <h1>Cadastrar um veículo</h1>
                            <form action="" onSubmit={cadastrarVeiculo}  className="formCadastroV">
                                <div className="formulariosV">
                                    <div className="formColunaV">
                                        <div className="inputDivV">
                                        <h3>Placa</h3>
                                        <input type="text" onChange={ (campo) => setTipo(campo.target.value) } />
                                        </div>
                                        <div className="inputDivV">
                                        <h3>Cor</h3>
                                        <input type="text" onChange={ (campo) => setCor(campo.target.value) }/>
                                        </div>
                                        <div className="inputDivV">
                                        <h3>Ano de Fabricação</h3>
                                        <input type="text" onChange={ (campo) => setAno(campo.target.value) } />
                                        </div>
                                        <div className="inputDivV">
                                            <h3>Modelo do veículo</h3>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="formColunaV">
                                        <div className="inputDivV">
                                        <h3>Tem seguro?</h3>
                                        <select name="" onChange={ (campo) => setSeguro(campo.target.value) } id="selectSeguro">
                                            <option value="true">Sim</option>
                                            <option value="false">Não</option>
                                            </select>
                                        </div>
                                        <div className="inputDivV">
                                        <h3>Chassi</h3>
                                        <input type="text" onChange={ (campo) => setChassi(campo.target.value) }/>
                                        </div>
                                        <div className="inputDivV">
                                        <h3>Quilometragem</h3>
                                        <input type="text"  onChange={ (campo) => setKm(campo.target.value) }/>
                                        </div>
                                        <div className="inputDivV" id="estadoVeiculo">
                                            <h3>Estado do Veículo</h3>
                                            <select name="estadoVeiculo" onChange={ (campo) => setEstado(campo.target.value) } id="">
                                                <option value="true">Funcional</option>
                                                <option value="false">Quebrado</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button value="Cadastrar" type="submit" name="cadastrar" id="botaoCadastrar">Cadastrar</button>
                            </form>
                            
                               
                    </div>
                </div>
            </main>
        </div>
    )
}