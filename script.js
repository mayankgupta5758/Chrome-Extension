const date = new Date();
let h = date.toString();
// console.log(h);

// console.log(h.slice(0,6));

let api = "https://quotes-api-self.vercel.app/quote";

async function fet() {
    try {
        let re = await fetch(api);

        if (!re.ok) {
            throw new Error(`HTTP error! Status: ${re.status}`);
        }

        let jso = await re.json();
        console.log(`"${jso.quote}" - ${jso.author}`);

        let pauthor = document.querySelector(".card-description").innerText = jso.author
        let pdesc = document.querySelector(".card-title").innerText = jso.quote
        
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fet();

