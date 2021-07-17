import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import {
  PostCardContainer,
  PostCardContent,
  LeftContent,
  RightContent,
} from "./Styled";
import { goToHomePage } from "../../routes/coordinator"
import axios from "axios";
import {BASE_URL} from "../../constants/Url"
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Context/GlobalContextState";
import { Button } from "@material-ui/core";


const PokeDetalhesCard = (props) => {
  const { requests } = useContext(GlobalStateContext);
  const history = useHistory();

  const deletePoke = () => {

    const data = { id: props.id }
    axios.delete(
      `${BASE_URL}/delete`,
      {data}
    )
    .then(() => {
      requests.setLoading(true)
      goToHomePage(history)
    })
    .catch((error) => window.alert(error.message) )
  }

  return (
    <PostCardContainer>
      <PostCardContent>
          <RightContent>
            <Typography gutterBottom variant="h4">
              {props.pokeName}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              {props.pokeType}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              {props.pokeHeight}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              {props.pokeWeight}
            </Typography>
          </RightContent>
          <LeftContent>
          <Button onClick={deletePoke} variant="contained" color="primary" disableElevation>
            X
          </Button>
          </LeftContent>
      </PostCardContent>
    </PostCardContainer>
  );
};

export default PokeDetalhesCard;