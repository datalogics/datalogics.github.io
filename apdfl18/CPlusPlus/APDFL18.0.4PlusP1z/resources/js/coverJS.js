 
const searchInput = document.getElementById("search-data")
const searchIndex = document.getElementById("search-index").getElementsByTagName("a")
const tocSearch = localStorage.getItem("searchInput")

const descriptions = document.getElementById("search-index").getElementsByClassName("menudesc")

currVer = window.location.pathname.split("/").slice(-2)[0]
document.getElementById("ver").src +=  "?=" + currVer 

const searchTerms = new Map()
var name = ""
var link = ""
var desc = ""
for(var i in searchIndex) {
    try{
        name = searchIndex[i].textContent + "#" + i
        link = searchIndex[i]

        if( descriptions[i].textContent == "None") {
            descriptions[i].textContent = ""
        }
        desc = descriptions[i]
        descriptions[i].parentElement.style.display = "none"
        searchTerms.set(name, [link, desc])
    }
    catch{
    }
}

searchInput.addEventListener("input", e=>{
    const searchStr = e.target.value.toLowerCase()
    //console.log(searchStr)
    if(searchStr.length >= 0) {
        searchTerms.forEach(term =>{
            if(searchStr.length != 0) {
                var c = term[0].textContent
                if(!c.toLowerCase().includes(searchStr)) {
                    term[1].parentElement.style.display = "none"
                }
                else {
                    term[1].parentElement.style.display = "table-row"
                }
            }
            else{
                term[1].parentElement.style.display = "none"
            }
        })

        /*const hideTitle = document.getElementByClassName("title")
        hideTitle.every(child =>{
            if(child.hidden = false){
                hideTitle.style.display = "table-row"
                return true
            }
            hideTitle.style.display = "none"
            return true
        })
        */
    }
})

var event = new Event("input")

searchInput.value = tocSearch

searchInput.dispatchEvent(new Event('input', { 'bubbles' : true}))
