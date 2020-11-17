import React from "react";
import { FormStyle, Input, IconSearch } from "./styles";

export const SearchBar = () => {
  return (
    <FormStyle>
      <IconSearch size={24} />
      <Input placeholder="Buscar" type="text" />
    </FormStyle>
  );
};
