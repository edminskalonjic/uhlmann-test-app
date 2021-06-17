import React, { useState } from 'react';

import { ICountry } from '../../types/interface';
import Modal from '../Modal';
import RegionsDropdown from '../RegionsDropdown';

import './App.css';

const App: React.FC = () => {
  const [selectedCountries, setSelectedCountries] = useState<ICountry[]>([]);
  const [dateValidationMessage, setDateValidationMessage] = useState('');
  const [countryValidationMessage, setCountryValidationMessage] = useState('');
  const [isModalOpen, openModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [startingDate, setStartingDate] = useState('');
  const [endingDate, setEndingDate] = useState('');

  const onStartingDateChanged = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDateValidationMessage('');
    setStartingDate(e.target.value);
  };

  const onEndingDateChanged = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDateValidationMessage('');
    setEndingDate(e.target.value);
  };

  const resetFormValues = (): void => {
    setStartingDate('');
    setEndingDate('');
    setSelectedCountries([]);
    setCountryValidationMessage('');
    setDateValidationMessage('');
  };

  const selectCountries = (countries: ICountry[]): void => {
    setCountryValidationMessage('');
    setSelectedCountries(countries);
  };

  const onSaveButtonClick = (): void => {
    if (!startingDate || !endingDate || !selectedCountries.length) {
      if (!startingDate && !endingDate) {
        setDateValidationMessage('Please select a starting and an ending date');
      } else if (!startingDate) {
        setDateValidationMessage('Please select a starting  date');
      } else if (!endingDate) {
        setDateValidationMessage('Please select an ending date');
      }
      if (!selectedCountries.length) {
        setCountryValidationMessage('Please select at least one country');
      }
    } else {
      setModalMessage('Your data has been saved');
      openModal(true);
    }
  };

  const onCloseButtonClick = (): void => {
    setModalMessage(
      'Are you sure you want to leave this form. Your data wont be saved?'
    );
    openModal(true);
  };

  const onCloseModalClick = (): void => {
    resetFormValues();
    openModal(false);
  };

  return (
    <div className="app">
      <header className="app__header">
        <p>Uhlmann test application</p>
      </header>
      <div className="app__content">
        <div className="app__form">
          <h3>
            Select countries and period in which you visited the chosen ones
          </h3>
          {dateValidationMessage && (
            <p className="app__validation-message">{dateValidationMessage}</p>
          )}
          <div className="date-pickers">
            <div className="date-picker">
              <p>Choose start date*</p>
              <input
                type="date"
                value={startingDate}
                onChange={onStartingDateChanged}
                max="2030-12-12"
              />
            </div>
            <div className="date-picker">
              <p>Choose end date*</p>
              <input
                type="date"
                value={endingDate}
                onChange={onEndingDateChanged}
                max="2030-12-12"
              />
            </div>
          </div>
          {countryValidationMessage && (
            <p className="app__validation-message">
              {countryValidationMessage}
            </p>
          )}
          <RegionsDropdown
            selectedCountries={selectedCountries}
            setSelectedCountries={selectCountries}
          />
          <div className="app__buttons">
            <button className="app__button" onClick={onSaveButtonClick}>
              Save
            </button>
            <button className="app__button" onClick={onCloseButtonClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          modalMessage={modalMessage}
          onCloseButtonClick={onCloseModalClick}
        />
      )}
    </div>
  );
};

export default App;
