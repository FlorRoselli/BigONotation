function printUnorderedPairs(arrayA, arrayB){
  for(let i = 0; i < arrayA.length; i++){ //O(n)
    for(let j = 0; j < arrayB.length; j++){ //O(k)
      if(arrayA[i] < arrayB[j]){ //O(k) 
        console.log(`${arrayA[i]}, ${arrayB[j]}`); //O(k*n) 
      }
    }
  }
}

//¿Cuál es la complejidad de tiempo?
//O(n*k)