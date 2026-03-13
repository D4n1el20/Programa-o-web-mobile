import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        <div className={styles.intro}>
          <h1>Daniel Silva Costa</h1>
          <p>Sou aluno do curso de Ciência da Computação</p>
          <h2>Resumo</h2>
          <p>Estudante procurando estágio na minha área,tenho pouca experiência o ambito profissional,mas já fiz alguns projetos acadêmicos</p>
          <h2>
            Experiência profissional
          </h2>
          <h4>
            Jovem Aprendiz Administrativo do Financeiro, ASA Industria
          </h4>
          <p>
            Criei borderôs
          </p>
          <p>
            Comparação de dados
          </p>
          <p>
            Uso de tabelas excel
          </p>
          <h2>
            Experiência acadêmica
          </h2>
          <h4>
            Projeto extencionista, Biblioteca Carangueijo Tabaiares
          </h4>
          <p>Workshop de Cubo Mágico para crianças que frequentavam a biblioteca. A proposta foi ajudar a desenvolver curiosidade, criatividade e cordenação motora</p>
          <p>Workshop de Excel para funcionários da biblioteca. A proposta foi auxiliar funcionários com as dificuldades que tinham com o uso de excel</p>
          <h4>Projeto extensionista, Colégio Liceu Nóbrega de Artes e Ofícios</h4>
          <p>Foi feita uma APi com o objetivo de auxiliar uma equipe de robótica, Coliceu, que em 2025 estavam com objetivo de fazer algo que auxiliasse os arqueologos.
            Eles tiveram a ideia de dar um kit de arqueologia e nos pediram um app que ajudasse a mapear sitios arqueologicos.</p>
            <p>Api feita para funcionar de forma offline com mapa estilo xadrez expansivel.No período de 2 meses,concluímos o projeto.</p>
          <h4>
            Jogo da velha, Marcio Augusto Silva Bueno
          </h4>
          <p>
            Trabalho que fiz solicitado pelo professor da cadeira de Programação web e mobile. pode ser acessado clicando aqui(decidir se vai ser link ou botão)
          </p>
          <h4>
            Habilidades
          </h4>
          <h4>Educação</h4>
          <h4>Detalhes de Contato</h4>
        </div>
      </main>
    </div>
  );
}
