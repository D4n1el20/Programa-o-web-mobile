import Image from "next/image";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
  <div className="w-full flex justify-center">
  <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
    Daniel Silva Costa
  </h1>
</div>
<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Image
  src="/Minha-Foto.jpeg"
  alt="Foto de Daniel Costa"
  width={300}
  height={300}
  className="mx-auto rounded-full"
/>
          
          <h2>
            Minha Bio
          </h2>
          <p>
  Sou estudante da{" "}
  <a href="https://portal.unicap.br" target="_blank"className="hover:text-blue-500">Universidade Católica de Pernambuco</a>{" "} e participei de um projeto extensionista realizado em parceria com a{" "} 
  <a href="https://bibliotecacomunitariact.blogspot.com" target="_blank"className="hover:text-blue-500">Biblioteca Comunitaria Carangueijo Tabaiares</a> 
  
  .Nesse projeto, eu e meu grupo desenvolvemos um workshop de Cubo Mágico, com o objetivo de estimular o desenvolvimento motor e o raciocínio lógico das crianças que frequentavam a biblioteca.
</p>
<p>
  Além disso, também oferecemos aulas de Excel para os funcionários, buscando contribuir para a organização e melhoria das atividades administrativas da biblioteca. Como parte da iniciativa, realizamos ainda a doação de um computador, fornecido pela empresa onde um dos integrantes do grupo trabalhava, para auxiliar nas atividades do local.
  </p>
  <p>
    Também participei de outro projeto extensionista em parceria com o Liceu, no qual ajudamos uma equipe a desenvolver uma API voltada para arqueologia. Essa API auxilia arqueólogos a demarcar descobertas em áreas extensas por meio de um sistema de tags, utilizando as métricas desejadas para catalogação. O funcionamento do sistema foi estruturado em um modelo semelhante a um jogo da velha, facilitando a organização e a visualização das áreas analisadas.
    </p>
     
        </div>
        <div>
          
          
        </div>
      </main>
    </div>
  );
}
