function check(predict, onSuccess, onFail) {
  if (predict()) {
    onSuccess("yes");
  } else {
    onFail("no");
  }
}

module.exports = check;
