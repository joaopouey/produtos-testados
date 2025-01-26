const liquidificador = {
  id: 9,
  category: 'liquidificador',
  name: 'LIQUIDIFICADORES',
  image: '/categorias/liquidificador.png',
  subtext:
    'Confira as dicas para escolher o melhor liquidificador e veja os modelos mais bem avaliados da categoria no site Amazon.com',
  details: `
      <div class="font-[Montserrat] px-4 lg:w-[1024px] justify-self-center">
        <h2 class="text-xl lg:text-2xl font-medium my-8">Como escolher o melhor liquidificador para sua cozinha?</h2>
        <p class="text-sm lg:text-lg text-justify">Procurando por um liquidificador que combine desempenho e praticidade? Essa é uma ferramenta essencial para preparar sucos, vitaminas, massas e muito mais. Mas como escolher o modelo ideal?</p>
        <p class="text-sm lg:text-base font-medium mt-4">Aqui estão algumas dicas para te ajudar nessa escolha:</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-10">1. Potência</h3>
        <p class="text-xs lg:text-base my-2">Modelos com potência acima de 600W são ideais para receitas mais densas, como massas e purês. Já para sucos e vitaminas, potências menores podem ser suficientes.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">2. Capacidade do Copo</h3>
        <p class="text-xs lg:text-base my-2">Escolha a capacidade do copo conforme suas necessidades. Copos de 2L ou mais são perfeitos para famílias grandes ou preparo de receitas em maior quantidade.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">3. Material do Copo</h3>
        <p class="text-xs lg:text-base my-2">Copos de vidro são mais resistentes a odores e manchas, enquanto os de plástico são mais leves e econômicos. O tritan combina as vantagens de ambos.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">4. Lâminas e Versatilidade</h3>
        <p class="text-xs lg:text-base my-2">Prefira modelos com lâminas de aço inoxidável e design que permita triturar gelo, frutas congeladas e outros ingredientes duros.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">5. Facilidade de Limpeza</h3>
        <p class="text-xs lg:text-base my-2">Modelos com copos e lâminas removíveis facilitam a limpeza. Alguns são compatíveis com lava-louças, o que pode ser um diferencial.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">6. Níveis de Velocidade</h3>
        <p class="text-xs lg:text-base my-2">Modelos com várias velocidades permitem maior controle sobre o preparo, desde misturas delicadas até receitas mais pesadas.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">7. Segurança</h3>
        <p class="text-xs lg:text-base my-2">Certifique-se de que o liquidificador tenha trava de segurança e base antiderrapante para evitar acidentes durante o uso.</p>
  
        <p class="text-md lg:text-xl lg font-semibold my-4">Com essas dicas, você pode escolher o liquidificador ideal para facilitar seu dia a dia na cozinha.</p>
      </div>
      `,
  products: [
    {
      rank: 'TOP 1',
      imageSrc: '/foto-produtos/liquidificador-1.jpg',
      productName: 'Electrolux - Liquidificador inox com jarra de vidro 1,5L',
      rating: '9,7',
      features:
        'Copo Resistente, fácil de limpar e não absorve cheiro nem manchas',
      features2: 'Design bonito e moderno muito elogiado pelos clientes',
      features3:
        'Ele é frequentemente descrito como robusto, resistente e bem construído',
      amazonLink: 'https://amzn.to/42uTMzg',
    },
    {
      rank: 'TOP 2',
      imageSrc: '/foto-produtos/liquidificador-2.jpg',
      productName: 'Philips - Liquidificador série 5000',
      rating: '9,5',
      features:
        'Potência e Desempenho: processa alimentos rapidamentes e tritura ingredientes duros como gelo e batata doce crua',
      features2: 'Remoção das lâminas facilita muito a limpeza',
      features3:
        'O Design moderno e a resistência dos materiais são frequentemente elogiados',
      amazonLink: 'https://amzn.to/4hujlEO',
    },
    {
      rank: 'TOP 3',
      imageSrc: '/foto-produtos/liquidificador-3.jpg',
      productName: 'Oster - Liquidificador 1400 Full',
      rating: '9,5',
      features: 'Potência elevada ótima para triturar elementos duros',
      features2:
        'Copo de tamanho grande e lâminas removíveis facilitam a limpeza',
      features3:
        'Design bonito e muito robusto, considerado um dos melhores custo benefício do mercado',
      amazonLink: 'https://amzn.to/3PSit10',
    },
  ],
};

export default liquidificador;
