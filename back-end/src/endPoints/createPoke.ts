import { Request, Response } from "express";
import connection from "../connection";
import { poke } from "../types";
import { generateId } from "../services/idGenerator";

export default async function createPoke(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { pokeName, pokeType, pokeHeight, pokeWeight} = req.body

      if (!pokeName || !pokeType || !pokeHeight || !pokeWeight) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'pokeName, pokeType, pokeWeight")
      }

      const [poke] = await connection('pokeRedFox')
         .where({ pokeName })

      if (poke) {
         res.statusCode = 409
         throw new Error('pokemon já cadastrado')
      }

      const id: string = generateId();

      const newPoke: poke = {
         id,
         pokeName,
         pokeType,
         pokeHeight,
         pokeWeight
      }

      await connection('pokeRedFox')
         .insert(newPoke);

      res.status(201).send({ pokeRedFox: newPoke});

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}