export function formatEntry(string){
  const arr = string.split("<div><br></div>");
  return arr.join("");
}

export function getDate(type = 'US'){
  const date = new Date();
  const yyyy = date.getFullYear();
  let dd = date.getDate();
  let mm = date.getMonth() + 1;

  switch(type){
    case 'US':
      return `${mm}/${dd}/${yyyy}`;
    case 'EU':
      return `${dd}/${mm}/${yyyy}`;
    default: 
      break;
  }
}