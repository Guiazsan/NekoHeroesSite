function carregarPosts() {
    fetch('https://api.npoint.io/decc6a0431ad58420c4d').then(function (response) {
    if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    }).then(function (json) {
        var conteudo = json;
        conteudo.posts.forEach(post => {
            var titulo = document.createElement("h2");
            titulo.innerHTML = post.titulo; 
            
            
            var subtitulo = document.createElement("table");
            subtitulo.tr = document.createElement("tr");
            subtitulo.appendChild(subtitulo.tr);

            subtitulo.tr.por = document.createElement("th");
            subtitulo.tr.por.id = "subtitulo";
            subtitulo.tr.por.innerHTML = post.criador;
            subtitulo.tr.por.style = "border-right: 2px solid grey";
            subtitulo.tr.appendChild(subtitulo.tr.por);

            subtitulo.tr.data = document.createElement("th");
            subtitulo.tr.data.id = "subtitulo";
            subtitulo.tr.data.innerHTML = post.data;
            subtitulo.tr.data.style = "border-right: 2px solid grey";
            subtitulo.tr.appendChild(subtitulo.tr.data);

            subtitulo.tr.tipo = document.createElement("th");
            subtitulo.tr.tipo.id = "subtitulo";
            subtitulo.tr.tipo.innerHTML = post.tipo;
            subtitulo.tr.appendChild(subtitulo.tr.tipo);

            conteudo = document.createElement("div");
            conteudo.innerHTML = post.conteudo
            
            var blog = document.getElementById("posts");
            blog.appendChild(titulo);
            blog.appendChild(subtitulo);
            blog.appendChild(conteudo);
        });

    }).catch(function () {
        console.log("Erro")
    });
}