import app from "./app";
import getPoke from "./endPoints/getPoke";
import createPoke from "./endPoints/createPoke";
import deletePoke from "./endPoints/deletePoke";
import getDetalhes from "./endPoints/getDetalhes";
import editPoke from "./endPoints/editPoke";
import {createLambdaHandler} from "lbn-lambda-express";

app.get('/pokeRedFox/get', getPoke);
app.get('/pokeRedFox/getDetalhes/:id', getDetalhes);
app.post('/pokeRedFox/post', createPoke);
app.delete('/pokeRedFox/delete', deletePoke);
app.post('/pokeRedFox/editPoke/:id', editPoke);

export const handler = createLambdaHandler(app)