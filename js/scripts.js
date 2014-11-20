$(document).ready(function(){
	$('h1').blast({delimiter: "letter"});
	$('p').blast({delimiter: "letter"});
	$('a').blast({delimited: "letter"});
	$('body').css('background', '#0A7020');
	$('body > div').css('background', '#A8A8A8');
	$('body > div').css('border', 'solid 0.5em #029030');
	$('a:link').css('color', 'blue');
	$('a.visited').css('color', 'purple');

	//$('h1 > span').css("transform: rotateX(" + (Math.rand(30) - 15) + ");");
	$('h1.blast-root .blast:nth-child(odd)').css('font-size', ((Math.random() * 48) + 32) + 'px');
	$('p.blast-root .blast:nth-child(even)').css('font-size', ((Math.random() * 2) + 12) + 'px');
	$('a.blast-root .blast:nth-child(even)').css('font-size', ((Math.random() * 2) + 12) + 'px');
});