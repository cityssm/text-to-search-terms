export interface TextToSearchTermsOptions {
    removeCase: boolean;
    removePunctuation: boolean;
    removeDiacritics: boolean;
    removeWordsWithoutLettersOrNumbers: boolean;
    sortAlphabetically: boolean;
    removeDuplicateWords: boolean;
    removeDuplicatePartialWords: boolean;
}
export declare const OPTIONS_ALL: TextToSearchTermsOptions;
/**
 * Converts a text string into an array of search terms.
 * @param textString - The text string
 * @param userOptions - Options on how to clean up the text string
 * @returns An array of search terms
 */
export declare function textToSearchTerms(textString: string, userOptions?: Partial<TextToSearchTermsOptions>): string[];
/**
 * Converts a text string into a string of search terms.
 * @param textString - The text string
 * @param userOptions - Options on how to clean up the text string
 * @returns An string of search terms
 */
export declare function textToSearchTermsString(textString: string, userOptions?: Partial<TextToSearchTermsOptions>): string;
export default textToSearchTerms;
