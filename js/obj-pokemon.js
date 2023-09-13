class Pokemon {
	constructor(nickname, species, gender, shiny, ball, level, lang, trainername, trainerid, origin, game, metlevel, metdate, metlocation, size, nature, pokerus, gmax, dynamax, tera, ribbons, title, notes){
		this.nickname = nickname;
		this.species = species;
		this.gender = gender;
		this.shiny = shiny;
		this.ball = ball;
		this.level = level;
		this.lang = lang;
		this.trainername = trainername;
		this.trainerid = trainerid;
		this.origin = origin;
		this.game = game;
		this.metlevel = metlevel;
		this.metdate = metdate;
		this.metlocation = metlocation;
		this.size = size;
		this.nature = nature;
		this.pokerus = pokerus;
		this.gmax = gmax;
		this.dynamax = dynamax;
		this.tera = tera;
		this.ribbons = ribbons;
		this.title = title;
		this.notes = notes;
	}

	get displayName(){
		if(this.nickname){
			return this.nickname;
		} else {
			var checkLang = this.lang;
			if(!checkLang) checkLang = "ENG"; // compatibility with old data where we did not force users to select a language
			checkLang = checkLang.toLowerCase();
			return getData(this.species, "names")[checkLang];
		}
	}

	get currentGen(){
		var output = 100; // in case current game is not set, pretend it's beyond all games
		if(this.game){
			if(this.game === "go"){ // GO was released in Gen VII but it cannot transfer to Gen VII games
				output = 8;
			} else {
				output = parseInt(games[this.game].gen);
				if(output < 3) output = 7; // Gen I and II are Virtual Console and must transfer to Gen VII games
			}
		}
		return output;
	}

	get shinyType(){
		// compatibility with old data where shiny was a yes/no switch
		if(this.shiny){
			return (this.shiny === "square") ? "square" : "star";
		} else {
			return "";
		}
	}
}

function dataSearch(){

}