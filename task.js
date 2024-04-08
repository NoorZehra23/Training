// Define an object for number operations
const numberHandler = {
    numbers: [1, 2, 3, 4, 5],
    // Method to double each number in the array
    doubleNumbers() {
        let resultArray = [];
        this.numbers.forEach(item => {
            let DoubledValue = item*2;
            resultArray.push(DoubledValue);
        });
        return resultArray;
    },

    // Method to square each number in the array
    squareNumbers() {
        let resultArray = [];
        this.numbers.forEach(item => {
            let squaredValue = item * item;
            resultArray.push(squaredValue);
        });
        // this.numbers = resultArray;
        return resultArray;  
    },
    // Method to find the sum of all numbers in the array
    sumNumbers() {
        let sum =0;
        this.numbers.forEach(item => {
            sum += item;
        });
        return sum;  
        
    },
    // Method to filter out even numbers from the array
    filterEvenNumbers() {
        return this.numbers.filter((item, index) => {
            return item % 2 === 0;
        });
    },
    
    // Method to find the maximum number in the array
    findMax() {
        let max = this.numbers[0]; 
        this.numbers.forEach(item => {
            if (item > max) {
                max = item; 
            }
        });
      return max;
        
    },

    // Method to find the minimum number in the array
    findMin() {
        let min = this.numbers[0]; 
        this.numbers.forEach(item => {
            if (item < min) {
                min = item; 
            }
        });
      return min;
    },
    
    // Method to reverse the array
    reverseArray() {
        let reversedArray = [];
        for (let i = this.numbers.length - 1; i >= 0; i--) {
            reversedArray.push(this.numbers[i]);
        }
        return reversedArray;
      },
    
    
    // Method to sort the array in ascending order
    sortArray() {
        let sortedArray = [];
        let originalArray = [...this.numbers]; 
        while (originalArray.length > 0) {
            let min=originalArray[0]
            originalArray.forEach(item => {
                if (item < min) {
                    min = item; 
                }
            });
            sortedArray.push(min); 
            originalArray = originalArray.filter(item => item !== min);
        }
        return sortedArray;   
    },
 
    // Method to demonstrate asynchronous operation using promises
    asyncOperation() {  
        return new Promise((resolve, reject) => {
            setTimeout(() => {
       
                let squaredArray = this.squareNumbers();
                if (squaredArray.includes(15)) {
                    reject("Error: Number 25 found in squared array");
                } else {
                    resolve({ message: "Operation completed successfully!", squaredArray });
                }
                   }, 2000);
        });
       
  
    },
   
   
    // // Method to demonstrate type coercion
    typeCoercionDemo() {
        let a="5";
        let resultArray = [];
        resultArray.push(a*this.numbers[0]);
        resultArray.push(a+this.numbers[0]);
        return resultArray;     

    }
  };
  // Test the number methods
    numberHandler.doubleNumbers();
    numberHandler.squareNumbers();
    numberHandler.filterEvenNumbers();
    numberHandler.reverseArray();
    numberHandler.sortArray();
  
  console.log('Array:', numberHandler.numbers);
  console.log('Doubled Array:', numberHandler.doubleNumbers());
  console.log('Squared Array:', numberHandler.squareNumbers());
  console.log('Even Number Array:', numberHandler.filterEvenNumbers());
  console.log('Sum of Numbers:', numberHandler.sumNumbers());
  console.log('Max Number:', numberHandler.findMax());
  console.log('Min Number:', numberHandler.findMin());
  console.log('Reversed Number:', numberHandler.reverseArray());
  console.log('Type Coercion:', numberHandler.typeCoercionDemo());
  console.log('Sort:', numberHandler.sortArray());
  
  // Demonstrate asynchronous operation with promises

  numberHandler.asyncOperation()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
        console.error(error); 
    });;
    console.log('End of script execution. Event loop continues...');