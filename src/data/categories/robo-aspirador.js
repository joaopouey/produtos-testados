const roboAspirador = {
  id: 1,
  category: 'robo_aspirador',
  name: 'ROBÔS ASPIRADORES',
  image: '/categorias/robo-aspirador.png',
  subtext:
    'Confira as dicas para adquirir o melhor robô aspirador e ainda uma lista com os produtos mais bem avaliados da categoria no site Amazon.com',
  details: `
    <div class="font-[Montserrat] px-4 lg:w-[1024px] justify-self-center">
      <h2 class="text-xl lg:text-2xl font-medium my-8">Como escolher o melhor robô aspirador para sua casa?</h2>
      <p class="text-sm lg:text-lg text-justify">Está pensando em adquirir um robô aspirador para facilitar a sua vida? Essa é uma ótima escolha para quem busca praticidade e eficiência na limpeza da casa. Mas com tantas opções no mercado, como escolher o modelo ideal?</p>
      <p class="text-sm lg:text-base font-medium mt-4">Separamos algumas dicas para te ajudar nessa missão:</p>

      <h3 class="text-sm lg:text-xl font-medium mt-10">1. Tecnologia de Navegação</h3>
      <p class="text-xs lg:text-base my-2">Modelos com mapeamento inteligente (LIDAR ou câmera) são mais eficientes e evitam obstáculos, ideais para casas maiores ou com muitos móveis.</p>

      <h3 class="text-sm lg:text-xl font-medium mt-6">2. Potência de Sucção</h3>
      <p class="text-xs lg:text-base my-2">Escolha conforme o tipo de piso e presença de tapetes ou carpetes. Potências acima de 2.000 Pa são recomendadas para sujeira pesada e pelos de animais.</p>

      <h3 class="text-sm lg:text-xl font-medium mt-6">3. Autonomia da Bateria</h3>
      <p class="text-xs lg:text-base my-2">Para casas maiores, opte por robôs com duração acima de 120 minutos e função de recarga automática com retomada da limpeza.</p>

      <h3 class="text-sm lg:text-xl font-medium mt-6">4. Capacidade do Reservatório</h3>
      <p class="text-xs lg:text-base my-2">Reservatórios maiores (acima de 0,5L) reduzem a frequência de esvaziamento. Modelos com autolimpeza são ainda mais práticos.</p>

      <h3 class="text-sm lg:text-xl font-medium mt-6">5. Funções Adicionais</h3>
      <p class="text-xs lg:text-base my-2">Robôs híbridos (aspiram e passam pano), zonas proibidas, detecção de sujeira e modos específicos para diferentes tipos de piso aumentam a conveniência.</p>

      <h3 class="text-sm lg:text-xl font-medium mt-6">6. Facilidade de Manutenção</h3>
      <p class="text-xs lg:text-base my-2">Filtros HEPA para alérgenos, peças substituíveis e design simples para limpeza são essenciais.</p>

      <h3 class="text-sm lg:text-xl font-medium mt-6">7. Conectividade e Controle</h3>
      <p class="text-xs lg:text-base my-2">Aplicativos com agendamento e monitoramento, além de integração com assistentes virtuais (Alexa ou Google Assistant), oferecem maior praticidade.</p>

      <p class="text-md lg:text-xl lg font-semibold my-4">Esses fatores cobrem desde eficiência de limpeza até usabilidade e manutenção.</p>
    </div>
    `,
  products: [
    {
      rank: 'TOP 1',
      imageSrc: '/foto-produtos/robo-aspirador-1.jpg',
      productName: 'Xiaomi - Robot Vacuum s20+',
      rating: '9,9',
      features:
        'Forte sucção inclusive na limpeza de tapetes e sujeiras mais difíceis, aspirando e passando pano com precisão',
      features2:
        'Funcionalidade de mapeamento da casa, controle por aplicativo e configurações simples.',
      features3: 'Opera em silêncio, facil de limpar e conversa em português',
      amazonLink: 'https://amzn.to/3E4kPqH',
    },
    {
      rank: 'TOP 2',
      imageSrc: '/foto-produtos/robo-aspirador-2.jpg',
      productName: 'Xiaomi - Robô aspirador de pó inteligente Mop 2',
      rating: '9,7',
      features:
        'Excelente aspiração eficaz removendo poeira, sujeira e pelos de animais, inclusive em tapetes',
      features2:
        'Facilidade de configurar, de criar barreiras virtuais, divisão de ambientes e mapeamento',
      features3:
        'Quem tem crianças e pet elogia muito a função de aspirar e já passar pano',
      amazonLink: 'https://amzn.to/4jt3bxd',
    },
    {
      rank: 'TOP 3',
      imageSrc: '/foto-produtos/robo-aspirador-3.jpg',
      productName: 'Xiaomi - Robot Vacuum s10',
      rating: '9,6',
      features:
        'Elogiado por pessoas com rinite e alergias pela aspiração e passagem de pano removendo todo tipo de sujeira e partículas',
      features2:
        'Mapeamento, barreiras virtuais, facilidade de uso e programação de horários também são bastante valorizados',
      features3: 'Muito elogiado por quem tem pets e crianças',
      amazonLink: 'https://amzn.to/40MmOsB',
    },
  ],
};

export default roboAspirador;
