import React, { useContext } from 'react';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  LogErrors,
} from "./common";
import { Marginer } from "../Marginer";
import { AccountContext } from "./accountContext";
import UseForm from '../Auth-Register/UseForm'
import ValidateInfo from '../Auth-Register/validateInfo'

export function SignUpForm() {
  const { switchToSignin } = useContext(AccountContext);
  const { handleChange, values, handleSubmit, errors } = UseForm(ValidateInfo);
  // const userData;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <BoxContainer>
          <FormContainer>

            <Input type="text" placeholder="Full Name" name="username" value={values.username} onChange={handleChange} />
            {errors.username && <LogErrors>{errors.username}</LogErrors>}
            <Input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} />
            {errors.email && <LogErrors>{errors.email}</LogErrors>}
            <Input type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange} />
            {errors.password && <LogErrors>{errors.password}</LogErrors>}
            <Input type="password" placeholder="Confirm Password" name="password2" value={values.password2} onChange={handleChange} />
            {errors.password2 && <LogErrors>{errors.password2}</LogErrors>}

          </FormContainer>
          <Marginer direction="vertical" margin={10} />
          <SubmitButton type="submit">Signup</SubmitButton>
          <Marginer direction="vertical" margin="1em" />
          <MutedLink href="#">
            Already have an account?
            <BoldLink href="#" onClick={switchToSignin}>
              Signin
            </BoldLink>
          </MutedLink>
        </BoxContainer>
      </form>
    </>
  );
}