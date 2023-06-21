import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Hero = styled.div`
  display: grid;
  grid-template-columns: 5% 45% 45% 5%;
  grid-template-rows: 560px 350px 175px 175px;
  max-width: 1550px;
  max-height: 1260px;
  margin: 50px auto;
  overflow: hidden;

  .heroImage {
    grid-column: 2/3;
    grid-row: 1/3;
    width: 100%;
    max-width: 555px;
    aspect-ratio: 555 / 835;
    object-fit: cover;
    margin: 0px auto;
  }

  .heroContent {
    grid-column: 3/4;
    grid-row: 1/2;
  }

  #heroTitle {
    margin: 80px 20px 0px 50px;
    h1 {
      font-size: 72px;
      margin: 0;
    }
    #title1 {
      text-align: left;
    }
    #title2 {
      text-align: right;
    }
  }

  @media screen and (max-width: 1151px) {
    .heroContent {
      padding-left: 5%;
    }
    #heroTitle {
      margin-left: 5%;
      h1 {
        font-size: 50px;
      }
    }
  }

  #shopNow {
    margin: 100px auto 40px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    border: 5px solid #485bff;
    width: 355px;
    height: 85px;
    z-index: 0;
    h1 {
      grid-column: 1/2;
      grid-row: 1/2;
      z-index: 2;
      color: #485bff;
      margin-top: 15px;
      font-size: 48px;
      font-weight: 600;
      text-align: center;
    }
    div {
      grid-column: 1/2;
      grid-row: 1/2;
      z-index: 1;
      transform: translate(10px, 10px);
      background-color: #d3e7f9;
    }

    &,
    & div,
    & h1 {
      transition: all ease 0.4s;
    }

    &:hover {
      box-shadow: 4px 4px 10px 7px rgb(3 169 245 / 30%);
      transform: translateY(-10px) skewY(-1deg);
      cursor: pointer;
      div {
        background-color: #485bff;
        transform: unset;
      }
      background-color: #485bff;
      h1 {
        color: #ffffff;
        margin-top: 10px;
      }
    }
    &:active {
      box-shadow: 0px 0px 10px 7px rgb(3 169 245 / 50%);
      transform: scale(95%, 95%);
    }
  }

  .heroLine {
    grid-column: 3 / 4;
    grid-row: 2 / 4;
    width: 50%;
    height: 90%;
    margin-bottom: 5%;
    border-right: 1.5px solid rgb(35 35 35 / 50%);
  }
  .heroFooterImage {
    grid-column: 1 / 5;
    grid-row: 3 / 5;
    background-image: url("img/home/skew_background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -9;
    opacity: 0.2;
    filter: blur(3px);
    -webkit-filter: blur(3px);
  }
  .heroFooter {
    grid-column: 2 / 4;
    grid-row: 3 / 5;
    display: flex;
    align-items: center;
    #Text {
      flex: 100%;
      margin-right: 33%;
      h1 {
        text-align: right;
        font-size: 72px;
        margin: 0px;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200%;
        background-position: 0%;
      }
    }
    @keyframes animatedText {
      from {
        background-position: 0%;
      }
      to {
        background-position: 100%;
      }
    }
    #trends {
      background-image: linear-gradient(90deg, #007cf0, #00dfd8, black);
      animation: animatedText 4s infinite alternate-reverse;
      -webkit-animation: animatedText 4s infinite alternate-reverse;
    }
    #technology {
      background-image: linear-gradient(90deg, black, black);
      /* background-image: linear-gradient(
        90deg,
        #7928CA,
        #FF0080,
        black
      );
      animation-delay: 8s;
      --webkit-animation-delay:8s;
      animation: animatedText 16s infinite alternate-reverse;
      -webkit-animation: animatedText 16s infinite alternate-reverse; */
    }
    #quality {
      background-image: linear-gradient(90deg, black, black);
      /* background-image: linear-gradient(
        90deg,
        #FF4D4D,
        #F9CB28,
        black
      );
      animation-delay: 16s;
      --webkit-animation-delay: 16s;
      animation: animatedText 16s infinite alternate-reverse;
      -webkit-animation: animatedText 16s infinite alternate-reverse; */
    }
  }
`;

