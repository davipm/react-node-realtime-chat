const users = [];

/**
 * adding new users
 * @param id
 * @param name
 * @param room
 * @returns {{error: string}|{user: {name: string, id: *, room: string}}}
 */
export const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (!name || !room) return { error: "Username and room are required." };
  if (existingUser) return { error: "Username is taken." };

  const user = { id, name, room };

  users.push(user);

  return { user };
};

/**
 * remove user by id
 * @param id
 * @returns {*}
 */
export const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
};

/**
 * get user by id
 * @param id
 * @returns {*}
 */
export const getUser = (id) => users.find((user) => user.id === id);

/**
 * get user in room
 * @param room
 * @returns {*[]}
 */
export const getUsersInRoom = (room) =>
  users.filter((user) => user.room === room);
