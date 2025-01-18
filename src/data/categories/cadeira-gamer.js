const cadeiraGamer = {
  id: 4,
  category: 'cadeira_gamer',
  name: 'CADEIRAS GAMER',
  image: '/categorias/cadeira-gamer.png',
  subtext:
    'Confira as dicas para escolher a melhor cadeira gamer e veja os modelos mais bem avaliados da categoria no site Amazon.com',
  details: `
      <div class="font-[Montserrat] px-4 lg:w-[1024px] justify-self-center">
        <h2 class="text-xl lg:text-2xl font-medium my-8">Como escolher a melhor cadeira gamer para suas maratonas de jogos?</h2>
        <p class="text-sm lg:text-lg text-justify">Está pensando em adquirir uma cadeira gamer? Essa é uma ótima escolha para quem busca conforto e estilo, seja para jogar, estudar ou trabalhar. Mas com tantas opções disponíveis, como escolher a cadeira ideal?</p>
        <p class="text-sm lg:text-base font-medium mt-4">Separamos algumas dicas importantes para te ajudar nessa escolha:</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-10">1. Ergonomia</h3>
        <p class="text-xs lg:text-base my-2">Prefira cadeiras com suporte lombar ajustável, encosto reclinável e apoio para cabeça para garantir conforto em longas sessões.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">2. Material de Revestimento</h3>
        <p class="text-xs lg:text-base my-2">Escolha entre couro sintético (PU), tecido respirável ou outros materiais que ofereçam durabilidade e conforto térmico.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">3. Ajustes Personalizáveis</h3>
        <p class="text-xs lg:text-base my-2">Modelos com ajustes de altura, inclinação e braços são essenciais para adaptar a cadeira às suas preferências e necessidades.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">4. Suporte de Peso</h3>
        <p class="text-xs lg:text-base my-2">Verifique a capacidade de peso da cadeira para garantir segurança e durabilidade, especialmente para usuários mais altos ou pesados.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">5. Rodízios e Base</h3>
        <p class="text-xs lg:text-base my-2">Escolha rodízios de alta qualidade e uma base estável para maior mobilidade e segurança, mesmo em pisos delicados.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">6. Estilo e Design</h3>
        <p class="text-xs lg:text-base my-2">Cadeiras com design moderno e cores vibrantes podem agregar estilo ao seu setup e complementar sua decoração.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">7. Montagem e Garantia</h3>
        <p class="text-xs lg:text-base my-2">Opte por modelos fáceis de montar e que ofereçam uma boa garantia para assegurar um uso prolongado sem preocupações.</p>
  
        <p class="text-md lg:text-xl lg font-semibold my-4">Com essas dicas, você pode escolher uma cadeira gamer que alie conforto, funcionalidade e estilo, tornando suas horas de jogo ou trabalho muito mais agradáveis.</p>
      </div>
      `,
  products: [
    {
      rank: 'TOP 1',
      imageSrc: '/foto-produtos/cadeira-1.jpg',
      productName: 'Cadeira Gamer DXRacer King Series',
      rating: '9,9',
      features:
        'Apoio de cabeça ajustável, suporte lombar, encosto reclinável até 135°, revestimento em couro PU.',
      amazonLink: 'https://www.amazon.com',
    },
    {
      rank: 'TOP 2',
      imageSrc: '/foto-produtos/cadeira-2.jpg',
      productName: 'Cadeira Gamer ThunderX3 BC3',
      rating: '9,8',
      features:
        'Estofamento em espuma de alta densidade, tecido respirável, suporte de peso até 150 kg.',
      amazonLink: 'https://www.amazon.com',
    },
    {
      rank: 'TOP 3',
      imageSrc: '/foto-produtos/cadeira-3.jpg',
      productName: 'Cadeira Gamer Husky Gaming Blizzard',
      rating: '9,7',
      features:
        'Braços ajustáveis em 3D, base reforçada, design moderno com detalhes em LED.',
      amazonLink: 'https://www.amazon.com',
    },
  ],
};

export default cadeiraGamer;
