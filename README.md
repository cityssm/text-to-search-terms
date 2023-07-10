# text-to-search-terms

[![npm (scoped)](https://img.shields.io/npm/v/%40cityssm/text-to-search-terms)](https://www.npmjs.com/package/@cityssm/text-to-search-terms)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/d2e2e0bab62c46d6a6c915b42e22ea78)](https://app.codacy.com/gh/cityssm/text-to-search-terms/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/101cea753347be76743e/maintainability)](https://codeclimate.com/github/cityssm/text-to-search-terms/maintainability)
[![codecov](https://codecov.io/gh/cityssm/text-to-search-terms/branch/main/graph/badge.svg?token=3WUYGKX00B)](https://codecov.io/gh/cityssm/text-to-search-terms)

Reduces large strings of text into distinct search terms.

```javascript
import {
  textToSearchTermsString,
  OPTIONS_ALL
} from '@cityssm/text-to-search-terms'

console.log(
  textToSearchTerms("Hop to the shop! There's a sale on a mop!", OPTIONS_ALL)
)
// "mop on sale shop there's to"
```

## Options

| Option                            | Default |
| --------------------------------- | ------- |
| **`removeCase`**                  | `true`  |
| **`removePunctuation`**           | `true`  |
| **`removeDiacritics`**            | `false` |
| **`sortAlphabetically`**          | `false` |
| **`removeDuplicateWords`**        | `true`  |
| **`removeDuplicatePartialWords`** | `false` |
