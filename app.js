const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

  
  const primearray = 
  numbers.filter(n  => n>1 && ! [ ...Array(n).keys()].slice(2).some(i => n% i === 0));

  console.log("Prime NUmber", primearray);

  console.log("Max:", Math.max(...primearray),"Min:",Math.min(...primearray),"sum:", primearray.reduce((a , b)) => a + b);
  