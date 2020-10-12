<script>

function getEletemet(arr, x, start, end){
	if(start>end){
    	return false;
    }
    const mid = Math.floor((start+end)/2);
    if(arr[mid]== x){
    	return true;
    }
    if(arr[mid] > x){
    	return getEletemet(arr, x, start, mid-1)
    } else {
   		return getEletemet(arr, x, mid+1, end)
    }
}

function check(){
let arr = [1, 3, 5, 7, 8, 9]; 
let x = 1; 
 document.write(getEletemet(arr, x, 0, arr.length-1)); 
}

</script>
