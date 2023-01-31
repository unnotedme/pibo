import React from "react";
import { BoxContainer, SubmitButton, MutedLink, BoldLink, FormContainer, Input } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {

    const { switchToLogIn } = React.useContext(AccountContext);

    return <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Email" />
            <Marginer direction="vertical" margin="0.5em" />
            <Input type="password" placeholder="Password" />
            <Marginer direction="vertical" margin="0.5em" />
            <Input type="text" placeholder="Guardian's Name" />
        </FormContainer>
        <Marginer direction="vertical" margin="1.5em" />
        <SubmitButton type="submit">Register</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
    <MutedLink href="#">Already have an account? <BoldLink href="#" onClick={ switchToLogIn }>Log In!</BoldLink></MutedLink>
    </BoxContainer>
}