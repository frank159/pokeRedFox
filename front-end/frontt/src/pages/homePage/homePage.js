import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom";
import {HeaderHome} from "../../componentes/headerHome/headerHome"
import PatientCard from "../../componentes/PokeCard/PokeCard"
import GlobalStateContext from "../../Context/GlobalContextState"
import { goToPokeDetalhes} from "../../routes/coordinator"
import { Conteiner } from "./Styled"

export const HomePage = () => {
    const history = useHistory();
    const { requests } = useContext(GlobalStateContext);
    
    useEffect(() => {
      requests.getPoke()
    },[])

    const onClickCard = (id) => {
      goToPokeDetalhes(history, id);
    };

    const pokeList =
    !requests.loading &&
    requests.poke &&
    requests.poke.map((poke) => {
      return (
      
        <PatientCard
          key={poke.id}
          pokeName={poke.pokeName}
          pokeType={poke.pokeType}
          pokeHeight={poke.pokeHeight}
          onClickCard={() => onClickCard(poke.id)}
        />
      );
    });

    return (
        <div>
            <HeaderHome />
            <Conteiner>
            {pokeList}
            </Conteiner>
        </div>
    )
}