import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import {
  PostCardContainer,
  PostCardContent
} from "./Styled";

const PatientCard = (props) => {

  return (
    <PostCardContainer>
      <PostCardContent>
        <CardActionArea onClick={props.onClickCard}>
            <Typography gutterBottom variant="h4">
             {props.pokeName}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
            Type: {props.pokeType}
            </Typography>
        </CardActionArea>
      </PostCardContent>
    </PostCardContainer>
  );
};

export default PatientCard;