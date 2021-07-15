import connection from "../connection";
import { Request, Response } from "express";

export default async function editPoke( req: Request, res: Response ): Promise<void> {
    try {
      await connection("pokeRedFox")

        .update({pokeName: req.body.pokeName,})
        .update({pokeType: req.body.pokeType})
        .update({pokeHeight: req.body.pokeHeight})
        .update({pokeWeight: req.body.pokeWeight})
        .where({ id: req.params.id });

      res.status(200).send("pokemon updated!");
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };