import { Router } from "express";
export const router = Router();
import {MusicCt} from "./musicCt.js";
import { uploadFile } from "../utils/handleStorage.js";



router.get ("/",MusicCt.getAll);

router.get ("/:id",MusicCt.getById);


router.delete ("/:id",MusicCt.deleOne);

router.post ("/",uploadFile.single("postername"),MusicCt.addOne);

router.patch("/:id", MusicCt.updateOne);