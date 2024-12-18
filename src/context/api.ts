import axios from "axios";
import { IPhoneItem } from "../types";

const Axios = axios.create({
  baseURL: "http://localhost:4000",
});

export const deleteContact = async (id: string): Promise<IPhoneItem> => {
  const res = await Axios.delete(`/contacts/${id}`);
  return res.data;
};
