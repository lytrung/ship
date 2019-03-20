
var path = anime.path('svg path');

var progress = 0;

var tl = anime.timeline({

  easing: 'linear',
  duration: 5000,
  autoplay: false,


});

tl.add({
	  targets: '.ship',
	  translateX: path('x'),
	  translateY: path('y'),
	  rotate: path('angle'),

});

tl.add({
	targets: '.route .cls-1',
  	strokeDashoffset: [anime.setDashoffset, 0],

},0);

//custome function
// to: value from 0 to 100
tl.playTo = function(to){
	if(to<this.progress){
		this.reversed = true;
	}else{
		this.reversed = false;
	}
	this.play();
	this.update = function(anim) {
		console.log(to);

		if(this.reversed == false){
			if(this.progress >= to){
				this.pause();

			}
		}else{
			if(this.progress <= to){
				this.pause();

			}
		}

	};
};


$(function(){
	$('.port1').on('click',function(){
		tl.playTo(0);
	});
	$('.port2').on('click',function(){
		tl.playTo(8);
	});
	$('.port3').on('click',function(){
		tl.playTo(19.5);
	});

	$('.port4').on('click',function(){
		tl.playTo(24);
	});

	$('.port5').on('click',function(){
		tl.playTo(35);
	});

	$('.port6').on('click',function(){
		tl.playTo(76);
	});
	$('.port7').on('click',function(){
		tl.playTo(91);
	});
});
