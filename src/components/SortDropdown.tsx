import React, { Dispatch, SetStateAction } from 'react';
import Select, { components } from 'react-select';
import styled from 'styled-components';

export type SortType = 'POPULARITY' | 'PRICE_LOW_TO_HIGH' | 'PRICE_HIGH_TO_LOW';
export type OptionType = {
  value: SortType;
  label: string;
};

export const defaultOption: OptionType = {
  value: 'POPULARITY',
  label: 'Sort by Popularity',
};

const options: OptionType[] = [
  defaultOption,
  {
    value: 'PRICE_LOW_TO_HIGH',
    label: 'Sort by Price Low to High',
  },
  {
    value: 'PRICE_HIGH_TO_LOW',
    label: 'Sort by Price High to Low',
  },
];

type SortDropdownProps = {
  selectedSortOption: {};
  setSelectedSortOption: Dispatch<SetStateAction<OptionType>>;
};

export const StyledSelect = styled(Select)`
  width: 228px;

  .react-select__control {
    box-sizing: border-box;
    border-color: #F9F9F9;
    height: 41px;
    background-color: #F9F9F9;

    &:hover {
      background-color: #fafafa;
    }
  }
  .react-select__control--is-focused {
    background-color: #fff;
    box-shadow: 0 0 0px 1px #74b0ff;
    border: 1px solid #2684ff;
    &:hover {
      background-color: #fff;
    }
  }
  .react-select__control--menu-is-open {
    box-shadow: 0 0 5px 1px #74b0ff;
    border: 1px solid #2684ff;
  }
  .react-select__value-container {
    height: 28px;
    font-size: 14px;
  }
  .react-select__option {
    font-size: 14px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(1rem);
    }
  }

  .menu_select {
    animation: fadeIn 0.2s ease-in-out;
  }

  .menu--close {
    animation: fadeOut 0.2s ease-in-out;
  }
`;

const SortDropdown: React.FC<SortDropdownProps> = ({
  selectedSortOption,
  setSelectedSortOption,
}) => {
  return (
    <StyledSelect
      id="select_sortdropdown"
      defaultValue={selectedSortOption}
      onChange={setSelectedSortOption}
      options={options}
      instanceId="react-select-algo"
      inputId="react-select-algo"
      classNamePrefix="react-select"
      isSearchable={false}

      onMenuClose={() => {
        const menuEl = document.querySelector(`#select_sortdropdown .menu_select`);
        const containerEl = menuEl?.parentElement;
        const clonedMenuEl: any = menuEl?.cloneNode(true);

        if (!clonedMenuEl) return;

        clonedMenuEl.classList.add("menu--close");
        clonedMenuEl.addEventListener("animationend", () => {
          containerEl?.removeChild(clonedMenuEl);
        });

        containerEl?.appendChild(clonedMenuEl!);
      }}
      components={{
        Menu: (props: any) => <components.Menu {...props} className="menu_select" />
      }}
    />
  );
};

export default SortDropdown;