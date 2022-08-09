/* function logarithmsN(n) {
  while (n > 1) {
    console.log(n);
    n = n / 2;
  }

  console.log("good job");
}

logarithmsN(16); */

//================== Recursive function call  ======================//
function logarithmsN(n) {
  if (n <= 1) {
    return;
  }
  console.log(n);
  // logarithmsN(n - 2);
  logarithmsN(n / 2);
}

logarithmsN(80);
