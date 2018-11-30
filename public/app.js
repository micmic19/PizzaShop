function allStorage() 
{
    var archive = [];
    for (var i = 0; i<localStorage.length; i++) {
        archive[i] = localStorage.getItem(localStorage.key(i));
}

function something() 
{
	var x = window.localStorage.getItem('bbb');
	x = x * 1 + 1;
	window.localStorage.setItem('bbb', x);
	alert(x);
}