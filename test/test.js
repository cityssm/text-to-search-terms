import assert from 'node:assert';
import { OPTIONS_ALL, textToSearchTermsString } from '../index.js';
const tests = [
    ['banana apple', 'apple banana'],
    ['Hop Hopping Shop Shopping', 'shopping'],
    ['éléphante', 'elephante'],
    ['test. !test test,test “test”', 'test'],
    ['abc 123 ab12* ****', '123 ab12* abc'],
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
