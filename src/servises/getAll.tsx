import axios from "axios";

export async function getAll() {
  // const {data} = await axios.get('https://api.escuelajs.co/api/v1/users/' + id);
  try {
    const { data } = await axios.get("https://contact-server-pd98.onrender.com/users");
    return data;
  } catch (e) {
    console.log((e as Error).message);
  }
}
