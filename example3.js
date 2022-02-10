function printUnorderedPairs(array){
  for(let i = 0; i < array.length; i++){// O(n)
    for(let j = i + 1; j < array.length; j++){ //O(n)
      console.log(`${array[i]}, ${array[j]}`); // O(n*n)
    }
  }
}

//¿Cuál es la complejidad de tiempo?
// O(n^2 + n*n) -> O(n^2)