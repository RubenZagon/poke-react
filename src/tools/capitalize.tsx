export function capitalize(text: string) {
  const letters = text.split(/[,_-]/g);
  let letter = letters[0];
  letter = letter.charAt(0).toLocaleUpperCase() + letter.substr(1);
  letters[0] = letter;
  return letters.join("");
}
