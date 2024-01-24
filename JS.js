function headerGrass(userName){
    var header = `<h1>${userName}'s state</h1>`;
    return header;
}

function grassImgTag(userName){
    var imgTag = `<img src="https://ghchart.rshah.org/${userName}" alt="${userName}'s chart"></img>`;
    return imgTag;
}

function grassDisplay(userName){
    var display = headerGrass(userName) + '<br>' + grassImgTag(userName);
    return display
}

function grassBoard(config){
    // 깡통 div를 만들고 그 안에 text를 넣어보자
    for(var i = 0; i < config.member.length; ++i){
        var div = document.createElement("div");
        div.setAttribute("class","grassDisplay");
        div.innerHTML = grassDisplay(config.member[i].githubUserName);

        document.body.appendChild(div)
    }
}

grassBoard(config)
