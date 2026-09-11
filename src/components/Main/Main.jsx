
import"./Main.css";
import corrida from "../../assets/corrida.png"
function Main() {
  return (
    <main>
      <section id="inicio" aria-labelledby="titulo-principal">
        <h2 id="titulo-principal"> Vida e Esportes</h2>

        <p>
          O esporte pode transformar nossa rotina, melhorar nossa saúde
          e contribuir para uma vida mais ativa, equilibrada e feliz.
        </p>
      </section>

      <section id="esportes" aria-labelledby="titulo-esportes">
        <h2 id="titulo-esportes">Esportes</h2>

        <article>
          <h3>Caminhar</h3>
          <p>
            Uma atividade simples que ajuda a movimentar o corpo.
          </p>
        </article>

        <article>
          <img src={corrida} alt="" />
          <h3>Correr</h3>
          <p>
            Melhora o condicionamento e ajuda a manter uma rotina ativa.
          </p>
        </article>
      </section>

      <section id="vida" aria-labelledby="titulo-vida">
        <h2 id="titulo-vida">Vida Saudável</h2>

        <article>
          <h3>Alimentação</h3>
          <p>
            Boas escolhas alimentares ajudam a cuidar da saúde.
          </p>
        </article>

        <article>
          <h3>Qualidade de Vida</h3>
          <p>
            Movimento, descanso e bons hábitos contribuem para o bem-estar.
          </p>
        </article>
      </section>

      <section id="curiosidades" aria-labelledby="titulo-curiosidades">
        <h2 id="titulo-curiosidades">Curiosidades</h2>

        <p>
          Praticar atividades físicas regularmente pode trazer benefícios
          para o corpo e também para a mente.
        </p>
      </section>
    </main>
  );
}

export default Main;