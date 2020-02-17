jQuery('document').ready(function(){
	
	jQuery('#btn').on('click', function(){
		var v1, v2, v3, v4;
		v1 = jQuery('#n1').val();
		v1 = parseInt(v1);
		v2 = jQuery('#n2').val();
		v2 = parseInt(v2);
		v3 = jQuery('#a1').val();
		if (v3 == 'slog'){
			v4 = v1+v2
		};
		if (v3 == 'vichet'){
			v4 = v1-v2
		};
		if (v3 == 'umnosj'){
			v4 = v1*v2
		};
		if (v3 == 'delen'){
			v4 = v1/v2
		};		
		
		jQuery('#result').html(v4);
	});
		
	










});