import React, { useContext} from 'react';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton, LogErrors } from './common'
import { Marginer } from "../Marginer";
import { AccountContext } from './accountContext';
import validateAccount from "../Auth-Login/validateAccount"
import Login from "../Auth-Login/Login"


export const LoginForm = () => {
    const { switchToSignup, switchToForgot } = useContext(AccountContext);
    const { handleChange, values, handleSubmit, errors } = Login(validateAccount);
    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* {(error !== "") ? (<div>{error}</div>) : ""} */}
                <BoxContainer >

                    <FormContainer>
                        <Input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} />
                        {errors.password && <LogErrors>{errors.email}</LogErrors>}
                        <Input type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange} />
                        {errors.password && <LogErrors>{errors.password}</LogErrors>}
                    </FormContainer>
                    <Marginer direction="vetical" margin={10} />
                    <MutedLink href="#" onClick={switchToForgot}>Forget your password?</MutedLink>
                    <Marginer direction="vetical" margin="1.6em" />
                    <SubmitButton type="submit">SignIn</SubmitButton>
                    <Marginer direction="vetical" margin="1em" />
                    <MutedLink href="#">Don't have an account?<BoldLink href="#" onClick={switchToSignup}>SignUp</BoldLink></MutedLink>

                </BoxContainer>
            </form>
        </>
    )
}
