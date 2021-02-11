export const countriesActions = (prevState, action) => {
    switch (action.type) {

        case 'handleChangePhoneNumber':// handle change phone number
        const reqExp = /^[0-9]+$/;
        let phoneNumber = action.value
            return {
                ...prevState,
                phoneNumber: reqExp.test(phoneNumber) || phoneNumber === '' ? phoneNumber : prevState.phoneNumber
            }
        case 'showCountryDropdown': // handle show country dropdown
            return {
                ...prevState,
                showCountryDropdown: true
            }
        case 'hideCountyDropdown': // handle hide country dropdown
            return {
                ...prevState,
                showCountryDropdown: false
            }

        case 'showCountrySearchDropdown': // handle show country search dropdown
            return {
                ...prevState,
                showCountrySearchDropdown: true
            }
        case 'hideCountrySearchDropdown': // handle hide country search dropdown
            return {
                ...prevState,
                showCountrySearchDropdown: false
            }
        case 'handelChangeSearchInput': // handle filter country by search input
            // change first letter to capital letter 
            const searchText = action.value.charAt(0).toUpperCase() + action.value.slice(1);

            // filter array by search input text
            let searchItems = [];

            if (searchText) {
                searchItems = [...prevState.countriesData].filter(item => {
                    return item.name.startsWith(searchText)
                });
            } else {
                searchItems = prevState.countriesData
            }
            return {
                ...prevState,
                searchedCountryResult: searchItems,
                searchValue: searchText
            }
        case 'changeCountryPhone': {
            return {
                ...prevState,
                countryPhone: action.data
            }
        }
        default:
            return {
                prevState
            }

    }
}