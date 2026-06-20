function getMinMax(str) {
  const numbers = str
    .split(' ')                    // разбиваем по пробелам
    .map(item => {
      // Заменяем запятую на точку (для десятичных дробей)
      let cleaned = item.replace(',', '.');
      // Парсим как число
      return parseFloat(cleaned);
    })
    .filter(num => !isNaN(num));   // оставляем только реальные числа

  if (numbers.length === 0) {
    return { min: undefined, max: undefined }; // или можно вернуть null/null
  }

  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}