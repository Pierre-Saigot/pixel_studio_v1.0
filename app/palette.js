
pixel_studio.palette = {

	colors: [],

	init_colors: function( color_list ){

		this.colors = color_list;

		let $colors = $('#colors'),
			$one = $colors.children('li').detach();

		for(let j=0; j<color_list.length; j++){

			let li 		= $one.clone(),
				color 	= this.colors[j];

			li.css('background-color', color.to_string())
			  .attr('title', color.name);
			$colors.append(li);

		}
		console.log('palette : colors ready');
	}
};