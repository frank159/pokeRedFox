import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../Context/GlobalContextState";
import {HeaderAdd} from "../../componentes/headerAdd/headerAdd"
import { InputsContainer, ScreenContainer } from "./Styled";
import { goToHomePage } from "../../routes/coordinator";
import { TextField } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {BASE_URL} from "../../constants/Url";
import useForm from "../../hooks/useForm";
import axios from "axios";

export const EditarPoke = () => {
  const history = useHistory();
  const { requests } = useContext(GlobalStateContext);
  const [form, onChange] = useForm({ pokeName: "", pokeType: "", pokeHeight: "", pokeWeight: "" });
  const {id} = useParams();
  const [poke, setPoke] = useState(null)

  useEffect(() => {
    getPokeEdit();
  },[]);

  const getPokeEdit = () => {
        const newPoke = requests.poke.filter((item) => {
            return item.id === id
          })
          setPoke(newPoke[0]);
   }
  const editProfile = (event) => {
    event.preventDefault();
    edit();
  };
  const edit = () => {
    axios
      .post(`${BASE_URL}/editPoke/${id}`, form)
      .then((response) => {
        goToHomePage(history);
        window.alert("Pokemon Atualizado!");
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };

  return (
    <div>
      <HeaderAdd/>
      <ScreenContainer>
        <InputsContainer>
              <form onSubmit={editProfile}>
                  <TextField
                      name={"pokeName"}
                      value={form.pokeName}
                      label={"Poke`Name"}
                      onChange={onChange}
                      variant={"filled"}
                      fullWidth
                      required
                      margin={"normal"}
                      type={"text"} 
                      />
                  <TextField
                      name={"pokeType"}
                      value={form.pokeType}
                      label={"Poke`Type"}
                      onChange={onChange}
                      variant={"filled"}
                      fullWidth
                      required
                      margin={"normal"}
                      type={"text"} 
                      />
                  <TextField
                      name={"pokeHeight"}
                      value={form.pokeHeight}
                      label={"Poke`Height"}
                      onChange={onChange}
                      variant={"filled"}
                      fullWidth
                      required
                      margin={"normal"}
                      type={"number"} 
                      />
                  <TextField
                      name={"pokeWeight"}
                      value={form.pokeWeight}
                      label={"Poke`Weight"}
                      onChange={onChange}
                      variant={"filled"}
                      fullWidth
                      required
                      margin={"normal"}
                      type={"number"} 
                      />    
                  <Button
                  type={"submit"}
                  fullWidth
                  variant={"contained"}
                  color={"primary"}
                  >update
                  </Button>  
              </form>
          </InputsContainer>
      </ScreenContainer>
    </div>
  );
};