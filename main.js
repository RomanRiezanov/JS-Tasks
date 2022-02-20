// TASK 1

const getDifference = arr => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    
    if (max - min == -Infinity || max - min == Infinity) return 0;
    
    return max - min
}

// TASK 2

const sortedArr = (...arr) => {
    const num = arr[arr.length - 1];

    return arr.filter(item => item.length < num);
}

// TASK 3

const getMissingElement = arr => {
    const sortedArr = arr.sort();

    let el = 0;

    for (let i = 0; i < sortedArr.length; i++){
        if (sortedArr[i] !== el) return el;

        el++
    }   
}

// TASK 4

const solution = (str, target) => {
    let i = target.length - 1;
    let j = str.length - 1;
   
    while (i >= 0) {
      if (target[i] !== str[j]) return false;
      
      i--;
      j--;
    }
   
    return true
  }

// TASK 5

const averages = arr => {
    let resultArr = [];
    let j = arr[0];

    for(let i = 1; i < arr.length; i++){
        resultArr.push((arr[i] + j) / 2);
        j = arr[i];
    }
    return resultArr
}

// TASK 6

const maxNum = num => {
    let numArr = num.toString().split('');
        numArr.sort((a, b) => b - a);

    return +numArr.join('');
}

// TASK 7

const nameScore = str => {
    let result = 0;
    
    const nameArr = str.split('');
    
    for (const [key, value] of Object.entries(scores)) {
        nameArr.forEach(letter => {
            result += letter == key ? value : 0
        })
    }

    if (result <= 60) {
        return "NOT TOO GOOD";
    } else if (result <= 300) {
        return "PRETTY GOOD";
    } else if (result <= 599) {
        return "VERY GOOD";
    } else {
        return "THE BEST";
    }
}

// TASK 8

const countVowels = str => {
    const arrLetters = ['a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;

    for (let letter of str.toLowerCase().split('')) {
        if (arrLetters.includes(letter)) count++
    }
    return count
}

// TASK 9

const removeABC = str => {
    const deletedLetters = ['a','b', 'c'];
    
    let arrStr = str.split('');

    let result = arrStr.map(letter => {
        if(!deletedLetters.includes(letter)) return letter
    })
        if (result.join('') === str) {
            return null
        } else return result.join('');
}

// TASK 10

const difference = (arr1, arr2) => {
    const result = [];
    const sumArr = [...arr1, ...arr2];

    for (num of sumArr) {
        if (!result.includes(num)){
            result.push(num)
        }
    }
    
    result.sort((a, b) => a - b);

    return result
}

// TASK 11

const reverseObj = obj => {
    const resultObj = {};
    
    Object.entries(obj).forEach(([key, value]) => resultObj[value] = key)

    return resultObj
}

// TASK 12

const calculateDifference = (obj, sum) => {
    const priceOfItemsArr = Object.values(obj);
    
    if (priceOfItemsArr.length == 0) return "Please write right parametrs";
    
    const sumOfItems = Object.values(obj).reduce((acc, current) => acc + current);
    const result = sumOfItems - sum;

    if (result <= 0) return "Please write right parametrs"; 

    return result
}

// TASK 13

const leftRotations = str => {
    const result = [];
    let rotateStr = [];

    const splittedStr = str.split('');
    for (let i = 0; i < splittedStr.length; i++) {
        rotateStr = rotateStr.concat(splittedStr.slice(1), splittedStr.slice(0, 1));
        
        result[i] = rotateStr.join('');
    }
    
    return result
}
