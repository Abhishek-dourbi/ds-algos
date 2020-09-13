function getDigit(num, place) {
	return Math.floor(num / Math.pow(10, place)) % 10;
}

console.log(getDigit(231231,1))