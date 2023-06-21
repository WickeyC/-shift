import styled from "styled-components";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import toast from "react-hot-toast";
import React, { useState, useRef } from "react";
import { Fade } from 'react-awesome-reveal';

const Hero = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 60px 0px 260px;
  margin: 40px auto;
  background-image: url("img/outlets/city.svg");
  background-repeat: no-repeat;
  background-position: 0% 100%;
  @media screen and (max-width: 1000px) {
    background-size: contain;
    background-position: 0% 100%;
  }

  h1 {
    flex: 100%;
    text-align: center;
    color: #37383c;
    font-weight: 700;
    font-size: 55px;
  }

  p {
    flex: 100%;
    color: #4c596a;
    text-align: right;
    margin: 0 0 0 25%;
    font-size: 24px;
    line-height: 200%;
  }
  @media screen and (max-width: 800px) {
    p {
      font-size: 15px;
    }
  }
`;

const Table = styled.div`
  margin: 150px auto;

  table {
    margin: auto;
    border-collapse: collapse;
    box-shadow: 0 2px 27px 7px rgb(3 169 245 / 13%);
    border-radius: 10px;
    color: #666;
    text-align: center;
  }

  tbody tr:nth-of-type(2n) {
    background-color: aliceblue;
  }

  th,
  td {
    font-size: 15px;
  }

  th {
    border-bottom: 1px solid rgb(3 169 245 / 20%);
    padding: 25px 20px;
  }

  td {
    padding: 45px 20px;
  }

  .address {
    max-width: 600px;
    display: grid;
    grid-template-columns: 9fr 1fr;
    p {
      grid-column: 1 / 2;
      margin: 0;
      text-align: left;
      color: #888;
      transition: color 0.4s;
    }
    img {
      grid-column: 2 / 3;
      margin: auto;
      max-height: 17px;
      aspect-ratio: 30 / 35;
      object-fit: contain;
      opacity: 0.2;
      transition: opacity 0.4s;
    }

    :hover {
      cursor: pointer;
      p {
        color: #666;
        transition: transform 0.2s;
      }
      img {
        opacity: 0.5;
        transition: transform 0.2s;
      }
    }

    :active {
      p {
        transform: scale(110%, 110%);
      }
      img {
        transform: scale(50%, 50%);
      }
    }
  }

  a {
    color: #666;
    transition: color 0.3s;
  }
  a:hover {
    color: #0066ff;
  }
`;

const GalleryCollapsible = styled.div`
  display: grid;
  grid-template-columns: 1fr 61px 1fr;
  grid-template-rows: 30px 30px 1px 30px 30px;

  margin-bottom: 105px;

  #line {
    grid-row: 3 / 4;
    grid-column: 1 / 4;
    z-index: -1;
    height: 1px;
    background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.07) 0%,
      rgba(0, 0, 0, 0.5) 51.04%,
      rgba(0, 0, 0, 0.07) 100%
    );
  }

  #button {
    grid-row: 2 / 5;
    grid-column: 2 / 3;
    z-index: 1;
    display: block;
    margin: auto;
    height: 100%;
    width: 100%;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #666;

    display: grid;
    grid-template-rows: 3fr 2fr;
    grid-template-columns: 1fr 3fr 3fr 1fr;

    #incline-line-1 {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
      transform: skewY(30deg);
      border-bottom: 1px solid #666;
    }

    #incline-line-2 {
      grid-row: 1 / 2;
      grid-column: 3 / 4;
      transform: skewY(-30deg);
      border-bottom: 1px solid #666;
    }

    transition: transform ease 0.3s, box-shadow ease 0.4s;

    :hover {
      cursor: pointer;
      transform: scale(1.1, 1.1);
      border: hidden;
      #incline-line-1,
      #incline-line-2 {
        border-bottom: 1px solid rgb(3 169 245);
      }
      box-shadow: 0px 0px 10px 3px rgb(3 169 245 / 30%);
    }

    :active {
      transform: scale(1, 1);
    }
  }
`;

const OutletsGallery = styled.div`
  position: relative;
  padding: 100px 0px;
  margin: auto;
  max-width: 1520px;

  div.bluebg {
    position: absolute;
    width: 50%;
    height: 815px;
    top: 0;
    left: 10%;
    background-color: #87bbfc;
    z-index: -2;
  }
  div.greybg {
    position: absolute;
    width: 75%;
    height: 930px;
    top: 95px;
    right: 0;
    background-color: #eaefff;
    z-index: -1;
  }

  .outlets_gallery_components {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 1fr);
    max-width: 1030px;
    width: 80%;
    margin: 90px auto 0px;

    & > div:first-child {
      &.left {
        grid-column: 1 / 2;
      }
      &.right {
        grid-column: 2 / 3;
      }
      grid-row: 1 / 6;
    }
    & > div:first-child > img {
      width: 100%;
      max-height: 345px;
      aspect-ratio: 517 / 345;
      object-fit: cover;
      border-radius: 20px;
      z-index: 1;
      box-shadow: 0 2px 27px 7px rgb(0 0 0 / 13%);

      transition: ease 0.6s;
      :hover {
        transform: scale(104%, 104%);
      }
    }

    .location {
      grid-column: 1 / 3;
      grid-row: 2 / 5;
      border: 1px solid #cacaca;
      background-color: #fff;
      border-radius: 20px;

      display: grid;
      grid-template-columns: 1fr 1fr;

      > div:first-child {
        grid-column: 1 / 2;
      }
      > div:last-child {
        grid-column: 2 / 3;
      }
    }

    h2 {
      img {
        margin-right: 12px;
      }
      display: flex;
      margin: 0 50px 0 150px;
      align-items: center;
      height: 100%;
      font-size: 28px;
      font-weight: 700;
      @media screen and (max-width: 900px) {
        font-size: 20px;
        margin: 0 50px 0 50px;
      }
    }
  }
