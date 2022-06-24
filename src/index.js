module.exports = function reverse (n) {
  if (n > 0){
   let rev = n.toString().split('').reverse().join('');
    return rev * 1;
  }else if( n < 0){
    n = n * -1
   let re = n.toString().split('').reverse().join('');
    return re;
  }else{
    return 0
  }
}
