/* A programming algorithm is a procedure or formula used for solving a problem. It is based on conducting a sequence of specified actions in which these actions describe how to do something, and your computer will do it exactly that way every time. An algorithm works by following a procedure, made up of inputs */

/* function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let lowest = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    let tamp = arr[i];
    arr[i] = arr[lowest]; // lowest ke 0 index e ante hbe [ekhane taie kora hoyeche]
    arr[lowest] = tamp; // ar lowest er jaygay tam ke dukiye dibo
  }
  return arr;
}

console.log(selectionSort([50, 10, 20, 30, 40])); */

function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let lowest = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      console.log(arr, i, lowest);
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}
console.log(selectionSort([0, 1, -1, 3]));
