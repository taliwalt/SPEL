$(function(){

/*
	var rel = $('body[data-rel]').attr('data-rel');

	$('#menu a:eq('+ rel +') , #m_menu a:eq('+ rel +')').addClass('active');

	$('#m_btn').on('click',function(){
		$('#m_menu').sidebar('toggle');
	});

	$('.pop').popup();

	$('#center div').on('click',function(){
		$('.reveal .visible').transition({animation: 'tada', duration: 300, complete:function(){ console.log('finished'); } });
	});

	$('#ready-player-one-button').dimmer({on: 'hover'});
*/
	$('#ready-player-one-button').on('click',function(){
		$('#ready-player-1-modal').modal('show');
	});
	
	$('#ready-player-two-button').on('click',function(){
		$('#ready-player-2-modal').modal('show');
	});
/*
	$('.ui.rating').rating({initialRating:2, onRate: function(){  } });

	$('.accordion').accordion({ 
		duration: 200,
		collapsible: false,
		onOpen: function(){
			var StepIndex =  $(this).attr('data-index');
			$('.ui.steps div').removeClass('active');
			$('.ui.steps div:eq('+ StepIndex +')').addClass('active');
		}
	});

	$('.ui.steps div').on('click',function(){
		$('.ui.steps div').removeClass('active');
		$(this).addClass('active');
		var ind = $(this).index();
		$('.accordion').accordion('open',ind);
	});

	$('.ui.checkbox').checkbox({ 
		onEnable: function(){ console.log("You Agree"); },
		onDisable: function(){ console.log("You Disagree"); },
		onChange: function(){ console.log("It's changed"); }
	});

	$('.dropdown').dropdown({ onChange: function(value, text){  } });

	var validation = {
		title: {
			identifier: 'value',
			rules: [
				{ type: 'empty', prompt: 'Please insert title' }
			]
		},
		firstname: {
			identifier: 'firstname',
			rules: [
				{ type:'empty', prompt: 'Fill in a first name' },
				{ type: 'length[4]', prompt: 'Your name must be 4 characters long' }
			]
		},
		lastname: {
			identifier: 'lastname',
			rules: [
				{ type:'empty', prompt: 'Fill in a last name' },
				{ type: 'length[4]', prompt: 'Your name must be 4 characters long' },
				{ type: 'maxLength[6]', prompt: 'You cannot go over 6 characters' }
			]
		},
		email: {
			identifier: 'email',
			rules: [
				{ type:'empty', prompt: 'Fill in a email' },
				{ type: 'length[4]', prompt: 'Your email must be 4 characters long' },
				{ type: 'email', prompt: 'Please fill in a valid email' }
			]
		},
		message: {
			identifier: 'message',
			rules: [
				{ type: 'empty', prompt: 'Please fill in a message' },
				{ type: 'contains[hello]', prompt: 'Please say hello' }
			]
		},
		agree: {
			identifier: 'tandc',
			rules: [
				{ type: 'checked', prompt: 'Please agree' }
			]
		}
	};

	var settings = {
		inline: true,
		onFailure: function(){ 
			console.log('failed');
			return false;  
		},
		onSuccess: function(){
			$('#out').slideUp(400);
			$('#formdimmer').addClass('active').delay(1300).fadeOut('fast',function(){
				$('.ui.shape').shape('flip down');
			});
			return false; 
		}
	};

	$('.ui.form').form( validation, settings );
*/

/*
	$('.ui.modal').modal( 
	{ 
		onShow: function(){ console.log("Modal is showing"); },
		onApprove:function() { console.log('Approve'); }, 
		blurring: true
	}
	).modal('setting', 'transition', 'scale').modal('attach events','#open-mascott-modal','show');
*/

    $('.dropdown').dropdown({ onChange: function(value, text){ /*local-storage*/ } });
    
/*
    $('#open-mascott-modal').on('click', function(){
        $('#mascott-modal').modal('show');
    })
*/
	/*$('#closemod').on('click',function(){
		$('.ui.modal').modal('hide');
	});*/

});