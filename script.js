function volume_sphere() {
    //Write your code here
  const input=document.getElementById("radius");
  const output=document.getElementById("volume");
	const radius=parseFloat(input.value);
	if(isNaN(radius) || radius<0){
		output.value=NaN;
		//alert("Please enter a valid non-negative number for the radius.");
		return;
	}
	let volume=(4 / 3) * Math.PI * Math.pow(radius, 3);
	volume=volume.toFixed(4);
	console.log(volume);
	output.value=volume;
	
} 

//window.onload = document.getElementById('MyForm').onsubmit = volume_sphere();
