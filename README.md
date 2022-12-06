# eslint-plugin-alias-mui-icons-material-import

Enforce alias for @mui/icons-material imports

### Fail
```js

import { Add } from '@mui/icons-material'

```

### Pass

```js

import { Add as AddIcon } from '@mui/icons-material'

```


## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-alias-mui-icons-material-import`:

```sh
npm install eslint-plugin-alias-mui-icons-material-import --save-dev
```

## Usage

Add `alias-mui-icons-material-import` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "alias-mui-icons-material-import"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "alias-mui-icons-material-import/alias-mui-icons-material-import": "error"
    }
}
```

