import { Room } from "../models/room.model"

export default defineEventHandler(async (event) => {
    const rooms = await Room.find();
    return rooms
})