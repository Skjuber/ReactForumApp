import { useState, useEffect } from "react";
import axios from "axios";

const userAvatars = [
  "https://i.imgur.com/CXdMo8S.png",
  "https://i.imgur.com/k3l5sQ4.png",
  "https://i.imgur.com/JCNZlOy.png",
  "https://i.imgur.com/W3LPyPy.png",
  "https://i.imgur.com/76duhjR.png",
  "https://i.imgur.com/67sFl02.png",
  "https://i.imgur.com/tVgg92p.png",
  "https://i.imgur.com/1NPWLJy.png",
  "https://i.imgur.com/lsh9xbv.png",
  "https://i.imgur.com/PNuhxAJ.png",
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
