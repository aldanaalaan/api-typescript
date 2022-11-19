// # Importaiones
import express from "express";
import * as dairyServices from "../services/dairyServices";
const router = express.Router();

router.get("/", (_req, res) => {
    res.json(dairyServices.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
    const dairy = dairyServices.findById(Number(req.params.id));
    /* res.send(dairy?.weather); */
    return dairy != null ? res.send(dairy) : res.sendStatus(404);
});

router.post("/", (req, res) => {
    try {
        const newDairyEntry = toNewDairyEntry(req.body);

        const addedDairyEntry = dairyServices.addDairy(newDairyEntry);
        res.json(addedDairyEntry);
    } catch (e) {
        res.status(400).send(e);
    }
});

export default router;
