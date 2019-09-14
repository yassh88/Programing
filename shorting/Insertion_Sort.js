function insertionSort(){
  var a = [12,34,56,8,9,232,7];
  for(i =1; i <a.length; i++){
      console.log(a);
      var item = a[i];
      for(j=i-1; j>=0 && a[j] > item; j--){
         a[j+1]= a[j]
      }
      a[j+1] = item;
  }
}

insertionSort()
