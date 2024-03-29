import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormWatch,
  useForm,
} from "react-hook-form";
import * as zod from "zod";
import { schemaLink } from "@/database/database";

export type ShortenerForm = zod.infer<typeof schemaShortenerForm>;

export type UseShortenerForm = () => UseShortenerFormbject;

export type UseShortenerFormbject = {
  formState: FormState<ShortenerForm>;
  handleSubmit: UseFormHandleSubmit<ShortenerForm, undefined>;
  register: UseFormRegister<ShortenerForm>;
  reset: UseFormReset<ShortenerForm>;
  watch: UseFormWatch<ShortenerForm>;
};

const schemaShortenerForm = schemaLink.omit({
  id: true,
  shortened_url: true,
});

export const useShortenerForm: UseShortenerForm = () => {
  const { handleSubmit, register, reset, formState, watch } =
    useForm<ShortenerForm>({
      defaultValues: { url: "" },
      resolver: zodResolver(schemaShortenerForm),
    });

  return {
    formState,
    handleSubmit,
    register,
    reset,
    watch,
  };
};
