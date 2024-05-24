import axios from "axios";
// import { usersType } from "../type/usersType";

type Props = {
    email: string;
    phone: string;
    name: string;
    avatar?: string;
    star: boolean;
}

export async function patchStar (id: number, contact: Props) {
  // const {data} = await axios.get('https://api.escuelajs.co/api/v1/users/' + id);
  const {data} = await axios.patch(`https://contact-server-pd98.onrender.com/users/${id}`, contact);
  return data
}
