import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar, { brandOptionType } from '../../components/Sidebar';
import SearchBar from '../../components/SearchBar';
import SortDropdown, { defaultOption } from '../../components/SortDropdown';
import ProductGrid from '../../components/ProductGrid';
import { products as importedProducts } from '../../data';

export const CategoryHeader = styled.header`
  padding-top: 35px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  color: #37383c;
  margin-bottom: 50px;
`;

export const CategoryNav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 35px;
    margin-bottom: 0;
  }
  li {
    flex-basis: 70px;
  }
  li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    position: relative;
    color: #68686b;
    transition: all 0.3s ease;

    &.is-active-page {
      color: #000;
    }

    &.is-active-page::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 40px;
      height: 3px;
      background-color: #55a3ff;
    }

    svg {
      margin-bottom: 6px;
    }

    svg path,
    svg stroke {
      transition: all 0.3s ease;
    }

    &:hover:not(.is-active-page) {
      color: #006aff;

      svg path:not(.wearable-icon-stroke) {
        fill: #006aff;
      }
      svg .wearable-icon-stroke {
        stroke: #006aff;
      }
    }
  }
`;

export const ProductSection = styled.section`
  background-color: #f9f9f9;
  border-top: 1px solid rgb(0 0 0 / 10%);
  padding: 60px 0 80px 0;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
`;

export const ProductView = styled.div`
  grid-column: 3 / 13;

  .top-options {
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(0 0 0 / 10%);
    margin-bottom: 40px;
  }

  .search-result-text {
    margin-bottom: 28px;
    margin-top: -12px;
    display: flex;
    align-items: center;

    button {
      background: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
    }
  }
