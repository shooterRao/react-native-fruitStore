// 乱序函数
export default arr => {
  const array = arr;
  const { length: len } = array;
  for (let i = 0; i < len - 1; i += 1) {
    const idx = Math.floor(Math.random() * (len - i));
    const temp = array[idx];
    array[idx] = array[len - i - 1];
    array[len - i - 1] = temp;
  }
  return array;
};
