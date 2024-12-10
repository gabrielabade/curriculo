document.addEventListener('DOMContentLoaded', () => {
    // Cria o botão do menu hambúrguer
    const headerMenu = document.querySelector('.header-menu');
    const hamburgerBtn = document.createElement('div');
    hamburgerBtn.classList.add('hamburger-menu');
    hamburgerBtn.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    // Insere o botão antes do menu
    headerMenu.parentNode.insertBefore(hamburgerBtn, headerMenu);

    // Adiciona evento de clique
    hamburgerBtn.addEventListener('click', () => {
        headerMenu.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    const menuLinks = headerMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            headerMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        });
    });
});