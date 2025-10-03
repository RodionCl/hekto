import { FormEvent, useState } from "react";
import Form from "@/components/Form";
import InputComplex from "@/components/InputComplex";
import SearchButton from "@/components/SearchButton";

export default function SearchForm() {
  const [hasError, setHasError] = useState<boolean>(false);

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const search = formData.get("search") as string;

    if (!search || !search.trim()) {
      setHasError(true);
      return;
    }
    console.log("Search", search);
  }

  function handleInputChange() {
    if (hasError) {
      setHasError(false);
    }
  }

  return (
    <Form onSubmit={handleFormSubmit} style={{ maxWidth: "400px" }}>
      <InputComplex
        label="My first complex input"
        name="search"
        placeholder="Search..."
        aria-label="Enter product"
        onChange={handleInputChange}
        error={hasError}
        endAdornmentButton={
          <SearchButton aria-label="Search Button" type="submit" />
        }
      />
    </Form>
  );
}
