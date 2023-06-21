import Link from 'next/link';
import styled from 'styled-components';

const CtaContainer = styled.div`
  padding: 50px 0 90px 0;
`;

const CtaInner = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-right: 50px;
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
    background-color: #87bbfc;
    transform: skewY(-12deg);
  }
  div:last-child {
    grid-row: 4 / 5;
    grid-column: 3 / 4;
    z-index: -1;
    background-color: #c5f0ff;
    transform: skewY(-12deg);
  }
`;

const CtaBox = styled.div`
  box-shadow: 0px 8px 24px 0px rgb(54 97 174 / 15%);
  border-radius: 10px;
  flex-basis: 413px;
  background-color: #fff;
  padding: 40px 20px;
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

const NeedSomeHelp: React.FC = () => {
  return (
    <section>
      <div
        style={{
          marginTop: 100,
        }}
      >
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            style={{
              marginRight: 20,
            }}
            src="/img/cart/need-some-help.svg"
            alt="Help icon"
          />
          Need some help?
        </h2>
      </div>
      <CtaContainer>
        <CtaInner>
          <CtaBg>
            <div></div>
            <div></div>
          </CtaBg>
          <CtaBox className="flex-column-center">
            <img
              src="img/cart/contact-icon.svg"
              alt="Blue plane illustration icon"
            />
            <h3>Let us help you.</h3>
            <p>
              If you have any questions regarding your purchase, you can reach
              our support team at any time.
            </p>
            <Link href="/contact">
              <a className="btn--primary">Reach Us Now</a>
            </Link>
          </CtaBox>
          <CtaBox className="flex-column-center">
            <img
              src="img/cart/faq-icon.svg"
              alt="Blue newspaper illustration icon"
            />
            <h3>We’ve got answers.</h3>
            <p>
              Explore our FAQ section for commonly asked questions and get
              comprehensive answers there.
            </p>
            <Link href="/faq">
              <a className="btn--primary">Read Our FAQ</a>
            </Link>
          </CtaBox>
        </CtaInner>
      </CtaContainer>
    </section>
  );
};

export default NeedSomeHelp;
