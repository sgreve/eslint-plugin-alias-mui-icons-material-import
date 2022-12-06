/**
 * @fileoverview Enforce alias for @mui/icons-material imports
 * @author Sven Greve
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Enforce alias for @mui/icons-material imports",
      recommended: true,
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      default: 'Import for @mui/icons-material should be aliased.',
    },
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      ImportDeclaration(node){
        if(node.source.value !== "@mui/icons-material")
          return
        
        for(const specifier of node.specifiers){
          if(specifier.type !== "ImportSpecifier")
            return
          
          if(specifier.imported.name === specifier.local.name){
            context.report({
              node,
              messageId: "default",
              fix: (fixer) => {
                return fixer.replaceText(specifier, `${specifier.imported.name} as ${specifier.imported.name}Icon`)
              }
            })
          }
        }
      }
    };
  },
};
