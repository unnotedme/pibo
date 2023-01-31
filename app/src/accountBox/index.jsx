import React from 'react';
import styled from 'styled-components';
import { LoginForm } from './loginForm';
import { SignupForm } from './signupForm';
import { AccountContext } from './accountContext';
import { motion } from 'framer-motion';


const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
    margin-top: 50px;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left: -70px;
    background: rgb(232,249,75);
    background: linear-gradient(90deg, rgba(232,249,75,1) 0%, rgba(190,255,122,1) 100%);
`;

const HeaderContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;  
`;

const HeaderText = styled.h2`
    font-size: 100px;
    font-weight: 800;
    line-height: 1.25;
    color: #000000;
    z-index: 10;
    margin-top: 20px;
    margin-bottom: 0px;
`;

const SmallText = styled.h5`
    color: #000000;
    font-weight: 400;
    font-size: 11px;
    z-index: 10;
    margin: 0;
    margin-top: 0px;
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
};

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30
};

export function AccountBox(props) {
    const [isExpanded, setExpanded] = React.useState(false);
    const [active, setActive] = React.useState("login");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToSignUp = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
    };

    const switchToLogIn = () => {
        playExpandingAnimation();
        setTimeout(() => {
            props.setActive("login");
        }, 400);
    };

    const contextValue = { switchToSignUp, switchToLogIn};

    return (
        <AccountContext.Provider value={contextValue}>
        <BoxContainer>
            <TopContainer>
                <BackDrop 
                    initial={false}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={backdropVariants}
                    transition={expandingTransition}
                />
                {active === "login" && (
                <HeaderContainer>
                    <HeaderText>Pibo</HeaderText>
                    <SmallText>Your pet's favourite app.</SmallText>
                </HeaderContainer>
                )}
                {active === "signup" && (
                <HeaderContainer>
                    <HeaderText>Pibo</HeaderText>
                    <SmallText>Your pet's favourite app.</SmallText>
                </HeaderContainer>
                )}
            </TopContainer>
            <InnerContainer>
                {active === "login" && <LoginForm />}
                {active === "signup" && <SignupForm />}
            </InnerContainer>
        </BoxContainer>
        </AccountContext.Provider>
    );
    }