window.addEventListener('load', function(){
	/* lunbo start */
	var lunbo = document.querySelector('#banner .lunbo'),
			olLi = document.querySelectorAll('#banner .lunbo ol li'),
			ulLi = document.querySelectorAll('#banner .lunbo ul li'),
			prev = document.querySelector('#banner .lunbo .prev'),
			next = document.querySelector('#banner .lunbo .next'),
			ul = document.querySelector('#banner .lunbo ul');
	prev.addEventListener('click', function(){
		animate(1205);
	}, false)		
	next.addEventListener('click', function(){
		animate(-1205);
	}, false)	
	function animate(offset){
		ul.style.left = parseInt(ul.style.left) + offset + 'px';
		if(parseInt(ul.style.left) < -8435){
			ul.style.left = '-1205px';
		};
		if(parseInt(ul.style.left) > -1205){
			ul.style.left = '-8435px';
		};
		var index = Math.abs(parseInt(ul.style.left)/1205);
		Array.prototype.slice.call(olLi).forEach(function(item, index){
			item.removeAttribute('class')
		})
		olLi[index-1].className = 'active';
	}	
	var timer = setInterval(function(){
		next.click();
	}, 3000);
	lunbo.addEventListener('mouseover', function(){
		clearInterval(timer);
	}, false);
	lunbo.addEventListener('mouseout', function(){
		timer = setInterval(function(){
			next.click();
		}, 3000);
	}, false)
	/* lunbo end */

	/* slider start */
	var parent = document.querySelectorAll('#banner > .left > ul .parent'),
			slider = document.querySelectorAll('#banner > .left > ul .parent .slider'),
			span = document.querySelectorAll('#banner > .left > ul .parent .slider .box .right ul li:first-child span');
	Array.prototype.slice.call(parent).forEach(function(item, index){
		item.addEventListener('mouseover', function(){
			slider[index].style.display = 'block';
			this.style.background = '#fff';
		}, false);
		item.addEventListener('mouseout', function(){
			slider[index].style.display = '';
			this.style.background = '';
		}, false);
	})
	Array.prototype.slice.call(span).forEach(function(item, index){
		item.addEventListener('click', function(){
			slider[index].style.display = '';
		}, false);
	})
	/* slider end */ 
}, false)