import { AbModal } from "ds-alurabooks"

export const ModalCadastroUSuario = () => {
    return (
        <AbModal 
            titulo="Cadastrar"
            aberta={true}
            aoFechar={() => console.log("fecha ai")}
            >
                ola mundo
        </AbModal>
    )
}