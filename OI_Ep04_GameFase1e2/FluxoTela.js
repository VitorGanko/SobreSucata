
	function Show ()
	{
		//console.log(tela);
		switch (src)
		{	
			case "intro":
				Intro();
				break;
				
			case "menu":
				Menu();	
				break;	
			
			case "animation":
				Animation();
				break;
			
			case "instructions":
				Instructions();
				break;				
				
			case "credits":
				Credits();
				break;	
			
			case "game":
				Game();
				break;		
				
			case "win":
				Win();
				break;
				
			case "gameOver":
				gameOver();
				break;
		}
	}
	
	