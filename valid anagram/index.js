//valid anagram

const validanagram = (str1, str2) => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

console.log(validanagram("anagram", "nagaram"));
