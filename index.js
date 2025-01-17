import { remove as removeDiacritics } from 'diacritics';
const lettersAndNumbersRegex = /[\da-z]/i;
const punctuationRegex = /[!"(),.:;?[\]{}“”-]/g;
const OPTIONS_DEFAULT = {
    removeCase: true,
    removePunctuation: true,
    removeDiacritics: false,
    removeWordsWithoutLettersOrNumbers: false,
    sortAlphabetically: false,
    removeDuplicateWords: true,
    removeDuplicatePartialWords: false
};
Object.freeze(OPTIONS_DEFAULT);
export const OPTIONS_ALL = {
    removeCase: true,
    removePunctuation: true,
    removeDiacritics: true,
    removeWordsWithoutLettersOrNumbers: true,
    sortAlphabetically: true,
    removeDuplicateWords: true,
    removeDuplicatePartialWords: true
};
Object.freeze(OPTIONS_ALL);
/**
 * Converts a text string into an array of search terms.
 * @param textString - The text string
 * @param userOptions - Options on how to clean up the text string
 * @returns An array of search terms
 */
export function textToSearchTerms(textString, userOptions = OPTIONS_DEFAULT) {
    const options = Object.assign({}, OPTIONS_DEFAULT, userOptions);
    let searchTermsString = textString;
    if (options.removeCase) {
        searchTermsString = searchTermsString.toLowerCase();
    }
    if (options.removePunctuation) {
        searchTermsString = searchTermsString.replaceAll(punctuationRegex, ' ');
    }
    if (options.removeDiacritics) {
        searchTermsString = removeDiacritics(searchTermsString);
    }
    let searchTerms = searchTermsString.replaceAll(/\s+/g, ' ').split(' ');
    if (options.sortAlphabetically) {
        searchTerms.sort((a, b) => a.localeCompare(b));
    }
    if (options.removeDuplicateWords || options.removeDuplicatePartialWords) {
        const distinctSet = new Set(searchTerms);
        searchTerms = [...distinctSet];
    }
    if (options.removeDuplicatePartialWords ||
        options.removeWordsWithoutLettersOrNumbers) {
        searchTerms = searchTerms.filter((currentWord, currentIndex, currentList) => {
            if (options.removeWordsWithoutLettersOrNumbers &&
                !lettersAndNumbersRegex.test(currentWord)) {
                return false;
            }
            if (options.removeDuplicatePartialWords) {
                for (const [possibleIndex, possibleWord] of currentList.entries()) {
                    if (possibleWord.includes(currentWord) &&
                        possibleIndex !== currentIndex) {
                        return false;
                    }
                }
            }
            return true;
        });
    }
    return searchTerms;
}
/**
 * Converts a text string into a string of search terms.
 * @param textString - The text string
 * @param userOptions - Options on how to clean up the text string
 * @returns An string of search terms
 */
export function textToSearchTermsString(textString, userOptions = OPTIONS_DEFAULT) {
    return textToSearchTerms(textString, userOptions).join(' ');
}
export default textToSearchTerms;
