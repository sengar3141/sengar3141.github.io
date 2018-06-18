var projects = {
	'mylearning': {
		'title': 'My learnings as a Design Educator',
		'description': 'My Experince of teaching Desing process to three batches of students of Bachelor of technology (Information Technology and Mathematical Innovations) at Cluster Innovation Center',
		'color': '#FFF',
		'key': 'ideas'
	},

	'myhomeoffice': {
		'title': 'My Office',
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

	'takhti': {
		'title': 'Takhti',
		'description': 'A solution for infrastructural need of school fo rural India',
		'color': '#CCCCCC',
		'key': 'ideas'
	},

	'ma': {
		'title': 'Ma',
		'description': 'Ma is a neonatal incubator designed for rural Indian hospitals.',
		'color': '#FFF',
		'key': 'products'
	},

	'systemd': {
		'title': 'System D',
		'description': 'A nominated project at WDCD 2017 Challenge, System D, allows us to build small public buildings those can be converted into safety and rescue centres in the time of disaster like flood, hurricane, sand storms, heavy snow fall, earthquake etc.',
		'color': '#FFF',
		'key': 'ideas'
	},

	'foodpassport': {
		'title': 'Food Passport',
		'description': 'A collection of traditional and oldest food of Old Delhi. With the turn of every leaflet you will find the location, history and culinary information about the traditional food vendors of old Delhi.',
		'color': '#FFF',
		'key': 'ideas'
	},

	'gloop': {
		'title': 'Gloop',
		'description': 'Gloop is a kid friendly furniture designed for the kids unable to support their body postures or hyperactivity. The chair and table help instructors to conduct early intervention therapy in case of ASD and the furniture is also designed to be aesthetically coherence with in-home environment.',
		'color': '#FFF',
		'key': 'products'
	},
	
	'circleplanner': {
		'title': 'Circle Planner',
		'description': 'A graphical way to represent and plan your whole month on a single spread of paper. The reminders and other schedules can be kept in 12 sheets of any kind of notebook or a seperate notebook',
		'color': '#FFF',
		'key': 'graphics'
	},

	'nest': {
		'title': 'Nest',
		'description': 'A range of furniture which have an identity and form inspired by the endangered species of Indian birds. This projects intends to spark a dialog and sensitivity towards their protection in the minds of the observers.',
		'color': '#FFF',
		'key': 'products'
	},

	'vaccsure': {
		'title': 'Vaccsure',
		'description': 'VaccSure is a low cost vaccination packaging solution for use in rural setup which ensures the storage temperature range of the vaccines.',
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
