function bubbleSort(array) {
  let flag = true;
  let arraySorted = array;
  if (array[0] !== undefined) {
    while (flag) {
      flag = false;
      let arr = swap(arraySorted, flag);
      arraySorted = arr[0];
      flag = arr[1];
    }
  }
  return arraySorted;
}

function swap(arr, flag) {
  let acumulador = null;
  let bandera = flag;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      acumulador = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = acumulador;
      bandera = true;
    }
  }

  return [arr, bandera];
}
