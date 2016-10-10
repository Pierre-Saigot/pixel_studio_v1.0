
pixel_studio.palette_tool = {

	tools: [],
	selected: null,

	get_selected: function(){
		return this.selected;
	},
	
	select_tool:  function( tool ){

		this.selected = tool;
		$('#tools li').removeClass('selected')
						.eq(tool.id)
						.addClass('selected');
	},

	init: function( tools ){

		this.tools = tools;

		//  création de la représentation de la palette outil
		
		let $tools = $('#tools'),
			$one 	= $tools.children('li').detach();

		for(let j=0; j<tools.length; j++){

			let li 		= $one.clone(),
				tool 	= this.tools[j];

			tool.id 	= j;

			li.css('background-image', 'url('+tool.icon_file+')')
			  .attr('title', tool.name);

			$tools.append(li);
		}

		// outil par defaut
		
		this.select_tool(this.tools[0]);

		// gestion des click
		
		var self = this;

		$('#tools').on('click', 'li', function(){

			let index = $( "#tools li" ).index( this );
			self.select_tool(self.tools[index]);		
		});


		console.log('palette : tools ready');
	}
};