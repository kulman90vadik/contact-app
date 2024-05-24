import axios from "axios";

export async function getId (id: number) {
  // const {data} = await axios.get('https://api.escuelajs.co/api/v1/users/' + id);
  const {data} = await axios.get('https://contact-server-pd98.onrender.com/users/' + id);
  return data
}