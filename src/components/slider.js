import influencer0 from '../assets/images/influencer-0.jpg';
import influencer1 from '../assets/images/influencer-1.jpg';
import influencer2 from '../assets/images/influencer-2.jpg';
import influencer3 from '../assets/images/influencer-3.jpg';
import influencer4 from '../assets/images/influencer-4.jpg';
import influencer5 from '../assets/images/influencer-5.jpg';
import influencer6 from '../assets/images/influencer-6.jpg';
import influencer7 from '../assets/images/influencer-7.jpg';
import influencer8 from '../assets/images/influencer-8.jpg';
import influencer9 from '../assets/images/influencer-9.jpg';

const images = [
    influencer0, influencer1, influencer2, influencer3, influencer4,
    influencer5, influencer6, influencer7, influencer8, influencer9
];

export const slidesData = [
    {
        src: images[0],
        alt: "Gestión de Redes Sociales",
        title: "Gestión de Redes Sociales",
        description: "Optimiza tu presencia en las redes sociales con estrategias personalizadas y contenido de alta calidad."
    },
    {
        src: images[1],
        alt: "Marketing de Contenidos",
        title: "Marketing de Contenidos",
        description: "Creación y distribución de contenido relevante para atraer y retener a tu audiencia objetivo."
    },
    {
        src: images[2],
        alt: "Colaboraciones con Influencers",
        title: "Colaboraciones con Influencers",
        description: "Conecta con los influencers adecuados para amplificar tu mensaje y alcanzar a nuevos públicos."
    },
    {
        src: images[3],
        alt: "Eventos y Activaciones",
        title: "Eventos y Activaciones",
        description: "Organiza eventos impactantes y activaciones creativas que generen interacción y visibilidad."
    },
    {
        src: images[4],
        alt: "Consultoría de Marca",
        title: "Consultoría de Marca",
        description: "Desarrolla una identidad de marca coherente y atractiva con nuestros expertos en branding."
    },
    {
        src: images[5],
        alt: "Publicidad Digital",
        title: "Publicidad Digital",
        description: "Maximiza tu alcance con campañas de publicidad digital segmentadas y efectivas."
    },
    {
        src: images[6],
        alt: "Análisis y Reportes",
        title: "Análisis y Reportes",
        description: "Obtén información detallada y análisis de tus campañas para tomar decisiones informadas."
    },
    {
        src: images[7],
        alt: "Gestión de Crisis",
        title: "Gestión de Crisis",
        description: "Protege tu reputación online y maneja situaciones de crisis con estrategias efectivas."
    },
    {
        src: images[8],
        alt: "Capacitación y Talleres",
        title: "Capacitación y Talleres",
        description: "Formación en marketing digital y redes sociales para tu equipo, impartida por expertos."
    },
    {
        src: images[9],
        alt: "Innovación y Tendencias",
        title: "Innovación y Tendencias",
        description: "Mantente a la vanguardia con las últimas tendencias y tecnologías en marketing digital."
    }
];

export function initializeSwiper(slidesData) {
    const swiperContainer = document.createElement('div');
    swiperContainer.classList.add('swiper-container');

    const swiperWrapper = document.createElement('div');
    swiperWrapper.classList.add('swiper-wrapper');
    swiperContainer.appendChild(swiperWrapper);

    slidesData.forEach(data => {
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');

        const img = document.createElement('img');
        img.src = data.src;
        img.alt = data.alt;
        img.classList.add('slide-image');
        swiperSlide.appendChild(img);

        const slideOverlay = document.createElement('div');
        slideOverlay.classList.add('slide-overlay');
        swiperSlide.appendChild(slideOverlay);

        const slideContent = document.createElement('div');
        slideContent.classList.add('slide-content');
        swiperSlide.appendChild(slideContent);

        const slideTitle = document.createElement('div');
        slideTitle.classList.add('slide-title');
        slideTitle.textContent = data.title;
        slideContent.appendChild(slideTitle);

        const slideDescription = document.createElement('div');
        slideDescription.classList.add('slide-description');
        slideDescription.textContent = data.description;
        slideContent.appendChild(slideDescription);

        swiperWrapper.appendChild(swiperSlide);
    });

    const sliderContainer = document.querySelector('#sec_inicio');
    sliderContainer.appendChild(swiperContainer);

    const swiperPagination = document.createElement('div');
    swiperPagination.classList.add('swiper-pagination');
    swiperContainer.appendChild(swiperPagination);

    const swiperButtonNext = document.createElement('div');
    swiperButtonNext.classList.add('swiper-button-next');
    swiperContainer.appendChild(swiperButtonNext);

    const swiperButtonPrev = document.createElement('div');
    swiperButtonPrev.classList.add('swiper-button-prev');
    swiperContainer.appendChild(swiperButtonPrev);

    return new Swiper(".swiper-container", {
        loop: true,
        slidesPerView: 1.5,
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
