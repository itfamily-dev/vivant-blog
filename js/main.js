document.addEventListener("DOMContentLoaded", function () {
	// code...
	let jsBlogSlider = document.querySelector('.js-blog-slider');
	if (document.body.contains(jsBlogSlider)) {
		blogSlider = tns({
			container: ".js-blog-slider",
			mode: "gallery",
			items: 1,
			slideBy: 1,
			mouseDrag: true,
			controlsContainer: ".blog-slider__controls",
			prevButton: ".blog-slider-prev",
			nextButton: ".blog-slider-next",
			nav: false,
		});
	}

    // Posts slider
	let postsSlider = document.querySelector('.js-post-slider');
	if (document.body.contains(postsSlider)) {
		postSlider = tns({
			container: ".js-post-slider",
			items: 1,
			mouseDrag: true,
			slideBy: 1,
			gutter: 33,
			controlsContainer: ".post-slider__navigation",
			prevButton: ".post-slider-prev",
			nextButton: ".post-slider-next",
			nav: false,
			fixedWidth: 256,
			responsive: {
				480: {
					items: 2,
					fixedWidth: false,
				},
				1024: {
					items: 3,
				},
			},
		});
	}
});
