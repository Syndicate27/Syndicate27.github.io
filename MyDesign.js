//DOCTYPE JS


function thumbs_counter(){
	var x = document.getElementById('likes');
	var y = document.getElementById('dislikes');

	if(x) {
		x++;
		document.write(x);
	}
	else if(y) {
		y++;
		document.write(y);
	}
}

function greet1() {
	alert("Hey You clicked me :D!");
}
function showDate() {
	document.getElementById('date').innerHTML = Date();
}