const StyledSearchBar = styled.form`
  margin: 0px auto 57px;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  display: flex;
  max-width: 230px;
  max-height: 36px;
  width: 100%;

  label {
    display: none;
  }

  .searchbar__input {
    background-color: #fff;
    line-height: 1.5rem;
    max-width: 195px;
    width: 100%;
    border: 1px solid #c5c7d0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: 0;
    padding: 11px 12px;
    transition: all 0.2s ease-out 0s;
    font-size: 14px;

    &:hover {
      border-color: rgb(123, 123, 124);
    }

    &:focus {
      border-color: #2684ff;
      background-color: #fff;
      outline: none;
    }
  }

  .searchbar__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background-color: #485bff;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #3246ff;

      svg {
        transform: scale(1.2) rotate(-15deg);
      }
    }
    svg {
      height: 1.15rem;
      width: 1.15rem;
      transition: 0.3s transform cubic-bezier(0.46, -0.275, 0.59, 1.25);
    }
  }
`;
const Review = styled.div`
  .review-section {
    margin: 100px 0 10px 0;
    background-image: linear-gradient(#e7fcff, #fff);
    padding-bottom: 40px;
  }

  .review-content-wrapper {
    position: relative;
    width: 80%;
  }

  .card-front {
    display: grid;
    grid-template-columns: 33% 70%;
    grid-template-rows: 100%;
    max-height: 350px;
    margin: 0 5% 5%;
    background-color: #fff;
    box-shadow: 0 0 10px 4px rgb(0 0 0 / 13%);
    overflow: hidden;
  }

  .customer_pic {
    grid-column: 1/2;
    grid-row: 1/2;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .customer_review {
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin: 2% 10%;
    h1 {
      font-size: 32px;
      font-weight: 500;
    }
    p {
      margin-right: 15%;
    }
    p span {
      color: #000;
    }
    a {
      align-self: flex-end;
      display: block;
      margin: 3% 5%;
      width: 135px;
      height: 50px;
      border: 1px solid #006aff;
      background-color: #fff;
      color: #006aff;
      border-radius: 50px;
      line-height: 50px;
      transition: all 0.3s;

      &:hover {
        background-color: rgb(255 255 255);
        background-color: #006aff;
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 870px) {
    .customer_review {
      p {
        margin-right: 0;
      }

      a {
        align-self: flex-end;
        display: block;
        margin: 3% 5%;
        width: 135px;
        height: 50px;
        border: 1px solid #006aff;
        background-color: #fff;
        color: #006aff;
        border-radius: 50px;
        line-height: 50px;
        transition: all 0.3s;

        &:hover {
          background-color: rgb(255 255 255);
          background-color: #006aff;
          color: #fff;
        }
      }
    }
  }

  @media screen and (max-width: 780px) {
    .customer_review {
      h1 {
        font-size: 24px;
        margin-bottom: 0;
      }
    }
  }

  .card-back {
    position: absolute;
    z-index: -99;
    width: 95%;
    height: 300px;
    max-height: 75%;
    margin-top: 3%;
    background-color: #fff;
    box-shadow: 0 0 10px 4px rgb(0 0 0 / 13%);
  }

  .gallery {
    background-image: linear-gradient(#e7fcff, #fff);
    width: 90%;
    max-width: 1126px;
    margin: auto;
  }

  .gallery-cell {
    width: 100%;
    height: 480px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* position dots in carousel */
  .flickity-page-dots {
    bottom: 40px;
  }
  /* white circles */
  .flickity-page-dots .dot {
    width: 10px;
    height: 10px;
    opacity: 1;
    background: transparent;
    background: rgb(0 0 0 / 10%);
  }
  /* fill-in selected dot */
  .flickity-page-dots .dot.is-selected {
    background: rgb(0 0 0 / 30%);
  }
`;

