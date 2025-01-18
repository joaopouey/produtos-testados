const assistenteVirtual = {
  id: 3,
  category: 'assistente_virtual',
  name: 'ASSISTENTES VIRTUAIS',
  image: '/categorias/assistente-virtual.png',
  subtext:
    'Confira as dicas para escolher o melhor assistente virtual e veja os dispositivos mais bem avaliados da categoria no site Amazon.com',
  details: `
      <div class="font-[Montserrat] px-4 lg:w-[1024px] justify-self-center">
        <h2 class="text-xl lg:text-2xl font-medium my-8">Como escolher o melhor assistente virtual para sua casa?</h2>
        <p class="text-sm lg:text-lg text-justify">Está pensando em adquirir um assistente virtual para facilitar sua rotina? Essa é uma escolha incrível para quem busca praticidade e integração com a tecnologia no dia a dia. Mas com tantas opções disponíveis, como escolher o modelo ideal?</p>
        <p class="text-sm lg:text-base font-medium mt-4">Separamos algumas dicas para te ajudar nessa decisão:</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-10">1. Compatibilidade com Dispositivos</h3>
        <p class="text-xs lg:text-base my-2">Certifique-se de que o assistente virtual é compatível com seus dispositivos, como smart TVs, lâmpadas inteligentes e sistemas de segurança.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">2. Idioma e Reconhecimento de Voz</h3>
        <p class="text-xs lg:text-base my-2">Opte por um assistente que suporte seu idioma e tenha bom desempenho no reconhecimento de comandos de voz, mesmo em ambientes ruidosos.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">3. Recursos e Funcionalidades</h3>
        <p class="text-xs lg:text-base my-2">Assistentes com funções como criação de lembretes, controle de dispositivos inteligentes e respostas a perguntas são ideais para diversas rotinas.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">4. Integração com Serviços</h3>
        <p class="text-xs lg:text-base my-2">Certifique-se de que o assistente é compatível com serviços de streaming, e-mails, calendários e outros aplicativos que você utiliza frequentemente.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">5. Qualidade do Áudio</h3>
        <p class="text-xs lg:text-base my-2">Se você pretende ouvir músicas ou podcasts, escolha um modelo com bom desempenho de áudio para uma experiência de alta qualidade.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">6. Privacidade e Segurança</h3>
        <p class="text-xs lg:text-base my-2">Opte por modelos que ofereçam configurações de privacidade, como a opção de desligar o microfone e controles sobre os dados coletados.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">7. Design e Portabilidade</h3>
        <p class="text-xs lg:text-base my-2">Assistentes com design compacto e moderno podem se integrar melhor aos ambientes da sua casa e ser facilmente transportados entre cômodos.</p>
  
        <p class="text-md lg:text-xl lg font-semibold my-4">Essas dicas ajudarão você a escolher o assistente virtual ideal para tornar sua rotina mais prática e conectada.</p>
      </div>
      `,
  products: [
    {
      rank: 'TOP 1',
      imageSrc: '/foto-produtos/assistente-1.jpg',
      productName: 'Amazon Echo Dot (4ª Geração)',
      rating: '9,9',
      features:
        'Compatível com Alexa, excelente qualidade de som, integração com dispositivos inteligentes.',
      amazonLink: 'https://www.amazon.com',
    },
    {
      rank: 'TOP 2',
      imageSrc: '/foto-produtos/assistente-2.jpg',
      productName: 'Google Nest Mini',
      rating: '9,8',
      features:
        'Integração com Google Home, comandos de voz precisos, design compacto e moderno.',
      amazonLink: 'https://www.amazon.com',
    },
    {
      rank: 'TOP 3',
      imageSrc: '/foto-produtos/assistente-3.jpg',
      productName: 'Apple HomePod Mini',
      rating: '9,7',
      features:
        'Compatível com Siri, excelente qualidade de som, foco em privacidade e segurança.',
      amazonLink: 'https://www.amazon.com',
    },
  ],
};

export default assistenteVirtual;
