import Form from "@/components/Form";
import { S } from "./Footer.styles";
import InputComplex from "@/components/InputComplex";
import { FormEvent, useState } from "react";
import AppButton from "@/components/AppButton";
import { COLORS } from "@/constants/colors";
import { rem } from "@/utils/pxToRem";

export function Footer() {
  const [hasError, setHasError] = useState<boolean>(false);
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const { search } = data;
    if (typeof search !== "string" || !search.trim()) {
      setHasError(true);
      return;
    }
  };

  const handleInputChange = () => {
    if (hasError) {
      setHasError(false);
    }
  };

  const address = "17 Princess Road, London, Greater London NW1 8JR, UK";

  return (
    <S.Footer>
      <S.FooterTop>
        <S.Column>
          <S.Logo src="/Logo.svg" alt="Hekto Logo" />
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
                  <S.SignUpText>Sign In</S.SignUpText>
                </AppButton>
              }
            />
          </Form>
          <S.Address>{address}</S.Address>
        </S.Column>
      </S.FooterTop>
    </S.Footer>
  );
}
