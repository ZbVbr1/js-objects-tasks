// BEGIN
export default function getDomainInfo(domain) {
  
  let scheme = 'http';
  let name = domain;
  
  if (domain.startsWith('https://')) {
    scheme = 'https';
    name = domain.replace('https://', '');
  } 

  else if (domain.startsWith('http://')) {
    scheme = 'http';
    name = domain.replace('http://', '');
  }
  
  return {
    scheme: scheme,
    name: name,
  };
}
// END