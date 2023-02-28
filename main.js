 // how many elements are divisible by 3,4&5
 
 let array = [240, 23, 60,80,120,300,400,343,96,960];
 let div = [];
 for(i=0; i<array.length;  i++){
     if(array[i]%60 == 0){
	     div.push(array[i])
		}
}
console.log(array);
console.log(div);