///code from chatgpt///
let score = 43;
let grade = Math.floor(score / 10);

switch (grade) {
  case 10:
  case 9:
    console.log("A grade");
    break;
  case 8:
  case 7:
    console.log("B grade");
    break;
  case 6:
  case 5:
    console.log("C grade");
    break;
  default:
    console.log("Failure.");
}
