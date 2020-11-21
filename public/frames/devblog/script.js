function carregarPosts() {
    var arquivo = new XMLHttpRequest();
    arquivo.open("GET", "file:///C:/Users/Admin/Meus Projetos/NekoHeroesSite/public/frames/devblog/teste.json", false);
    arquivo.onreadystatechange = function () {
        if(arquivo.readyState === 4)
        {
            if(arquivo.status === 200 || arquivo.status == 0)
            {
                var posts = JSON.parse(arquivo.responseText);
                alert(posts);
            }
        }
    };    
}