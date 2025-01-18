const cafeteiraEletrica = {
  id: 5,
  category: 'cafeteira_eletrica',
  name: 'CAFETEIRAS ELÉTRICAS',
  image: '/categorias/cafeteira-eletrica.png',
  subtext:
    'Confira as dicas para escolher a melhor cafeteira elétrica e veja os modelos mais bem avaliados da categoria no site Amazon.com',
  details: `
      <div class="font-[Montserrat] px-4 lg:w-[1024px] justify-self-center">
        <h2 class="text-xl lg:text-2xl font-medium my-8">Como escolher a melhor cafeteira elétrica para sua rotina?</h2>
        <p class="text-sm lg:text-lg text-justify">Pensando em adquirir uma cafeteira elétrica? Essa é uma excelente escolha para quem aprecia praticidade e sabor no dia a dia. Mas com tantas opções disponíveis, como escolher a cafeteira ideal?</p>
        <p class="text-sm lg:text-base font-medium mt-4">Aqui estão algumas dicas para te ajudar nessa decisão:</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-10">1. Capacidade do Reservatório</h3>
        <p class="text-xs lg:text-base my-2">Escolha uma cafeteira com capacidade suficiente para atender às suas necessidades diárias, desde modelos compactos para poucas xícaras até opções maiores para famílias.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">2. Tipos de Café</h3>
        <p class="text-xs lg:text-base my-2">Verifique se a cafeteira é compatível com o tipo de café que você prefere: pó, cápsulas ou grãos moídos. Algumas opções são híbridas e oferecem mais versatilidade.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">3. Funções Extras</h3>
        <p class="text-xs lg:text-base my-2">Modelos com temporizador, desligamento automático e aquecimento da base podem facilitar muito a sua rotina.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">4. Facilidade de Limpeza</h3>
        <p class="text-xs lg:text-base my-2">Prefira cafeteiras com peças removíveis e laváveis, como o filtro, reservatório e bandeja coletora, para simplificar a limpeza.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">5. Velocidade de Preparo</h3>
        <p class="text-xs lg:text-base my-2">Se o tempo é uma prioridade, opte por modelos que preparem o café rapidamente, sem comprometer o sabor.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">6. Design e Tamanho</h3>
        <p class="text-xs lg:text-base my-2">Certifique-se de que o design e as dimensões da cafeteira sejam compatíveis com o espaço disponível na sua cozinha.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">7. Eficiência Energética</h3>
        <p class="text-xs lg:text-base my-2">Modelos com baixo consumo de energia são ideais para quem busca economia sem abrir mão da qualidade.</p>
  
        <p class="text-md lg:text-xl lg font-semibold my-4">Essas dicas vão te ajudar a encontrar a cafeteira elétrica ideal, que combine sabor, praticidade e estilo na sua rotina.</p>
      </div>
      `,
  products: [
    {
      rank: 'TOP 1',
      imageSrc: '/foto-produtos/cafeteira-1.jpg',
      productName: 'Cafeteira Elétrica Philco PH14',
      rating: '9,9',
      features:
        'Capacidade para 14 xícaras, filtro permanente, base aquecida, design compacto.',
      amazonLink: 'https://www.amazon.com',
    },
    {
      rank: 'TOP 2',
      imageSrc: '/foto-produtos/cafeteira-2.jpg',
      productName: 'Cafeteira Elétrica Mondial C-08',
      rating: '9,8',
      features:
        'Função corta-pingo, reservatório transparente, design moderno.',
      amazonLink: 'https://www.amazon.com',
    },
    {
      rank: 'TOP 3',
      imageSrc: '/foto-produtos/cafeteira-3.jpg',
      productName: 'Cafeteira Elétrica Oster PrimaLatte',
      rating: '9,7',
      features:
        'Compatível com pó e cápsulas, vaporizador de leite, reservatório de água removível.',
      amazonLink: 'https://www.amazon.com',
    },
  ],
};

export default cafeteiraEletrica;
