//your JS code here. If required.
function manipulateArray(inputArray) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(inputArray);
        }, 3000);
      });
    }

    function filterOddNumbers(inputArray) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const resultArray = inputArray.filter(number => number % 2 === 0);
          resolve(resultArray);
        }, 1000);
      });
    }

    function multiplyEvenNumbers(inputArray) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const resultArray = inputArray.map(number => (number % 2 === 0) ? number * 2 : number);
          resolve(resultArray);
        }, 2000);
      });
    }

    function updateOutputText(text) {
      document.getElementById('output').innerText = text;
    }

    const inputArray = [1, 2, 3, 4];

    manipulateArray(inputArray)
      .then(filteredArray => {
        updateOutputText(`Filtered Array: [${filteredArray.join(', ')}]`);
        return filterOddNumbers(filteredArray);
      })
      .then(multipliedArray => {
        updateOutputText(`Multiplied Array: [${multipliedArray.join(', ')}]`);
      })
      .catch(error => {
        console.error('Error:', error);
      });