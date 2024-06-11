/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  let res;
  for (let i = 0; i < flowerbed.length; i++) {
if (flowerbed[i] === 0) {
      const prevIndex = i === 0 ? 0 : flowerbed[i - 1];
      const nextIndex = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];

      if (prevIndex === 0 && nextIndex === 0) {
        flowerbed[i] = 1;
        count++;
      }
    }
    if(count>=n){
        return true
    }
}
  return false;
};