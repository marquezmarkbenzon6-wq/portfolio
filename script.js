const navigationLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main[id], section[id]');

document.querySelectorAll('.activity-grid a').forEach((activityLink) => {
	activityLink.target = '_blank';
	activityLink.rel = 'noopener';
});

navigationLinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		const target = document.querySelector(link.getAttribute('href'));

		if (target) {
			event.preventDefault();
			target.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

const sectionObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			navigationLinks.forEach((link) => {
				link.classList.toggle(
					'active',
					link.getAttribute('href') === `#${entry.target.id}`
				);
			});
		}
	});
}, { threshold: .5 });

sections.forEach((section) => sectionObserver.observe(section));
