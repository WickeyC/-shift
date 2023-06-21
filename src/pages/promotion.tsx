import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const Hero = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 80px;
  height: 400px;

  .bg-image {
    position: absolute;
    z-index: -1;
    background-image: url('img/promotion/background.png');
    background-size: cover;
    background-repeat: no-repeat;

    filter: blur(8px);
    -webkit-filter: blur(8px);
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 700px) {
    height: 100%;
    .hero-content {
      .products {
        padding: 0%;
      }
      .salestag {
        img {
          width: 100%;
          object-fit: contain;
        }
      }
    }
    /* .bg-image {display:none;}
    .hero-content{
      width: 100%;
      background-size: contain;
      background-position: 0% 100%;
      background: linear-gradient(
      99.36deg,
      rgba(121, 151, 255, 0.28) 0.25%,
      rgba(180, 210, 255, 0.67) 100%
      );
    } */
  }

  .hero-content {
    z-index: 1;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    .products {
      flex-basis: 50%;
      min-width: 300px;
      height: 400px;
      display: grid;
      padding: 3%;
      padding-right: 0%;
      grid-template-columns: 40% 20% 40%;
      grid-template-rows: 20% 70% 10%;
      a {
        display: block;
      }
      a #phone,
      a #earphone {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      a:first-child {
        grid-column: 1/3;
        grid-row: 1/3;
      }
      a:nth-child(2) {
        grid-column: 2/4;
        grid-row: 2/4;
      }
      a {
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      a:first-child:hover {
        z-index: 99;
      }
      a:first-child:hover,
      a:nth-child(2):hover {
        transform: scale(110%, 110%);
      }
    }
    .salestag {
      flex-basis: 50%;
      min-width: 300px;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 80%;
        height: 80%;
        object-fit: contain;
      }
    }
  }
`;

const Benefits = styled.div`
  h1 {
    text-align: center;
  }
  hr {
    width: 10%;
  }
  .benefits-container {
    width: 100%;
    position: relative;
    margin: 10px 0 120px;
  }
  .background-container {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    display: grid;
    grid-template-rows: 20% 30% 10% 30% 10%;
    .squareBG {
      background-image: linear-gradient(to right, #eaf8f7, #cef8f7, #eaf8f7);
      transform: skewY(-4.5deg);
    }
    .firstBG {
      grid-row: 2/3;
    }
    .secondBG {
      grid-row: 4/5;
    }
  }
  .benefits-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .benefit {
    height: 140px;
    margin-top: 40px;
    border-radius: 50px;
    background-color: #f4faff;
    box-shadow: 3px 5px 7px rgba(51, 186, 244, 0.41);

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
    padding: 0 5%;
  }
  .imageframe {
    width: 6%;
    min-width: 61px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .vertical-line {
    margin: 0 30px;
    height: 60%;
    width: 2px;
    border-left: 2px solid #abdcf8;
  }
  .description {
    p,
    h2 {
      line-height: 0;
    }
    h2 {
      margin-top: 44px;
    }
    p {
      line-height: 2;
      font-size: 18px;
    }
  }
  @media screen and (min-width: 600px) {
    #benefit_1 {
      width: 80%;
    }
    #benefit_2 {
      width: 70%;
    }
    #benefit_3 {
      width: 90%;
    }
    #benefit_4 {
      width: 80%;
    }
    .benefit {
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    #benefit_4:hover,
    #benefit_3:hover,
    #benefit_2:hover,
    #benefit_1:hover {
      width: 100%;
      transform: scale(102%, 102%);
      box-shadow: 3px 5px 10px 2px rgba(51, 186, 244, 0.41);
    }
  }
