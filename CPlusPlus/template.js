var cbStates = new Map();

// Saves and loads sidebar state
window.addEventListener('load', function () {
    var cb = document.querySelectorAll('input[type=checkbox]')

    for (var i = 0; i < cb.length; i++) {
        //load
        var box = localStorage.getItem(cb[i].id)
        if (box == "true") {
            cb[i].checked = true
        }
        else {
            cb[i].checked = false
        }
        //save
        cb[i].addEventListener('click', function (e) {
            if (this.checked) {
                cbStates[this.id] = true;
            }
            else if (cbStates[this.id]) {
                delete cbStates[this.id]
            }
            cbStates.set(this.id, this.checked)
            localStorage.setItem(this.id, this.checked)
        })
    }
})