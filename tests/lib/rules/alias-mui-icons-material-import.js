/**
 * @fileoverview Enforce alias for @mui/icons-material imports
 * @author Sven Greve
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/alias-mui-icons-material-import"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

RuleTester.setDefaultConfig({
  parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2018,
  }
});

const ruleTester = new RuleTester();
ruleTester.run("alias-mui-icons-material-import", rule, {
  valid: [
    {
      code: `import { Add as AddIcon } from "@mui/icons-material";`
    },
    {
      code: `import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";`
    }
  ],

  invalid: [
    {
      code: `import { Add } from "@mui/icons-material";`,
      output: `import { Add as AddIcon } from "@mui/icons-material";`,
      errors: [{ message: "Import for @mui/icons-material should be aliased.", type: "ImportDeclaration" }],
    },
    {
      code: `import { Add, Delete } from "@mui/icons-material";`,
      output: `import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";`,
      errors: [
        { message: "Import for @mui/icons-material should be aliased.", type: "ImportDeclaration" },
        { message: "Import for @mui/icons-material should be aliased.", type: "ImportDeclaration" }
      ],
    },
    {
      code: `import { Add as AddIcon, Delete } from "@mui/icons-material";`,
      output: `import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";`,
      errors: [{ message: "Import for @mui/icons-material should be aliased.", type: "ImportDeclaration" }],
    },
  ],
});
