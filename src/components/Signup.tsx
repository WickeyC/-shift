import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import {
  Card,
  Title,
  Fieldset,
  Label,
  Input,
  Separator,
} from './Login';
import GoogleButton from '../components/GoogleButton';

import { useAuth } from '../context/AuthUserContext';

const Button = styled.button<{ isSubmitting: boolean }>`
  width: 124px;
  height: 46px;
  margin: 9px 0 27px 0;
  padding: 0 23px;
  border-radius: 8px;
  background-color: ${(props) => (props.isSubmitting ? '#73a4ff' : '#006aff')};
  color: #fff;
  font-size: 15px;

  img {
    margin-left: 10px;
  }
`;

export const Signup: React.FC<{
  handleSwitchToLogin: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}> = ({ handleSwitchToLogin }) => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { createUserWithEmailAndPassword } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setConfirmPasswordError(false);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError(false);
  };

  const handleConfirmPasswordBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
    } else {
      setIsSubmitting(true);
      createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log('Success. The user is created in firebase');
          router.push('/account/dashboard');
          console.log(userCredential);
          console.log(userCredential.user);
        })
        .catch((error) => {
          alert(error.message);
          setIsSubmitting(false);
        });
    }
  };

  return (
    <Card>
      <Title>Create a new account</Title>
      <form onSubmit={handleSubmit}>
        <Fieldset>
          <Label htmlFor="email">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3H14V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                fill="#141418"
              />
            </svg>
            Email
          </Label>
          <Input
            value={email}
            onChange={handleEmailChange}
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="password">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z"
                fill="black"
              />
            </svg>
            Password
          </Label>
          <Input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="confirmPassword">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z"
                fill="black"
              />
            </svg>
            Confirm Password
          </Label>
          <Input
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            onBlur={handleConfirmPasswordBlur}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            confirmPasswordError={confirmPasswordError}
            required
          />
          {confirmPasswordError && (
            <div style={{ color: '#ea3333', margin: '-10px 0 10px 0' }}>
              Passwords do not match
            </div>
          )}
        </Fieldset>
        <Button type="submit" isSubmitting={isSubmitting}>{isSubmitting ? 'Signing Up' : 'Continue'}</Button>
      </form>
      <div>
        <span>
          <span>Have an account&#63;</span>&nbsp;
        </span>
        <a onClick={handleSwitchToLogin} href="./account">
          Log In
        </a>
      </div>
      <Separator>
        <hr />
        <p>Or</p>
      </Separator>
      <GoogleButton />
    </Card>
  );
};
