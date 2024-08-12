import { APIGatewayProxyEvent, APIGatewayProxyResultV2 } from 'aws-lambda';
import { VocabularyBasedResult, vocabulary, VocabularyKeys, RequestPayload } from 'vocabulary';

/**
 *
 * @param {string} text text content
 * @returns {string[]} array of words splitted from text content
 */
export const sanitizeAndSplitText = (text: string): string[] =>
  text.trim().length ? text.trim().toLowerCase().split(/\s+/) : [];

/**
 * Function count words based on category
 * @param {string } text text content
 * @returns {VocabularyBasedResult} Object with categories count.
 */
const countWordsByTheirVocabulary = (text: string): VocabularyBasedResult => {
  const countedResultBasedOnVocabulary: VocabularyBasedResult = {
    noun: 0,
    verb: 0,
    adjective: 0,
    adverb: 0,
    preposition: 0,
    conjunction: 0,
    pronoun: 0,
    interjection: 0,
    determiner: 0,
    numeral: 0,
  };
  const words = sanitizeAndSplitText(text);
  if (!words.length) {
    return countedResultBasedOnVocabulary;
  }
  for (const key in vocabulary) {
    if (Object.prototype.hasOwnProperty.call(vocabulary, key)) {
      const matches = words.filter((word) => vocabulary[key as VocabularyKeys].has(word));
      countedResultBasedOnVocabulary[key as VocabularyKeys] += matches?.length ?? 0;
    }
  }
  return countedResultBasedOnVocabulary;
};

//////////////////////////////////////////////////////////////////////////////////////////
// Lambda Handler
//////////////////////////////////////////////////////////////////////////////////////////
// eslint-disable-next-line @typescript-eslint/require-await
const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
  let textContent;
  const corsHeaders = {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*', // Allow from anywhere
    'Access-Control-Allow-Methods': 'GET', // Allow only GET request
  };
  if (event.body) {
    try {
      const requestPayload = JSON.parse(event.body) as RequestPayload;
      textContent = requestPayload.textContent;
    } catch (error) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({
          message: 'Bad Request',
          errorMessage: (error as Error).message,
        }),
      };
    }
  }

  if (!textContent) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({
        message: 'Bad Request',
      }),
    };
  }

  const result = countWordsByTheirVocabulary(textContent);
  return {
    statusCode: 200,
    headers: corsHeaders,
    body: JSON.stringify(result),
  };
};

module.exports = { handler };
