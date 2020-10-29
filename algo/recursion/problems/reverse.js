function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

// alter
// function reverse(str){
//     if(!str.length) return "";
//     return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
// }