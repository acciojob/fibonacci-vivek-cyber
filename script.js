function fibonacci(num) {
let a=1
let b=1
	if(num<3)
	{
		return a;
	}
	else
	{
		for(let i=3;i<=num;i++)
			{
				num=a+b
				a=b;
				b=num;
			}
		return num
	}
}

module.exports = fibonacci;
