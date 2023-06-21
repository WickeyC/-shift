import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.form`
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  display: flex;
  max-width: 326px;
  width: 100%;

  label {
    display: none;
  }

  .searchbar__input {
    background-color: #fff;
    line-height: 1.5rem;
    max-width: 280px;
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
    width: 46px;
    height: 46px;
    background-color: #485BFF;
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
      height: 1.25rem;
      width: 1.25rem;  
      transition: 0.3s transform cubic-bezier(0.460, -0.275, 0.590, 1.250);   
    }
  }
`;

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  handleSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}; 

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  handleSearchSubmit
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <StyledSearchBar onSubmit={handleSearchSubmit}>
      <label htmlFor="searchProduct">Search</label>
      <input
        value={searchTerm}
        onChange={handleChange}
        id="searchProduct"
        className="searchbar__input"
        placeholder="Search for products..."
      />
      <button type="submit" className="searchbar__button">
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
            fill="#ffffff"
          />
        </svg>
      </button>
    </StyledSearchBar>
  );
};

export default SearchBar;
