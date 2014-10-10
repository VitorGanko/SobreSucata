	var level = 1;
	var random = Math.floor(Math.random() * 3);
	
	var toys = new Image ();
	toys.toysName = ["brinquedo1", "brinquedo2", "brinquedo3"];
	toys.name;
	toys.newName = function()
	{
		toys.name = toys.toysName[random];
		toys.src = "BrinquedosPecas/lvl" + level + "/" + toys.name + ".png";
	}
	
	toys.newName();
	
	var pieces = [];
	
	var counter = 0;
	
	var length = 2;
	
	
	var combinationToy = [];
	var combinationPiece = [];

	var start = true;
	
	//clique das peças
	var clickPieces = function()
	{
		if (mouse_x > this.posx && mouse_x < this.posx + this.width && 
			mouse_y > this.posy && mouse_y < this.posy + this.height && 
			combinationPiece.length < combinationToy.length)
			{
				pieces[i].positionToGoX = otherX;
				pieces[i].positionToGoY = otherY;
				combinationPiece.push(i+1);
				console.log(combinationPiece);
			}	
	}
	
	//preparando as peças do game
	function createPiece(otherX, otherY)
	{
		otherX = [];
		otherY = [];
	
		for (var i = 0; i < length * toys.toysName.length; i++)
		{
			pieces[i] = new Image ();
			pieces[i].src = "BrinquedosPecas/lvl" + level + "/" + "peca" + (i + 1) + ".png";
			pieces[i].posx = 100 * i;
			pieces[i].posy = 400;
			
			pieces[i].positionToGoX = otherX[i];
			pieces[i].positionToGoY = otherY[i];
			
			pieces[i].click = clickPieces;
		}
	}
	
	//dicionário de combinações
	var combination = 
	{
		1: {
			brinquedo1: [1,2],
			brinquedo2: [3,4],
			brinquedo3: [5,6]
		},
		
		2: {
			brinquedo1: [1,2],
			brinquedo2: [3,4],
			brinquedo3: [5,6]
		},
		
		3: {
			brinquedo1: [1,2,3],
			brinquedo2: [4,5,6],
			brinquedo3: [7,8,9]
		},
		
		4: {
			brinquedo1: [1,2,3,4],
			brinquedo2: [5,6,7,8],
			brinquedo3: [9,10,11,12]
		},
		
		5: {
			brinquedo1: [1,2,3,4,5],
			brinquedo2: [6,7,8,9,10],
			brinquedo3: [11,12,13,14,15]
		}
	};
	
	//verificador de combinações
	function check()
	{
		if(combinationPiece.length == length && combinationToy.sort().toString()==combinationPiece.sort().toString())
		{
			time = 15;
			level++;
			start = true;
			
			if(level==3)
			{
				level = 6;
			}
		}
		
		else if(combinationPiece.length == length && combinationToy.sort().toString()!=combinationPiece.sort().toString())
		{
			time = 15;
			level = 1;
			start = true;
			
			src = "gameOver";
		}
	}
	
	function Lvl1 ()
	{	
		var newX = [500, 500, 500, 509, 520, 536];
		var newY = [200, 150, 175, 169, 120, 201];
		
		if(start)
		{
			combinationPiece.splice(0, combinationPiece.length);
			combinationToy.splice(0, combinationToy.length);
			toys.newName();
			combinationToy = new combination.level.toys.name;
			createPiece(newX, newY);
			console.log(combination);
			start = false;
		}
		
		for(var i = 0; i < pieces.length; i++)
		{
			ctx.drawImage(pieces[i], pieces[i].posx, pieces[i].posy, pieces[i].width, pieces[i].height);
		}
		
		ctx.drawImage(toys, 182, 152);
	}
	
	function Lvl2 ()
	{	
		if(start)
		{
			combinationPiece.splice(0, combinationPiece.length);
			combinationToy.splice(0, combinationToy.length);
			new toys.newName();
			new toyCombination();
			new createPiece();
			start = false;
		}
		
		newX = [500, 500, 500, 509, 520, 536];
		newY = [200, 150, 175, 169, 120, 201];
		
		for(var i = 0; i < pieces.length; i++)
		{
			ctx.drawImage(pieces[i], pieces[i].posx, pieces[i].posy, pieces[i].width, pieces[i].height);
			
			
		}
		
		ctx.drawImage(toys, 182, 152);
	}