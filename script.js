function fibonacci(num) {

	if(num<=1)
		reutrn num;
	else{
		return fibonacci(num-1)+fibonacci(num-2);
	}
}

module.exports = fibonacci;
