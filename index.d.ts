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
export declare function textToSearchTerms(textString: string, userOptions?: Partial<TextToSearchTermsOptions>): string[];
export declare function textToSearchTermsString(textString: string, userOptions?: Partial<TextToSearchTermsOptions>): string;
export default textToSearchTerms;
