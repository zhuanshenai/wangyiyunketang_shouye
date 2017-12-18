window.addEventListener('load', function(){
	/* search slider a start */
	var search_all_a = document.querySelectorAll('#search ul > li ol li a');
	Array.prototype.slice.call(search_all_a).forEach(function(item, index){
		item.addEventListener('mouseover', function(){
			this.style.color = '#31a030';
			this.parentNode.style.background = '#f8f8f8';
		}, false)
		item.addEventListener('mouseout', function(){
			this.style.color = '';
			this.parentNode.style.background = '';
		}, false)
	})
	/* search slider a end */

	/* search slider start */
	var slider_nav = document.querySelectorAll('.slider_nav'),
			slider_bottom = document.querySelectorAll('.slider_bottom');
	Array.prototype.slice.call(slider_nav).forEach(function(item, index){
		item.addEventListener('mouseover', function(){
			this.children[0].style.color = '#fff';
			this.children[0].style.background = '#31a030';
			slider_bottom[index].style.display = 'block'
		}, false);
		item.addEventListener('mouseout', function(){
			this.children[0].style.color = '';
			this.children[0].style.background = '';
			slider_bottom[index].style.display = ''
		}, false);
	})		
	/* search slider end */
}, false)