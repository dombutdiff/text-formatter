export function getNumberOfChars(name) {
  return name.length;
}

export function getFirstChar(name) {
  return name.charAt(0);
}

export function getLastChar(name) {
  return name.charAt(name.length - 1);
}

export function getLower(name) {
  return name.toLowerCase();
}

export function getUpper(name) {
  return name.toUpperCase();
}

// export function getCapitalized(name) {
//   return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
// }

export function getCapitalized(name) {
  // Split the name by spaces into an array of words
  const words = name.split(" ");

  // Capitalize each word
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the capitalized words back into a single string
  return capitalizedWords.join(" ");
}
