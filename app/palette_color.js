
pixel_studio.palette_color = {

	colors: [],
	selected: null,

	get_selected: function(){
		return this.selected;
	},

	select_color:  function( color ){

		this.selected = color;
		$('#colors li').removeClass('selected')
						.eq(color.id)
						.addClass('selected');
	},

	init: function( colors ){

		this.colors = colors;		

		//  création de la représentation de la palette
		
		let $colors = $('#colors'),
			$one 	= $colors.children('li').detach();

		for(let j=0; j<colors.length; j++){

			let li 		= $one.clone(),
				color 	= this.colors[j];

			color.id 	= j;

			li.css('background-color', color.to_string())
			  .attr('title', color.name);
			$colors.append(li);
		}

		// couleur par defaut
		
		this.select_color(this.colors[0]);

		// gestion des click
		
		var self = this;

		$('#colors').on('click', 'li', function(){

			let index = $( "#colors li" ).index( this );
			self.select_color(self.colors[index]);		
		});


		console.log('palette : colors ready');
	}
};