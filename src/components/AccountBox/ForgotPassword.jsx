import React, { useContext, useState } from 'react';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton, LogErrors } from './common'
import { Marginer } from "../Marginer";
import { AccountContext } from './accountContext';
import validateForgot from "../Auth-Fogot/validateForgot"
import Forgot from "../Auth-Fogot/ForgotPassword"


export const ForgotPassword = () => {
    const { switchToNewPassword } = useContext(AccountContext);
    const { handleChange, values, handleSubmit, errors } = Forgot(validateForgot);
    return (
        <>
            <form onSubmit={handleSubmit} className="form-forgot">
                {/* {(error !== "") ? (<div>{error}</div>) : ""} */}
                <BoxContainer>

                    <FormContainer>
                        <Marginer margin={10} />
                        <Input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} />
                        {errors.password && <LogErrors>{errors.email}</LogErrors>}
                    </FormContainer>
                    <Marginer direction="vetical" margin={10} />
                    {/* <MutedLink href="#">Submit</MutedLink> */}
                    
                    <SubmitButton type="submit" className="btn-submit">Submit</SubmitButton>
                    <Marginer direction="vetical" margin="3em" />
                </BoxContainer>
            </form>
        </>
    )
}

