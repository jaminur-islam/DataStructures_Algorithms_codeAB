const text = "HELLO, lOOK , looking AT YOU";
console.log(text.match(/\bLO/gi)); // b mean beginning, kono word er prothome zodi LO diye start hoy tahole seita ke dibe

const text2 = "HELLO, lOOK AT YOU";
console.log(text2.match(/\BLO/gi)); // B mean last  , kono word er last e zodi LO thake tahole seita ke return korbe na thakle null
