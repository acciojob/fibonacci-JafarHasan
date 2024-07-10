function fibonacci(num) {

	if(num<=0)
		return num;
	else{
		return fibonacci(num-1)+fibonacci(num-2);
	}
}

module.exports = fibonacci;
