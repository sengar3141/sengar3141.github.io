var projects = {
	'mylearning': {
		'title': 'My learnings as a Design Educator',
		'description': 'My Experince of teaching Desing process to three batches of students of Bachelor of technology (Information Technology and Mathematical Innovations) at Cluster Innovation Center',
		'color': '#FFF',
		'key': 'ideas'
	},

	'myhomeoffice': {
		'title': 'My Home Office',
		'description': 'A customisable modular furniture solution for professionals needing small office space at their residence. The product is flat pack easy to assemble and customisable with multiple office accessories.',
		'color': '#F2F1EC',
		'key': 'products'
	},
	
	'dali': {
		'title': 'DALI',
		'description': 'UX/UI desing for a package developed by National Brain Research Center (NBRC) that contains screening tools for school teachers and assessment tools for psychologists in Indian Languages to identify dyslexia',
		'color': '#FFF',
		'key': 'uxui'
	},

	'nest': {
		'title': 'Nest',
		'description': 'The project proposes a range of furniture which will have an identity and form inspired by the endangered species of Indian birds. This projects intends to spark a dialogue and sensitivity towards their protection in the minds of the observers.',
		'color': '#FFF',
		'key': 'products'
	},


	'foodpassport': {
		'title': 'Foodpassport',
		'description': 'Food Passport is a platform to recommend heritage of food and history of the food which they are serving to people form generations.',
		'color': '#F2F1EC',
		'key': 'products'
	},

	/*'cognitiveablitykit': {
		'title': 'Cognitive Ability Kit',
		'description': 'A kit to assess cognitive ability of children for the participants of gifted children project of University of Delhi',
		'color': '#242424',
		'key': 'products'
	},*/

	'ma': {
		'title': 'Ma',
		'description': 'Ma is a neonatal incubator designed for rural Indian hospitals,'
		'color': 'FFF',
		'key': 'products'
	},

	'gloop': {
		'title': 'Gloop',
		'description': 'A colaboration between DUDIC and Tamana Foundation to create furnture for hyperactive kids.',
		'color': 'FFF',
		'key': 'products'
	},

	'takhti': {
		'title': 'Takhti',
		'description': 'Takhti provides an efficient infrastructural support solution for rural schools in India where we generally finds kids either seating on broken furniture or on ground because the furniture is either vandalized or not available at all.',
		'color': '#CCCCCC',
		'key': 'ideas'
	},
	'systemd': {
		'title': 'System D',
		'description': 'A nominated project at WDCD 2017 Challenge, System D, allows us to build small public buildings those can be converted into safety and rescue centres in the time of disaster like flood, hurricane, sand storms, heavy snow fall, earthquake etc.',
		'color': '#FFF',
		'key': 'ideas'
	},
	
	'circleplanner': {
		'title': 'Circle Planner',
		'description': 'A graphical way to represent and plan your whole month on a single spread of paper. The reminders and other schedules can be kept in 12 sheets of any kind of notebook or a seperate notebook',
		'color': '#FFF',
		'key': 'graphics'
	},

	'vaccsure': {
		'title': 'VaccSure',
		'description': 'VaccSure is a vaccination packaging solution which ensure the temperature range of the vaccines to be maintained.',
		'color': '#FFF',
		'key': 'graphics'
	},

	'blackbox': {
		'title': 'Black Box',
		'description': 'A kit to assist Imfundo teach 7th to 8th standard children programming, electronics, robotics and gadetry.',
		'color': '#FFF',
		'key': 'products'
	}
};



// NOT TO BE TOUCHED

function work(key) {
	$('.work').html('');

	for(var i in projects) {
		if(key == 'all') {
			var html = '<a class="pointer link" target="_blank" href=' + i + '.html>'
					+ '<div class="projects" id="' + i + '" style="background-color: ' + projects[i]['color'] + '">'
					+ '<div class="projects-image">'
					+ '<img src="assets/' + i + '.jpeg">'
					+ '</div>'
					+ '<div class="projects-text">'
					+ '<h2 class="mid-gray">' + projects[i]['title'] + '</h2>'
					+ '<p class="gray f7 lh-copy">' + projects[i]['description'] + '</p>'
					+ '</div>'
					+ '</div>'
					+ '</a>';

			$('.work').append(html);
		} else {
			if(projects[i]['key'] == key) {
				var html = '<a class="pointer link" target="_blank" href=' + i + '.html>'
						+ '<div class="projects" id="' + i + '" style="background-color: ' + projects[i]['color'] + '">'
						+ '<div class="projects-image">'
						+ '<img src="assets/' + i + '.jpeg">'
						+ '</div>'
						+ '<div class="projects-text">'
						+ '<h2 class="mid-gray">' + projects[i]['title'] + '</h2>'
						+ '<p class="gray f7 lh-copy">' + projects[i]['description'] + '</p>'
						+ '</div>'
						+ '</div>'
						+ '</a>';

				$('.work').append(html);
			}
		}
	}
}

$(document).ready(function(e) {
	work('all');

	$('.navbar-bottom>div>li').on('click', function() {
		work(event.target.id);
		$('.navbar-bottom>div>li.activeColor').removeClass('activeColor');
		$(this).addClass('activeColor')
	});

	$('#work').on('click', function() {
		$(this).addClass('active');
		$('#cv').removeClass('active');
		$('#contact').removeClass('active');
		$('.navbar-bottom').removeClass('hidden');
		$('.work').removeClass('hidden');
		$('.cv').addClass('hidden');
		$('.contact').addClass('hidden');
	});

	$('#cv').on('click', function() {
		$(this).addClass('active');
		$('#work').removeClass('active');
		$('#contact').removeClass('active');
		$('.navbar-bottom').addClass('hidden');
		$('.work').addClass('hidden');
		$('.cv').removeClass('hidden');
		$('.contact').addClass('hidden');
	});

	$('#contact').on('click', function() {
		$(this).addClass('active');
		$('#work').removeClass('active');
		$('#cv').removeClass('active');
		$('.navbar-bottom').addClass('hidden');
		$('.work').addClass('hidden');
		$('.cv').addClass('hidden');
		$('.contact').removeClass('hidden');
	});

	function sticky_relocate() {
	    var window_top = $(window).scrollTop();
	    var navbar_top = $('#navbar').offset().top;
	    var content_top = $('#content').offset().top;

	    if (window_top >= navbar_top) {
	    	$('#navbar').addClass('affix');
	    	$('#content').css('paddingTop', '170px');
	    }

	    if (window_top >= content_top) {
	    	$('#landing').hide();
	    }
	}

	$(function() {
	    $(window).scroll(sticky_relocate);
	    sticky_relocate();
	});

	/*var dir = 1;
	var MIN_TOP = 200;
	var MAX_TOP = 350;

	function autoscroll() {
	    var window_top = $(window).scrollTop() + dir;
	    if (window_top >= MAX_TOP) {
	        window_top = MAX_TOP;
	        dir = -1;
	    } else if (window_top <= MIN_TOP) {
	        window_top = MIN_TOP;
	        dir = 1;
	    }
	    $(window).scrollTop(window_top);
	    window.setTimeout(autoscroll, 100);
	}*/

});
