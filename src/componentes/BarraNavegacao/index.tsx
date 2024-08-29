import { Link, useNavigate } from "react-router-dom"
import BotaoNavegacao from "../BotaoNavegacao"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'
import { ModalCadastroUSuario } from "../ModalCadastroUsuario"
import { useEffect, useState } from "react"
import { ModalLogin } from "../ModalLogin"
import { ICategoria } from "../../interfaces/ICategoria"
import http from "../../http"

const BarraNavegacao = () => {

    const [modalAberta, setModalAberta] = useState(false);
    const [modalAbertaLogin, setModalAbertaLogin] = useState(false);
    const [categorias, setCategorias] = useState<Array<ICategoria>>([]);

    useEffect(() => {
        http.get<Array<ICategoria>>("categorias")
        .then(resposta => {
            setCategorias(resposta.data);
        })
        .catch(erro => {
            console.log(erro);
        })
    }, [])

    let navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    const [usuarioLogado, setUsuarioLogado] = useState<boolean>(token != null);

    const aoEfetuarLogin = () => {
        setUsuarioLogado(true);
        setModalAbertaLogin(false);
    }

    const aoCriarConta = () => {
        setModalAbertaLogin(false);
        setModalAberta(true);
    }

    const efetuarLogout = () => {
        setUsuarioLogado(false);
        sessionStorage.removeItem("token");
        navigate("/");
    }

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
                {categorias.map(categoria => {
                    return (
                        <li key={categoria.id}>
                            <Link to={`/categorias/${categoria.slug}`}>
                                {categoria.nome}
                            </Link>
                        </li>
                    )
                })}
                </ul>
            </li>
        </ul>
        <ul className="acoes">
            {!usuarioLogado && (<>
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
                        aoEfetuarLogin={aoEfetuarLogin}
                        criarConta={aoCriarConta}/>
                </li>
            </>)}
            {usuarioLogado && 
                <>
                    <li >
                        <div className="usuarioLogado">
                            <Link to="/minha-conta/pedidos">
                                minha conta
                            </Link>

                            <BotaoNavegacao
                                    texto="LOGOUT"
                                    textoAltSrc="Icone representando um usuário"
                                    imagemSrc={usuario}
                                    onClick={efetuarLogout}
                            />
                        </div>
                    </li>
                </>
            }
        </ul>
    </nav>)
}

export default BarraNavegacao