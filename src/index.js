import React, { useEffect, useRef } from 'react'
import styles from "./styles.css";
import { CountriesReducer } from './state/reducer';


export const ReactPhoneInput = () =>{
  const [state, dispatch] = CountriesReducer();
  const node = useRef();
  const handleClickOutside = (e) => {
    if (node.current && node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    dispatch({ type: 'hideCountyDropdown' })
    dispatch({ type: 'hideCountrySearchDropdown' })
  };

  useEffect(() => {
    if (state.showCountryDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [state.showCountryDropdown]);
 
  return (
    // Main container
      <div className={styles.countryPhoneContainer}>
        {/* Input Label */}
        <div className={styles.countryPhoneLabel}>Phone</div>
        {/* Input container */}
        <div className={styles.countryInputContainer}>
          <input type='text' value={state.phoneNumber}
            onChange={(e) => dispatch({ type: 'handleChangePhoneNumber', value: e.target.value })}
            onFocus={() => dispatch({ type: 'showCountryDropdown' })} />
          <div className={styles.countryInputCountryCode}>{state.countryPhone.code}</div>
        </div>
        {/* Dropdown with default country */}
        {state.showCountryDropdown ?
          <div className={styles.countryResultContainer} ref={node} >
            <div className={styles.countryResultDefault}>
              <img src={state.countryPhone.flag} />
              <p>{state.countryPhone.name + ' (' + state.countryPhone.code + ')'}</p>
            </div>
            <input type="text" placeholder="Search" value={state.searchValue}
             onFocus={() => dispatch({ type: 'showCountrySearchDropdown' })}
              onChange={(e) => dispatch({ type: 'handelChangeSearchInput', value: e.target.value })} />
              {/* if there result */}
            {state.showCountrySearchDropdown ?
              <div className={styles.countryResultSearchCountry}>
                {state.searchedCountryResult.length ?
                // show country search result
                  state.searchedCountryResult.map(country => (
                    <div className={styles.countryResultResult} onClick={() => dispatch({type:'changeCountryPhone', data: country})}>
                      <img src={country.flag} />
                      <p>{country.name + ' (' + country.code + ')'}</p>
                    </div>
                  ))
                  // if there is no result 
                  : <div className={styles.countryResultNoResult}>No Result</div>}
              </div>
              : null}
          </div>
          : null}
      </div>
  );
}

