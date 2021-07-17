import React from "react"
import { useHistory } from "react-router";
import { Conteiner, ConteinerImg, TextoBotao, Img } from "./Styled"
import { goToPreviousPage } from "../../routes/coordinator";
import Button from '@material-ui/core/Button';

export const HeaderAdd = () => {
    const history = useHistory();
    return(
        <Conteiner>
                    <ConteinerImg>
                        <Img src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1"/>
                    </ConteinerImg>
                    <Button onClick={() => goToPreviousPage(history)} variant="contained" color="primary" disableElevation>
                        <TextoBotao>Voltar</TextoBotao>
                    </Button>
       </Conteiner>
    )
}