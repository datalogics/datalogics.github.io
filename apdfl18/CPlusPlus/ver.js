
document.addEventListener("DOMContentLoaded", function(){getContent()});

function langSelector() {
    document.getElementById("langDrop").classList.toggle("show");
}

function verSelector() {
    document.getElementById("verDrop").classList.toggle("show");
}

function goToPage(ver) {
    lang = document.getElementById("langDrop").value
    if ((lang != "") || (lang != "-") || (ver != "") || (ver != "-")) {
        // window.top.location.href = "datalogics.github.io/" + lang + "/" + ver + "/index.html"
        window.top.location.href = "./" + ver + "/index.html"
    }
} 

function changeResult(lang) {
var verDict = []
    selct = document.getElementById("verDrop")
    selct.textContent = ''
    selct.appendChild(new Option("-"))
    for (var ver = 0; ver < verDict.length; ver ++) {
        selct.appendChild(new Option(verDict[ver]))
        //goToPage(lang, verDict[lang][ver])
    }
}

function getContent() {
    lang = document.getElementById("langDrop")
    currVer = window.location.href.split("?=")[1]
    for (const child of lang.children) {
        if (child.value == currVer) {
            lang.value = currVer
            break
        }
    }

    /*const args = Array.prototype.slice.call(arguments);
    const request = new XMLHttpRequest();
    alert("load")
    request.open('GET', "https://github.com/datalogics/datalogics.github.io", true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            var response = JSON.parse(request.responseText);
        }
    }

    request.send();
    //var response = request.responseText
    console.log(response)
    */
    console.log("Done")
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
    