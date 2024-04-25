import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];
  const sizes = [19, 20, 34];

  sizes.forEach((size) => {
    const room = new ClassRoom(size);
    rooms.push(room);
  });
  return rooms;
}
