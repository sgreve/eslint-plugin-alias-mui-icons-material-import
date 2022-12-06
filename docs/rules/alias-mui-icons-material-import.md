# Enforce alias for @mui/icons-material imports (alias-mui-icons-material-import)

Enforce alias for @mui/icons-material imports

## Rule Details

Examples of **incorrect** code for this rule:

```js

import { Add } from '@mui/icons-material'

```

```js

import { Add as AddIcon, Delete } from '@mui/icons-material'

```

Examples of **correct** code for this rule:

```js

import { Add as AddIcon } from '@mui/icons-material'

```

```js

import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material'

```