
pixel_studio.canvas = {

	screen: {
		width: 0,
		height: 0
	},
	nb_pixel: {
		width: 0,
		height:0
	},

	pixel_dimension: 0,

	$canvas: null,
	context: null,

	/**
	 * Dessine un pixel sur la zone de dessin
	 * @param  {number} x     coordonnée horizontale du pixel
	 * @param  {number} y     coordonnée verticale du pixel
	 * @param  {Color} color  couleur du pixel : instance de Color
	 */
	draw: function(x, y, color){

		let px = (x-1) * this.pixel_dimension,
			py = (y-1) * this.pixel_dimension;

		this.context.fillStyle = color.to_string();
		this.context.fillRect(px,py,this.pixel_dimension,this.pixel_dimension);
	},

	/**
	 * Préparation de la zone de dessin
	 * @param  {string} div_id         Nom de la div dans lequel sera placé le  canvas
	 * @param  {number} width          Largeur exact du canvas en pixel ecran
	 * @param  {number} height         Hauteur maximum du camvas en pixel ecran
	 * @param  {number} nb_pixel_width Nombre de pixel en largeur
	 */
	init: function(div_id, width, height, nb_pixel_width){

		//  Calcul du pixel_dimension
		
		this.pixel_dimension = parseInt(width / nb_pixel_width);
		this.nb_pixel.height = parseInt(height / this.pixel_dimension);

		this.screen.width 	= this.pixel_dimension * nb_pixel_width;
		this.screen.height 	= this.pixel_dimension * this.nb_pixel.height;
		this.nb_pixel.width = nb_pixel_width;

		//  Creation du canvas
		
		var $c = $('<canvas></canvas>');
		$c.attr({
			'width': this.screen.width,
			'height': this.screen.height,
		});
		this.$canvas = $c;
		this.$canvas.appendTo('#'+div_id);

		this.context = $c[0].getContext("2d");


		// Gestion des évènements
		
		this.$canvas.on('mousedown mouseup mousemove', this.on_mouse_event);

		console.log('canvas is ready');
	},

	on_mouse_event: function(mouse_event){

		let tool = pixel_studio.palette_tool.get_selected()
			type = 'on_'+mouse_event.type;
		if(tool[type])	tool[type](mouse_event);
	},

	/**
	 * Converti les coordonnées écran de la souris en coordonnées canvas
	 * @param  {MouseEvent} mouse_event Objet de l'évènement click
	 * @return {Object}             Un objet x,y en coordonné canvas
	 */
	screen_to_canvas(mouse_event){

		let offset = this.$canvas.offset();
		return {
			x: Math.floor((mouse_event.clientX - offset.left) / this.pixel_dimension)+1,
			y: Math.floor((mouse_event.clientY - offset.top) / this.pixel_dimension)+1
		}; 
	}
};