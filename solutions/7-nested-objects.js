// BEGIN
export default function get(obj, keys) {
  
  let current = obj;
  
  for (const key of keys) {
    if (current === null || current === undefined || !Object.hasOwn(current, key)) {
      return null;
    }
    
    current = current[key];
  }
  
  return current;
}
// END