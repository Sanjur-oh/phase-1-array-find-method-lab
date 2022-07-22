// code your solution here

// function superbowlWin (record) {
//     if (record.result === "W") {
//         return record.year;
//     }
// }

// function superbowlWin(win) {
//     let year = win.year;
//     if (win.result === "W") {
//       return year;
//     } else {
//       return undefined;
//     }
//   }
  
//   const finder = record.find(superbowlWin);

function superbowlWin(record){
  const win = record.find(elem => elem.result === "W")
  return win ? win.year : undefined
}

