function bShort(){
    var a = [2,4,61,7,88,2];
    for(i=0; i<a.length-1;i++){
      for(j=0; j<a.length-i-1;j++){
        if(a[j]>a[j+1]){
          let tmp = a[j];
          a[j]= a[j+1];
          a[j+1]=tmp;
        }
      }
    }
    console.log(a);
}

bShort();
