import Navbar from "../../Components/Navbar";
import usuarioIndef from "../../assets/Ellipse 1.svg"
import "../../assets/cadastroMotorista.css";

export default function CadastroMotorista(){
    return(
        <div className="backgroundapp">
            <Navbar></Navbar>
            <main>
                <div className="container">
                    <div className="containerPerfil">
                        <img src={usuarioIndef} alt="" />
                        <div>
                            <span id="inserirImg">Insira a foto de perfil</span>
                            <input value="Escolher imagem" type="submit"/>
                        </div>
                    </div>
                    <div className="fundoCadastro">
                        <h1>Cadastrar um motorista</h1>
                            <form action="" className="formCadastro">
                                <div className="formularios">
                                    <div className="formColuna">
                                        <div className="inputDiv">
                                        <h3>Nome completo</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>CPF</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>CNH</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Sexo</h3>
                                        <select name="Sexo" id="selectSexo">
                                            <option value="masculino">Masculino</option>
                                            <option value="feminino">Feminino</option>
                                            <option value="outros">Outro</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="formColuna">
                                        <div className="inputDiv">
                                        <h3>Email</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Senha</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Confirmar senha</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Número de senha</h3>
                                        <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" name="cadastrar" id="botaoCadastrar">Cadastrar</button>
                            </form>
                            
                               
                    </div>
                </div>
            </main>
        </div>
    )
}