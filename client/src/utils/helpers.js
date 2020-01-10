export function formatEntry(string){
  const arr = string.split("<div><br></div>");
  return arr.join("");
}
