import { Room } from "../models/room.model";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  console.log(query);
  const room = await Room.findOne({ name: query.name});

  return room;
})
