var array1=[1,3,4,6,7,8,10,14,15];
var target=14;
var output1=[];
function output(){
    for (var i=0;i<array1.length;i++){
        for (var j=0;j<array1.length;j++){
            if(array1[i]+array1[j]==target){
                return[i,j];
            }
        }
    }
}
console.log(output())
