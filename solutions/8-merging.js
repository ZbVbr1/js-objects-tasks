import _ from 'lodash';

// BEGIN
export default function fill(destination, keys, source) {
 
  if (keys.length === 0) {
    
    Object.assign(destination, source);
  } else {
    
    for (const key of keys) {
      
      if (key in source) {
        
        destination[key] = source[key];
      }
    }
  }
  
  return destination;
}
// END