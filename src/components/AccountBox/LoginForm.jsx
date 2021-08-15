import React, { useContext, useState } from 'react';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common'
import { Marginer } from "../Marginer";
import { AccountContext } from './accountContext';
// import Login from '../Auth-Login/Login';
export const LoginForm = ({ login, error }) => {
    const { switchToSignup } = useContext(AccountContext);
  
    return (
        <>
            <form>
                {(error !== "") ? (<div>{error}</div>) : ""}
                <BoxContainer >

                    <FormContainer>
                        <Input type="email" placeholder="Email" name="email"
                        />
                        <Input type="password" placeholder="Password" name="password"
                        />

                    </FormContainer>
                    <Marginer direction="vetical" margin={10} />
                    <MutedLink href="#">Forget your password?</MutedLink>
                    <Marginer direction="vetical" margin="1.6em" />
                    <SubmitButton type="submit">SignIn</SubmitButton>
                    <Marginer direction="vetical" margin="1em" />
                    <MutedLink href="#">Don't have an account?<BoldLink href="#" onClick={switchToSignup}>SignUp</BoldLink></MutedLink>

                </BoxContainer>
            </form>
        </>
    )
}
