import React, { useEffect, useState } from 'react';
import { ChevronIcon, CloseIcon } from '../../assets/icons';
import { ICountry } from '../../types/interface';
import getCountriesData from '../../utils/getCountries';

import './RegionsDropdown.css';

interface IRegionsDropdownProps {
  selectedCountries: ICountry[];
  setSelectedCountries: (selectedCountries: ICountry[]) => void;
}

const RegionsDropdown: React.FC<IRegionsDropdownProps> = props => {
  const { selectedCountries, setSelectedCountries } = props;
  const [isDropdownOpen, openDropdown] = useState(false);
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    const getAllCountries = async (): Promise<void> => {
      const allCountries = await getCountriesData();
      setCountries(allCountries);
    };
    getAllCountries();
  }, []);

  const isCountryItemSelected = (countryName: string): boolean => {
    const country = selectedCountries.find(
      country => country.name === countryName
    );
    if (country) {
      return true;
    }
    return false;
  };

  const removeCountryOption = (countryName: string): void => {
    const newSelectedContries = selectedCountries.filter(
      selectedCountry => selectedCountry.name !== countryName
    );
    setSelectedCountries(newSelectedContries);
  };

  const onCountryOptionClick = (country: ICountry): void => {
    const selectedCountry = selectedCountries.find(
      item => item.name === country.name
    );
    if (selectedCountry) {
      removeCountryOption(selectedCountry.name);
    } else {
      const currentSelectedContries = selectedCountries.map(
        selectedCountry => selectedCountry
      );
      currentSelectedContries.push(country);
      setSelectedCountries(currentSelectedContries);
    }
    openDropdown(false);
  };

  const renderCountriesTags = (): JSX.Element[] | JSX.Element => {
    if (selectedCountries.length > 3) {
      return (
        <div
          key={selectedCountries.length}
          className="dropdown__tag"
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <div>{selectedCountries.length} countries selected</div>
          <div
            onClick={() => {
              setSelectedCountries([]);
            }}
          >
            <CloseIcon />
          </div>
        </div>
      );
    }
    return selectedCountries.map(selectedCountry => {
      return (
        <div
          key={selectedCountry.countryCode}
          className="dropdown__tag"
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <div>{selectedCountry.name}</div>
          <div
            onClick={() => {
              removeCountryOption(selectedCountry.name);
            }}
          >
            <CloseIcon />
          </div>
        </div>
      );
    });
  };

  const renderDropdownOptions = (): JSX.Element[] => {
    return countries.map(country => {
      return (
        <div
          key={country.countryCode}
          className={`dropdown__option ${
            isCountryItemSelected(country.name) && 'dropdown__option--selected'
          }`}
          onClick={() => onCountryOptionClick(country)}
        >
          {country.name}
        </div>
      );
    });
  };

  return (
    <div>
      <p>Select countries*</p>
      <div className="dropdown">
        <button
          className="dropdown__button"
          onClick={() => {
            isDropdownOpen ? openDropdown(false) : openDropdown(true);
          }}
        >
          {selectedCountries.length === 0 ? (
            <div className="dropdown__placeholder">Select countries</div>
          ) : (
            <div className="dropdown__tags">{renderCountriesTags()}</div>
          )}
          <div className="dropdown__chevron">
            <ChevronIcon upArrow={isDropdownOpen} />
          </div>
        </button>
        <div
          className={`dropdown__content ${
            isDropdownOpen && 'dropdown__content--visible'
          }`}
        >
          {renderDropdownOptions()}
        </div>
      </div>
    </div>
  );
};

export default RegionsDropdown;
