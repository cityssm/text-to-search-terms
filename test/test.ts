import * as assert from 'node:assert'

import { textToSearchTermsString, OPTIONS_ALL } from '../index.js'

const tests = [
  ['banana apple', 'apple banana'], // sorting
  ['Hop Hopping Shop Shopping', 'shopping'], // partial words
  ['éléphante', 'elephante'], // diacritics
  ['test. !test test,test', 'test'], // punctuation
  ["Hop to the shop! There's a sale on a mop!", "mop on sale shop there's to"]
]

describe('textToSearchTerms', () => {
  for (const test of tests) {
    it(`Converts "${test[0]}" to "${test[1]}"`, () => {
      const result = textToSearchTermsString(test[0], OPTIONS_ALL)

      assert.strictEqual(result, test[1])
    })
  }
})
