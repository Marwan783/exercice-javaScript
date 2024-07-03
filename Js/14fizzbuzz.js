
for(let i = 1; i <= 100; i++)

if ((i % 3 === 0) && (i % 5 === 0)){
    document.write("<p style='color:blue'>" + i + " FizzBuzz </p>");
}else if (i % 5 === 0){
    document.write("<p style='color:blue'>" + i + " Buzz </p>");
}else if (i % 3 === 0){
    document.write("<p style='color:blue'>" + i + " Fizz </p>");
}else{
    document.write("<p style='color:blue'>" + i +  "</p>");
}
