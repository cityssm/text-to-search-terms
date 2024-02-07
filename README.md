# text-to-search-terms

[![npm (scoped)](https://img.shields.io/npm/v/%40cityssm/text-to-search-terms)](https://www.npmjs.com/package/@cityssm/text-to-search-terms)
[![DeepSource](https://app.deepsource.com/gh/cityssm/text-to-search-terms.svg/?label=active+issues&show_trend=true&token=6ZzzMxmHIQkTZQKigBkVf4lb)](https://app.deepsource.com/gh/cityssm/text-to-search-terms/)
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

| Option                                   | Default |
| ---------------------------------------- | ------- |
| **`removeCase`**                         | `true`  |
| **`removePunctuation`**                  | `true`  |
| **`removeDiacritics`**                   | `false` |
| **`removeWordsWithoutLettersOrNumbers`** | `false` |
| **`sortAlphabetically`**                 | `false` |
| **`removeDuplicateWords`**               | `true`  |
| **`removeDuplicatePartialWords`**        | `false` |
