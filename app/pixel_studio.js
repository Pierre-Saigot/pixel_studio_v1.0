
var pixel_studio = {

	init: function(){

		// couleurs de la palette
		
		let colors = [
			new Color('green', [56,187,136]),
			new Color('purple', [135,35,111]),
			new Color('sand', [220,194,140]),
			new Color('myst', [80,62,116]),
			new Color('lilas', [151,146,197])
		];
		this.palette_color.init( colors );

		// outils de dessin
		
		let tools = [
			new Tool('pencil', 'images/pencil.png'),
			new Tool('eraser', 'images/eraser.png')
		];

		this.palette_tool.init( tools );

		console.log("Pixel studio is initiated and  ready");
	}
};

