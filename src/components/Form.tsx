import { FormEvent, FormHTMLAttributes, ReactNode } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({ children, onSubmit, ...props }: FormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit} {...props} noValidate>
      {children}
    </form>
  );
}
