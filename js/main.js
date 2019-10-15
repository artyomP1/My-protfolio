'use strict'

var gProjects;
var indexId = 101;
// const IMAGES_kEY = 'IMAGES';
gProjects = createProjects();

function createProjects() {
    // var imagesBlog = loadImages();
    // if (!imagesBlog || imagesBlog.length === 0) {
    return [
        createProj('Mine-sweeper', 'MineSweeper', 'MineSweeper game', 'The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.', "proj/MineSweeper", ' 09/2019', 'aaaaaaa'),
        createProj('Blogin-website', 'Blogin', 'lorem ipsum lorem', 'lorem ipsum lorem ipsum lorem ipsum', "proj/blogin-site", 'aaaa', 'aaaaaaa'),
        createProj('Touchnums', 'Touch-nums', 'Touch the Numbers game', 'Touch Nums is an addicting, fun game that will test your reaction time and see how fast your fingers are.', "proj/touch-nums", 'aaaa', 'aaaaaaa'),
    ];
    // }
    // return imagesBlog;
}
console.log(gProjects);

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



// function addImg(elImg) {
//     var newImgUrl = createImage(elImg.value, 'fff');
//     gImages.push(newImgUrl);
//     renderBlogin();
// }

// // function saveImgToStorage() {
//     saveToStorage(IMAGES_kEY, gImages)
// }

// function loadImages() {
//     return loadFromStorage(IMAGES_kEY);
// }