window.addEventListener('load', function(){
	var click = document.querySelector('#click'),
			prev = click.querySelector('.prev'),
			next = click.querySelector('.next'),
			ul = click.querySelector('ul'),
			a = ul.querySelectorAll('a');
	click.addEventListener('mouseover', function(){
		prev.style.display = 'block';
		next.style.display = 'block';
	}, false)
	click.addEventListener('mouseout', function(){
		prev.removeAttribute('style');
		next.removeAttribute('style');
	}, false)
	next.addEventListener('mouseover', function(){
		if(parseInt(ul.style.left) <= 0){
			this.style.background = '#2187e0';
			this.style.color = '#fff';
		}
	}, false)
	next.addEventListener('click', function(){
		if(parseInt(ul.style.left) > -1952){
			ul.style.left = parseInt(ul.style.left) - 244 + 'px';
		}else{
			return false;
		}
	}, false)
	prev.addEventListener('mouseover', function(){
		if(parseInt(ul.style.left) < 0){
			this.style.background = '#2187e0';
			this.style.color = '#fff';
		}
	}, false)
	prev.addEventListener('click', function(){
		if(parseInt(ul.style.left) !== 0){
			ul.style.left = parseInt(ul.style.left) + 244 + 'px';
		}else{
			return false;
		}
	}, false)
}, false)