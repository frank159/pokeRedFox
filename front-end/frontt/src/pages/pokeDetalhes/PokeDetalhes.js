import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import {HeaderHome} from "../../componentes/headerHome/headerHome"
import GlobalStateContext from "../../Context/GlobalContextState"
import PokeCardtDetalhes from "../../componentes/PokeCardtDetalhes/PokeCardtDetalhes";
import {ScreenContainer} from "./Styled";
import Button from '@material-ui/core/Button';
import {goToEditarPoke} from "../../routes/coordinator"

export const PokeDetalhes = () => {
    const { requests } = useContext(GlobalStateContext);
    const [poke, setPoke] = useState(null)
    const history = useHistory();
    const {id} = useParams();

        const onClickCard = (id) => {
            goToEditarPoke(history, id);
        };

    useEffect(() => {
        getPoke();
    },[]);

    const getPoke = () => {
    if(requests.poke.length !== 0) {
        const newPoke = requests.poke.filter((item) => {
           return item.id === id
         })
         setPoke(newPoke[0]);
       }
    };
    return (
        <div>
            <HeaderHome />
                <ScreenContainer>
                        {poke?.id && 
                    <PokeCardtDetalhes
                        key={poke.id}
                        id={poke.id}
                        pokeName={poke.pokeName}
                        pokeType={poke.pokeType}
                        pokeHeight={poke.pokeHeight}
                        pokeWeight={poke.pokeWeight}
                    />
                    }
                    <Button onClick={() => onClickCard(poke.id)} variant="contained" color="primary" disableElevation >update Pokemon</Button>
                </ScreenContainer>
        </div>
    )
}