`;

const AllProductsPage = () => {
  const [products, setProducts] = useState(importedProducts);
  const [selectedSortOption, setSelectedSortOption] = useState(defaultOption);
  const [selectedBrand, setSelectBrand] = useState<brandOptionType>({
    value: 'ALL_BRANDS',
    label: 'All Brands',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isShowingSearchResults, setIsShowingSearchResults] = useState(false);
  const [searchResultText, setSearchResultText] = useState('');

  if (selectedSortOption.value === 'POPULARITY') {
    products.sort((a, b) => {
      return a.id - b.id;
    });
  } else if (selectedSortOption.value === 'PRICE_LOW_TO_HIGH') {
    products.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (selectedSortOption.value === 'PRICE_HIGH_TO_LOW') {
    products.sort((a, b) => {
      return b.price - a.price;
    });
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm.trim() === '') {
      setIsShowingSearchResults(false);
      setSearchResultText('');
      setProducts(importedProducts);
      setSearchTerm('');
    } else {
      setIsShowingSearchResults(true);
      setSearchResultText(searchTerm.trim());
      const term = searchTerm.trim().toLowerCase();

      const searchedProducts = importedProducts.filter((product) => {
        return product.name.toLowerCase().includes(term);
      });

      setProducts(searchedProducts);
    }
  };

  const handleClearSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsShowingSearchResults(false);
    setSearchResultText('');
    setProducts(importedProducts);
    setSearchTerm('');
  };

  return (
    <>
      <Head>
        <title>Products - Shift</title>
      </Head>
      <Header />
      <main>
        <CategoryHeader>
          <div className="container">
            <Title>Explore all Products</Title>
            <CategoryNav aria-label="Product Categories">
              <ul>
                <li>
                  <Link href="/products">
                    <a className="is-active-page">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.5089 3.63908C15.1951 3.45364 14.8052 3.45364 14.4914 3.63908L3.49143 10.1391C3.18697 10.319 3.00017 10.6463 3.00017 11C3.00017 11.3537 3.18697 11.681 3.49143 11.8609L14.4914 18.3609C14.8052 18.5464 15.1951 18.5464 15.5089 18.3609L26.5088 11.8609C26.8134 11.681 27.0002 11.3537 27.0002 11C27.0002 10.6463 26.8134 10.319 26.5088 10.1391L15.5089 3.63908ZM15.0002 16.3385L5.96585 11L15.0002 5.66154L24.0344 11L15.0002 16.3385ZM4.50889 16.6391C4.03341 16.3581 3.42021 16.5158 3.13923 16.9913C2.85827 17.4667 3.01595 18.08 3.49143 18.3609L14.4914 24.861C14.8052 25.0464 15.1951 25.0464 15.5089 24.861L26.5088 18.3609C26.9844 18.08 27.142 17.4667 26.861 16.9913C26.58 16.5158 25.9668 16.3581 25.4914 16.6391L15.0002 22.8384L4.50889 16.6391Z"
                          fill="#11112c"
                        />
                      </svg>
                      <span>Shop All</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/phones">
                    <a>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 5.625H20C20.3451 5.625 20.625 5.90482 20.625 6.25V23.75C20.625 24.0951 20.3451 24.375 20 24.375H10C9.65482 24.375 9.375 24.0951 9.375 23.75V6.25C9.375 5.90482 9.65482 5.625 10 5.625ZM7.5 6.25C7.5 4.86929 8.61929 3.75 10 3.75H20C21.3807 3.75 22.5 4.86929 22.5 6.25V23.75C22.5 25.1308 21.3807 26.25 20 26.25H10C8.61929 26.25 7.5 25.1308 7.5 23.75V6.25ZM14.0625 21.25C13.5448 21.25 13.125 21.6698 13.125 22.1875C13.125 22.7052 13.5448 23.125 14.0625 23.125H15.9375C16.4552 23.125 16.875 22.7052 16.875 22.1875C16.875 21.6698 16.4552 21.25 15.9375 21.25H14.0625Z"
                          fill="#68686B"
                        />
                      </svg>
                      <span>Phone</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/wearables">
                    <a>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 8.4375H10C9.13706 8.4375 8.4375 9.13706 8.4375 10V20C8.4375 20.8629 9.13706 21.5625 10 21.5625H20C20.8629 21.5625 21.5625 20.8629 21.5625 20V10C21.5625 9.13706 20.8629 8.4375 20 8.4375Z"
                          stroke="#68686B"
                          className="wearable-icon-stroke"
                          strokeWidth="1.5"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.5 5.625H17.5C17.8451 5.625 18.125 5.90482 18.125 6.25V7.5H20V6.25C20 4.86929 18.8807 3.75 17.5 3.75H12.5C11.1193 3.75 10 4.86929 10 6.25V7.5H11.875V6.25C11.875 5.90482 12.1548 5.625 12.5 5.625ZM11.875 22.5H10V23.75C10 25.1308 11.1193 26.25 12.5 26.25H17.5C18.8807 26.25 20 25.1308 20 23.75V22.5H18.125V23.75C18.125 24.0951 17.8451 24.375 17.5 24.375H12.5C12.1548 24.375 11.875 24.0951 11.875 23.75V22.5Z"
                          fill="#68686B"
                        />
                        <path
                          d="M23.75 15C23.75 15.6904 23.1904 16.25 22.5 16.25C21.8096 16.25 21.25 15.6904 21.25 15C21.25 14.3096 21.8096 13.75 22.5 13.75C23.1904 13.75 23.75 14.3096 23.75 15Z"
                          fill="#68686B"
                        />
                      </svg>
                      <span>Wearable</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/audio">
                    <a>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.9999 4.6875C12.2658 4.69054 9.64458 5.77799 7.71129 7.71129C5.77799 9.64458 4.69054 12.2658 4.6875 14.9999V22.8127C4.6875 24.1935 5.80679 25.3127 7.1875 25.3127H8.7499C9.27467 25.3121 9.77777 25.1034 10.1488 24.7323C10.5198 24.3611 10.7285 23.858 10.729 23.3332V18.1249C10.7285 17.6001 10.5198 17.097 10.1488 16.7259C9.77777 16.3547 9.27467 16.146 8.7499 16.1454H6.56229V14.9999C6.56106 13.8911 6.77839 12.7929 7.20185 11.7682C7.62531 10.7434 8.24661 9.8122 9.03021 9.02772C9.81383 8.24325 10.7444 7.62092 11.7686 7.19633C12.7929 6.77171 13.8909 6.55316 14.9996 6.55316C16.1085 6.55316 17.2064 6.77171 18.2306 7.19633C19.2549 7.62092 20.1855 8.24325 20.9691 9.02772C21.7526 9.8122 22.374 10.7434 22.7974 11.7682C23.2209 12.7929 23.4382 13.8911 23.437 14.9999V16.1454H21.2499C20.7251 16.1459 20.2219 16.3546 19.8507 16.7257C19.4796 17.0969 19.2709 17.6001 19.2704 18.1249V23.3332C19.2709 23.858 19.4796 24.3612 19.8507 24.7324C20.2219 25.1035 20.7251 25.3123 21.2499 25.3127H22.8127C24.1935 25.3127 25.3127 24.1935 25.3127 22.8127V14.9999C25.3096 12.2658 24.2221 9.64451 22.2887 7.71123C20.3554 5.77795 17.734 4.69051 14.9999 4.6875ZM8.85416 18.1249V23.3332C8.85403 23.3607 8.84298 23.3871 8.82344 23.4066C8.8039 23.4261 8.77746 23.437 8.7499 23.437H6.56229V18.0211H8.7499C8.77746 18.0211 8.8039 18.032 8.82344 18.0515C8.84298 18.071 8.85403 18.0974 8.85416 18.1249ZM23.437 23.437H21.2499C21.2363 23.4371 21.2227 23.4345 21.21 23.4294C21.1974 23.4241 21.1859 23.4165 21.1763 23.4069C21.1666 23.3972 21.159 23.3857 21.1538 23.3731C21.1486 23.3604 21.146 23.3469 21.1461 23.3332V18.1249C21.146 18.1112 21.1486 18.0978 21.1538 18.085C21.159 18.0724 21.1666 18.0609 21.1763 18.0513C21.1859 18.0416 21.1974 18.034 21.21 18.0288C21.2227 18.0236 21.2363 18.021 21.2499 18.0211H23.437V23.437Z"
                          fill="#68686B"
                        />
                      </svg>
                      <span>Audio</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </CategoryNav>
          </div>
        </CategoryHeader>
        <ProductSection>
          <ProductContainer className="container">
            <Sidebar
              selectedBrand={selectedBrand}
              setSelectBrand={setSelectBrand}
            />
            <ProductView>
              <div className="top-options">
                <SearchBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  handleSearchSubmit={handleSearchSubmit}
                />
                <SortDropdown
                  selectedSortOption={selectedSortOption}
                  setSelectedSortOption={setSelectedSortOption}
                />
              </div>
              {isShowingSearchResults && (
                <div className="search-result-text">
                  Showing{' '}
                  {selectedBrand.value === 'ALL_BRANDS'
                    ? products.length
                    : products.filter(
                        (product) => product.brand === selectedBrand.value
                      ).length}{' '}
                  ({selectedBrand.label}) results for "<b>{searchResultText}</b>
                  "
                  <button onClick={handleClearSearch} type="button">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.16895 9.99939C1.16895 5.12247 5.12247 1.16895 9.99939 1.16895C14.8763 1.16895 18.8298 5.12247 18.8298 9.99939C18.8298 14.8762 14.8763 18.8298 9.99939 18.8298C5.12247 18.8298 1.16895 14.8762 1.16895 9.99939ZM9.99939 2.43561C5.82203 2.43561 2.43562 5.82203 2.43562 9.99939C2.43562 14.1768 5.82203 17.5632 9.99939 17.5632C14.1767 17.5632 17.5631 14.1768 17.5631 9.99939C17.5631 5.82203 14.1767 2.43561 9.99939 2.43561ZM13.1376 6.86147C13.3979 7.12182 13.3979 7.54394 13.1376 7.80429L10.9424 9.99954L13.1376 12.1948C13.3979 12.4552 13.3979 12.8773 13.1376 13.1376C12.8773 13.398 12.4552 13.398 12.1948 13.1376L9.99954 10.9424L7.80429 13.1376C7.54394 13.398 7.12182 13.398 6.86147 13.1376C6.60113 12.8773 6.60113 12.4552 6.86147 12.1948L9.05674 9.99954L6.86147 7.80429C6.60113 7.54394 6.60113 7.12182 6.86147 6.86147C7.12182 6.60113 7.54394 6.60113 7.80429 6.86147L9.99954 9.05674L12.1948 6.86147C12.4552 6.60113 12.8773 6.60113 13.1376 6.86147Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
              )}
              <ProductGrid
                selectedBrandValue={selectedBrand.value}
                products={products}
                isShowingSearchResults={isShowingSearchResults}
              />
            </ProductView>
          </ProductContainer>
        </ProductSection>
        <div className="breadcrumb container">
          <Link href="/">
            <a>Home</a>
          </Link>
          <img
            className="breadcrumb__arrow"
            src="img/breadcrumb-arrow.svg"
            alt="Right Arrow >"
          />
          <span>Products</span>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AllProductsPage;
