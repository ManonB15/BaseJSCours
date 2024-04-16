var data = {
    musique: [],
    video: [],
    podcast: [],
}

var min = 1451
var max = 54596



for (var i = 0; i < 500; i++){
    let randomString = (Math.random() + 1).toString(36).substring(5);
    //let randomString = (Math.random() + 1).toString(36).substr(2,8);//  //version alternative//
    let randomString2 = (Math.random() + 1).toString(36).substring(5);
    let randomString3 = (Math.random() + 1).toString(36).substring(5);
    let randomString4 = (Math.random() + 1).toString(36).substring(5);
    var langage= "FR"
    if ( i%2!==0 )
    {
        langage = "EN"
    }
    data.musique.push
        (
            {
            titre: randomString,
            artiste: randomString2,
            studio: randomString3,
            language: langage,
            time: Math.round(Math.random() * (max - min) + min),
            dateRelease: 1941+i,
            album:randomString4,
            }
        )

}
for (var i = 0; i < data.musique.length;i++){
var musique = data.musique[i]
console.log(`Titre : ${musique.titre} /Artiste : ${musique.artiste} /Studio :${musique.studio} /Langage :${musique.language} /Time :${musique.time} /Date :${musique.dateRelease} /Album :${musique.album}`)
}