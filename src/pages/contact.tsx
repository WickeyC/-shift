import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0px;
  margin: 40px auto;
  text-align: center;

  span {
    color: #0070f3;
    font-size: 18px;
  }

  h1 {
    margin: 15px 0 0 0;
    color: #37383c;
    font-weight: 700;
    font-size: 55px;
  }

  p {
    margin: 20px 0 0 0;
    color: #4c596a;
    font-size: 24px;
    line-height: 200%;
    max-width: 880px;
  }
`;

const InfoSection = styled.section`
  min-height: 440px;
  display: flex;
  align-items: center;
  background: radial-gradient(
      45.52% 993.77% at 4.48% 121.76%,
      rgba(40, 152, 255, 0.2) 0%,
      rgba(83, 100, 255, 0.11) 100%
    ),
    linear-gradient(180deg, #cdebff 36.85%, rgba(255, 255, 255, 0.49) 135.27%);
  transform: skewY(-4deg);
  position: relative;
  margin-bottom: -50px;

  &::before {
    content: '';
    position: absolute;
    background-color: #edf6ff;
    width: 100%;
    height: 10px;
    top: 0;
    right: 0;
    transform: skewY(0deg);
    z-index: -1;
  }
  &::after {
    content: '';
    position: absolute;
    background-color: #edf6ff;
    width: 100%;
    height: 10px;
    bottom: 0;
    right: 0;
    transform: skewY(0deg);
    z-index: -1;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  transform: skewY(4deg);
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 400px;
  }
`;

const InfoBox = styled.a`
  flex-basis: 31%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  z-index: 1;
  box-shadow: 0px 6px 20px rgb(13 21 55 / 8%);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 6px 22px rgb(13 21 55 / 16%);
    transform: translateY(-5px);

    & > div:last-child {
      color: #323c5d;

      svg {
        transform: translateX(5px);
        path {
          fill: #323c5d;
        }
      }
    }
  }
  & > div:first-child {
    padding: 32px 35px 10px 35px;
  }
  & > div:last-child {
    padding: 15px 35px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: hsl(210, 50%, 98%);
    color: #0070f3;
    margin-top: auto;
    display: flex;
    align-items: center;
    transition: all 0.3s;

    svg {
      margin-left: 7px;
      width: 15px;
      height: 15px;
      transition: all 0.3s;

      path {
        fill: #0070f3;
        transition: all 0.3s;
      }
    }
  }
  img {
    width: 40px;
    height: 40px;
  }
  h2 {
    font-size: 24px;
  }
  ul {
    padding-left: 2rem;
  }
  ul li {
    list-style-type: circle;
  }
`;

const FormSection = styled.section`
  background-color: #f7fafc;
  padding-top: 120px;
  padding-bottom: 50px;

  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 18px;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 650px;
  margin-top: 40px;
  box-shadow: 0 25px 50px rgb(74 108 139 / 25%);
  border-radius: 8px;
  padding: 52px 48px 52px 48px;
  background: #fff;

  h3 {
    color: #0b8aff;
    margin-top: 0;
    font-weight: 400;
    font-size: 15px;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 20px;
    margin-bottom: 30px;
  }
