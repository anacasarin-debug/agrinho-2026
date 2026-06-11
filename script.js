document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const botoes = document.querySelectorAll('.btn-filtro');

    // 1. Animação de Entrada: Faz os cards aparecerem suavemente
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('mostrar');
            }, index * 150); // Efeito cascata
        });
    }, 200);

    // 2. Sistema de Filtro (Equilíbrio Dinâmico)
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            // Remove a classe 'ativo' de todos os botões e adiciona no clicado
            botoes.forEach(b => b.classList.remove('ativo'));
            botao.classList.add('ativo');

            const categoriaFiltrada = botao.getAttribute('data-filtro');

            cards.forEach(card => {
                // Se for 'todos' ou se o card tiver a classe da categoria selecionada
                if (categoriaFiltrada === 'todos' || card.classList.contains(categoriaFiltrada)) {
                    card.classList.remove('esconder');
                    // Pequeno delay para a animação de fade-in funcionar ao reaparecer
                    setTimeout(() => card.classList.add('mostrar'), 10);
                } else {
                    card.classList.remove('mostrar');
                    card.classList.add('esconder');
                }
            });
        });
    });
});
