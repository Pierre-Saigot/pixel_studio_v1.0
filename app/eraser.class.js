
class Eraser extends Tool{

	constructor( canvas, bg_color ){
		super('eraser', 'images/eraser.png');
		this.canvas 	= canvas;
		this.bg_color 	= bg_color;
	}

	on_mousedown( mouse_event ){

		let position = this.canvas.screen_to_canvas(mouse_event);
		this.canvas.draw(position.x, position.y, this.bg_color);
	}
}