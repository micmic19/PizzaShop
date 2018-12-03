function something() 
{
	var x = window.localStorage.getItem('bbb');
	x = x * 1 + 1;
	window.localStorage.setItem('bbb', x);
	alert(x);
}

function add_to_cart(id)
{
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);
	//вывод количества item-ов в корзине
	alert(cart_get_number_of_items());
}

function total_items()
{
	var total = 0;
	for (var i = 0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		if (key.match(/product_.*/)) {
			total = total * 1. + parseInt(localStorage.getItem(key), 10);
		}
	}
	return total;
}

function cart_get_number_of_items()
{
	var cnt = 0;
	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i);
		value = window.localStorage.getItem(key);
		if (key.indexOf('product_') == 0)
		{
			cnt = cnt + value * 1;
		}
	}
	return cnt;
}


function cart_get_orders()
{
	var orders = '';
	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i);
		value = window.localStorage.getItem(key);
		if (key.indexOf('product_') == 0)
		{
			orders = orders + key + '=' + value + ',';
		}
	}
	return orders;
}

