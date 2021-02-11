# phone-number-input-search

> Phone Number Input With Flag ,Country Phone Code And Country Search component.

[![NPM](https://img.shields.io/npm/v/phone-number-input-search.svg)](https://www.npmjs.com/package/phone-number-input-search) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

```bash
npm install --save phone-number-input-search
```
## Desktop Demo:
![Demo](https://s2.gifyu.com/images/input.png)

## Usage

```jsx
import React from "react";
import ReactPhoneInput from "phone-number-input-search";

class Example extends Component {
   const [phone, setPhone] = React.useState(null); // the lifted state
  const getPhoneNumberFun = (data) => { // the callback. Use a better name
    console.log(data); // print phone number - to test
    setPhone(data);
  };

  render() {
    return (
      <ReactPhoneInput getPhoneNumber={getPhoneNumberFun}/>
    );
  }
}
```

## Props

| Property          | Type     | Default                          | Description                   |
| :-------          | :-----   | :-----------------------------   | :---------------------------  |
| `getPhoneNumber`  | function | "() => {}"                       | Return phone number with code |

## License

MIT © [Nazeh-Taha](https://github.com/Nazeh-Taha)
