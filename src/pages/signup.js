import React, { useState, useContext } from 'react';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import { FirebaseContext } from '../context/firebase';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInValid = firstName === '' || password === '' || emailAddress === '';

  const handleSignUp = (event) => {
    event.preventDefault();
    // firebase
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInValid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to="/signip">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is NOT protected by Google reCAPTCHA to ensure you're not a bot.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      ;
      <FooterContainer />
    </>
  );
}
