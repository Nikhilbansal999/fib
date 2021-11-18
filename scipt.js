

function fib(){
    var n=document.getElementById("n").value;
var m=document.getElementById("m").value;

console.log(m,n);
   var a=0;
   var b=1;
   var arr=[]
   arr.push(a,b)
   if(n<2){
       console.log(n);
   }else{
   for (var i=0;i<=n;i++){
       var temp=a+b;
       arr.push(temp)
       a=b;
       b=temp;
   }
   console.log(arr);
   }
 
var aa=0;
   var bb=1;
   var arr1=[];
   arr1.push(aa,bb)
   if(m<2){
    console.log(m);
   }else {
   for (var i=0;i<=m;i++){
       var temp1=aa+bb;
       arr1.push(temp1)
       aa=bb;
       bb=temp1;
   }
   console.log(arr1);
}

   var c = [];
      for (var i = 0; i <(arr.length, arr1.length); i++) {
        c.push((arr[i]||0) +(arr1[i]||0));
      }
      console.log(c);

}
    </script>