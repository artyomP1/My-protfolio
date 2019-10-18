'use strict'

var gProjects;
gProjects = createProjects();

function createProjects() {
    return [
        createProj('Mine-sweeper', 'MineSweeper', 'MineSweeper game', 'The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.', "https://artyomp1.github.io/Mine-Sweeper/", ' 09/2019', 'aaaaaaa'),
        createProj('Blogin-website', 'Blogin', 'lorem ipsum lorem', 'lorem ipsum lorem ipsum lorem ipsum', 'https://artyomp1.github.io/blogin-site/', 'aaaa', 'aaaaaaa'),
        createProj('Touchnums', 'Touch-nums', 'Touch the Numbers game', 'Touch Nums is an addicting, fun game that will test your reaction time and see how fast your fingers are.', "https://artyomp1.github.io/Touch-the-numbers/", 'aaaa', 'aaaaaaa'),
        createProj('GussWho', 'Guss-Who', 'lorem ipsum loremv', 'Tlorem ipsum lorem, florem ipsum lorem.', 'https://artyomp1.github.io/GuessWho/', 'aaaa', 'aaaaaaa'),
        createProj('BookShop', 'Book-shop', 'lorem ipsum loremv', 'Tlorem ipsum lorem, florem ipsum lorem.', 'https://artyomp1.github.io/Book-shop/', 'aaaa', 'aaaaaaa'),
        createProj('CollectThoseBalls', 'Collect-those-Balls', 'lorem ipsum loremv', 'Tlorem ipsum lorem, florem ipsum lorem.', 'https://artyomp1.github.io/Ball-board/', 'aaaa', 'aaaaaaa'),
    ];
}

function projects() {
    return gProjects;
}

function createProj(id, name, title, desc, url, publishedAt, labels) {
    return {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: publishedAt,
        labels: labels,
    }
}


function findProj(indexId) {
    return gProjects.find(function(proj) {
        return proj.id === indexId;
    })
}