import React from "react";
import { FormWrapper } from "../Forms/styles";
import { Button } from "../../styles/LoginStyles";
import { FormStyle, Input, IconName, TextR, Anchor, Select, Hr } from "./styles";

export const FormProfile = ({ onSubmit, handleChange, profile, programs, option='register' }) => {
  
  console.log(profile, 'formProfile')
  
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
              { profile.programa ||'Programa academico'}
            </option>
            {programs.map(e => {
              if(e.nombre!==profile.programa) return <option value={e.id}>{e.nombre}</option>;
            })}
          </Select>
        </FormStyle>
        {option==="edit" && (
          <div>
            <Hr/>
            <FormStyle>
              <IconName size={32} />
              <Input
                placeholder="Nueva contraseña"
                name="new-password"
                value={profile.nombres}
                onChange={handleChange}
                type="text"
                required
              />
            </FormStyle>
            <FormStyle>
              <IconName size={32} />
              <Input
                placeholder="Repita nueva contraseña"
                name="rep-new-password"
                value={profile.nombres}
                onChange={handleChange}
                type="text"
                required
              />
            </FormStyle>
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
          </div>
        )}
        <Button>Guardar Perfil</Button>
        <TextR>
          ¿Quieres ser monitor? <Anchor to={"#"}>Registro monitor</Anchor>
        </TextR>
      </form>
    </FormWrapper>
  );
};
