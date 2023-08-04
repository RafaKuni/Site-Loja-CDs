var showSidebar = false;

function toggleSidebar(){
    var menu = document.getElementById('menu_lateral');
    var header_content =document.getElementById('header_content');
    var nome = document.getElementById('name');
    var form = document.getElementById('form');
    var containerconteudo = document.getElementById('container conteudo');
    var headerbtn = document.getElementById('header_main_btn');
    var footer = document.getElementById('footer');
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        menu.style.marginLeft ='-10vw';
        menu.style.animationName ='showSidebar';
        header_content.style.filter='blur(2px)';
        header_content.style.cursor='default';
        nome.style.filter='blur(2px)';
        form.style.filter='blur(2px)';
        headerbtn.style.filter='blur(2px)';
        containerconteudo.style.filter='blur(2px)';
        footer.style.filter='blur(2px)';
        footer.style.cursor='default';
    }
    else
    {
        menu.style.animationName ='';
        menu.style.marginLeft ='-100vw';
        header_content.style.filter='blur(0px)';
        header_content.style.cursor='auto';
        nome.style.filter='blur(0px)';
        form.style.filter='blur(0px)';
        headerbtn.style.filter='blur(0px)';
        containerconteudo.style.filter='blur(0px)';
        footer.style.filter='blur(0px)';
        footer.style.cursor='auto';
        }
}

function closeSidebar()
{
    if(showSidebar)
    {
        toggleSidebar();
    }
}