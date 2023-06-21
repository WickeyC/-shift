import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const Hero = styled.div`
  padding: 60px 0;
  background: linear-gradient(
    70deg,
    rgba(244, 244, 255, 1) 0%,
    rgba(243, 254, 255, 1) 100%
  );
  margin-bottom: 80px;

  .hero__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      margin: 0;
      font-size: 36px;
      color: #37383c;
    }
  }
`;

const BenefitContainer = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 300px;
  padding: 30px;
  margin-bottom: 36px;  

  .benefit-img {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 455px;
      height: 282px;
      transition: all 0.6s ease-in-out;
      object-fit: contain;

      &:hover {
        opacity: 1;
        transform: scale(1.05);
      }
    }
  }

  .benefit-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 40px;

    .learnmore {
      background-color: #2272ff;
      border-radius: 25px 25px 25px 25px;
      padding: 15px 30px;
      color: white;
      font-size: 15px;
      box-shadow: 0px 3px 7px #7da9dd;
      transition: all 0.35s ease-in-out;
    }

    .learnmore:hover {
      color: black;
      background-color: #fff;
    }

    @media screen and (max-width: 800px) {
      padding: 20px 0;
    }

    h2 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 28px;
    }

    p {
      font-size: 18px;
      margin-bottom: 35px;
    }
  }

  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;

    &.warranty, &.shipping {
      flex-direction: column-reverse;
    }

    .benefit-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;

const Wave = styled.main`
  padding-bottom: 100px;
`;

const WaveSection = styled.main`
  position: relative;
  margin-top: 110px;

  h1 {
    text-align: center;
    position: relative;
    margin: 0;
    padding-top: 20px;
  }

  .wave {
    width: 100%;
    position: absolute;
    background: url(img/membership/wave.png);
    bottom: 150;
    left: 0;
    width: 100%;
    height: 100px;
    background-size: 1000px 100px;
  }

  .wave.wave1 {
    animation: animate 15s linear infinite;
    z-index: 1000;
    opacity: 1;
    animation-delay: 0s;
    bottom: 0;
  }

  .wave.wave2 {
    animation: animate2 30s linear infinite;
    z-index: 999;
    opacity: 0.5;
    animation-delay: 0s;
    bottom: 0;
  }

  .wave.wave3 {
    animation: animate1 10s linear infinite;
    z-index: 998;
    opacity: 0.3;
    animation-delay: 0s;
    bottom: 0;
  }

  @keyframes animate {
    0% {
      background-position-x: 0;
    }

    100% {
      background-position-x: 1000px;
    }
  }

  @keyframes animate2 {
    0% {
      background-position-x: 0;
    }

    100% {
      background-position-x: -1000px;
    }
  }
`;

const StepsSection = styled.main`
  background-color: #c2deff;
  background-image: linear-gradient(#c2deff, white);
  height: 700px;
  padding-top: 75px;

  @media screen and (max-width: 1080px) {
    height: 2100px;
  }

  @media screen and (max-width: 650px) {
    height: 1700px;
  }
  @media screen and (max-width: 500px) {
    height: 1500px;
  }
`;

const Steps = styled.main`
  div {
    margin-left: 30px;
    padding-right: 50px;
    padding: 1rem 1rem;
    border-radius: 2rem;

    @media screen and (max-width: 1080px) {
      .row {
        display: flex;
        flex-direction: column;
      }

      .steps {
        width: 90%;
        margin-left: 20px;
        margin-right: 0;
        margin-bottom: 60px;
        height: 600px;
      }

      .steps1 {
        width: 90%;
        margin-left: 20px;
        margin-bottom: 60px;
        height: 600px;
      }

      .circle {
        left: 45%;
      }
    }

    @media screen and (max-width: 650px) {
      .row {
        display: flex;
        flex-direction: column;
      }

      .steps {
        width: 90%;
        margin-left: 20px;
        margin-right: 0;
        margin-bottom: 60px;
        height: 450px;
      }

      .steps1 {
        width: 90%;
        margin-left: 20px;
        margin-bottom: 60px;
        height: 450px;
      }

      .circle {
        left: 43%;
      }
    }

    @media screen and (max-width: 500px) {
      .row {
        display: flex;
        flex-direction: column;
      }

      .steps {
        width: 90%;
        margin-left: 10px;
        margin-right: 0;
        margin-bottom: 60px;
        height: 400px;
      }

      .steps1 {
        width: 90%;
        margin-left: 10px;
        margin-bottom: 60px;
        height: 400px;
      }

      .circle {
        left: 40%;
      }
    }
  }
  div img {
    width: 100%;
  }
  .steps1 {
    display: relative;
    float: left;
    background: white;
    width: 30%;
    height: 400px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0;
    box-shadow: 0px 6px 20px #7da9dd;
  }

  .steps {
    display: relative;
    float: left;
    background: white;
    width: 30%;
    height: 400px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0px 6px 20px #7da9dd;
  }

  .circle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    text-align: center;
    font-size: 35px;
    color: white;
    background: #2272ff;
    position: relative;
    top: -50px;
    left: 38%;
    transform: translateX(-50%);
  }

  p {
    text-align: justify;
    width: 100%;
  }
`;

