import { PRISMA }from './config/database/prisma';
import express from 'express';
import  openRoutes  from './routes/public/openRoutes'
import cors from 'cors';
import bodyParser from 'body-parser';

const APP = express();

// Fix Cross Origins error
APP.use(cors({
    origin: '*' // Allow every provider as we run locally
}));

APP.use(bodyParser.json()); // pour parser le body sent on POST

async function main() {
    try {
        APP.listen(3000, () => {
            openRoutes(APP);
            console.log('✅ : Server is running on port 3000')
            //traitement
        })
    }
    catch(error:any) {
        throw new Error(error);
    }
    finally{
        async () => {
            await PRISMA.$disconnect();
        }
    }
}


main();