const HrLine = styled.div`
  margin: 0 auto;
  width: 2px;
  height: 160px;
  border-right: 1.5px solid rgb(35 35 35 / 50%);
`;

const Promotion = styled.div`
  margin: 60px auto 80px;
  img {
    display: block;
    margin: 0 auto;
  }

  .promoSection {
    margin: 0 auto;
    width: 90%;
    max-width: 1515px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .promoBox {
    min-width: 400px;
    min-height: 400px;
    margin: 100px 20px 0;
    flex-basis: 30%;
    box-shadow: 0 0 10px 4px rgb(0 0 0 / 13%);
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    hr {width:20%;}
  }
  #firstBox {
    background-color: #f0faff;
  }
  #thirdBox {
    background-color: #def8f6;
  }
  #secondBox {
    background-color: #e8f7fd;
    text-align: center;

    div {
      border-radius: 50%;
      background-color: #B5DBE8;
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 55%;
        height: 55%;
        object-fit: contain;
      }
    }
    span {color:black;
    font-weight:700;}
  }
  #firstBox,#thirdBox {
    a {
      display: block;
      width: 50%;
      height: 50%;
      margin-bottom: 24px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    a:hover {
      img {
        transform: scale(110%,110%);
      }
    }
    .prices {
      margin: 20px 0 15px;
      span:first-child {
        text-decoration: line-through;
        margin-right: 10px;
      }
      span:last-child {
        font-weight: 700;
      }
    }
  }
  
  #secondBox:hover {transform: translateY(-20px);}


  #seePromo {
    margin: 0 auto 40px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    border: 5px solid #485bff;
    width: 355px;
    height: 85px;
    z-index: 0;
    h1 {
      grid-column: 1/2;
      grid-row: 1/2;
      z-index: 2;
      color: #485bff;
      margin-top: 15px;
      font-size: 48px;
      font-weight: 600;
      text-align: center;
    }
    div {
      grid-column: 1/2;
      grid-row: 1/2;
      z-index: 1;
      transform: translate(10px, 10px);
      background-color: #d3e7f9;
    }

    &,
    & div,
    & h1 {
      transition: all ease 0.4s;
    }

    &:hover {
      box-shadow: 4px 4px 10px 7px rgb(3 169 245 / 30%);
      transform: translateY(-10px) skewY(-1deg);
      cursor: pointer;
      div {
        background-color: #485bff;
        transform: unset;
      }
      background-color: #485bff;
      h1 {
        color: #ffffff;
        margin-top: 10px;
      }
    }
    &:active {
      box-shadow: 0px 0px 10px 7px rgb(3 169 245 / 50%);
      transform: scale(95%, 95%);
    }
  }
`;
const ProductsCategories = styled.div`
  width: 100%;
  max-width: 1520px;
  overflow: hidden;
  margin: auto;
  .hrLine {
    margin: 85px auto;
    width: 2px;
    height: 160px;
    border-right: 1.5px solid rgb(35 35 35 / 50%);
  }
  h1 {
    font-size: 72px;
    margin: 85px 0 -15px;
    text-align: center;
  }
  p {
    font-size: 24px;
    margin-bottom: 75px;
    text-align: center;
  }
  #imageframe {
    max-width: 800px;
    margin: 0 auto 100px;
  }
  img {
    max-width: 800px;
  }
`;

const Welcome = styled.div`
  margin: auto;
  width: 50%;
  max-width: 800px;
  h1 {
    font-size: 72px;
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
    text-align: right;
    font-size: 24px;
  }
`;

