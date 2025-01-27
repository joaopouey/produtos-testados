const purificadorAguaGelada = {
  id: 10,
  category: 'purificador_de_agua',
  name: 'PURIFICADORES DE ÁGUA GELADA',
  image: '/categorias/purificador-de-agua.png',
  subtext:
    'Confira as dicas para escolher o melhor purificador de água gelada e veja os modelos mais bem avaliados da categoria no site Amazon.com',
  details: `
      <div class="font-[Montserrat] px-4 lg:w-[1024px] justify-self-center">
        <h2 class="text-xl lg:text-2xl font-medium my-8">Como escolher o melhor purificador de água gelada para sua casa?</h2>
        <p class="text-sm lg:text-lg text-justify">Quer garantir água limpa e gelada para sua família? Um purificador de água gelada é a solução ideal para unir praticidade e saúde no dia a dia. Mas com tantas opções disponíveis, como escolher o modelo ideal?</p>
        <p class="text-sm lg:text-base font-medium mt-4">Aqui estão algumas dicas para te ajudar nessa escolha:</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-10">1. Capacidade de Resfriamento</h3>
        <p class="text-xs lg:text-base my-2">Escolha modelos com capacidade suficiente para atender à demanda da sua família, especialmente em dias mais quentes.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">2. Eficiência de Filtragem</h3>
        <p class="text-xs lg:text-base my-2">Verifique se o purificador possui filtros de alta qualidade, como carvão ativado ou sistema de osmose reversa, para garantir água pura e livre de contaminantes.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">3. Temperatura da Água</h3>
        <p class="text-xs lg:text-base my-2">Alguns modelos oferecem múltiplas opções de temperatura, como natural, fresca e gelada, garantindo versatilidade para diversas necessidades.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">4. Design e Tamanho</h3>
        <p class="text-xs lg:text-base my-2">Certifique-se de que o modelo se adapta ao espaço disponível na sua cozinha ou área de serviço, considerando tamanho e estética.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">5. Economia de Energia</h3>
        <p class="text-xs lg:text-base my-2">Opte por modelos com selo de eficiência energética, garantindo menor impacto na conta de luz.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">6. Facilidade de Manutenção</h3>
        <p class="text-xs lg:text-base my-2">Modelos com filtros fáceis de trocar e indicadores de limpeza podem economizar tempo e esforço na manutenção.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">7. Vazão da Água</h3>
        <p class="text-xs lg:text-base my-2">Prefira purificadores com boa vazão para evitar esperas demoradas durante o uso, especialmente em famílias maiores.</p>
  
        <p class="text-md lg:text-xl lg font-semibold my-4">Com essas dicas, você pode escolher o purificador de água gelada ideal, que combine eficiência, praticidade e qualidade para o dia a dia.</p>
      </div>
      `,
  products: [
    {
      rank: 'TOP 1',
      imageSrc: '/foto-produtos/purificador-1.jpg',
      productName: 'Purificador de Água gelada Electrolux PE12G',
      rating: '9,6',
      features:
        'Eficiência e qualidade da água: água filtrada com excelente qualidade, a temperatura da água gelada é excelente',
      features2:
        'Design compacto, moderno e elegante, fácil de instalar em bancada ou parede',
      features3:
        'Simplicidade na instalação, operação e troca de filtro, com manuais claros e bem explicados',
      amazonLink: 'https://amzn.to/40nJ7Ui',
    },
    {
      rank: 'TOP 2',
      imageSrc: '/foto-produtos/purificador-2.jpg',
      productName: 'Purificador de Água Refrigerado IBBL New E-Due Equilibrium',
      rating: '9,4',
      features:
        'Água filtrada é limpa sem gosto de cloro ou plásticos, a filtragem é muito elogiada pelos usuários',
      features2:
        'Bonito, compacto e fácil de instalar, se adaptando bem em diversos ambientes',
      features3:
        'Embora o reservatório seja de 800ml atende bem ao uso doméstico, o resfriamento é muito elogiado',
      amazonLink: 'https://amzn.to/4h2GKgK',
    },
    {
      rank: 'TOP 3',
      imageSrc: '/foto-produtos/purificador-3.jpg',
      productName: 'Purificador de Água Consul CPB34AF',
      rating: '9,0',
      features:
        'Água limpa, sem gosto, comparável a agua mineral, filtragem muito elogiada',
      features2:
        'design compacto e instalação simples, feita pelos próprios usuários sem dificuldades',
      features3:
        'Temperatura da água gelada é considerada agradável, destaque também para o baixo consumo de energia',
      amazonLink: 'https://amzn.to/4hm3VlS',
    },
  ],
};

export default purificadorAguaGelada;
