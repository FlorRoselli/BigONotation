function reverse(array){
  for(let i = 0; i < array.length / 2; i++){ //O(N/2)
    let other = array.length - i - 1; //O(1)
    let temp = array[i]; // O(1)
    array[i] = array[other]; //O(1)
    array[other] = temp; //O(1)
  }
}

//¿Cuál es la complejidad de tiempo?
// O(4 + N/2)
// O(N/2) -> ya que el for se va a ejecutar la mitad
// de veces de la longitud del array
