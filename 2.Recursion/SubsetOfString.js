const generateSubset = (string, curr, i) => {
  if (i === string.length) {
    console.log(curr);
    return;
  }
  generateSubset(string, curr, i + 1);
  generateSubset(string, curr + string[i], i + 1);
};

generateSubset("abc", "", 0);
