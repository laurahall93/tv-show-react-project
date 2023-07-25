export default function twoDigits(inputNumber: number): number {
  let outputNumber = "";
  const zeroDigit = 0;
  if (inputNumber < 10) {
    outputNumber = `${zeroDigit}${inputNumber}`;
  } else {
    outputNumber = `${inputNumber}`;
  }
  return parseInt(outputNumber); //need to fix and find out how to return a padded number
}