`;

const Toggle_Outletsgallery: React.FC = () => {
  return (
    <GalleryCollapsible className="container">
      <div id="line"></div>
      <div id="button" title="View Outlets Images">
        <div id="incline-line-1"></div>
        <div id="incline-line-2"></div>
      </div>
    </GalleryCollapsible>
  );
};

const Outletsgallery: React.FC = () => {
  return (
    <OutletsGallery>
      <div className="bluebg"></div>
      <div className="greybg"></div>
      <div className="outlets_gallery_components">
        <Fade className="left">
          <img
            className="left"
            src="img/outlets/petalingjaya.jpeg"
            alt="Petaling Jaya Outlet"
            title="Petaling Jaya Outlet"
          />
        </Fade>        
        <div className="location">          
          <div></div>
          <div>
            <h2>
              <img src="img/outlets/location.svg" alt="location icon" />
              Petaling Jaya
            </h2>
          </div>
        </div>
      </div>

      <div className="outlets_gallery_components">
        <Fade className="left">
          <img
            className="left"
            src="img/outlets/putrajaya.jpeg"
            alt="Putrajaya Outlet"
            title="Putrajaya Outlet"
          />
        </Fade>
        <div className="location">
          <div></div>
          <div>
            <h2>
              <img src="img/outlets/location.svg" alt="location icon" />
              Putrajaya
            </h2>
          </div>
        </div>
      </div>

      <div className="outlets_gallery_components">
        <Fade className="left">
          <img
            className="left"
            src="img/outlets/johorbahru.jpeg"
            alt="Johor Bahru Outlet"
            title="Johor Bahru Outlet"
          />
        </Fade>
        <div className="location">
          <div></div>
          <div>
            <h2>
              <img src="img/outlets/location.svg" alt="location icon" />
              Johor Bahru
            </h2>
          </div>
        </div>
      </div>

      <div className="outlets_gallery_components">
        <Fade className="right">
          <img
            className="right"
            src="img/outlets/penang.jpg"
            alt="Penang Outlet"
            title="Penang Outlet"
          />
        </Fade>
        <div className="location">
          <div>
            <h2>
              <img src="img/outlets/location.svg" alt="location icon" />
              Penang
            </h2>
          </div>
          <div></div>
        </div>
      </div>

      <div className="outlets_gallery_components">
        <Fade className="right">
          <img
            className="right"
            src="img/outlets/malacca.jpg"
            alt="Malacca Outlet"
            title="Malacca Outlet"
          />
        </Fade>
        <div className="location">
          <div>
            <h2>
              <img src="img/outlets/location.svg" alt="location icon" />
              Malacca
            </h2>
          </div>
          <div></div>
        </div>
      </div>

      <div className="outlets_gallery_components">
        <Fade className="right">
          <img
            className="right"
            src="img/outlets/ipoh.jpg"
            alt="Ipoh Outlet"
            title="Ipoh Outlet"
          />
        </Fade>
        <div className="location">
          <div>
            <h2>
              <img src="img/outlets/location.svg" alt="location icon" />
              Ipoh
            </h2>
          </div>
          <div></div>
        </div>
      </div>
    </OutletsGallery>
  );
};

const Collapsible_Style = styled.div`
  .collapsible .content-parent {
    height: 0px;
    overflow: hidden;
    transition: height ease 1s;
  }
