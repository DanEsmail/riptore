function changeColor(newColor) {
  var elem = document.getElementById('test');
  elem.style.color = newColor;
}

class Enemy {
	constructor(health, offense){
		this.health = health;
		this.offense = offense
	}
	
	
	
}

var riptore = {
	health: 20,
	offense: 5
}

function attack(attacker, defender, name){
	if(defender.health - attacker.offense < 0){
		$("#" + name).attr('src', './images/skull.png');
	} else{
	defender.health = Math.abs(attacker.offense - defender.health)
	}
}

$(document).ready(function(){
	let goblin = new Enemy(20, 5);
	$('#enemyHealth').html(goblin.health);
	$('#adventureHealth').html(riptore.health);
	
	$("#enemyAtk").on("click", function(){
		attack(goblin, riptore, 'adventure');
		$('#adventureHealth').html(riptore.health);
	});
	$("#adventureAtk").on("click", function(){
		attack(riptore, goblin, 'enemy');
		$('#enemyHealth').html(goblin.health);
	});
	
});