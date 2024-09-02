import { model, Schema } from "mongoose";

const RoomSchema = new Schema({
    name: String,
    amountOfPlayers: { name: "amount_of_players", type: Number},
    difficulty: Number,
    timeToBeatInMins: { name: "time_to_beat_in_minutes", type: Number},
    description: String,
    images: [String],
    trailer: String,
});

export const Room = model("Rooms", RoomSchema);