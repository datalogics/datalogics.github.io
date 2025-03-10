
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
var verDict = ['APDFL18.0.5PlusP1h', 'APDFL18.0.5PlusP1g', 'APDFL18.0.5PlusP1f', 'APDFL18.0.5PlusP1e']
    selct = document.getElementById("verDrop")
    selct.textContent = ''
    selct.appendChild(new Option("-"))
    for (var ver = 0; ver < verDict.length; ver ++) {
        selct.appendChild(new Option(verDict[ver]))
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
    