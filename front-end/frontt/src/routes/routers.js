import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { HomePage} from "../pages/homePage/homePage"
import { CriarPoke} from "../pages/CriarPoke/criarPoke"
import { PokeDetalhes} from "../pages/pokeDetalhes/PokeDetalhes"
import { EditarPoke} from "../pages/editPoke/editPoke"

export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/add">
                    <CriarPoke />
                </Route>
                <Route exact path="/detalhes/:id">
                    <PokeDetalhes />
                </Route>
                <Route exact path="/editPoke/:id">
                    <EditarPoke />
                </Route>
            </Switch>
        </BrowserRouter>
    )

}