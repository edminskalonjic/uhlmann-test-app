import { ICountry } from '../types/interface';
import { GEOTARGETS_COUNTRIES_JSON_PATH } from './paths';

const getCountriesData = async (): Promise<Array<ICountry>> => {
  const data: Array<ICountry> = await fetch(GEOTARGETS_COUNTRIES_JSON_PATH, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then(response => {
    return response.json();
  });
  return data;
};

export default getCountriesData;
