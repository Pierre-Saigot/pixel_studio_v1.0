
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

		console.log('canvas is ready');
	}
};