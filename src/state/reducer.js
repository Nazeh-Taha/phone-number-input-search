import {
    useReducer
} from 'react';

 import {data} from '../data/data.js';
import { countriesActions } from './actions';
/**
 * Countries Reducer
 * @returns {[{
 * }},
 * React.DispatchWithoutAction
 * ]}
 */
export const CountriesReducer = () => {
    const [state, dispatch] = useReducer(countriesActions, {
        countriesData: data.countries,
        defaultCountry: {
            name: "United States",
            flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
            code: "+1"
        },
        countryPhone: {
            name: "United States",
            flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
            code: "+1"
        },
        phoneNumber: '',
        searchValue: '',
        showCountryDropdown: false,
        showCountrySearchDropdown: false,
        searchedCountryResult: data.countries
    });

    return [state, dispatch];
}