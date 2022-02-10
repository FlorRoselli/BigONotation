function printPairs(array){
  for(let i = 0; i < array.length; i++){ //O(n)
    for(let j = 0; j < array.length; j++){ //O(k)
      console.log(`${array[i]}, ${array[j]}`) // O(nk)
    }
  }
}

//¿Cuál es la complejidad de tiempo?

//O(n*k)