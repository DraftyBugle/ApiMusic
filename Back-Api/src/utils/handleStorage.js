import multer from "multer";
import { randomUUID } from "crypto";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename =fileURLToPath(import.meta.url);
const __dirname =dirname(__filename);


const storage = multer.diskStorage({
    destination :(req,file,cb)=> {
        const pathStorage = `${__dirname}/../../public`;
        cb (null,pathStorage);
    },

    filename:(req,file,cb)=> {
        const ext=file.originalname.split(".").pop();
        const infix = randomUUID ();
        const posterName = `poster_${infix}.${ext}`;
        cb(null,posterName)
    },
})
export const uploadFile = multer({storage});