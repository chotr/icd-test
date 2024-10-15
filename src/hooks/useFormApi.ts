import { useMutation } from "@tanstack/react-query";
import { Form } from "../store/interface/itf";
import { postFormApi } from "../store/api/api";

export const useFormApi = () => {
  return useMutation<Form, Error, Form>({
    mutationFn: (form: Form) => {
      return new Promise((resolve) => {
        setTimeout(async () => {
          const result = await postFormApi(form);
          resolve(result);
        }, 0);
      });
    },
    onMutate: () => {},
    onSuccess: () => {},
    onError: (error) => {},
  });
};
