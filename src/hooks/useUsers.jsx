import { useState, useEffect } from "react";
import axios from "axios";

const userAvatars = [
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/CXdMo8S.png",
];
const useUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    try {
      const fetchUsers = async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        const users = response.data;
        const mappedUsers = users.map((u, i) => {
          return {
            ...u,
            img: userAvatars[i],
          };
        });

        setAllUsers(mappedUsers);
      };

      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return allUsers;
};

export default useUsers;
