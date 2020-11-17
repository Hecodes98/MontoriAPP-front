import React from "react";
import { FormStyle, IconEmail, IconPass, Input, FormWrapper } from "./styles";

import { useStateValue } from "../../Context";

export const Forms = ({
  children,
  method = "Login",
  onSubmit,
  handleChange,
  user,
  error
}) => {
  return (
    <FormWrapper>
      {error[0] && <p>{error[1]}</p>}
      <form onSubmit={onSubmit}>
        <FormStyle>
          <IconEmail size={32} />
          <Input
            placeholder="Correo institucional"
            value={user.email}
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
        </FormStyle>
        <FormStyle>
          <IconPass size={32} />
          <Input
            placeholder="Contraseña"
            value={user.password}
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </FormStyle>
        {method == "Registro" && (
          <FormStyle>
            <IconPass size={32} />
            <Input
              placeholder="Repetir contraseña"
              value={user.rePassword}
              type="password"
              name="rePassword"
              onChange={handleChange}
              required
            />
          </FormStyle>
        )}
        {children}
      </form>
    </FormWrapper>
  );
};
