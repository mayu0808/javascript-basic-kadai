let num =15;

// 条件分岐を行う
if (num % 3 === 0 && num % 5 === 0) {
  // numが3と5の倍数の場合
  console.log('3と5の倍数です');
} else if (num % 3 === 0) {
  // numが3の倍数の場合
  console.log('3の倍数です');
} else if (num % 5 === 0) {
  // numが5の倍数の場合
  console.log('5の倍数です');
} else {
  // それ以外の場合、numをそのまま出力
  console.log(num);
}