import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LoginForm } from './loginform';
import { SignupForm } from './signupform';
import { motion } from 'framer-motion';
import { AccountContext } from './accountContext';
import ForgetPasswordForm from './ForgetPasswordForm';

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxContainer = styled.div`
  width: 700px;
  min-height: 450px;
  height: 80px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color:white;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
  margin-bottom:17%;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  width: 80%;
  height: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  top: -580px;
  left: -194px;
  transform: rotate(70deg);
  background: linear-gradient(
    58deg, rgba(0, 0, 139, 0.8) 20%, rgba(173, 216, 230, 0.8) 100%
  );

`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 60px;
  left: 352px;
  flex-direction: column;
`;

const HeaderText = styled.div`
  font-size: 27px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
`;

const SmallText = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  margin-top: 8px;
  z-index: 10;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  
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
  stiffness: 30,
};

export default function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState('signin');

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const switchToPasswordReset = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("resetpassword");
    }, 400);
  };

  return (
    <AccountContext.Provider value={{ switchToSignup, switchToSignin, switchToPasswordReset }}>
      <BackgroundContainer>
        <BoxContainer>
          <TopContainer>
            <BackDrop
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={backdropVariants}
              transition={expandingTransition}
            />
            {active === "signin" && <HeaderContainer>
              <HeaderText>Bienvenue Chez Tunisair </HeaderText>
              <HeaderText> </HeaderText>
            </HeaderContainer>}
            {active === "signup" && <HeaderContainer>
              <HeaderText>Créer un compte</HeaderText>
            </HeaderContainer>}
            {active === "resetpassword" && <HeaderContainer>
              <HeaderText>Réinitilaiser </HeaderText>
              <HeaderText>votre E-mail </HeaderText>
            </HeaderContainer>}
          </TopContainer>
          <InnerContainer>
            {active === "signin" && <LoginForm />}
            {active === "signup" && <SignupForm />}
            {active === "resetpassword" && <ForgetPasswordForm />}
            {active !== "resetpassword" && (
              <Link to="/forget-password" style={{ textDecoration: 'none' }}>
                <SmallText onClick={switchToPasswordReset}>Mot de passe oublié?</SmallText>
              </Link>
            )}
          </InnerContainer>
        </BoxContainer>
      </BackgroundContainer>
    </AccountContext.Provider>
  );
}
