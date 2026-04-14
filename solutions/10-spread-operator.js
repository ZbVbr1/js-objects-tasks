// BEGIN
export default function make(name, additionalProps = {}) {
  
  const defaultProps = {
    state: 'moderating',
    createdAt: Date.now(), 
  };
  
  
  return {
    name,                    
    ...defaultProps,         
    ...additionalProps,      
  };
}
// END