`;

type CollapsibleProps = {
  content: React.ReactNode;
  toggle: React.ReactNode;
};

function Collapsible(props: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  const parentRef = useRef<HTMLDivElement>(null);

  // if (parentRef.current) console.log(parentRef.current.scrollHeight);

  return (
    <>
      <Collapsible_Style>
        <div className="collapsible">
          <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
            {props.toggle}
          </div>
          <div
            className="content-parent"
            ref={parentRef}
            style={
              isOpen
                ? {
                    height: parentRef?.current?.scrollHeight + "px",
                  }
                : {
                    height: "0px",
                  }
            }
          >
            <div className="content">{props.content}</div>
          </div>
        </div>
      </Collapsible_Style>
    </>
  );
}

const Address = [
  "6, Jalan SS 21/37, Damansara Utama, 47400 Petaling Jaya, Selangor, Malaysia.",
  "Persiaran Perdana, Presint 3, 62100 Putrajaya, Wilayah Persekutuan Putrajaya, Malaysia.",
  "No 7, Persiaran Medini Utara 3, Bandar, 79250 Johor Bahru, Johor, Malaysia.",
  "Jalan Penang Lang, Bukit Bendera, 11300 Penang, Malaysia.",
  "No 20, Jalan Kota, Bandar Hilir, 75000 Melaka, Malaysia.",
  "No. 8, Laluan Sentral 19, Taman Desa Sentral, 31000 Batu Gajah, Perak, Malaysia.",
];

const ClipboardImage: React.FC = () => {
  return <img src="img/outlets/clipboard.svg" alt="clipboard" />;
};

export default function Outlets() {
  return (
    <>
      <Head>
        <title>Outlets - Shift</title>
      </Head>
      <Header />
      <main>
        <Hero className="container">
          <h1>Our Outlets</h1>
          <p>
            Drop by to feel the sense of Entertainment and Excitement
            <br /> with the futuristic in-store experience.
          </p>
        </Hero>
        <Table className="container">
          <table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Business Hour</th>
                <th>Address</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Petaling Jaya</td>
                <td>9am - 10pm</td>
                <td
                  title="Copy to clipboard"
                  className="address"
                  onClick={() => {
                    navigator.clipboard.writeText(Address[0]);
                    toast.success("Copied to clipboard!", {
                      position: "bottom-center",
                    });
                  }}
                >
                  <p>{Address[0]}</p>
                  <ClipboardImage />
                </td>
                <td>
                  <a href="tel:+60353333833" title="Call us now">
                    +603-53333833
                  </a>
                </td>
              </tr>
              <tr>
                <td>Putrajaya</td>
                <td>9am - 10pm</td>
                <td
                  title="Copy to clipboard"
                  className="address"
                  onClick={() => {
                    navigator.clipboard.writeText(Address[1]);
                    toast.success("Copied to clipboard!", {
                      position: "bottom-center",
                    });
                  }}
                >
                  <p>{Address[1]}</p>
                  <ClipboardImage />
                </td>
                <td>
                  <a href="tel:+60322129335" title="Call us now">
                    +603-22129335
                  </a>
                </td>
              </tr>
              <tr>
                <td>Johor Bahru</td>
                <td>10am - 11pm</td>
                <td
                  title="Copy to clipboard"
                  className="address"
                  onClick={() => {
                    navigator.clipboard.writeText(Address[2]);
                    toast.success("Copied to clipboard!", {
                      position: "bottom-center",
                    });
                  }}
                >
                  <p>{Address[2]}</p>
                  <ClipboardImage />
                </td>
                <td>
                  <a href="tel:+60302124534" title="Call us now">
                    +603-02124534
                  </a>
                </td>
              </tr>
              <tr>
                <td>Penang</td>
                <td>9am - 10pm</td>
                <td
                  title="Copy to clipboard"
                  className="address"
                  onClick={() => {
                    navigator.clipboard.writeText(Address[3]);
                    toast.success("Copied to clipboard!", {
                      position: "bottom-center",
                    });
                  }}
                >
                  <p>{Address[3]}</p>
                  <ClipboardImage />
                </td>
                <td>
                  <a href="tel:+60313434534" title="Call us now">
                    +603-13434534
                  </a>
                </td>
              </tr>
              <tr>
                <td>Malacca</td>
                <td>10am - 9pm</td>
                <td
                  title="Copy to clipboard"
                  className="address"
                  onClick={() => {
                    navigator.clipboard.writeText(Address[4]);
                    toast.success("Copied to clipboard!", {
                      position: "bottom-center",
                    });
                  }}
                >
                  <p>{Address[4]}</p>
                  <ClipboardImage />
                </td>
                <td>
                  <a href="tel:+60382178474" title="Call us now">
                    +603-82178474
                  </a>
                </td>
              </tr>
              <tr>
                <td>Ipoh</td>
                <td>10am - 10pm</td>
                <td
                  title="Copy to clipboard"
                  className="address"
                  onClick={() => {
                    navigator.clipboard.writeText(Address[5]);
                    toast.success("Copied to clipboard!", {
                      position: "bottom-center",
                    });
                  }}
                >
                  <p>{Address[5]}</p>
                  <ClipboardImage />
                </td>
                <td>
                  <a href="tel:+60392454534" title="Call us now">
                    +603-92454534
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </Table>
        <Collapsible
          toggle={<Toggle_Outletsgallery />}
          content={<Outletsgallery />}
        />
        <div className="breadcrumb container">
          <Link href="/">
            <a>Home</a>
          </Link>
          <img
            className="breadcrumb__arrow"
            src="img/breadcrumb-arrow.svg"
            alt="Right Arrow >"
          />
          <span>Outlets</span>
        </div>
      </main>
      <Footer />
    </>
  );
}
