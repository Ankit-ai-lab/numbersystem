const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];

  
 const evenNumbers = numbers.filter(num => num% 2=== 0);
 const OddNumbers = numbers.filter(num => num% 2 !== 0);

 console.log("Even Number:",evenNumbers )
 console.log("Odd Number:",OddNumbers )