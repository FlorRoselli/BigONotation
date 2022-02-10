function foo(array){
  let sum = 0; //O(1)
  let product = 1; //O(1)
  for(let i = 0; i < array.length; i++){ //O(n)
    sum += array[i]; //O(n)
  }
  for(let i = 0; i < array.length; i++){ //O(n)
    product *= array[i]; //O(n)
  }
  console.log(`${sum}, ${product}`); //O(1)
}

//¿Cuál es la complejidad de tiempo?
//O(3 + 4n) -> O(n)