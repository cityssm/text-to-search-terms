# text-to-search-terms

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
