// BEGIN
export default function getSortedNames(users) {
  
  const names = [];
  
  for (const user of users) {
    
    const { name } = user;
    names.push(name);
  }
  
  return names.sort();
}
// END