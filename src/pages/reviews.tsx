import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 0px;
  margin: 40px auto;
  background-image: url('img/reviews/reviews-bg.svg');
  background-repeat: no-repeat;
  background-position: 100% 50%;
  background-size: 38%;
  @media screen and (max-width: 1000px) {
    background-size: 50%;
    background-position: 100% 30%;
  }

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
    max-width: 500px;
  }
`;

const AudioSection = styled.section`
  background-color: #f0f0f0;
  padding: 60px 0 130px 0;
  position: relative;
  margin-top: 80px;

  h2 {
    font-size: 28px;
    font-weight: 500;
    color: #37383c;
    margin-bottom: 40px;
  }
`;

const AudioBgLight = styled.div`
  background-color: rgba(240, 240, 240, 0.3);
  transform: skewY(-4deg);
  z-index: -2;
  position: absolute;
  top: -120px;
  right: 0;
  bottom: 0;
  left: 0;
`;

const AudioBgDark = styled.div`
  background-color: #f0f0f0;
  transform: skewY(-4deg);
  z-index: -1;
  position: absolute;
  top: -50px;
  right: 0;
  bottom: 0;
  left: 0;
`;

const AudioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AudioCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 30px;
`;

const AudioCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  max-width: 341px;
  width: 100%;
  height: 381px;
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 100%;
  box-shadow: 10px 10px 20px 5px rgb(0 0 0 / 12%);
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;

  &:first-child {
    background-image: url('img/reviews/audio-card-1.svg');
  }
  &:last-child {
    background-image: url('img/reviews/audio-card-2.svg');
  }
  .audioCard-header {
    display: flex;
    align-items: center;
  }
  .audioCard-pic {
    width: 74px;
    height: 78px;
    margin-right: 22px;
  }
  .audioCard-text {
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin: 0;
    font-weight: 500;
  }
  .audioCard-date {
    margin: 4px 0 10px 0;
    color: #37383c;
  }
  .audioCard-wave {
    bottom: 57px;
    right: 0;
    position: absolute;
    transition: 0.3s transform ease-in;
  }
  audio {
    margin-top: auto;
    width: 100%;
    box-shadow: 1px 1px 10px #4955967f;
    border-radius: 50px;
  }
  audio::-webkit-media-controls-panel {
    background-color: #ffffff;
  }
  &:hover {
    .audioCard-wave {
      transform: scaleY(1.3);
    }
  }
`;

const ChattingSection = styled.section`
  background-color: #00050b;
  h1 {
    color: #fff;
    font-weight: 700;
    font-size: 55px;
  }
`;

const ChattingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 40px;

  .message-bubble-pink {
    transform: translateY(-40px);
    .message-content {
      background-color: #ff6771;
      padding: 30px;
      .testimonial-text {
        color: #fff;
        margin: 0 0 25px 0;
        font-size: 26px;
      }
      .testimonial-person {
        color: #f0f0f0;
        font-size: 20px;
      }
    }
    .message-bubble-bottom {
      display: flex;
      justify-content: flex-end;
      .triangle-top-right {
        margin-top: -2px;
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 51px 54px 0;
        border-color: transparent #ff6771 transparent transparent;
      }
    }
  }
  .message-bubble-white {
    max-width: 90%;
    .message-content {
      background-color: #f0f0f0;
      padding: 30px;
      .testimonial-text {
        color: #010204;
        margin: 0 0 25px 0;
        font-size: 26px;
      }
      .testimonial-person {
        color: #31353d;
        font-size: 20px;
      }
    }
    .message-bubble-bottom {
      display: flex;
      justify-content: flex-start;
      .triangle-top-left {
        margin-top: -2px;
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 51px 54px 0 0;
        border-color: #f0f0f0 transparent transparent transparent;
      }
    }
  }
  .message-bubble-black {
    max-width: 405px;
    transform: translate(-40px, -40px);
    .message-content {
      background-color: #292a2c;
      padding: 30px;
      .testimonial-text {
        color: #ffffff;
        margin: 0 0 25px 0;
        font-size: 26px;
      }
      .testimonial-person {
        color: #f0f0f0;
        font-size: 20px;
      }
    }
    .message-bubble-bottom {
      display: flex;
      justify-content: flex-end;
      .triangle-top-right {
        margin-top: -2px;
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 51px 54px 0;
        border-color: transparent #292a2c transparent transparent;
      }
    }
  }
`;