`;

const Fieldset = styled.fieldset`
  padding: 0;
  margin: 0;
  border: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    margin-right: 11px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 46px;
  margin-bottom: 18px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #edf2f7;
  padding-left: 14px;
  background: #edf2f7;
  transition: all 300ms;
  color: #374151;
  font-size: 16px;

  &:focus {
    border-color: #0b8aff;
    background-color: #fcfdff;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: #718196;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 120px;
  margin-bottom: 18px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #edf2f7;
  padding: 14px;
  background: #edf2f7;
  transition: all 300ms;
  color: #374151;
  font-size: 16px;
  resize: vertical;

  &:focus {
    border-color: #0b8aff;
    background-color: #fcfdff;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: #718196;
  }
`;

const Button = styled.button<{ isSubmitting: boolean }>`
  margin: 9px 0 0 0;
  border-radius: 8px;
  color: #fff;
  border: 1px solid;
  border-color: ${(props) => (props.isSubmitting ? '#73a4ff' : '#006aff')};
  background-color: ${(props) => (props.isSubmitting ? '#73a4ff' : '#006aff')};
  font-size: 15px;
  width: 120px;
  cursor: pointer;

  img {
    margin-left: 10px;
  }
`;

const SubmissionText = styled.div`
  font-weight: bold;
  margin-top: 27px;
`;

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submissionText, setSubmissionText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message.trim()) {
      setSubmissionText('Please fill out the message.');
      return;
    }

    setIsSubmitting(true);

    let data = {
      email,
      name,
      message,
    };

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res.status, res.body);

        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          alert(`Unable to submit data. Status Code: ${res.status}`);
          return false;
        }
      })
      .then((data) => {
        console.log(data);
        if (!data) {
          setSubmissionText('Something wrong, please again.');
        } else {
          setSubmissionText('Submitted Successfully!');
        }
        setEmail('');
        setName('');
        setMessage('');
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Head>
        <title>Contact - Shift</title>
      </Head>
      <Header />
      <main>
        <Hero className="container">
          <span>Have a Question?</span>
          <h1>We are here to help</h1>
          <p>
            Reach us through any of the mediums below or live chat so the
            support team can get back to you as quickly as possible.
          </p>
        </Hero>
        <InfoSection>
          <InfoContainer className="container">
            <InfoBox href="tel:+1800123456">
              <div>
                <img src="img/contact/hotline.svg" alt="Hotline icon" />
                <h2>Hotline Support</h2>
                <ul>
                  <li>1800 12 3456</li>
                  <li>Mon to Sun</li>
                  <li>9:00am - 9:00pm</li>
                  <li>Toll-free</li>
                </ul>
              </div>
              <div>
                <span>Call Us</span>
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
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="#0070F3"
                  />
                </svg>
              </div>
            </InfoBox>
            <InfoBox href="mailto:contact@shiftstore.com.my">
              <div>
                <img src="img/contact/email.svg" alt="Email icon" />
                <h2>Our Email</h2>
                <ul>
                  <li>contact@shiftstore.com.my</li>
                  <li>Mon to Sun</li>
                  <li>9:00am - 9:00pm</li>
                </ul>
              </div>
              <div>
                <span>Email Us</span>
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
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="#0070F3"
                  />
                </svg>{' '}
              </div>
            </InfoBox>
            <InfoBox
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src="img/contact/messenger.svg" alt="Messenger icon" />
                <h2>WhatsApp</h2>
                <ul>
                  <li>+60 12-345 6789</li>
                  <li>Mon to Sun</li>
                  <li>9:00am - 9:00pm</li>
                </ul>
              </div>
              <div>
                <span>WhatsApp Us</span>
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
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="#0070F3"
                  />
                </svg>{' '}
              </div>
            </InfoBox>
          </InfoContainer>
        </InfoSection>
        <FormSection>
          <div className="container flex-column-center">
            <h2>Contact Form</h2>
            <p>Any question or remarks? Just write us a message!</p>
            <Card>
              <h3>FILL OUT THE FORM BELOW</h3>
              <form onSubmit={handleSubmit}>
                <Fieldset>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    onChange={handleEmailChange}
                    value={email}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </Fieldset>
                <Fieldset>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    onChange={handleNameChange}
                    value={name}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    required
                  />
                </Fieldset>
                <Fieldset>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    onChange={handleMessageChange}
                    value={message}
                    id="message"
                    name="message"
                    placeholder="Leave your questions or comments here"
                    required
                  />
                </Fieldset>
                <Button
                  className="btn--primary"
                  type="submit"
                  isSubmitting={isSubmitting}
                >
                  {isSubmitting ? 'Submitting' : 'Submit'}
                </Button>
              </form>
              {submissionText !== '' && (
                <SubmissionText>{submissionText}</SubmissionText>
              )}
            </Card>
          </div>
        </FormSection>
        <div style={{ backgroundColor: '#f7fafc', padding: '1px 0' }}>
          <div className="breadcrumb container">
            <Link href="/">
              <a>Home</a>
            </Link>
            <img
              className="breadcrumb__arrow"
              src="img/breadcrumb-arrow.svg"
              alt="Right Arrow >"
            />
            <span>Contact</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
