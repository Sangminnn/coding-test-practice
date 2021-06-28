function solution(arr) {
  if (arr.length === 1) return 'YES';

  let object = {};

  arr.split('').forEach(number => {
    if (!object[number]) {
      object[number] = 1;
      return;
    }

    object[number]++;
  });

  let value_array = Object.values(object).sort().join('');
  let target_value;

  target_value =
    value_array[0] !== value_array[1] && value_array[1] === value_array[2]
      ? value_array[1]
      : value_array[0];

  let regex = new RegExp(target_value, 'g');
  let filtered_array = value_array.replace(regex, '');

  if (filtered_array.length > 1 || Math.abs(filtered_array[0] - target_value) > 1) return 'NO';

  return 'YES';
}
