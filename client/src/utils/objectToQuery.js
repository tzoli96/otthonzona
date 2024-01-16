export default function objectToQueryString(obj) {
    const queryString = [];
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        queryString.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
      }
    }
  
    return queryString.join('&');
}