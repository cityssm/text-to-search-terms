import { remove as removeDiacritics } from 'diacritics'

export interface TextToSearchTermsOptions {
  removeCase: boolean
  removePunctuation: boolean
  removeDiacritics: boolean
  sortAlphabetically: boolean
  removeDuplicateWords: boolean
  removeDuplicatePartialWords: boolean
}

const OPTIONS_DEFAULT: TextToSearchTermsOptions = {
  removeCase: true,
  removePunctuation: true,
  removeDiacritics: false,
  sortAlphabetically: false,
  removeDuplicateWords: true,
  removeDuplicatePartialWords: false
}

Object.freeze(OPTIONS_DEFAULT)

export const OPTIONS_ALL: TextToSearchTermsOptions = {
  removeCase: true,
  removePunctuation: true,
  removeDiacritics: true,
  sortAlphabetically: true,
  removeDuplicateWords: true,
  removeDuplicatePartialWords: true
}

Object.freeze(OPTIONS_ALL)

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

  if (options.removeDuplicatePartialWords) {
    searchTerms = searchTerms.filter(
      (currentWord, currentIndex, currentList) => {
        for (const [possibleIndex, possibleWord] of currentList.entries()) {
          if (
            possibleWord.includes(currentWord) &&
            possibleIndex !== currentIndex
          ) {
            return false
          }
        }

        return true
      }
    )
  }

  return searchTerms
}

export function textToSearchTermsString(
  textString: string,
  userOptions: Partial<TextToSearchTermsOptions> = OPTIONS_DEFAULT
): string {
  return textToSearchTerms(textString, userOptions).join(' ')
}

export default textToSearchTerms