const ReviewSection = styled.section`
  padding: 80px 0;
  position: relative;

  @keyframes heart-beat {
    0%,
    50%,
    to {
      transform: scale(1);
    }
    65% {
      transform: scale(1.05);
    }
  }
  @keyframes heart {
    0% {
      stroke-dashoffset: 5%;
    }
    to {
      stroke-dashoffset: -100%;
    }
  }
  svg {
    position: absolute;
  }
  h2 {
    font-size: 28px;
    font-weight: 500;
    color: #37383c;
    margin-bottom: 40px;
  }
  a {
    margin-top: 58px;
    width: 135px;
    height: 50px;
    border: 1px solid #006aff;
    line-height: 50px;
    transition: all 0.3s;

    &:hover {
      background-color: rgb(255 255 255);
      color: #006aff;
    }
  }
`;

const ReviewBg = styled.div`
  background-color: #f1f5f9;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 310px;
  transform: skewY(-4deg);
  left: 0;
  height: 420px;
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const ReviewTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

const ReviewGrid = styled.div`
  max-width: 850px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px 50px 50px 50px 100px 100px;
  column-gap: 50px;
`;

const ReviewBox = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 20px 0px #e5e5e5;
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 24px;

  &:nth-child(1) {
    grid-row: 1 / 3;
  }
  &:nth-child(2) {
    grid-row: 2 / 5;
  }
  &:nth-child(3) {
    grid-row: 4 / 7;
  }
  &:nth-child(4) {
    grid-row: 6 / 8;
  }

  .review-top {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 99px;
    height: 19px;
  }

  .review-date {
    color: #828282;
  }
  .review-text {
    color: #37383c;
    font-size: 18px;
    margin-top: 25px;
    line-height: 1.4;
  }
  .review-product {
    margin-top: auto;
    color: #828282;
  }
  .review-person {
    margin-top: 4px;
    color: #000;
  }
`;

