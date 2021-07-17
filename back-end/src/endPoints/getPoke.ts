import connection from "../connection";
import { Request, Response } from "express";

export default async function getPoke( req: Request, res: Response ): Promise<void> {

    try {
            const result = await connection.raw(`
              SELECT * FROM pokeRedFox 
            `)
            res.send({ pokeRedFox: result[0]})

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}