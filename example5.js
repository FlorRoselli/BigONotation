function printUnorderedPairs(arrayA, arrayB){
  for(let i = 0; i < arrayA.length; i++){ //O(n)
    for(let j = 0; j < arrayB.length; j++){ // O(k)
      for(let k = 0; k < 100000; k++){//O(h)
        console.log(`${arrayA[i]}, ${arrayB[j]}`); //O(n*k*h)
      }
    }
  }
}

//¿Cuál es la complejidad de tiempo?
//O(n*k*h)