

function spawnPostion(){
	var postion = Math.ceil(Math.random()*8 +1)*50
	return (postion + "px");
}

var goblin = [];

function changeColor(newColor) {
  var elem = document.getElementById('test');
  elem.style.color = newColor;
}

class Enemy {
	constructor(health, offense, name){
		this.health = health;
		this.offense = offense
		this.name = name;
	}

	
}

var riptore = {
	health: 20,
	offense: 5,
}

function movement(arrow){
	var charX = parseInt($("#charcter").css('left'))
	var charY = parseInt($("#charcter").css('top'))
	
	
	switch(arrow){
		case 37:  
			if (charX - 50 > -15){			
				$("#charcter").css('left', "-=50");
				riptore.x = parseInt($("#charcter").css('left'))/50;
				console.log(riptore.x + "," + riptore.y)
				console.log(goblin[0]);
			}
			
			break;
		case 38:
			if (charY - 50 > - 15){
				$("#charcter").css('top', "-=50");
				riptore.y = parseInt($("#charcter").css('top'))/50;
				console.log(riptore.x + "," + riptore.y)
			}
			break;
		case 39:
			if (charX + 50 < 465){
				$("#charcter").css('left', "+=50");
				riptore.x = parseInt($("#charcter").css('left'))/50;
				console.log(riptore.x + "," + riptore.y)
			}
			break;
		case 40:
			if (charY + 50 < 465){				
				$("#charcter").css('top', "+=50");
				riptore.y = parseInt($("#charcter").css('top'))/50;
				console.log(riptore.x + "," + riptore.y)
			}
			break;
	}
}

function attack(attacker, defender, name){
	if(defender.health - attacker.offense < 0){
		$("#" + name).attr('src', './images/skull.png');
	} else{
	defender.health = Math.abs(attacker.offense - defender.health)
	}
}


function enemySpawn(num){
	for(i = 0; i < num;i++){
		goblin[i] = new Enemy(20, 5, "goblin" + i);
		$("#map").append("<img id='" + goblin[i].name + "' src='./images/goblin.png'>")
		$('#' + goblin[i].name).css({'position':'absolute','left':spawnPostion(),'top': spawnPostion()})
		console.log(parseInt($('#' + goblin[i].name).css('top'))/50 + "," + parseInt($('#' + goblin[i].name).css('left'))/50)
	}
	
	
	
}


$(document).ready(function(){
	let goblin = new Enemy(20, 5);
	
	enemySpawn(6);
	
	
	
	
	//setting charcter position
	riptore.x = parseInt($("#charcter").css('left'))
	riptore.y = parseInt($("#charcter").css('top'))
	
	
	
	//basic fighting mechanic
	$('#enemyHealth').html(goblin.health);
	$('#adventureHealth').html(riptore.health);
	
	$("#enemyAtk").on("click", function(){
		console.log(Math.ceil(Math.random()*9 +1)*50)
		//attack(goblin, riptore, 'adventure');
		//$('#adventureHealth').html(riptore.health);
	});
	$("#adventureAtk").on("click", function(){
		attack(riptore, goblin, 'enemy');
		$('#enemyHealth').html(goblin.health);
	});
	
	//basic movement
	$(document).keydown(function(event){
		movement(event.which)
	});
	
});