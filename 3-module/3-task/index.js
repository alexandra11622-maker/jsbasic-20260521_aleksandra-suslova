function camelize(str) {
  return str
    .split('')
    .reduce((result, char, index, array) => {
      if (char === '-') {
        // Пропускаем дефис, но следующий символ сделаем заглавным
        return result;
      }
      
      if (index > 0 && array[index - 1] === '-') {
        // Если предыдущий символ был дефис — делаем текущий заглавным
        return result + char.toUpperCase();
      }
      
      return result + char;
    }, '');
}

// Тесты
console.log(camelize('background-color'));     // backgroundColor
console.log(camelize('list-style-image'));     // listStyleImage
console.log(camelize('-webkit-transition'));   // webkitTransition
console.log(camelize('my-short-string'));      // myShortString