const Reviews: React.FC = () => {
  return (
    <>
      <Head>
        <title>Reviews - Shift</title>
      </Head>
      <Header />
      <main>
        <Hero className="container">
          <span>Customer Reviews</span>
          <h1>They know us well.</h1>
          <p>
            Our customers know how good we are, and they've put out their words
            on it.
          </p>
        </Hero>
      </main>
      <AudioSection>
        <AudioBgLight></AudioBgLight>
        <AudioBgDark></AudioBgDark>
        <AudioContainer className="container">
          <h2>Listen to them.</h2>
          <AudioCardWrapper>
            <AudioCard>
              <div className="audioCard-header">
                <img
                  className="audioCard-pic"
                  src="/img/reviews/jane.png"
                  alt="Profile picture of Jane"
                />
                <div className="audioCard-text">
                  <h3>Jane Doe</h3>
                  <span className="audioCard-date">
                    {new Date().toLocaleDateString()}
                  </span>
                  <img src="/img/reviews/stars.svg" alt="5 Start" />
                </div>
              </div>
              <img
                className="audioCard-wave"
                src="img/reviews/wave.svg"
                alt="Audio Wave"
              />
              <audio controls>
                <source src="/audios/jane.mp3" type="audio/mpeg" />
                <a href="/audios/jane.mp3">Download the Audio File</a> (MP3)
              </audio>
            </AudioCard>
            <AudioCard>
              <div className="audioCard-header">
                <img
                  className="audioCard-pic"
                  src="/img/reviews/jason.png"
                  alt="Profile picture of Jason"
                />
                <div className="audioCard-text">
                  <h3>Jason</h3>
                  <span className="audioCard-date">20/08/2021</span>
                  <img src="/img/reviews/stars.svg" alt="5 Start" />
                </div>
              </div>
              <img
                className="audioCard-wave"
                src="img/reviews/wave.svg"
                alt="Audio Wave"
              />
              <audio controls>
                <source src="/audios/jason.mp3" type="audio/mpeg" />
                <a href="/audios/jason.mp3">Download the Audio File</a> (MP3)
              </audio>
            </AudioCard>
          </AudioCardWrapper>
        </AudioContainer>
      </AudioSection>
      <ChattingSection>
        <ChattingGrid className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <h1>
              What people <br />
              are chatting <br />
              about us
            </h1>
          </div>
          <div>
            <div className="message-bubble-pink">
              <div className="box-frame"></div>
              <div className="message-content">
                <p className="testimonial-text">
                  One of the best online store I’ve used to date. The staff is
                  friendly and the service is great. The delivery time is fast
                  as well. The prices are clear and no surprise charges.
                  Everything is perfect.
                </p>
                <div className="testimonial-person">Tan JK</div>
              </div>
              <div className="message-bubble-bottom">
                <div className="triangle-top-right"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="message-bubble-white">
              <div className="box-frame"></div>
              <div className="message-content">
                <p className="testimonial-text">
                  Shift is an awesome website to buy mobile phones. The items
                  are nicely packed for delivery.
                </p>
                <div className="testimonial-person">Faizal Ali</div>
              </div>
              <div className="message-bubble-bottom">
                <div className="triangle-top-left"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="message-bubble-black">
              <div className="box-frame"></div>
              <div className="message-content">
                <p className="testimonial-text">
                  I love the service provided by the support.
                </p>
                <div className="testimonial-person">Janice V</div>
              </div>
              <div className="message-bubble-bottom">
                <div className="triangle-top-right"></div>
              </div>
            </div>
          </div>
        </ChattingGrid>
      </ChattingSection>
      <ReviewSection>
        <ReviewBg></ReviewBg>
        <ReviewContainer>
          <ReviewTitle>
            <svg
              width="142"
              height="128"
              viewBox="0 0 284 256"
              fill="none"
              style={{ animation: 'heart-beat 1.5s ease infinite' }}
            >
              <path
                opacity="0.6"
                d="M252.132 115.661c-17.63 33.016-54.036 85.583-118.204 116.599-74.907-37.624-105.052-90.653-116.966-123.052-6.498-17.67.377-36.398 13.924-49.474 24.957-24.088 64.894-22.75 88.182 2.954l18.489 20.407 25.309-24.428c22.847-22.052 59.409-20.827 80.73 2.705 13.643 15.058 18.107 36.364 8.536 54.289z"
                stroke="url(#line-heart_svg__paint0_linear)"
                stroke-width="6"
                stroke-linecap="round"
                stroke-dasharray="13.52 27.04"
                style={{ animation: 'heart 14s linear infinite' }}
              ></path>
              <defs>
                <linearGradient
                  id="line-heart_svg__paint0_linear"
                  x1="183.5"
                  y1="62"
                  x2="180.421"
                  y2="242.776"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CBD5E0"></stop>
                  <stop
                    offset="0.354"
                    stop-color="#CBD5E0"
                    stop-opacity="0.12"
                  ></stop>
                  <stop
                    offset="0.443"
                    stop-color="#CBD5E0"
                    stop-opacity="0.37"
                  ></stop>
                  <stop offset="1" stop-color="#CBD5E0"></stop>
                  <stop
                    offset="1"
                    stop-color="#CBD5E0"
                    stop-opacity="0.625"
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
            <h2>Real folks, real review.</h2>
          </ReviewTitle>
          <ReviewGrid>
            <ReviewBox>
              <Fade triggerOnce direction="up">
                <div className="review-top">
                  <img src="/img/reviews/stars.svg" alt="5 Start" />
                  <span className="review-date">30/11/2021</span>
                </div>
                <p className="review-text">
                  Nice product! Super fast delivery!
                </p>
                <span className="review-product">vivo X60</span>
                <span className="review-person">by Muhammad Ali</span>
              </Fade>
            </ReviewBox>

            <ReviewBox>
              <Fade triggerOnce direction="up">
                <div className="review-top">
                  <img src="/img/reviews/stars.svg" alt="5 Start" />
                  <span className="review-date">12/09/2021</span>
                </div>
                <p className="review-text">
                  Very smooth shopping experience. It's hassle free to buy.
                </p>
                <span className="review-product">Mi 11 Ultra</span>
                <span className="review-person">by Jack Sparrow</span>
              </Fade>
            </ReviewBox>
            <ReviewBox>
              <Fade triggerOnce direction="up">
                <div className="review-top">
                  <img src="/img/reviews/stars.svg" alt="5 Start" />
                  <span className="review-date">31/08/2021</span>
                </div>
                <p className="review-text">
                  I can’t recommend Shift enough. I like the great service. 👏
                </p>
                <span className="review-product">OPPO Watch 46mm</span>
                <span className="review-person">by Xiao Lan</span>
              </Fade>
            </ReviewBox>
            <ReviewBox>
              <Fade triggerOnce direction="up">
                <div className="review-top">
                  <img src="/img/reviews/stars.svg" alt="5 Start" />
                  <span className="review-date">20/08/2021</span>
                </div>
                <p className="review-text">The customer support is 🔥🔥🔥</p>
                <span className="review-product">HUAWEI Freebuds 4i</span>
                <span className="review-person">by Soya S.</span>
              </Fade>
            </ReviewBox>
          </ReviewGrid>
          <Link href="/products">
            <a className="btn--primary">Shop Now</a>
          </Link>
        </ReviewContainer>
      </ReviewSection>
      <div className="breadcrumb container">
        <Link href="/">
          <a>Home</a>
        </Link>
        <img
          className="breadcrumb__arrow"
          src="img/breadcrumb-arrow.svg"
          alt="Right Arrow >"
        />
        <span>Reviews</span>
      </div>
      <Footer />
    </>
  );
};

export default Reviews;
