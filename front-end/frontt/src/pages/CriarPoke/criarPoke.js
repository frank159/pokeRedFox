import React, { useContext } from "react"
import {HeaderAdd} from "../../componentes/headerAdd/headerAdd"
import { TextField } from "@material-ui/core";
import { InputsContainer} from "./Styled";
import Button from '@material-ui/core/Button'
import useForm from "../../hooks/useForm"
import axios from "axios"
import GlobalStateContext from "../../Context/GlobalContextState"
import { useHistory } from "react-router-dom";
import {BASE_URL} from "../../constants/Url";
import { goToHomePage } from "../../routes/coordinator";

export const CriarPoke = () => {
    const a = useHistory()
    const { requests } = useContext(GlobalStateContext);

    const [form, onChange] = useForm({pokeName: "", pokeType: "", pokeHeight: "", pokeWeight: ""})

    const createPoke = () => {
        axios.post(`${BASE_URL}/post`, form,)
        .then((res)=>{
            alert("Adicionado com sucesso")
            requests.getPoke()
            goToHomePage(a)
        })
        .catch((err)=> alert(err))
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPoke()
    }

    return(
    <div>
        <HeaderAdd />
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"pokeName"}
                    value={form.pokeName}
                    label={"Poke`Name"}
                    onChange={onChange}
                    variant={"filled"}
                    fullWidth
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
                    margin={"normal"}
                    type={"select"} 
                />
                <TextField
                    name={"pokeHeight"}
                    value={form.pokeHeight}
                    label={"Poke`Height"}
                    onChange={onChange}
                    variant={"filled"}
                    fullWidth
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
                    margin={"normal"}
                    type={"number"} 
                    />    
                <Button
                type={"submit"}
                fullWidth
                variant={"contained"}
                color={"primary"}
                >to add
                </Button>  
            </form>
        </InputsContainer>
        </div>
        )
}
