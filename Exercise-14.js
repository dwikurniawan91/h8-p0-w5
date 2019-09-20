function changeVocals(str) {
  var vocal = {
    a: "b",
    e: "f",
    i: "j",
    o: "p",
    u: "v",
    A: "B",
    E: "F",
    I: "J",
    U: "V",
    O: "P"
  };

  var arrSplit = str.split("");
  for (var key in vocal) {
    for (i = 0; i < arrSplit.length; i++) {
      if (arrSplit[i] === key) {
        arrSplit[i] = vocal[key];
      }
    }
  }

  return arrSplit;
}

function reverseWord(arrSplit) {
  var vocal = changeVocals(arrSplit);
  var reverse = [];
  for (i = vocal.length - 1; i >= 0; i--) {
    reverse.push(vocal[i]);
  }

  return reverse;
}

function setLowerUpperCase(rev) {
  var lower = reverseWord(rev);
  for (i = 0; i < lower.length; i++) {
    if (lower[i] === lower[i].toLowerCase()) {
      lower[i] = lower[i].toUpperCase();
    } else {
      lower[i] = lower[i].toLowerCase();
    }
  }

  return lower;
}

function removeSpaces(str) {
  var space = setLowerUpperCase(str);
  var res = "";
  for (i = 0; i < space.length; i++) {
    if (space[i] !== " ") {
      res += space[i];
    }
  }
  return res;
}

function passwordGenerator(name) {
  if (name.length<5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }else{
    var pass = removeSpaces(name);
    return pass;
  }
}


console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
