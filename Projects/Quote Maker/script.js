const quoteContainer= document.getElementById("container")
const quoteText= document.getElementById("quote")
const authorText= document.getElementById("author")
const newQuoteBtn= document.getElementById("btn")
const loader= document.getElementById("loader")

let apiQuotes=[]

const showLoadingSpinner=()=>{
    loader.hidden= false;
    quoteContainer.hidden=true;
}
const hideLoadingSpinner=()=>{
    quoteContainer.hidden=false;
    loader.hidden=true;
}

const getQuotes= async () => {
    
    const apiUrl= "https://type.fit/api/quotes"
    try{
        const response= await fetch(apiUrl)
        apiQuotes= await response.json()
        console.log(apiQuotes)

        newQuote();
    }catch(error){
        console.log(error);
    }
}
getQuotes();
const newQuote=()=>{
    showLoadingSpinner();

    setTimeout(function(){
        const randomIndex= Math.floor(Math.random()*apiQuotes.length)

        const quote= apiQuotes[randomIndex]

        if(!quote.author){
            authorText.textContent="Unknown"
        }
        else{
            authorText.textContent=quote.author
        }
        if(quote.text.length>100){
            quoteText.classList.add("long-quote")
        }
        else{
            quoteText.classList.remove("long-quote")
        }

        quoteText.textContent=quote.text;
        removeLoadingSpinner()
    },200)
}
newQuoteBtn.addEventListener("click", newQuote)