`;

const CategorySection = styled.div`
  text-align: center;
  padding: 50px 0 100px 0;

  .item:hover {
    img {
      transform: scale(0.9) translateY(-10px);
    }
    h3 {
      transform: translateY(-45px);
    }
    .hidden {
      opacity: 1;
      transform: translateY(-36px);
      pointer-events: auto;
    }
  }

  .hidden {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    bottom: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: 0.3s all;
    .prices {
      margin-bottom: 15px;
      span:first-child {
        text-decoration: line-through;
        margin-right: 10px;
      }
      span:last-child {
        font-weight: 700;
      }
    }
    .item__btn {
      height: 40px;
      width: 110px;
      text-align: center;
      background-color: rgb(38, 132, 255);
      border-radius: 5px;
      color: rgb(255, 255, 255);
      transition: background-color 0.2s ease-out 0s, box-shadow 0.2s ease-out 0s;
      border: none;
      font-size: 1rem;
      font-weight: 400;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &.light {
    background-color: #eff2f5;

    h2 {
      color: #37383c;
    }
    .item {
      background-color: #fff;
      h3 {
        color: #242933;
      }
    }
  }
  &.dark {
    background-color: #050d21;

    h2 {
      color: #ffffff;
    }
    .item {
      background-color: #2e3341;
      h3 {
        color: #fff;
      }
    }
    .hidden {
      .prices {
        color: #fff;
      }
    }
  }
  h2 {
    margin-bottom: 35px;
  }
  .item-container {
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
  }
  .item {
    position: relative;
    flex: 1;
    border-radius: 25px;
    box-shadow: 0px 4px 20px 0px rgba(111, 128, 155, 0.15);
    height: 450px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 220px;
      height: 220px;
      object-fit: contain;
      margin-bottom: 30px;
      transition: 0.3s transform;
      transform-origin: top;
    }
    h3 {
      font-weight: 500;
      font-size: 20px;
      transition: 0.3s all;
      margin-bottom: 0;
    }
  }
  .check-out-link {
    display: flex;
    justify-content: center;
    margin: 58px auto 0 auto;
    align-items: center;
    font-size: 15px;
    margin-top: 58px;
    width: 180px;
    height: 50px;
    border: 1px solid #006aff;
    transition: all 0.3s;

    &:hover {
      background-color: rgb(255 255 255);
      color: #006aff;
    }
  }
`;

export default function Promotion() {
  return (
    <>
      <Head>
        <title>Promotion - Shift</title>
      </Head>
      <Header />
      <main>
        <Hero>
          <div className="bg-image"></div>
          <div className="hero-content container">
            <div className="products">
              <Link href="/products/phones#iphone-12-pro-max">
                <a title="Buy Iphone 12 Pro Max Now">
                  <img
                    src="/img/promotion/handphone.png"
                    alt="Iphone 12 Pro Max"
                    id="phone"
                  />
                </a>
              </Link>
              <Link href="/products/audio#realme-buds-q2">
                <a
                  title="Buy Realme Buds Q2 Now"
                >
                  <img
                    src="/img/promotion/earphone.png"
                    alt="realme Buds Q2"
                    id="earphone"
                  />
                </a>
              </Link>
            </div>
            <div className="salestag">
              <img src="/img/promotion/salestag.png" alt="sales tag" />
            </div>
          </div>
        </Hero>
        <Benefits>
          <div className="container">
            <h1>What's the Deal?</h1>
            <hr />
          </div>
          <div className="benefits-container">
            <div className="background-container">
              <div className="squareBG firstBG"></div>
              <div className="squareBG secondBG"></div>
            </div>
            <div className="benefits-content container">
              <div className="benefit" id="benefit_1">
                <div className="imageframe">
                  <img src="/img/home/tag.svg" alt="benefits icon" />
                </div>
                <div className="vertical-line"></div>
                <div className="description">
                  <h2>Big Sale</h2>
                  <p>Up to 23% Site-Wide discount </p>
                </div>
              </div>
              <div className="benefit" id="benefit_2">
                <div className="imageframe">
                  <img src="/img/home/phone.svg" alt="benefits icon" />
                </div>
                <div className="vertical-line"></div>
                <div className="description">
                  <h2>Hot Deals</h2>
                  <p>Selling the newest trendy products</p>
                </div>
              </div>
              <div className="benefit" id="benefit_3">
                <div className="imageframe">
                  <img src="/img/home/truck.svg" alt="benefits icon" />
                </div>
                <div className="vertical-line"></div>
                <div className="description">
                  <h2>Free Delivery</h2>
                  <p>Free of charge and fast shipping</p>
                </div>
              </div>
              <div className="benefit" id="benefit_4">
                <div className="imageframe">
                  <img src="/img/home/calendar.svg" alt="benefits icon" />
                </div>
                <div className="vertical-line"></div>
                <div className="description">
                  <h2>Installment Plan</h2>
                  <p>12 months installment plan with 0% charge</p>
                </div>
              </div>
            </div>
          </div>
        </Benefits>
        <CategorySection className="light">
          <h2>Phones</h2>
          <div className="item-container container">
            <div className="item">
              <img
                src="/img/products/phones/iphone-12-pro-max.png"
                alt="iPhone 12 Pro Max"
              />
              <h3>iPhone 12 Pro Max</h3>
              <div className="hidden">
                <div className="prices">
                  <span>RM5299</span>
                  <span>RM4899</span>
                </div>
                <Link href="/products/phones#iphone-12-pro-max">
                  <a className="item__btn">View Deals</a>
                </Link>
              </div>
            </div>
            <div className="item">
              <img src="/img/products/phones/vivo-x60.png" alt="vivo X60" />
              <h3>vivo X60</h3>
              <div className="hidden">
                <div className="prices">
                  <span>RM2799</span>
                  <span>RM2520</span>
                </div>
                <Link href="/products/phones#vivo-x60">
                  <a className="item__btn">View Deals</a>
                </Link>
              </div>
            </div>
            <div className="item">
              <img
                src="/img/products/phones/oppo-find-x3-pro.png"
                alt="OPPO Find X3 Pro"
              />
              <h3>OPPO Find X3 Pro</h3>
              <div className="hidden">
                <div className="prices">
                  <span>RM4299</span>
                  <span>RM4099</span>
                </div>
                <Link href="/products/phones#oppo-find-x3-pro">
                  <a className="item__btn">View Deals</a>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/products/phones">
            <a className="btn--primary check-out-link">Check Out More</a>
          </Link>
        </CategorySection>
        <CategorySection className="dark">
          <h2>Wearables</h2>
          <div className="item-container container">
            <div className="item">
              <img
                src="/img/products/wearables/huawei-watch-3.png"
                alt="HUAWEI Watch 3"
              />
              <h3>HUAWEI Watch 3</h3>
              <div className="hidden">
                <div className="prices">
                  <span>RM1699</span>
                  <span>RM1529</span>
                </div>
                <Link href="/products/wearables#huawei-watch-3">
                  <a className="item__btn">View Deals</a>
                </Link>
              </div>
            </div>
            <div className="item">
              <img
                src="/img/products/wearables/oppo-watch-46mm.png"
                alt="OPPO Watch 46mm"
              />
              <h3>OPPO Watch 46mm</h3>
              <div className="hidden">
                <div className="prices">
                  <span>RM1299</span>
                  <span>RM999</span>
                </div>
                <Link href="/products/wearables#oppo-watch-46mm">
                  <a className="item__btn">View Deals</a>
                </Link>
              </div>
            </div>
            <div className="item">
              <img
                src="/img/products/wearables/realme-watch-2-pro.png"
                alt="realme Watch 2 Pro"
              />
              <h3>realme Watch 2 Pro</h3>
              <div className="hidden">
                <div className="prices">
                  <span>RM299</span>
                  <span>RM272</span>
                </div>
                <Link href="/products/wearables#realme-watch-2-pro">
                  <a className="item__btn">View Deals</a>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/products/wearables">
            <a className="btn--primary check-out-link">Check Out More</a>
          </Link>
        </CategorySection>
        <CategorySection className="light">
          <h2>Audio</h2>
          <div className="item-container container">
            <div className="item">
              <img
                src="/img/products/audio/oppo-enco-buds.png"
                alt="OPPO Enco Buds"
              />
              <h3>OPPO Enco Buds</h3>
              <div className="hidden">
                <div className="prices">
                  <span>RM99</span>
                  <span>RM89</span>
                </div>
                <Link href="/products/audio#oppo-enco-buds">
                  <a className="item__btn">View Deals</a>
                </Link>
              </div>
            </div>
            <div className="item">
              <img
                src="/img/products/audio/vivo-tws-neo.png"
                alt="vivo TWS neo"
              />
              <h3>vivo TWS neo</h3>
              <div className="hidden">
                <div className="prices">
                  <span>RM420</span>
                  <span>RM395</span>
                </div>
                <Link href="/products/audio#vivo-tws-neo">
                  <a className="item__btn">View Deals</a>
                </Link>
              </div>
            </div>
            <div className="item">
              <img
                src="/img/products/audio/realme-buds-q2.png"
                alt="realme Buds Q2"
              />
              <h3>realme Buds Q2</h3>
              <div className="hidden">
                <div className="prices">
                  <span>RM140</span>
                  <span>RM129</span>
                </div>
                <Link href="/products/audio#realme-buds-q2">
                  <a className="item__btn">View Deals</a>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/products/audio">
            <a className="btn--primary check-out-link">Check Out More</a>
          </Link>
        </CategorySection>
        <div className="breadcrumb container">
          <Link href="/">
            <a>Home</a>
          </Link>
          <img
            className="breadcrumb__arrow"
            src="img/breadcrumb-arrow.svg"
            alt="Right Arrow >"
          />
          <span>Promotion</span>
        </div>
      </main>
      <Footer />
    </>
  );
}
