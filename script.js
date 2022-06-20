
document.addEventListener('DOMContentLoaded', function() {
	Scroll.init();
})
	

const Scroll = (function() {

	var articles = '';
	var navLi = '';
	var section = '';

	var _init = function() {

		articles = document.querySelectorAll('[purpose="pagecategory"]');
		navLi = document.querySelectorAll('.nav li');
		section = document.querySelector('.section');

		section.addEventListener('scroll', (ev) => {
			_handleScrollNavActive(ev);
    	})

    	document.addEventListener('click', (ev) => {
    		_handleActiveNav(ev);
    	})
	}

	var _handleScrollNavActive = function(ev) {
		let current = '';

		articles.forEach( article => {

			const articleTop = article.offsetTop;

			if( ( section.scrollTop + 50 ) >= articleTop ){
				current = article.getAttribute('id');
			}
		})

		navLi.forEach( li => {
			li.classList.remove('active');
			
			if(li.classList.contains(current)) {
				li.classList.add('active')
			}
		})
	}

	var _handleActiveNav = function(ev) {
		var elem = ev.target;
		if( elem.getAttribute('purpose') == 'nav' && !elem.classList.contains('active') ) {
			navLi.forEach( li => { li.classList.remove('active'); });
			elem.parentElement.classList.add('active');
		}
	}

	return {
		init: _init
	}
    	   	
})();
