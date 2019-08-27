var array1=[1,3,4,6,7,8,10,14,15];
var target=14;
var output1=[];
function output(i,j){
    for (i in array1)
        for (j in array1)
            if ((array1[i]+array1[j]==target)&&(i!=j)){
                output1.push(i,j)}
}
output();
console.log(output1)