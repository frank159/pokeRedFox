import connection from "../connection";
import { Request, Response } from "express";

export default async function deletePoke( req: Request, res: Response ): Promise<void> {

    try {

        const { id } = req.body;
        
            const result = await connection.raw(`
            DELETE FROM pokeRedFox 
            WHERE id = "${id}"
            `)

            res.status(200).send({pokeRedFox: result[0]})
            
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}