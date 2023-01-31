import React from "react";
import { BoxContainer, SubmitButton, MutedLink, BoldLink, FormContainer, Input } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {

    const { switchToSignUp } = React.useContext(AccountContext);

    return <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Email" />
            <Marginer direction="vertical" margin="0.5em" />
            <Input type="password" placeholder="Password" />
        </FormContainer>
        <Marginer direction="vertical" margin="1.5em" />
        <MutedLink href="#">Forgot your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">Login</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
    <MutedLink href="#">Don't have an account? <BoldLink href="#" onClick={ switchToSignUp }>Sign up!</BoldLink></MutedLink>
    </BoxContainer>
}