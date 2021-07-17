import connection from "../connection";
import { Request, Response } from "express";
import {poke} from "../types"

export default async function ProcuPoke( req: Request, res: Response ): Promise<void> {

   try {

      const pokeName = req.query.pokeName as string || "%"
      const pokeType = req.query.pokeType as string || "%"

      const result = await connection.raw(`
      SELECT
      pokeName,
      pokeType
      FROM
      pokeRedFox
      WHERE
      pokeName LIKE "%${pokeName}%" AND pokeType LIKE "%${pokeType}%";
      `
      );

      res.send({ pokeRedFox: result[0]})
  }catch (error) {
      res.status(400).send({ message: error.message });
    }
}
