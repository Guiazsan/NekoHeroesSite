function carregarPosts() {
    let xobj = new XMLHttpRequest();
    xobj.open('GET', 'teste.json', false);
    xobj.onreadystatechange = () => {
        if (xobj.readyState === 4 && xobj.status === 200) {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}