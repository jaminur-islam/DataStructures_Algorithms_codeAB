// \f form feed mane hocche eita ekta bises okkhor za print korar somoy macing ke bujte sahajjo kore ze kon line er por abar noton page print hbe
let text = "Visit\f3Schools.\fLearn Javascript.";
console.log(text.search(/\f/g)); // form feed ber kore dey
