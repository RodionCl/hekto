import { FormEvent, useState } from "react";
import Form from "@/components/Form";
import InputComplex from "@/components/InputComplex";
import AppButton from "@/components/AppButton";
import { S } from "./Footer.styles";
import { COLORS } from "@/constants/colors";
import { rem } from "@/utils/pxToRem";

export default function SignupForm() {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    if (!email || !email.includes("@")) {
      setHasError(true);
      return;
    }
    setHasError(false);
  };

  const handleInputChange = () => {
    if (hasError) {
      setHasError(false);
    }
  };

  return (
    <Form onSubmit={handleFormSubmit} style={{ maxWidth: "400px" }}>
      <InputComplex
        label="Enter email for sign up"
        name="email"
        placeholder="Enter Email Address"
        aria-label="Sign up"
        onChange={handleInputChange}
        error={hasError}
        endAdornmentButton={
          <AppButton
            bgColor={COLORS.primary}
            bgColorHover={COLORS.primaryDark}
            type="submit"
            padding={rem(11, 16)}
          >
            <S.SignUpText>Sign Up</S.SignUpText>
          </AppButton>
        }
      />
    </Form>
  );
}
