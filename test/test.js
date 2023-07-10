import * as assert from 'node:assert';
import { textToSearchTermsString, OPTIONS_ALL } from '../index.js';
const tests = [
    ['banana apple', 'apple banana'],
    ['Hop Hopping Shop Shopping', 'shopping'],
    ['éléphante', 'elephante'],
    ['test. !test test,test', 'test'],
    ['Hop to the shop! There\'s a sale on a mop!', 'mop on sale shop there\'s to']
];
describe('textToSearchTerms', () => {
    for (const test of tests) {
        it(`Converts "${test[0]}" to "${test[1]}"`, () => {
            const result = textToSearchTermsString(test[0], OPTIONS_ALL);
            assert.strictEqual(result, test[1]);
        });
    }
});
