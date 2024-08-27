import { Link } from "react-router-dom"
import BotaoNavegacao from "../BotaoNavegacao"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'
import { ModalCadastroUSuario } from "../ModalCadastroUsuario"
import { useState } from "react"
import { ModalLogin } from "../ModalLogin"

const BarraNavegacao = () => {

    const [modalAberta, setModalAberta] = useState(false);
    const [modalAbertaLogin, setModalAbertaLogin] = useState(false);


    return (<nav className="ab-navbar">
        <h1 className="logo">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo da AluraBooks" />
            </Link>
        </h1>
        <ul className="navegacao">
            <li>
                <a href="#!">Categorias</a>
                <ul className="submenu">
                    <li>
                        <Link to="/">
                            Frontend
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Programação
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Infraestrutura
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Design e UX
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
        <ul className="acoes">
            <li>
                <BotaoNavegacao 
                    texto="Login" 
                    textoAltSrc="Icone representando um usuário" 
                    imagemSrc={usuario} 
                    onClick={() => setModalAbertaLogin(true)}
                />
            </li>
            <li>
                <BotaoNavegacao
                    texto="Cadastrar-se"
                    textoAltSrc="Icone representando um usuário"
                    imagemSrc={usuario}
                    onClick={() => setModalAberta(true)}
                />
                <ModalCadastroUSuario 
                    aberta={modalAberta} 
                    aoFechar={() => setModalAberta(false)} 
                />
                <ModalLogin 
                    aberta={modalAbertaLogin}
                    aoFechar={() => setModalAbertaLogin(false)}
                    aoEfetuarLogin={() =>console.log("ola")}
                    criarConta={() => {
                        setModalAbertaLogin(false);
                        setModalAberta(true);
                    }}/>
            </li>
        </ul>
    </nav>)
}

export default BarraNavegacao