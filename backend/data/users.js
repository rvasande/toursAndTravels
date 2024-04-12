import bcrypt from "bcryptjs";

const usersData = [
  {
    username: "john_doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    photo: "john_photo.jpg",
    role: "user",
  },
  {
    username: "jane_smith",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
    photo: "jane_photo.jpg",
    role: "user",
  },
  {
    username: "admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    photo: "admin_photo.jpg",
    role: "admin",
  },
  {
    username: "test_user",
    email: "test@example.com",
    password: bcrypt.hashSync("123456", 10),
    photo: "test_photo.jpg",
    role: "user",
  },
  {
    username: "alice_wonderland",
    email: "alice@example.com",
    password: bcrypt.hashSync("123456", 10),
    photo: "alice_photo.jpg",
    role: "user",
  },
  {
    username: "bob_marley",
    email: "bob@example.com",
    password: bcrypt.hashSync("123456", 10),
    photo: "bob_photo.jpg",
    role: "user",
  },
];

export default usersData;
