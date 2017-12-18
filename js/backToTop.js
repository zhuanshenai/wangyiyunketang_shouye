window.addEventListener('load', function(){
	var li = document.querySelectorAll('#backToTop ul > li'),
			div = document.querySelector('#backToTop ul > li div.active + div'),
			backToTop = document.querySelector('#backToTop'),
			login_bottom = document.querySelector('#login_bottom'),
			font = document.querySelectorAll('#backToTop .backToTop');
	Array.prototype.slice.call(li).forEach(function(item, index){
		item.addEventListener('mouseover', function(){
			this.style.background = '#39a030';
			font[index].style.color = '#fff';
			if(this.className === 'shouji'){
				div.style.display = 'block';
			}
		}, false)
		item.addEventListener('mouseout', function(){
			this.style.background = '';
			font[index].style.color = '';
			if(this.className === 'shouji'){
				div.removeAttribute('style')
			}
		}, false)
		item.addEventListener('click', function(){
			if(this.className === 'dingbu'){
				document.documentElement.scrollTop = 0;
			}
		})
	})
}, false)
window.addEventListener('scroll', function(){
	if(document.documentElement.scrollTop > 0){
		backToTop.style.display = 'block';
	}else{
		backToTop.style.display = 'none';
	}
	if(document.documentElement.scrollTop >= 400){
		login_bottom.style.display = 'block';
	}else{
		login_bottom.style.display = 'none';
	}
}, false)