function selectionShort(){
  var a =[12,4,77,1,89,55,9];

  for(i=0;i<a.length;i++){
    let minIdx = i;
    for(j=i;j<a.length;j++){
      if(a[minIdx] > a[j]){
        minIdx = j;
      }
    }
    let tmp = a[i];
    a[i] = a[minIdx] ;
    a[minIdx]=tmp;

  }
  console.log(a);
}

selectionShort();
