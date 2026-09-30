export const Views = {

  inicio() {
    return `

      <section class="hero-section">

        <h1>
          Bem-vindo à ONG Recomeçar
        </h1>

        <p>
          Trabalhamos para criar novas oportunidades e fortalecer
          pessoas e comunidades por meio da solidariedade.
        </p>

      </section>


      <div class="cards-grid">

        <article class="card-item">

          <div class="card-image-wrapper">

            <span class="badge">
              Projeto Ativo
            </span>

            <img
              src="../img/projeto-voluntariado.png"
              alt="Voluntários realizando uma ação comunitária"
              class="card-img"
            >

          </div>


          <div class="card-body">

            <h3>
              Nossos Projetos
            </h3>

            <p>
              Conheça iniciativas de voluntariado,
              campanhas de doação e programas de
              apoio às famílias.
            </p>

            <a
              href="#projetos"
              data-rota="projetos"
              class="btn-primary"
            >
              Ver detalhes
            </a>

          </div>

        </article>


        <article class="card-item">

          <div class="card-image-wrapper">

            <img
              src="../img/projeto-familias.jpg"
              alt="Famílias recebendo apoio"
              class="card-img"
            >

          </div>


          <div class="card-body">

            <h3>
              Como Ajudar
            </h3>

            <p>
              Você pode contribuir como voluntário
              ou através de doações. Cada gesto faz
              a diferença!
            </p>

            <a
              href="#cadastro"
              data-rota="cadastro"
              class="btn-primary"
            >
              Quero participar
            </a>

          </div>

        </article>

      </div>

    `;
  },


  projetos() {
    return `

      <section class="hero-section">

        <h1>
          Nossos Projetos
        </h1>

        <p>
          Conheça as iniciativas da ONG Recomeçar e descubra
          como nossas ações contribuem para transformar
          a comunidade.
        </p>

      </section>


      <section class="projects-section">

        <h2>
          Projetos Sociais
        </h2>


        <article class="card-container">

          <img
            src="../img/projeto-educacao.jpg"
            alt="Criança participando de atividade educacional"
            class="card-img"
          >

          <div class="card-content">

            <h3>
              Educação e Capacitação
            </h3>

            <p>
              Desenvolvemos atividades educativas, oficinas
              e cursos para ampliar o acesso ao conhecimento
              e criar novas oportunidades para crianças,
              jovens e adultos.
            </p>

          </div>

        </article>


        <article class="card-container">

          <img
            src="../img/projeto-familias.jpg"
            alt="Família recebendo apoio de uma ação social"
            class="card-img"
          >

          <div class="card-content">

            <h3>
              Apoio às Famílias
            </h3>

            <p>
              Promovemos campanhas e ações de assistência
              destinadas a famílias que enfrentam situações
              de vulnerabilidade.
            </p>

          </div>

        </article>


        <article class="card-container">

          <img
            src="../img/projeto-voluntariado.png"
            alt="Voluntários realizando atividade comunitária"
            class="card-img"
          >

          <div class="card-content">

            <h3>
              Voluntariado
            </h3>

            <p>
              Incentivamos a participação de voluntários
              em ações comunitárias, criando oportunidades
              para contribuir com tempo e habilidades.
            </p>

          </div>

        </article>

      </section>


      <aside class="info-section">

        <h2>
          Faça parte dessa transformação
        </h2>

        <p>
          O trabalho da ONG Recomeçar depende da participação
          de pessoas comprometidas com a construção de uma
          sociedade mais solidária.
        </p>

        <a
          href="#cadastro"
          data-rota="cadastro"
          class="btn-primary"
        >
          Quero participar
        </a>

      </aside>

    `;
  },


  cadastro() {
    return `

      <section class="hero-section">

        <h1>
          Formulário de Cadastro
        </h1>

        <p>
          Preencha seus dados para participar das ações,
          projetos e iniciativas da ONG Recomeçar.
        </p>

      </section>


      <section class="form-container">

        <h2>
          Cadastro de participante
        </h2>


        <form
         class="custom-form"
         action="#"
         method="post"
         novalidate
        >
          <fieldset>

            <legend>
              Dados Pessoais
            </legend>


            <div class="form-group">

              <label for="nome">
                Nome Completo:
              </label>

              <input
                type="text"
                id="nome"
                name="nome"
                required
                placeholder="Ex.: João da Silva"
              >

            </div>


            <div class="form-group">

              <label for="email">
                E-mail:
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="joao@email.com"
              >

            </div>


            <div class="form-group">

              <label for="nascimento">
                Data de Nascimento:
              </label>

              <input
                type="date"
                id="nascimento"
                name="nascimento"
                required
              >

            </div>

          </fieldset>


          <fieldset>

            <legend>
              Endereço
            </legend>


            <div class="form-group">

              <label for="cep">
                CEP:
              </label>

              <input
                type="text"
                id="cep"
                name="cep"
                pattern="[0-9]{5}-[0-9]{3}"
                maxlength="9"
                required
                placeholder="00000-000"
              >

            </div>


            <div class="form-row">

              <div class="form-group flex-2">

                <label for="cidade">
                  Cidade:
                </label>

                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  required
                  placeholder="Sua cidade"
                >

              </div>


              <div class="form-group flex-1">

                <label for="estado">
                  Estado (UF):
                </label>

                <input
                  type="text"
                  id="estado"
                  name="estado"
                  maxlength="2"
                  pattern="[A-Za-z]{2}"
                  required
                  placeholder="SP"
                >

              </div>

            </div>

          </fieldset>


          <fieldset>

            <legend>
              Documentos e Contato
            </legend>


            <div class="form-group">

              <label for="cpf">
                CPF:
              </label>

              <input
                type="text"
                id="cpf"
                name="cpf"
                pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                maxlength="14"
                required
                placeholder="000.000.000-00"
              >

            </div>


            <div class="form-group">

              <label for="telefone">
                Telefone:
              </label>

              <input
                type="tel"
                id="telefone"
                name="telefone"
                pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                maxlength="13"
                required
                placeholder="11-99999-9999"
              >

            </div>

          </fieldset>


          <button
            type="submit"
            class="btn-primary"
          >
            Finalizar Cadastro
          </button>


          <p id="cadastro-status"></p>

        </form>

      </section>

    `;
  }

};