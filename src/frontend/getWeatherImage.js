export function weatherImage(weather) {

    const img = document.querySelector('img');
    
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=tqRGGU94sIlpObLiNLNBxEWAnlnG65Gv&s=${weather}`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    });
};