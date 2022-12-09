function checkPrime(num){
let c=0
for (let i=1;i<=num;i++){
    if(num%i==0){
        c=c+1
      }

if(c==2){
console.log("It is a prime")
}
else{
console.log("It is not a prime")
}

}
checkPrime(13);