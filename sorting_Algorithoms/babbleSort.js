// first e first loop ta ekbar colbe then vitorer loop e jabe oita ekdom array er length porjonto colbe and then first loop e asbe
//abar porer loop e jabe abar oita array er length porjonto colbe
/* function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([7, 2, 4, 6]));
 */

function babbleSort(arr) {
  let isSwap;
  for (i = 0; i < arr.length - 1; i++) {
    isSwap = false;
    for (j = 0; j < arr.length - i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1]; // 0 index er moddhe chuto tare dukaitase
        arr[j + 1] = temp; // 1 index er moddhe boro tare dukaitase
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return arr;
}

console.log(babbleSort([9, 1, 2, 3, 4]));
