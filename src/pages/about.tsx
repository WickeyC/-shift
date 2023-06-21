import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 0px;
  margin: 40px auto;
  background-image: url('img/about/world.svg');
  background-repeat: no-repeat;
  background-position: 100% 50%;
  background-size: 65%;
  @media screen and (max-width: 1000px) {
    background-size: contain;
    background-position: 50% 10%;
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
    max-width: 880px;
  }
`;

const Separator = styled.div`
  height: 1px;
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.07) 0%,
    rgba(0, 0, 0, 0.16) 51.04%,
    rgba(0, 0, 0, 0.07) 100%
  );
  margin-bottom: 95px;
`;

const NumberGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media screen and (max-width: 1000px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }

  > * {
    &:first-child {
      @media screen and (max-width: 1000px) {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
      }
    }

    &:nth-child(2) {
      @media screen and (max-width: 1000px) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }
    }

    &:nth-child(3) {
      @media screen and (max-width: 1000px) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
    }

    &:nth-child(4) {
      @media screen and (max-width: 1000px) {
        grid-column: 2 / 3;
        grid-row: 3 / 4;
      }
    }

    &:nth-child(5) {
      @media screen and (max-width: 1000px) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }
    }
  }
`;

const NumberDesc = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    color: #0070f3;
    font-size: 18px;
  }

  p {
    color: #0d1537;
    font-size: 24px;
    padding-right: 28px;
  }
`;

const NumberBox = styled.div`
  background-color: #f8f9fc;
  color: #407cf1;
  text-align: center;
  padding: 40px;

  strong {
    font-size: 72px;
    font-weight: 400;

    sub {
      font-size: 20px;
      font-weight: 500;
      bottom: 0;
      letter-spacing: 0;
      margin-left: 10px;
      vertical-align: baseline;
    }
  }

  span {
    margin-top: 25px;
  }
`;

const NumberBoxBlue = styled.div`
  background-color: #407cf1;
  color: #fff;
  text-align: center;
  padding: 40px;

  strong {
    font-size: 72px;
    font-weight: 400;

    sub {
      font-size: 20px;
      font-weight: 500;
      bottom: 0;
      letter-spacing: 0;
      margin-left: 10px;
      vertical-align: baseline;
    }
  }

  span {
    margin-top: 25px;
    color: rgb(255 255 255 / 80%);
  }
`;

const IqooSection = styled.section`
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const IqooPicture = styled.div`
  flex-basis: 50%;

  img {
    width: 100%;
    border-radius: 20px;
  }
`;

const IqooDesc = styled.div`
  flex-basis: 50%;
  padding: 20px 40px;
  @media screen and (max-width: 900px) {
    padding: 20px 0;
  }

  h2 {
    margin-top: 0;
  }

  p {
    font-size: 18px;
    margin-bottom: 35px;
  }

  a {
    width: 149px;
    height: 50px;
    color: #4284fb;
    border: 1px solid;
    border-radius: 40px;
    position: relative;
    overflow: hidden;

    span {
      color: #4284fb;
      position: relative;
      z-index: 1;
      transition: color 0.6s cubic-bezier(0.53, 0.21, 0, 1);
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-101%, -50%);
      width: 100%;
      height: 100%;
      background-color: #4284fb;
      transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
    }

    &:hover {
      span {
        color: #fff;
      }

      &::before {
        transform: translate(0, -50%);
      }
    }
  }
`;

const OfficeSection = styled.section`
  background-color: #00050b;
  padding-top: 97px;
  padding-bottom: 97px;
  margin: auto;
`;

const OfficeContainer = styled.div`
  min-height: 500px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  position: relative;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

const OfficePic = styled.img`
  width: 100%;
  grid-column: 1 / 5;
  grid-row: 1 / 5;
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;

const OfficeDesc = styled.div`
  grid-column: 4 / 9;
  grid-row: 2 / 6;
  padding: 71px 84px;
  background-color: rgb(0 18 31 / 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  * {
    color: #fff;
  }
  h2 {
    margin-top: 0;
  }
  p {
    font-size: 18px;
    color: rgb(255 255 255 / 88%);
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px 0px;
    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
    li {
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
      }
    }
  }
`;

const CtaSection = styled.section`
  padding: 140px 0 90px 0;
`;

const CtaInner = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-right:50px;
  padding-left: 50px;
`;

const CtaBg = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  z-index: -1;
  pointer-events: none;  

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  
  grid-template-rows: 1fr 1fr 1fr 1fr;  

  div:first-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    z-index: -1;
    background-color: #87BBFC;
    transform: skewY(-12deg);
  }
  div:last-child {
    grid-row: 4 / 5;
    grid-column: 3 / 4;
    z-index: -1;
    background-color: #C5F0FF;
    transform: skewY(-12deg);
  }
`;

