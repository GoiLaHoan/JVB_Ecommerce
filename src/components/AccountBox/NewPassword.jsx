import React from 'react';
import { BoxContainer, FormContainer, Input, SubmitButton } from './common'
import { Marginer } from "../Marginer";
// import { AccountContext } from './accountContext';
// import validateForgot from "../Auth-Fogot/validateForgot"
// import NewPassword from "../Auth-Fogot/NewPassword"


export const NewPassword = () => {
    // const { switchToSignin } = useContext(AccountContext);
    // const { handleChange, values, handleSubmit, errors } = Forgot(validateForgot);
    return (
        <>
            <form>
                {/* {(error !== "") ? (<div>{error}</div>) : ""} */}
                <BoxContainer>

                    <FormContainer>
                        <Marginer margin={10} />
                        <Input type="password" placeholder="Email" name="password"/>
                        <Input type="password" placeholder="Password Confirm" name="password2"/>
                        {/* {errors.password && <LogErrors>{errors.email}</LogErrors>} */}
                    </FormContainer>
                    <Marginer direction="vetical" margin={10} />
                    {/* <MutedLink href="#">Submit</MutedLink> */}

                    <SubmitButton type="submit">Submit</SubmitButton>
                    <Marginer direction="vetical" margin="3em" />
                </BoxContainer>
            </form>
        </>
    )
}


