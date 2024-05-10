/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res=[]
    let w1=word1.split('')
    let w2=word2.split('')
    let megedWords=w1.concat(w2)
    for(let i=0;i<megedWords.length;i++){
            if(w1[i]!==null){
            res.push(w1[i])
            }
        for(let j=i;j<w2.length;j++){
            res.push(w2[j])
            break
        }
    }
    return res.join('')
};