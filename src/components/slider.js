export const slidesData = [
	{
		src: "src/assets/images/influencer-0.jpg",
		alt: "Gestión de Redes Sociales",
		title: "Gestión de Redes Sociales",
		description:
			"Optimiza tu presencia en las redes sociales con estrategias personalizadas y contenido de alta calidad.",
	},
	{
		src: "src/assets/images/influencer-1.jpg",
		alt: "Marketing de Contenidos",
		title: "Marketing de Contenidos",
		description:
			"Creación y distribución de contenido relevante para atraer y retener a tu audiencia objetivo.",
	},
	{
		src: "src/assets/images/influencer-2.jpg",
		alt: "Colaboraciones con Influencers",
		title: "Colaboraciones con Influencers",
		description:
			"Conecta con los influencers adecuados para amplificar tu mensaje y alcanzar a nuevos públicos.",
	},
	{
		src: "src/assets/images/influencer-3.jpg",
		alt: "Eventos y Activaciones",
		title: "Eventos y Activaciones",
		description:
			"Organiza eventos impactantes y activaciones creativas que generen interacción y visibilidad.",
	},
	{
		src: "src/assets/images/influencer-4.jpg",
		alt: "Consultoría de Marca",
		title: "Consultoría de Marca",
		description:
			"Desarrolla una identidad de marca coherente y atractiva con nuestros expertos en branding.",
	},
	{
		src: "src/assets/images/influencer-5.jpg",
		alt: "Publicidad Digital",
		title: "Publicidad Digital",
		description:
			"Maximiza tu alcance con campañas de publicidad digital segmentadas y efectivas.",
	},
	{
		src: "src/assets/images/influencer-6.jpg",
		alt: "Análisis y Reportes",
		title: "Análisis y Reportes",
		description:
			"Obtén información detallada y análisis de tus campañas para tomar decisiones informadas.",
	},
	{
		src: "src/assets/images/influencer-7.jpg",
		alt: "Gestión de Crisis",
		title: "Gestión de Crisis",
		description:
			"Protege tu reputación online y maneja situaciones de crisis con estrategias efectivas.",
	},
	{
		src: "src/assets/images/influencer-8.jpg",
		alt: "Capacitación y Talleres",
		title: "Capacitación y Talleres",
		description:
			"Formación en marketing digital y redes sociales para tu equipo, impartida por expertos.",
	},
	{
		src: "src/assets/images/influencer-9.jpg",
		alt: "Innovación y Tendencias",
		title: "Innovación y Tendencias",
		description:
			"Mantente a la vanguardia con las últimas tendencias y tecnologías en marketing digital.",
	},
];

export function initializeSwiper(slidesData) {
	const swiperContainer = document.createElement("div");
	swiperContainer.classList.add("swiper-container");

	const swiperWrapper = document.createElement("div");
	swiperWrapper.classList.add("swiper-wrapper");
	swiperContainer.appendChild(swiperWrapper);

	slidesData.forEach((data) => {
		const swiperSlide = document.createElement("div");
		swiperSlide.classList.add("swiper-slide");

		const img = document.createElement("img");
		img.src = data.src;
		img.alt = data.alt;
		img.classList.add("slide-image");
		swiperSlide.appendChild(img);

		const slideContent = document.createElement("div");
		slideContent.classList.add("slide-content");

		const slideContentWrapper = document.createElement("div");
		slideContentWrapper.classList.add("slide-content-wrapper");
		slideContent.appendChild(slideContentWrapper);

		const slideTitle = document.createElement("div");
		slideTitle.classList.add("slide-title");
		slideTitle.textContent = data.title;
		slideContentWrapper.appendChild(slideTitle);

		const slideDescription = document.createElement("div");
		slideDescription.classList.add("slide-description");
		slideDescription.textContent = data.description;
		slideContentWrapper.appendChild(slideDescription);

		swiperSlide.appendChild(slideContent);
		swiperWrapper.appendChild(swiperSlide);
	});

	const sliderContainer = document.querySelector("#sec_inicio");
	sliderContainer.appendChild(swiperContainer);

	const swiperPagination = document.createElement("div");
	swiperPagination.classList.add("swiper-pagination");
	swiperContainer.appendChild(swiperPagination);

	const swiperButtonNext = document.createElement("div");
	swiperButtonNext.classList.add("swiper-button-next");
	swiperContainer.appendChild(swiperButtonNext);

	const swiperButtonPrev = document.createElement("div");
	swiperButtonPrev.classList.add("swiper-button-prev");
	swiperContainer.appendChild(swiperButtonPrev);

	return new Swiper(".swiper-container", {
		loop: true,
		slidesPerView: 1,
		centeredSlides: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}
