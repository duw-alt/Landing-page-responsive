const container = document.querySelector('.cards-section');

const books = [
  {
    icon: 'assets/images/service-design.svg',
    title: 'Application Design',
    subtitle: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: 'assets/images/service-hosting.svg',
    title: 'Web Hosting',
    subtitle: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: 'assets/images/service-social.svg',
    title: 'Social Media',
    subtitle: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: 'assets/images/service-seo.svg',
    title: 'SEO Optimization',
    subtitle: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: 'assets/images/service-cloud.svg',
    title: 'Cloud Server',
    subtitle: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: 'assets/images/service-secure.svg',
    title: 'Data Security',
    subtitle: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]


books.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('col-xl-4', 'col-md-6', 'mt-5', 'd-flex', 'justify-content-around');

    card.innerHTML = `
    <a href='#'>
      <div class="card" style="flex: 1; border: none; box-shadow: 0 0 15px rgba(17, 17, 17, 0.1)" onMouseOver="this.style.scale='1.06'" onMouseOut="this.style.scale='1'">
        <div class="card-body d-flex flex-column justify-content-center text-center">
          <img src="${book.icon}" class="mt-4" style="height: 77px">
          <h4 class="card-title mt-4 mb-3" style="color: blue">${book.title}</h4>
          <h6 class="card-subtitle mb-4 text-muted">${book.subtitle}</h6>
        </div>
      </div>
    </a>
    `

    container.appendChild(card)
})