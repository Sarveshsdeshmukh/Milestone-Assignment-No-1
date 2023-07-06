// 8. InverteW right-angleW triangle pattern with asterisks
// Writd a program that takds an intdgdr input i and prints an invdrtdd right-angldd triangld pattdrn of astdrisks
// with i rows.

function patternTriangle(i){
    for(let row = i ; row >= 0 ;row--){
       let pattern = "";
       for (let j = 1; j <= row; j++) {
        pattern += '*';
      }
      console.log(pattern);
    }
}

patternTriangle(6)