const CtaBox = styled.div`
  box-shadow: 0px 8px 24px 0px rgb(54 97 174 / 15%);
  border-radius: 10px;
  flex-basis: 413px;
  background-color: #fff;
  padding: 45px 90px;
  text-align: center;

  img {
    width: 76px;
    height: 76px;
  }
  h3 {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 0;
  }
  p {
    margin-bottom: 32px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 207px;

    border: 1px solid #006aff;
    line-height: 50px;
    transition: all 0.3s;

    &:hover {
      background-color: rgb(255 255 255);
      color: #006aff;
    }
  }
`;

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About - Shift</title>
      </Head>
      <Header />
      <main>
        <Hero className="container">
          <span>About Shift</span>
          <h1>The Believer</h1>
          <p>
            Shift is an online &#38; offline store brand officially established on 2020.
            The aspiration of Shift is to provide cutting-edge products with
            an extraordinary shopping experience for everyone.
          </p>
        </Hero>
        <Separator className="container" />
        <section>
          <NumberGrid className="container">
            <NumberDesc>
              <span>Shift in Numbers</span>
              <p>
                Since Shift is founded, we have expanded our business
                exponentially over the years. There are stores in Klang Valley, 
                Johor Bahru and Penang.
              </p>
            </NumberDesc>
            <NumberBox className="flex-column-center">
              <strong>
                3
                <sub>million</sub>
              </strong>
              <span>annual revenue in 2020</span>
            </NumberBox>
            <NumberBoxBlue className="flex-column-center">
              <strong>
                138
                <sub>people</sub>
              </strong>
              <span>working at Shift</span>
            </NumberBoxBlue>
            <NumberBox className="flex-column-center">
              <strong className="value">25K</strong>
              <span className="txt">total orders</span>
            </NumberBox>
            <NumberBoxBlue className="flex-column-center">
              <strong>
                1
                <sub>years old</sub>
              </strong>
              <span>founded in 2020</span>
            </NumberBoxBlue>
          </NumberGrid>
        </section>
        <IqooSection className="container">
          <IqooPicture>
            <picture>
              <source srcSet="img/about/products.png" type="image/png" />
              <img src="img/about/products.png" alt="Products Page" />
            </picture>
          </IqooPicture>
          <IqooDesc>
            <h2>Revamped Design</h2>
            <p>
              Shift online store is getting a revamped design on the website. 
              As part of this celebrition, there are tons of discount available on our products.
            </p>
            <Link href="/products">
              <a className="flex-center">
              <span>View Products</span>
              </a>
            </Link>
          </IqooDesc>
        </IqooSection>
        <OfficeSection>
          <OfficeContainer className="container">
            <OfficePic src="img/about/office.jpg" alt="office" />
            <OfficeDesc>
              <h2>Our Offices</h2>
              <p>
                Aside from headquarter in KL, we also have offices &#38;
                outlets based in many other fast growing cities.
              </p>
              <ul>
                <li>
                  <img
                    src="img/about/office-location.svg"
                    alt="location icon"
                  />
                  Petaling Jaya
                </li>
                <li>
                  <img
                    src="img/about/office-location.svg"
                    alt="location icon"
                  />
                  Johor Bahru
                </li>
                <li>
                  <img
                    src="img/about/office-location.svg"
                    alt="location icon"
                  />
                  Penang
                </li>
                <li>
                  <img
                    src="img/about/office-location.svg"
                    alt="location icon"
                  />
                  Malacca
                </li>
                <li>
                  <img
                    src="img/about/office-location.svg"
                    alt="location icon"
                  />
                  Putrajaya
                </li>
                <li>
                  <img
                    src="img/about/office-location.svg"
                    alt="location icon"
                  />
                  Ipoh
                </li>
              </ul>
            </OfficeDesc>
          </OfficeContainer>
        </OfficeSection>
        <CtaSection>
          <CtaInner className="container">
            <CtaBg>
              <div></div>              
              <div></div>
            </CtaBg>
            <CtaBox className="flex-column-center">
              <img
                src="img/about/career-icon.svg"
                alt="Blue plane illustration icon"
              />
              <h3>Join our team</h3>
              <p>Join us and shape the future of the online retailling.</p>
              <Link href="/careers">
                <a className="btn--primary">View Open Positions</a>
              </Link>              
            </CtaBox>
            <CtaBox className="flex-column-center">
              <img
                src="img/about/news-icon.svg"
                alt="Blue newspaper illustration icon"
              />
              <h3>Our Reviews</h3>
              <p>See what our customers are saying about us.</p>
              <Link href="/reviews">
                <a className="btn--primary">Read Our Reviews</a>
              </Link>
            </CtaBox>
          </CtaInner>
        </CtaSection>
        <div className="breadcrumb container">
          <Link href="/">
            <a>Home</a>
          </Link>
          <img
            className="breadcrumb__arrow"
            src="img/breadcrumb-arrow.svg"
            alt="Right Arrow >"
          />
          <span>About</span>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;