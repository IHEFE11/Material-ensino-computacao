# 👾 Binary Code Games: Coleção Educativa

Bem-vindo ao repositório **Binary Code Games**! Este projeto reúne duas implementações interativas de jogos de adivinhação focadas no ensino de **Lógica Binária** e **ASCII**.

Embora ambos os jogos usem a mesma lógica matemática, eles oferecem experiências visuais completamente opostas: uma moderna e responsiva, e outra nostálgica e "hacker".

---

## 📂 Projetos Disponíveis

### 1. 🤖 A Forca do Robô 
> **Pasta Recomendada:** 

Uma experiência lúdica, colorida e totalmente responsiva, ideal para salas de aula, tablets e celulares.

* **Tecnologia:** HTML5 + JavaScript + **Tailwind CSS** (via CDN).
* **Visual:** Tema "Circuito Dark" com a fonte amigável *Fredoka*.
* **Funcionalidades:**
    * **Modo Professor:** Tela inicial onde o instrutor define a "Palavra Secreta" (ex: ALGORITMO).
    * **Interface de Clique:** O aluno clica/toca nos botões numéricos (1-26) para revelar o código.
    * **Decodificador Visual:** Feedback colorido (Verde = Acerto, Vermelho = Erro, Amarelo = Letra repetida).

### 2. 📟 Mega Senha 
> **Pasta Recomendada:** 

Uma experiência imersiva inspirada em terminais antigos e filmes de hackers dos anos 80.

* **Tecnologia:** HTML5 + JavaScript + **CSS Puro**.
* **Visual:** Monitor CRT, fundo azul petróleo e a fonte pixelada *Jersey 10*.
* **Funcionalidades:**
    * **Foco em Digitação:** O aluno usa o teclado físico para interagir.
    * **Estilo Arcade:** Animações simples e visual de alto contraste.

## 📚 Conexão Pedagógica

Este projeto foi desenhado para exercitar conceitos fundamentais da Ciência da Computação de forma prática e interativa.

### 🔌 Computação Plugada
Ao contrário de atividades "desplugadas" (feitas com papel e lápis), estes jogos utilizam a **Computação Plugada** para oferecer:
* **Feedback Imediato:** O aluno descobre na hora se seu raciocínio lógico estava correto (visualizando erros em vermelho e acertos em verde).
* **Interatividade:** A manipulação direta dos bits (ligar/desligar ou digitar) reforça o aprendizado cinestésico.
* **Motivação:** A gamificação (estética de Hacker ou Robô) aumenta o engajamento na tarefa repetitiva de conversão numérica.

### 🧠 Pensamento Computacional
Os jogos estimulam os 4 pilares do Pensamento Computacional:

1.  **Decomposição:**
    * Para vencer, o aluno precisa quebrar um problema grande (a Palavra Secreta) em problemas menores (cada Letra individualmente).
2.  **Abstração:**
    * O aluno aprende a ignorar o desenho da letra (o glifo 'A') e focar na sua representação numérica subjacente (o valor 1).
3.  **Reconhecimento de Padrões:**
    * Ao jogar repetidamente, o aluno percebe padrões binários. *Ex: Todas as letras ímpares (A, C, E) terminam com o bit 1 (`00001`, `00011`, `00101`).*
4.  **Algoritmos:**
    * O jogo força a criação de um processo mental passo a passo:
        * *Passo 1:* Identificar a letra.
        * *Passo 2:* Buscar a posição no alfabeto.
        * *Passo 3:* Converter o decimal para a sequência de bits.