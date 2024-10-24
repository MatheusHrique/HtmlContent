document.addEventListener('DOMContentLoaded', () => {
// document.addEventListener('DOMContentLoaded', () => { ... });
// Este trecho adiciona um ouvinte de evento ao objeto document. O evento 'DOMContentLoaded' dispara 
// quando a estrutura do documento HTML foi completamente carregada e processada, mas antes que todas 
// as imagens e sub-recursos tenham sido carregados. Assim, qualquer código dentro desse bloco será 
// executado quando o HTML estiver pronto.



    const themeToggle = document.getElementById('theme-toggle');
    // const themeToggle = document.getElementById('theme-toggle');
    // Aqui, é criada uma constante chamada themeToggle que armazena uma referência ao elemento do DOM 
    // com o id 'theme-toggle'. Este elemento é, no caso, o botão que alterna o tema da página.

    themeToggle.addEventListener('click', () => {
    // themeToggle.addEventListener('click', () => { ... });
    // Este trecho adiciona um ouvinte de evento ao botão themeToggle. Ele escuta por um evento de 'click', 
    // ou seja, quando o botão é clicado, o código dentro da função de callback é executado.

    // Um callback é uma função que é passada como argumento para outra função e é executada após algum 
    // evento ou ação ocorrer. O termo "callback" literalmente significa "chamada de volta".

        document.body.classList.toggle('dark');
        // document.body.classList.toggle('dark');
        // Dentro da função de callback, este comando alterna a classe 'dark' no elemento body do documento. 
        // Se a classe 'dark' estiver presente, ela é removida; se não estiver, ela é adicionada. Isso é útil 
        // para alternar entre temas claro e escuro.
    });
})
