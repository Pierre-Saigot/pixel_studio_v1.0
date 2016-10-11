
pixel_studio.data = {

	pixels: {},

	init: function(){

		console.log('data ready');
	},

	/**
	 * Etabli la couleur d'un pixel précis
	 * @param {number} x Position horizontale du pixel
	 * @param {number} y Position verticale du pixel
	 * @param {Color} c  Instance de la couleur 
	 */
	set_pixel: function(x, y, c){

		if( c === pixel_studio.canvas.get_background_color()){
			delete this.pixels[x+'_'+y];
		}else{
			this.pixels[x+'_'+y] = c;
		}		
	},

	/**
	 * Renvoie l'instance de la couleur du pixel
	 * @param {number} x Position horizontale du pixel
	 * @param {number} y Position verticale du pixel
	 * @return {Color}   Instance de la couleur
	 */
	get_pixel: function(x,y){

		let color = this.pixels[x+'_'+y];

		if(typeof color == 'undefined'){
			color = pixel_studio.canvas.get_background_color();
		}

		return color;
	},

	/**
	 * Détermine si le pixel est peint ou vide
	 * @param {number} x Position horizontale du pixel
	 * @param {number} y Position verticale du pixel
	 * @return {Boolean}   Le pixel est il vide ?
	 */
	is_empty: function(x,y){

		return this.get_pixel(x,y) === pixel_studio.canvas.get_background_color();
	},

	/**
	 * Renvoie la totalité des pixels en chaine de caractère
	 * @return {string} Les pixels serializés en string
	 */
	to_string: function(){

		let result = '';

		for(let position in this.pixels){
			result += position+'_';
			result += this.pixels[position].to_string();
			result += '|';
		}

		return result;
	}
};