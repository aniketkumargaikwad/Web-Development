const APIkey = "dQlG1r5oYvJo1YXfbP3gXs4YxkX1A6pV4BzPlIAODro"

let photosArray=[]
let totalImages=0;
let imagesLoaded=0;
let ready= false;
const imageContainer= document.getElementById("image-container")
const loader= document.getElementById("loader")

function customSetAttributes(element, attributes){
    for(const key in attributes){
        element.setAtributes(key,attributes[key])
    }
}

function imageLoaded(){
    imagesLoaded++;
    if(imagesLoaded==totalImages){
        ready= true;
        loader.hidden= true;
    }

}

function displayPhotos(){
    imagesLoaded= 0;
    totalImages= photosArray.length;

    photosArray.forEach((photo)=>{
        const item= document.createElement("a");
        const img= document.createElement("img")

        customSetAttributes(item,{
            href:photo.links.html,
            target:"_blank"
        })
        customSetAttributes(img,{
            src: photo.urls.small,
            alt: photo.alt_description,
            title: photo.alt_description
        })
        img.addEventListner("load",imageLoaded)
        item.appendChild(img)
        imageContainer.appendChild(item);
    })

}

async function getPhotos(){
    const query="puppy"
    const count= 10;
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${APIkey}&count=${count}&query=${query}&orientation=squarish;`

    try{
        const response= await fetch(apiUrl)
        photosArray= await response.json();
        console.log(photosArray)
    }catch(error){
        console.log(error);
    }
}
getPhotos()