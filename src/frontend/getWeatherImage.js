export async function weatherImage(weather) {
    try {
        const img = document.querySelector('img');
    
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=tqRGGU94sIlpObLiNLNBxEWAnlnG65Gv&s=${weather}`, {mode: 'cors'});

        if (!response.ok) {
            throw new Error(`HTTP error! ${response.status}`);            
        }

        const result = await response.json();
        const loadImage = result.data.images.original.url;
        img.src = loadImage;
        
    } catch(error) {
        console.log('Error fetching gif', error);
    }
    
};