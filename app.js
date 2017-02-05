

function spawnPostion(){
	var postion = Math.ceil(Math.random()*8 +1)*50
	return postion;
}

var goblin = [];
var item = [];

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

class Item {
	constructor(name){
		this.name = name
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
				attack(goblin)
			}
			
			break;
		case 38:
			if (charY - 50 > - 15){
				$("#charcter").css('top', "-=50");
				riptore.y = parseInt($("#charcter").css('top'))/50;
				console.log(riptore.x + "," + riptore.y)
				attack(goblin)
			}
			break;
		case 39:
			if (charX + 50 < 465){
				$("#charcter").css('left', "+=50");
				riptore.x = parseInt($("#charcter").css('left'))/50;
				console.log(riptore.x + "," + riptore.y)
				attack(goblin)
			}
			break;
		case 40:
			if (charY + 50 < 465){				
				$("#charcter").css('top', "+=50");
				riptore.y = parseInt($("#charcter").css('top'))/50;
				console.log(riptore.x + "," + riptore.y)
				attack(goblin)
			}
			break;
	}
}

/*function attack(attacker, defender, name){
	if(defender.health - attacker.offense < 0){
		$("#" + name).attr('src', './images/skull.png');
	} else{
	defender.health = Math.abs(attacker.offense - defender.health)
	}
}*/


function enemySpawn(num){
	for(i = 0; i < num;i++){
		goblin[i] = new Enemy(10, 5, "goblin" + i);
		goblin[i].x = spawnPostion()/50;
		goblin[i].y = spawnPostion()/50;
		
		$("#map").append("<img id='" + goblin[i].name + "' src='./images/goblin.png'>")
		$('#' + goblin[i].name).css({'position':'absolute','left':goblin[i].x*50 + 'px','top': goblin[i].y*50 + 'px'})
		console.log(goblin[i].x + "," + goblin[i].y)
	}
}

function attack(arr){
	for(var i = 0; i < arr.length; i++){
		if (riptore.x === arr[i].x && riptore.y === arr[i].y){
			if(arr[i].health - riptore.offense <= 0){
				$('#' + arr[i].name).remove();
				console.log(arr[i])
			}else{
				arr[i].health -= riptore.offense;
				movement(37)
			}
		}
	}
	
}


function itemSpawn(num){
	for(i = 0; i < num;i++){
		item[i] = new Item("item" + i);
		$("#map").append("<img id='" + item[i].name + "' src='./images/wall.png'>")
		console.log('#' + item[i].name);
		$('#' + item[i].name).css({'position':'absolute','left':spawnPostion(),'top': spawnPostion()})
		console.log(parseInt($('#' + item[i].name).css('top'))/50 + "," + parseInt($('#' + item[i].name).css('left'))/50)
	}
}




$(document).ready(function(){
	
	enemySpawn(7);
	
	
	//setting charcter position
	riptore.x = parseInt($("#charcter").css('left'))
	riptore.y = parseInt($("#charcter").css('top'))
	
	
	
	//basic movement
	$(document).keydown(function(event){
		movement(event.which)
	});
	
});