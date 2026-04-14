import _ from 'lodash';

// BEGIN
import { words } from 'lodash';

export default function countWords(sentence) {
  if (!sentence || sentence.trim() === '') {
    return {};
  }
  
  const wordArray = words(sentence);
  
  const result = {};
  
  for (const word of wordArray) {
    const lowerWord = word.toLowerCase();
    
    if (result[lowerWord]) {
      result[lowerWord] += 1;
    } else {
      result[lowerWord] = 1;
    }
  }
  
  return result;
}
// END