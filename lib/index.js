/**
 * @fileoverview Enforce alias for @mui/icons-material imports
 * @author Sven Greve
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const aliasMuiIconsMaterialImport = require("./rules/alias-mui-icons-material-import");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
    rules: {
        "alias-mui-icons-material-import": aliasMuiIconsMaterialImport
    }
}



