$(document).ready(function(){
	$('h1').blast({delimiter: "letter"});
	$('p').blast({delimiter: "letter"});
	$('a').blast({delimited: "letter"});
	$('body').css('background', '#0A7020');
	$('body > div').css('background', '#A8A8A8');
	$('body > div').css('border', 'solid 0.5em #029030');
	$('body > div').css('position', 'absolute');
	$('body > div').css('top', '10em');
	$('body > div').css('display', 'inline');
	$('a:link').css('color', 'blue');
	$('a.visited').css('color', 'purple');
	$('body > p').css('font-size', '48px');
	$('body > p').css('color', '#1B8131');

	//$('h1 > span').css("transform: rotateX(" + (Math.rand(30) - 15) + ");");
	$('h1.blast-root .blast:nth-child(odd)').css('font-size', ((Math.random() * 12) + 32) + 'px');
	$('p.blast-root .blast:nth-child(even)').css('font-size', ((Math.random() * 4) + 12) + 'px');
	$('a.blast-root .blast:nth-child(even)').css('font-size', (Math.random() + 12) + 'px');
});