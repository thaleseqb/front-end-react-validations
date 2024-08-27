import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import "./ModalLogin.css"
import image from "../ModalCadastroUsuario/assets/login.png"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

interface LoginModalProps {
    aberta:boolean;
    aoFechar: () => void;
    aoEfetuarLogin: ()=> void;
    criarConta: () => void;
}

export const ModalLogin = ({ aberta, criarConta, aoFechar }:LoginModalProps) => {

    const [emailLogin, setEmaillogin] = useState("");
    const [senha, setSenha] = useState("");

    const limparForm = () => {
        setEmaillogin("");
        setSenha("");
    }

    const aoSubmeterFormLogin = (evento: React.FormEvent<HTMLElement>) => {
        evento.preventDefault();
        const dadosLogin = {
            emailLogin,
            senha
        }

        axios.post("http://localhost:8000/public/registrar", dadosLogin)
        .then(reposta => {
            alert("login realizado com sucesso");
            limparForm();
            console.log(dadosLogin);
        }).catch(erro => {
            console.log(erro)
        })
    }

    return (
        <AbModal 
            titulo="LOGIN"
            aberta={aberta}
            aoFechar={aoFechar}
        >
            <form className="loginModal">
                <figure>
                    <img src={image} alt="image para fazer o login, contém ícone de cadastro, chave e pessoa" />
                </figure>
                <div className="dadosContainer">
                    <AbCampoTexto 
                        value={emailLogin}
                        label="E-mail"
                        onChange={(str) => setEmaillogin(str)}
                    />
                    <AbCampoTexto 
                        value={senha}
                        label="Senha"
                        onChange={(senha) => setSenha(senha)}
                    />
                    <div className="textAndButton">
                        <Link to="/">
                            Esqueci minha senha
                        </Link>

                        <AbBotao texto="Fazer login" />
                    </div>

                    <hr />

                    <div className="aindaNaoTemConta">
                        <h2 className="textoSemConta"><strong>Ainda não tem uma conta ?</strong></h2>
                        <AbBotao 
                            texto="Criar conta"
                            onClick={criarConta}
                        />
                    </div>
                </div>
            </form>
        </AbModal>
    )
}