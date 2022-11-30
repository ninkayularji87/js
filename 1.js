const degreeC = Number.parseFloat(prompt('Введите температуру в градусах цельсия'));
const degreeF = (9/5*degreeC+32);
const rounded = parseFloat(degreeF.toFixed(1));
alert(`Цельсий: ${degreeC}, Фаренейт ${rounded}`);
