import { createBoard } from "@/actions/creat-board";
import FormInput from "@/components/form/form-input";
import { useAction } from "@/hooks/use-action";

const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-x-2">
        <FormInput id="title" error={fieldErrors} label="Board Title" />
      </div>
    </form>
  );
};

export default Form;