export default function Membership() {
  return (
    <>
      <Head>
        <title>Membership - Shift</title>
      </Head>
      <Header />
      <main>
        <Hero>
          <div className="hero__text container">
            <h1>Membership</h1>
            <p>
              Become a Shift member today and enjoy a wide range of extra
              benefits!
            </p>
          </div>
        </Hero>
        <BenefitContainer className="container">
          <div className="benefit-img">
            <Link href="/contact">
              <a>
                <img src="img/membership/service.png" alt="Service" />
              </a>
            </Link>
          </div>
          <div className="benefit-text">
            <h2>24/7 Customer Service</h2>
            <p>
              Our customer service is always ready to help our members get the
              answers they need. Click the image to contact us or click learn
              more.
            </p>
            <Link href="/contact">
              <a className="learnmore">Learn More</a>
            </Link>
          </div>
        </BenefitContainer>
        <BenefitContainer className="container">
          <div className="benefit-img">
            <Link href="/promotion">
              <a>
                <img src="img/membership/promotion.png" alt="Promotion" />
              </a>
            </Link>
          </div>
          <div className="benefit-text">
            <h2>Promotions</h2>
            <p>
              Be the first to know about our promotions and get weekly updates
              about our new arrivals. Click the image to know more about our
              promotion.
            </p>
            <Link href="/promotion">
              <a className="learnmore">Learn More</a>
            </Link>
          </div>
        </BenefitContainer>
        <BenefitContainer className="container warranty">
          
          <div className="benefit-text">
            <h2>Extended warranty.</h2>
            <p>
              Get 2 years warranty instead of 1 when you sign up for our
              membership.
            </p>
            <Link href="/faq">
              <a className="learnmore">Learn More</a>
            </Link>
          </div>
          <div className="benefit-img">
            <Link href="/faq">
              <a>
                <img src="img/membership/warranty.png" alt="Warranty" />
              </a>
            </Link>
          </div>
        </BenefitContainer>
        <BenefitContainer className="container shipping">
          
          <div className="benefit-text">
            <h2>Free Shipping</h2>
            <p>
              Enjoy free shipping when you sign up as a member and access to
              next-day delivery.
            </p>
            <Link href="/faq#SnD">
              <a className="learnmore">Learn More</a>
            </Link>
          </div>
          <div className="benefit-img">
            <Link href="/faq#SnD">
              <a>
                <img src="img/membership/shipping.jpg" alt="Shipping" />
              </a>
            </Link>
          </div>
        </BenefitContainer>

        <WaveSection>
          <Wave>
            <div>
              <h1>How to sign up?</h1>
              <div className="wave wave1"></div>
              <div className="wave wave2"></div>
            </div>
          </Wave>
        </WaveSection>
        <StepsSection>
          <Steps className="container">
            <div className="row">
              <div className="steps1">
                <div className="circle">1</div>
                <p>
                  Use your mouse or touchpad and scroll up to the top of the
                  page, move your cursor to the icon and click it.
                </p>
                <p>Look below for guidance.</p>
                <img src="img/membership/shift_step1.gif"></img>
              </div>
              <div className="steps">
                <div className="circle">2</div>
                <p>
                  Scroll down and click (Sign up button) or (Sign up with
                  Google) for easier signing up process.
                </p>
                <p>Look below for guidance.</p>
                <img src="img/membership/shift_step2.gif"></img>
              </div>
              <div className="steps">
                <div className="circle">3</div>
                <p>
                  Enter your preferred email, create a unique password and click
                  continue to finish signing up.
                </p>
                <p>Look below for guidance.</p>
                <img src="img/membership/shift_step3.gif"></img>
              </div>
            </div>
          </Steps>
        </StepsSection>
        <div className="breadcrumb container">
          <Link href="/">
            <a>Home</a>
          </Link>
          <img
            className="breadcrumb__arrow"
            src="img/breadcrumb-arrow.svg"
            alt="Right Arrow >"
          />
          <span>Membership</span>
        </div>
      </main>

      <Footer />
    </>
  );
}
