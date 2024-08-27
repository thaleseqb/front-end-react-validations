import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import PaginaBase from "../paginas/PaginaBase"
import { MinhaConta } from "../paginas/MinhaConta"


const Rotas = () => {
    return (<Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
        <Route path="/minha-conta/pedidos" element={<MinhaConta/>} />
      </Route>
    </Routes>)
}

export default Rotas