import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import PaginaBase from "../paginas/PaginaBase"
import { MinhaConta } from "../paginas/MinhaConta"
import Categoria from "../paginas/Categoria"
import Detalhes from "../paginas/Detalhes"


const Rotas = () => {
    return (<Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
        <Route path="/minha-conta/pedidos" element={<MinhaConta/>} />
        <Route path="/categorias/:slug" element={<Categoria/>}/>
        <Route path="/livro/:slug" element={<Detalhes/>}/>
      </Route>
    </Routes>)
}

export default Rotas