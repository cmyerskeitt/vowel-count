function getCount(str) {
    let vowels = [ "a", "e", "i", "o", "u"]
    let count = 0
   for (let i of str){
     if (vowels.includes(i)){
       count++
      }
    }
    return count
}