
class Line extends Tool{

	constructor( canvas ){
		super('line', 'images/line.png');

		this.canvas = canvas;
		this.drawing = false;
	}

	on_mouseup( mouse_event ){
		this.drawing = false;
	}

	on_mousedown( mouse_event ){
		this.draw(mouse_event);
		this.drawing = true;
	}

	on_mousemove( mouse_event ){
		
	}

	draw( mouse_event ){
		let position = this.canvas.screen_to_canvas(mouse_event),
			color = pixel_studio.palette_color.get_selected();
		this.canvas.draw_line(position.x, position.y, color);
	}
}