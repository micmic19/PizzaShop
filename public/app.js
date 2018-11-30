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