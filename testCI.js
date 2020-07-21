// Ex 1:
function ex1() {
  let input = prompt(`Nhập vào 1 dãy số, cách nhau bởi dấu ' '`);
  let arrayinput = input.split(" ").map(function (value) {
    value = Number(value);
    return value;
  });
  console.log("Dãy số vừa nhập theo chiều ngược:");
  for (let i = arrayinput.length - 1; i >= 0; i--) {
    console.log(arrayinput[i]);
  }
}

// Ex 2:
function ex2() {
  let input2 = prompt(`Nhập dãy số bất kì, cách nhau bởi dấu ' '`);
  let arrayinput2 = input2.split(" ").map(function (value) {
    value = Number(value);
    return value;
  });
  let newarrinput = [...new Set(arrayinput2)];

  console.log(`Trong dãy số ${arrayinput2.join(", ")}`);
  console.log("Có các cặp số phân biệt sau có tích là 256:");
  for (let i = 0; i < newarrinput.length; i++) {
    for (let x = i + 1; x < newarrinput.length; x++) {
      if (newarrinput[i] * newarrinput[x] == 256) {
        console.log(
          `${newarrinput[i]} và ${newarrinput[x]} tại vị trí ${
            arrayinput2.indexOf(newarrinput[i]) + 1
          } và ${arrayinput2.indexOf(newarrinput[x]) + 1}`
        );
      }
    }
  }
}
