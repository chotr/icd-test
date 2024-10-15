import api from "../../env";
import { Form } from "../interface/itf";

const API_URL = "/formCan";

export const postFormApi = async (form: Form): Promise<Form> => {
  const response = await api.post(API_URL, form);
  return response.data;
};
