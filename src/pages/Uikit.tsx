import styled from "styled-components";
import { cv } from "../utils/cssVar";
import { COLORS } from "../constants/colors";
import AppButton from "../components/AppButton";
import SuccessButton from "../components/SuccessButton";
import AppIconButton from "../components/AppIconButton";
import SearchIcon from "@mui/icons-material/Search";
import { ICON_SIZES } from "../constants/iconSizes";
import InputComplex from "../components/InputComplex";
import SearchButton from "../components/SearchButton";
import Form from "../components/Form";
import { FormEvent, useState } from "react";
import { rem } from "../utils/pxToRem";
import SelectList from "../components/SelectList";
import { SelectChangeEvent } from "@mui/material";

const Div = styled.div<{ $color: string }>`
  width: 90px;
  height: 90px;
  background: ${({ $color }) => cv($color)};
`;

export default function Uikit() {
  // FOR INPUT WITH BUTTON
  const [hasError, setHasError] = useState<boolean>(false);
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const { search } = data;
    if (typeof search !== "string" || !search.trim()) {
      setHasError(true);
      return;
    }
    console.log("Form ", data);
  };

  const handleInputChange = () => {
    if (hasError) {
      setHasError(false);
    }
  };

  // FOR INPUT SIMPLE
  const [hasError2, setHasError2] = useState<boolean>(false);
  const handleFormSubmit2 = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const { search2 } = data;
    if (typeof search2 !== "string" || !search2.trim()) {
      setHasError2(true);
      return;
    }
    console.log("Form ", data);
  };

  const handleInputChange2 = () => {
    if (hasError2) {
      setHasError2(false);
    }
  };

  // FOR SELECT
  const fruitOptions = [
    { value: "apple", label: "Apple 🍎" },
    { value: "banana", label: "Banana 🍌" },
    { value: "orange", label: "Orange 🍊" },
  ];
  const [selectedFruit, setSelectedFruit] = useState<string>(
    fruitOptions[1].value,
  );
  const handleFruitChange = (event: SelectChangeEvent<string>) => {
    setSelectedFruit(event.target.value);
  };

  return (
    <div>
      <h1>heading 1</h1>
      <h2>heading 2</h2>
      <h3>heading 3</h3>
      <h4>heading 4</h4>
      <p className="subtitle">Subtitle</p>
      <p className="subtitle-2">Subtitle 2</p>
      <p className="subtitle-3">Subtitle 3</p>
      <p className="subtitle-4">Subtitle 4</p>

      <p className="p-large">
        This is a large paragraph, perfect for lead text or important content.
      </p>
      <p className="p-medium">
        This is a medium paragraph, standard body text for most content.
      </p>
      <p className="p-large-bold">
        This is a bold large paragraph, useful for emphasis within text.
      </p>
      <p className="p-small">
        This is a small paragraph, ideal for captions or fine print.
      </p>
      <label htmlFor="name">Regular Label</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email" className="label-bold">
        Bold Label
      </label>
      <input type="email" id="email" name="email" />

      <label htmlFor="age" className="label-small">
        Small Label
      </label>
      <input type="number" id="age" name="age" />
      <div style={{ display: "flex" }}>
        {Object.values(COLORS).map((color, index) => (
          <Div $color={color} key={index} />
        ))}
      </div>

      <AppButton bgColor={COLORS.primary} bgColorHover={COLORS.primaryDark}>
        <p className="subtitle-4">Shop Now</p>
      </AppButton>

      <SuccessButton>Shop Now</SuccessButton>

      <SearchButton />

      <div
        style={{
          backgroundColor: cv(COLORS.black),
        }}
      >
        <AppIconButton
          padding={rem(8)}
          borderRadius={rem(32)}
          bgColor={COLORS.white}
          bgColorHover={COLORS.grey2}
          color={COLORS.tertiary}
        >
          <SearchIcon sx={{ fontSize: ICON_SIZES.medium }} />
        </AppIconButton>
        <AppIconButton
          padding={rem(8)}
          borderRadius={rem(32)}
          withBackground={false}
          color={COLORS.tertiary}
        >
          <SearchIcon sx={{ fontSize: ICON_SIZES.medium }} />
        </AppIconButton>
      </div>

      <Form onSubmit={handleFormSubmit} style={{ maxWidth: "400px" }}>
        <InputComplex
          name="search"
          placeholder="Search..."
          aria-label="Enter product"
          error={hasError}
          onChange={handleInputChange}
          hasError={hasError}
          endAdornmentButton={
            <SearchButton aria-label="Search Button" type="submit" />
          }
        ></InputComplex>
      </Form>

      <Form onSubmit={handleFormSubmit2} style={{ maxWidth: "400px" }}>
        <InputComplex
          name="search2"
          placeholder="Search2..."
          aria-label="Enter product2"
          error={hasError2}
          onChange={handleInputChange2}
          hasError={hasError2}
        ></InputComplex>
      </Form>

      <SelectList
        width="400px"
        label="Select Fruit"
        id="fruit-select"
        value={selectedFruit}
        onChange={handleFruitChange}
        options={fruitOptions}
      ></SelectList>
    </div>
  );
}
