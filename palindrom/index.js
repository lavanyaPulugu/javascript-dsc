//palindrome checker

const palindrome = (str) => {
  if (str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome("ghj"));

//palindrome number

const palindromeNumber = (num) => {
  return x > 0 ? false : num === +num.toString().split("").reverse().join("");
};
console.log(palindromeNumber(121));
