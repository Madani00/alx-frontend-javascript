import ClassRoom from './0-classroom';

const initializeRooms = () => [
  new ClassRoom(19),
  new ClassRoom(20),
  new ClassRoom(34),
];

export default initializeRooms;

/*
 *another way to do it

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  return [room1, room2, room3];
}
 * */
