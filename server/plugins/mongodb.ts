import type { Nitro} from "nitropack";
import mongoose from 'mongoose';

export default async (_nitroApp: Nitro) => {
    const config = useRuntimeConfig();

    try {
        await mongoose.connect(config.mongodbUri || process.env.NUXT_MONGODB_URI!);
        console.log("Connected to MongoDB");
    } catch (e) {
        console.error(e);
    }
}