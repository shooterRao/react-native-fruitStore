// 乱序函数
export default (array) => {
   
        let length = array.length;
        let current;
        for(let i = 0; i < length; i++) {
            current = Math.floor(Math.random()*i);
            [array[i],array[current]] = [array[current],array[i]]
        }
        return array;
  
}