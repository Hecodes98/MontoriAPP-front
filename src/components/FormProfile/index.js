import React from "react";
import { FormWrapper } from "../Forms/styles";
import { Button } from "../../styles/LoginStyles";
import { FormStyle, Input, IconName, TextR, Anchor, Select } from "./styles";

export const FormProfile = ({ onSubmit, handleChange, profile, programs }) => {
  return (
    <FormWrapper>
      <form onSubmit={onSubmit}>
        <FormStyle>
          <IconName size={32} />
          <Input
            placeholder="Nombres y Apellidos"
            name="nombres"
            value={profile.nombres}
            onChange={handleChange}
            type="text"
            required
          />
        </FormStyle>
        <FormStyle>
          <IconName size={32} />
          <Select name="programaId" onChange={handleChange}>
            <option disabled selected>
              Programa academico
            </option>
            {programs.map(e => {
              return <option value={e.id}>{e.nombre}</option>;
            })}
          </Select>
        </FormStyle>
        <Button>Guardar Perfil</Button>
        <TextR>
          ¿Quieres ser monitor? <Anchor to={"#"}>Registro monitor</Anchor>
        </TextR>
      </form>
    </FormWrapper>
  );
};
