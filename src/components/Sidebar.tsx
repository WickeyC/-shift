import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  grid-column: 1 / 3;

  h2 {
    font-size: 20px;
    margin-top: 0;
  }

  ul li {
    margin: 0;
  }
  button {
    color: #4c596a;
    border: none;
    background: none;
    padding: 0;
    font-size: 15px;
    padding: 0 0 5px 0;
    width: 100%;
    text-align: left;

    &:hover {
      color: #006aff;
    }
  }
  .sidebar-is-active-brand {
    color: #000;
    font-weight: 600;
    &:hover {
      color: #000;
    }
  }
`;

export type BrandType = 'ALL_BRANDS' | 'APPLE' | 'HUAWEI' | 'OPPO' | 'REALME' | 'VIVO' | 'XIAOMI';
export type brandOptionType = {
  value: BrandType;
  label: string;
};

const brandOptions: brandOptionType[] = [
  {
    value: 'ALL_BRANDS',
    label: 'All Brands'
  },
  {
    value: 'APPLE',
    label: 'Apple'
  },
  {
    value: 'HUAWEI',
    label: 'Huawei'
  },
  {
    value: 'OPPO',
    label: 'Oppo'
  },
  {
    value: 'REALME',
    label: 'Realme'
  },
  {
    value: 'VIVO',
    label: 'Vivo'
  },
  {
    value: 'XIAOMI',
    label: 'Xiaomi'
  }
];

type SidebarProps = {
  selectedBrand: brandOptionType;
  setSelectBrand: Dispatch<SetStateAction<brandOptionType>>;
};

const Sidebar: React.FC<SidebarProps> = ({
  selectedBrand, 
  setSelectBrand
}) => {
  return (
    <StyledSidebar>
      <h2>Brands</h2>
      <ul>
        {brandOptions.map(brand => (
          <li key={`sidebar-li-${brand.value}`}>
            <button
              type="button"
              className={brand.value === selectedBrand.value ? 'sidebar-is-active-brand' : ''}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                setSelectBrand(brand);
              }}
            >
              {brand.label}
            </button>
          </li>
        ))}
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
