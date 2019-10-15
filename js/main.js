'use strict'

var gProjects;
gProjects = createProjects();

function createProjects() {
    return [
        createProj('Mine-sweeper', 'MineSweeper', 'MineSweeper game', 'The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.', "proj/MineSweeper", ' 09/2019', 'aaaaaaa', 'Mine-Sweeper'),
        createProj('Blogin-website', 'Blogin', 'lorem ipsum lorem', 'lorem ipsum lorem ipsum lorem ipsum', "proj/blogin-site", 'aaaa', 'aaaaaaa', 'blogin-site'),
        createProj('Touchnums', 'Touch-nums', 'Touch the Numbers game', 'Touch Nums is an addicting, fun game that will test your reaction time and see how fast your fingers are.', "proj/touch-nums", 'aaaa', 'aaaaaaa', 'Touch-the-numbers'),
        createProj('GussWho', 'Guss-Who', 'lorem ipsum loremv', 'Tlorem ipsum lorem, florem ipsum lorem.', "proj/touch-nums", 'aaaa', 'aaaaaaa', 'GuessWho'),
        createProj('BookShop', 'Book-shop', 'lorem ipsum loremv', 'Tlorem ipsum lorem, florem ipsum lorem.', "proj/touch-nums", 'aaaa', 'aaaaaaa', 'Book-shop'),
        createProj('CollectThoseBalls', 'Collect-those-Balls', 'lorem ipsum loremv', 'Tlorem ipsum lorem, florem ipsum lorem.', "proj/touch-nums", 'aaaa', 'aaaaaaa', 'Ball-board'),
    ];
}

function projects() {
    return gProjects;
}

function createProj(id, name, title, desc, url, publishedAt, labels, githube) {
    return {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: publishedAt,
        labels: labels,
        githube: githube,
    }
}


function findProj(indexId) {
    return gProjects.find(function(proj) {
        return proj.id === indexId;
    })
}