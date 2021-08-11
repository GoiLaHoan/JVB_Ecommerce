import React, {useContext} from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common'
import { Marginer } from "../Marginer"
import { AccountContext } from './accountContext'
export const LoginForm = (props) => {
const { switchToSignup } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />

            </FormContainer>
            <Marginer direction="vetical" margin={10} />
            <MutedLink href="#">Forget your password?</MutedLink>
            <Marginer direction="vetical" margin="1.6em" />
            <SubmitButton type="submit">SignIn</SubmitButton>
            <Marginer direction="vetical" margin="1em" />
            <MutedLink href="#">Don't have an account?<BoldLink href="#" onClick={switchToSignup}>SignUp</BoldLink></MutedLink>
        </BoxContainer>
    )
}
