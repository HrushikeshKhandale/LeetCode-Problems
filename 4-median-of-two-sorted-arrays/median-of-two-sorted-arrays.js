/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let totalLength = nums1.length + nums2.length;
    let merged = nums1.concat(nums2).sort((a, b) => a - b);

    let medianIndex = totalLength / 2;

    if (totalLength % 2 === 0) {
        return (merged[medianIndex - 1] + merged[medianIndex]) / 2;
    } else {
        medianIndex = Math.floor(totalLength / 2);
        return merged[medianIndex];
    }
};