const Backtotop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 150px;
  .toTop {
    margin-left: 40%;
    margin-top: -40px;
    width: 200px;
    display: flex;
    flex-direction: row;
  }
  img {
    width: 42px;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  img:hover {
    transform: scale(120%, 120%) skewX(4deg) translateY(10px);
  }
  img:active {
    transform: scale(95%, 95%) translateY(20px) skewX(0deg);
  }
  p {
    margin-left: 20px;
    font-size: 24px;
  }
`;

const Careers = styled.div`
  height: 550px;
  background-color: black;
  overflow: hidden;
  .career-section {
    margin: 0 auto;
    max-width: 1515px;
    position: relative;
    display: flex;
  }
  img {
    position: absolute;
    display: block;
    margin: 0 auto;
    width: 1515px;
    object-fit: cover;
    filter: blur(4px);
    opacity: 0.5;
  }
  .innerBox {
    z-index: 1;
    margin: 170px auto 130px;
    width: 90%;
    max-width: 775px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1,
    p {
      color: white;
      text-align: center;
    }
    p {
      font-size: 24px;
    }
    button {
      margin-top: 40px;
      width: 157px;
      height: 55px;
      background-color: #d7daee;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s,
        0.3s transform cubic-bezier(0.46, -0.275, 0.59, 1.25);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      &:hover {
        background-color: #ffffff;
        transform: scale(1.1);

        svg {
          transform: scale(1.2) rotate(-15deg);
        }
      }
      svg {
        margin-left: 3px;
        height: 1.2rem;
        width: 1.2rem;
        transition: 0.3s transform cubic-bezier(0.46, -0.275, 0.59, 1.25);
      }
      p {
        margin-right: 3px;
        color: black;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
`;

const Subscription = styled.div`
  height: 100%;

  background-color: black;
  .subscription-section {
    height: 500px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 1126px;
  }
  .formsection {
    flex-basis: 50%;
    h1,
    p,
    label {
      color: white;
    }
    h1 {
      font-weight: 500;
    }
    & > p,
    label {
      font-weight: 300;
    }
    span {
      color: #00a3ff;
    }
    input,
    button {
      border: unset;
      background-color: unset;
      padding: unset;
      transition: all 300ms;
    }
    #email {
      padding-bottom: 10px;
      border-bottom: 1px solid #c1c1c1;
      width: 80%;
      margin-bottom: 30px;
      color: white;
      &:focus {
        outline: none;
        border-bottom: 1px solid#00a3ff;
      }
    }
    #subscribe {
      width: 125px;
      height: 42px;
      padding: 0 10px;
      border: 1px solid white;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-around;
      img {
        transform: scale(120%, 120%);
      }
      p {
        color: white;
        line-height: 0;
      }
      img,
      p,
      & {
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      &:hover {
        border: 1px solid #00a3ff;
        box-shadow: 0px 0px 10px 2px rgb(3 169 245 / 30%);
        transform: scale(105%, 105%);
        img {
          transform: scale(140%, 140%);
        }
        p {
          font-weight: 700;
        }
      }
      &:active {
        transform: unset;
      }
    }
  }
  .imgsection {
    img {
      max-width: 500px;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 1128px) {
    .subscription-section {
      height: 700px;
      justify-content: center;
    }
    .formsection {
      flex-basis: 100%;
      #email {
        min-width: 350px;
        width: 40%;
      }
    }
  }
  @media screen and (min-width: 1128px) {
    .formsection > p {
      padding-right: 100px;
    }
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
        <meta name="viewport" content="width=device-width" />
        <meta charSet="utf-8" />
        <title>Home - Shift</title>
      </Head>
      <Header />
      <main>
        <Hero>
          <img
            className="heroImage"
            src="/img/home/hero_image.jpg"
            alt="Hero Image"
          />
          <div className="heroContent">
            <div id="heroTitle">
              <h1 id="title1">One Stop.</h1>
              <h1 id="title2">All Brands.</h1>
            </div>
            <a href="/products" title="Shop Now" id="shopNow">
                <h1>Shop Now</h1>
                <div></div>
            </a>
          </div>
          <div className="heroLine"></div>
          <div className="heroFooterImage"></div>
          <div className="heroFooter">
            <div id="Text">
              <h1 id="trends">Trends.</h1>
              <h1 id="technology">Technology.</h1>
              <h1 id="quality">Quality.</h1>
            </div>
          </div>
        </Hero>
        <Review>
          <section className="review-section">
            <div
              className="gallery js-flickity"
              data-flickity-options='{ "wrapAround": true }'
            >
              <div className="gallery-cell">
                <div className="review-content-wrapper">
                  <div className="card-front">
                    <div className="customer_pic">
                      <img src="/img/home/customer_1.jpg" alt="Jasmine" />
                    </div>
                    <div className="customer_review">
                      <h1>Trusted by the Crowds</h1>
                      <p>
                        <span>Jasmine</span>
                        <br /> <br />
                        Incredible services and amazing customer support. Find
                        your dream gadgets with lowest price guaranteed in here.
                      </p>
                      <Link href="/reviews">
                        <a className="btn--primary">More Reviews</a>
                      </Link>
                    </div>
                  </div>
                  <div className="card-back"></div>
                </div>
              </div>

              <div className="gallery-cell">
                <div className="review-content-wrapper">
                  <div className="card-front">
                    <div className="customer_pic">
                      <img src="/img/home/customer_2.jpg" alt="Ada Wong" />
                    </div>
                    <div className="customer_review">
                      <h1>Comments from the Public</h1>
                      <p>
                        <span>Jackson Wang</span>
                        <br /> <br />
                        Get Latest Online Gadgets at Shift where you can get
                        latest releases of phones, audio devices, and much more
                        equipment at affordable prices.
                      </p>
                      <Link href="/reviews">
                        <a className="btn--primary">More Reviews</a>
                      </Link>
                    </div>
                  </div>
                  <div className="card-back"></div>
                </div>
              </div>

              <div className="gallery-cell">
                <div className="review-content-wrapper">
                  <div className="card-front">
                    <div className="customer_pic">
                      <img src="/img/home/customer_3.jpg" alt="Ada Wong" />
                    </div>
                    <div className="customer_review">
                      <h1>What They Think</h1>
                      <p>
                        <span>Ada Wong</span>
                        <br /> <br />
                        Delivering excitement, innovation and freshness, Shift
                        promises to offer an exquisite range of tech products
                        and brings customers the latest devices and accessories.
                      </p>
                      <Link href="/reviews">
                        <a className="btn--primary">More Reviews</a>
                      </Link>
                    </div>
                  </div>
                  <div className="card-back"></div>
                </div>
              </div>
            </div>
          </section>
        </Review>
        <HrLine />
        <Promotion>
          <img src="/img/logo.svg" alt="Shift logo" />
          <div className="promoSection">
            <div className="promoBox" id="firstBox">
              <a href="/products/phones#iphone-12-pro-max" title="Iphone 12 Pro Max">
              <img src="/img/products/phones/iphone-12-pro-max.png" alt="Iphone 12 Pro Max" />
              </a>
              <hr />
              <div className="prices">
                  <span>RM5299</span>
                  <span>RM4899</span>
              </div>
            </div>
            <div className="promoBox" id="secondBox">
              <div>
                <img src="/img/home/tag.svg" alt="promotion" />
              </div>
              <h1>Site-Wide Promo</h1>
              <hr />
              <p>Limited time offer<br />save up to 
              <span> 23%</span> off</p>
            </div>
            <div className="promoBox" id="thirdBox">
              <a href="/products/wearables#oppo-watch-46mm" title="OPPO Watch 46mm">
              <img src="/img/products/wearables/oppo-watch-46mm.png" alt="Oppo Watch 46mm" />
              </a>
              <hr />
              <div className="prices">
                  <span>RM1299</span>
                  <span>RM999</span>
              </div>
            </div>
          </div>
          
              <a href="/promotion" title="Promotion" id="seePromo">
                <h1>See More</h1>
                <div></div>
              </a>

        </Promotion>
        <HrLine />
        <ProductsCategories>
          <h1>What’s in the Stock</h1>
          <p>Discover the Categories</p>
          <div id="imageframe">
            <img
              src="/img/home/products_categories.jpg"
              alt="ProductsCategories"
              useMap="#prodcategories"
            />
          </div>
          <map id="prodcategories" name="prodcategories">
            <area
              alt="wearables"
              title="wearables"
              href="/products/wearables"
              coords="195,66,239,69,243,73,236,240,245,246,248,255,253,261,251,274,246,280,245,319,239,329,232,334,229,347,232,355,178,353,181,344,181,333,176,322,169,312,171,252,177,241,186,236,187,176,189,150,191,134"
              shape="poly"
            ></area>
            <area
              alt="phones"
              title="phones"
              href="/products/phones"
              coords="322,65,440,63,454,73,460,84,459,138,462,147,462,171,457,177,458,346,453,364,441,372,398,373,389,369,371,371,363,377,320,373,310,365,302,346,302,181,300,165,303,158,301,150,301,133,305,124,303,111,303,101,305,85,311,74"
              shape="poly"
            ></area>
            <area
              alt="audio"
              title="audio"
              href="/products/audio"
              coords="597,22,656,27,665,31,673,39,673,54,667,122,662,132,652,140,640,141,591,140,579,134,574,123,578,41,585,30"
              shape="poly"
            ></area>
            <area
              alt="audio"
              title="audio"
              href="/products/audio"
              coords="554,183,564,184,571,189,577,196,577,207,570,215,561,216,559,226,578,263,577,268,570,273,563,265,543,224,538,208,539,195,545,188"
              shape="poly"
            ></area>
            <area
              alt="audio"
              title="audio"
              href="/products/audio"
              coords="650,196,661,202,665,211,662,231,648,249,618,279,609,275,608,267,622,250,641,231,631,223,628,210,632,200,641,196"
              shape="poly"
            ></area>
          </map>
        </ProductsCategories>
        <Welcome>
          <HrLine />
          <h1>Welcome to Shift</h1>
          <p>Make yourself at home.</p>
          <HrLine />
        </Welcome>
        <Careers>
          <section className="career-section">
            <img src="/img/home/KL_night.jpg" alt="KL night" />
            <div className="innerBox">
              <h1>Join the Crew</h1>
              <p>
                At Shift, we focus on the details of everything we do.
                <br /> We are looking for passionate people who embrace
                professionalism in delivering of high quality services.
              </p>
              <button onClick={() => (window.location.href = "/careers")}>
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
                    d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                    fill="#000"
                  />
                </svg>
                <p>Work at shift</p>
              </button>
            </div>
          </section>
        </Careers>
        <Backtotop>
          <HrLine />
          <div className="center">
            <div className="toTop">
              <a href="#" title="To The Moon">
                <img src="/img/favicon.svg" alt="logo" />
              </a>
              <p>Back to top</p>
            </div>
          </div>
        </Backtotop>
        <Subscription>
          <section className="subscription-section container">
            <div className="formsection">
              <h1>Stay in the loop</h1>
              <p>
                Subscribe to our mailing list to get the latest news and stories
                directly in your inbox.
              </p>
              <br /> <br />
              <form
                action="https://tarc.us5.list-manage.com/subscribe/post?u=e64a92bec73ebdb4eecbdca9e&amp;id=b1cf40a9c4"
                method="POST"
                name="mc-embedded-subscribe-form"
              >
                <label htmlFor="email">
                  Email Address <span>*</span>
                </label>
                <br /> <br />
                <input
                  type="email"
                  id="email"
                  name="EMAIL"
                  placeholder="Type email address"
                  required
                />
                <br /> <br />
                <button id="subscribe" type="submit" name="subscribe">
                  <img src="/img/home/subscribe.svg" alt="pin" />
                  <p>Subscribe</p>
                </button>
              </form>
            </div>
            <div className="imgsection">
              <img src="/img/home/vector_image.svg" alt="mail image" />
            </div>
          </section>
        </Subscription>
      </main>
      <Footer />
    </>
  );
}
