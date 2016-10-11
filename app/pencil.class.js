
class Pencil extends Tool{

	constructor( canvas ){
		super('pencil', 'images/pencil.png');

		this.canvas = canvas;
	}

	on_mousedown( mouse_event ){

		pixel_studio.canvas.on_click(mouse_event);
	}
}