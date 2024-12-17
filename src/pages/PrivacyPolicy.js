import React from 'react';
import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Condições gerais</h2>
          <p>
            Todas as suas informações pessoais recolhidas, serão usadas para o
            ajudar a tornar a sua visita no produtostestados.com.br o mais
            produtiva e agradável possível.
          </p>
          <p>
            A garantia da confidencialidade dos dados pessoais dos utilizadores
            do nosso site é importante para o produtostestados.com.br.
          </p>
          <p>
            Todas as informações pessoais relativas a membros, assinantes,
            clientes ou visitantes que usem o produtostestados.com.br serão
            tratadas em concordância com a Lei da Proteção de Dados Pessoais de
            26 de outubro de 1998 (Lei n.º 67/98).
          </p>
          <p>
            A informação pessoal recolhida pode incluir o seu nome, e-mail,
            número de telefone e/ou telemóvel, data de nascimento e/ou outros.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Os anúncios</h2>
          <p>
            Tal como outros websites, coletamos e utilizamos informação contida
            nos anúncios.
          </p>
          <p>
            A informação contida nos anúncios, inclui o seu endereço IP
            (Internet Protocol), o seu ISP (Internet Service Provider, como o
            Sapo, Clix ou outro), o browser que utilizou ao visitar o nosso
            website (como o Internet Explorer ou o Firefox), o tempo da sua
            visita e que páginas visitou dentro do nosso website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Cookie DoubleClick Dart</h2>
          <p>
            O Google, como fornecedor de terceiros, utiliza cookies para exibir
            anúncios no nosso website. Com o cookie DART, o Google pode exibir
            anúncios com base nas visitas que o leitor fez a outros websites na
            Internet.
          </p>
          <p>
            Os utilizadores podem desativar o cookie DART visitando a Política
            de privacidade da rede de conteúdo e dos anúncios do Google.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Os cookies e web beacons</h2>
          <p>
            Utilizamos cookies para armazenar informação, tais como as suas
            preferências pessoais quando visita o nosso website.
          </p>
          <p>
            Isto poderá incluir um simples popup, ou uma ligação em vários
            serviços que providenciamos, tais como fóruns.
          </p>
          <p>
            Em adição, também utilizamos publicidade de terceiros no nosso
            website para suportar os custos de manutenção. Alguns destes
            publicitários poderão utilizar tecnologias como os cookies e/ou web
            beacons quando publicitam no nosso website, o que fará com que esses
            publicitários (como o Google através do Google AdSense) também
            recebam a sua informação pessoal, como o endereço IP, o seu ISP, o
            seu browser, etc.
          </p>
          <p>
            Esta função é geralmente utilizada para geotargeting (mostrar
            publicidade de Lisboa apenas aos leitores oriundos de Lisboa, por
            ex.) ou apresentar publicidade direcionada a um tipo de utilizador
            (como mostrar publicidade de restaurante a um utilizador que visita
            sites de culinária regularmente, por ex.).
          </p>
          <p>
            Você detém o poder de desligar os seus cookies, nas opções do seu
            browser, ou efetuando alterações nas ferramentas de programas
            Anti-Virus, como o Norton Internet Security. No entanto, isso poderá
            alterar a forma como interage com o nosso website, ou outros
            websites. Isso poderá afetar ou não permitir que faça logins em
            programas, sites ou fóruns da nossa e de outras redes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">
            Ligações a sites de terceiros
          </h2>
          <p>
            O produtostestados.com.br possui ligações para outros sites, os
            quais, a nosso ver, podem conter informações / ferramentas úteis
            para os nossos visitantes.
          </p>
          <p>
            A nossa política de privacidade não é aplicada a sites de terceiros,
            pelo que, caso visite outro site a partir do nosso deverá ler a
            politica de privacidade do mesmo.
          </p>
          <p>
            Não nos responsabilizamos pela política de privacidade ou conteúdo
            presente nesses mesmos sites.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Afiliados</h2>
          <p>
            Este site de serviços permitem que este Site seja parte ativa junto
            de produtos ou serviços oferecidos. Os anúncios poderão ser exibidos
            com links afiliados e o administrador deste Site poderá ganhar
            comissão por qualquer compra realizada através desses links.
          </p>
          <p>
            Este site utiliza links de afiliados com o objetivo de gerar receita
            comercial. A venda de qualquer produto anunciado não é de
            responsabilidade do site <strong>produtostestados.com.br</strong>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Amazon Associados</h2>
          <p>
            O produtostestados.com.br participa do Programa de Associados da
            Amazon, um programa de afiliados desenvolvido pela Amazon e os seus
            clientes, que permite a aquisição de produtos com descontos de forma
            confiável e eficiente.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
