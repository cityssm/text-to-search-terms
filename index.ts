import { remove as removeDiacritics } from 'diacritics'

const lettersAndNumbersRegex = /[\da-z]/i

export interface TextToSearchTermsOptions {
  removeCase: boolean
  removePunctuation: boolean
  removeDiacritics: boolean
  removeWordsWithoutLettersOrNumbers: boolean
  sortAlphabetically: boolean
  removeDuplicateWords: boolean
  removeDuplicatePartialWords: boolean
}

const OPTIONS_DEFAULT: TextToSearchTermsOptions = {
  removeCase: true,
  removePunctuation: true,
  removeDiacritics: false,
  removeWordsWithoutLettersOrNumbers: false,
  sortAlphabetically: false,
  removeDuplicateWords: true,
  removeDuplicatePartialWords: false
}

Object.freeze(OPTIONS_DEFAULT)

export const OPTIONS_ALL: TextToSearchTermsOptions = {
  removeCase: true,
  removePunctuation: true,
  removeDiacritics: true,
  removeWordsWithoutLettersOrNumbers: true,
  sortAlphabetically: true,
  removeDuplicateWords: true,
  removeDuplicatePartialWords: true
}

Object.freeze(OPTIONS_ALL)

/**
 * Converts a text string into an array of search terms.
 * @param {string} textString - The text string
 * @param {TextToSearchTermsOptions} userOptions - Options on how to clean up the text string
 * @returns {string[]} An array of search terms
 */
export function textToSearchTerms(
  textString: string,
  userOptions: Partial<TextToSearchTermsOptions> = OPTIONS_DEFAULT
): string[] {
  const options: TextToSearchTermsOptions = Object.assign(
    {},
    OPTIONS_DEFAULT,
    userOptions
  )

  let searchTermsString = textString

  if (options.removeCase) {
    searchTermsString = searchTermsString.toLowerCase()
  }

  if (options.removePunctuation) {
    searchTermsString = searchTermsString.replaceAll(/[!(),.:;?[\]-]/g, ' ')
  }

  if (options.removeDiacritics) {
    searchTermsString = removeDiacritics(searchTermsString)
  }

  let searchTerms = searchTermsString.replaceAll(/\s+/g, ' ').split(' ')

  if (options.sortAlphabetically) {
    searchTerms.sort()
  }

  if (options.removeDuplicateWords || options.removeDuplicatePartialWords) {
    const distinctSet = new Set(searchTerms)
    searchTerms = [...distinctSet]
  }

  if (
    options.removeDuplicatePartialWords ||
    options.removeWordsWithoutLettersOrNumbers
  ) {
    searchTerms = searchTerms.filter(
      (currentWord, currentIndex, currentList) => {
        if (
          options.removeWordsWithoutLettersOrNumbers &&
          !lettersAndNumbersRegex.test(currentWord)
        ) {
          return false
        }

        if (options.removeDuplicatePartialWords) {
          for (const [possibleIndex, possibleWord] of currentList.entries()) {
            if (
              possibleWord.includes(currentWord) &&
              possibleIndex !== currentIndex
            ) {
              return false
            }
          }
        }

        return true
      }
    )
  }

  return searchTerms
}

/**
 * Converts a text string into a string of search terms.
 * @param {string} textString - The text string
 * @param {TextToSearchTermsOptions} userOptions - Options on how to clean up the text string
 * @returns {string} An string of search terms
 */
export function textToSearchTermsString(
  textString: string,
  userOptions: Partial<TextToSearchTermsOptions> = OPTIONS_DEFAULT
): string {
  return textToSearchTerms(textString, userOptions).join(' ')
}

export default textToSearchTerms
