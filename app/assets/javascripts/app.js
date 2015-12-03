$(document).ready(function() {

	$('#demo-videos-link').on('click', function() {
		alert('coming soon');
	});

	$('#download-resume-link-pdf').on('click', function() {
		window.location = 'https://www.dropbox.com/s/y0zeihrbkr97wtz/Resume.pdf?dl=0'
	});
	$('#download-resume-link-pages').on('click', function() {
		window.location = 'https://www.dropbox.com/s/omphifs9wj2msff/resume.pages?dl=0'
	});
	$('#download-resume-link-word').on('click', function() {
		window.location = 'https://www.dropbox.com/s/estgz6yipcf562m/ResumeWord.docx?dl=0'
	});


	$('#github-link').on('click', function() {
	window.location = 'https://github.com/chaseterzian?tab=repositories'
	});

});