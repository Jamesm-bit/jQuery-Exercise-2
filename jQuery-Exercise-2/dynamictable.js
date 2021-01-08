
let i = 0
let v = 0
let divlist = null
let fNameTag = null
let lNameTag = null
let listele = null
let editbutton = null
let delbutton = null
let checkBox = null
let boxes = null
let divs = null
let boxes2 = document.getElementsByClassName("chk")

function uncheck(i) {
    if (document.getElementById("cB" + i)) {
        if (document.getElementById("checkbx").checked) {
            document.getElementById("checkbx").checked = false
        }
    }
    showcurrselec()
}

function checkall() {
    if (checkbx.checked) {
        let boxes = document.getElementsByClassName("chk")
        for (let x = 0; x < boxes.length; x++) {
            let box = boxes[x]
            box.checked = true
        }
        x = 0
    } else {
        let boxes = document.getElementsByClassName("chk")
        for (let x = 0; x < boxes.length; x++) {
            let box = boxes[x]
            box.checked = false
        }
        x = 0
    }
    document.getElementById("totalselec").innerHTML = showcurrselec()

}

function showcurrselec() {
    let yt = 0
    for (p = 0; p < boxes2.length; p++) {
        if (boxes2[p].checked == true) {
            yt++
        }
    }
    document.getElementById("totalselec").innerHTML = `Total ${yt} Rows`
}

function addelement(f, l) {
    i++

    let fnames = document.getElementsByClassName("innamef")
    let lnames = document.getElementsByClassName("innamel")

    if (fnames.length > 0) {
        for (let z = 0; z < fnames.length; z++) {
            if (f == fnames[z].innerHTML) {
                for (let y = 0; y < fnames.length; y++) {
                    if (l == lnames[y].innerHTML) {
                        return
                    }
                }
            }
        }
    }
    divlist2 = document.createElement("div")
    divlist2.setAttribute("id", "div21" + i)
    divlist2.setAttribute("class", "divhold")

    divlist = document.createElement("div")
    divlist.setAttribute("id", "div" + i)
    divlist.setAttribute("class", "div")

    checkBox = document.createElement('input')
    checkBox.setAttribute("class", "chk")
    checkBox.setAttribute("id", "cB" + i)
    checkBox.type = "checkbox"

    fNameTag = document.createElement("p")
    fNameTag.setAttribute("id", "fName" + i)
    fNameTag.setAttribute("class", "innamef")
    fNameTag.innerHTML = f

    lNameTag = document.createElement("p")
    lNameTag.setAttribute("id", "lName" + i)
    lNameTag.setAttribute("class", "innamel")
    lNameTag.innerHTML = l

    listele = document.getElementById("list")

    editbutton = document.createElement("button")
    editbutton.setAttribute("class", "fNameButton")
    editbutton.textContent = "Edit";
    editbutton.id = ("edit" + i)

    delbutton = document.createElement("button")
    delbutton.setAttribute("class", "lNameButton")
    delbutton.textContent = "Delete";
    delbutton.id = ("del" + i)

    document.getElementById("fname").value = ""
    document.getElementById("lname").value = ""

    divlist2.appendChild(checkBox)
    divlist.appendChild(fNameTag)
    divlist.appendChild(lNameTag)
    divlist.appendChild(editbutton)
    divlist.appendChild(delbutton)
    divlist2.appendChild(divlist)
    $(divlist2).hide().appendTo('#list').fadeIn(1000)

    document.getElementById("cB" + i).addEventListener("click", uncheck.bind(null, i))
    document.getElementById("edit" + i).addEventListener("click", editpush.bind(null, i))
    document.getElementById("del" + i).addEventListener("click", del.bind(null, i))
}

function editFinish() {
    let fNameChange = document.getElementById("fname").value
    let lNameChange = document.getElementById("lname").value

    let previousFName = document.getElementById("fName" + v)
    previousFName.innerHTML = fNameChange

    let previousLName = document.getElementById("lName" + v)
    previousLName.innerHTML = lNameChange
    document.getElementById("edit" + v).style.visibility = "visible"
    document.getElementById("del" + v).style.visibility = "visible"
    document.getElementById("confirmEdit").style.visibility = "hidden"
    document.getElementById("Add").style.visibility = "visible"
    document.getElementById("fname").value = ""
    document.getElementById("lname").value = ""
    document.getElementById("checkdel").style.visibility = "visible"
    document.getElementById("checkbx").style.visibility = "visible"
    boxes = document.getElementsByClassName("chk")
    for (let x = 0; x < boxes.length; x++) {
        let boxinv = boxes[x]
        boxinv.style.visibility = "visible"
    }
}

function editpush(j) {

    let fNameChange = document.getElementById("fName" + j).innerHTML
    let lNameChange = document.getElementById("lName" + j).innerHTML

    document.getElementById("fname").value = fNameChange
    document.getElementById("lname").value = lNameChange

    let fbuttons = document.getElementsByClassName("fNameButton")
    let lbuttons = document.getElementsByClassName("lNameButton")

    for (item in fbuttons) {
        if (item != "length" && item != "item" && item != "namedItem") {
            fbuttons[item].style.visibility = "visible"
            lbuttons[item].style.visibility = "visible"
        }
    }

    v = j
    document.getElementById("checkdel").style.visibility = "hidden"
    document.getElementById("checkbx").style.visibility = "hidden"
    document.getElementById("edit" + v).style.visibility = "hidden"
    document.getElementById("del" + v).style.visibility = "hidden"
    document.getElementById("confirmEdit").style.visibility = "visible"
    document.getElementById("Add").style.visibility = "hidden"
    document.getElementById("cB" + v).style.visibility = "hidden"

}

function del(z) {
    $("#div21" + z).fadeOut(1000, function () { $("#div21" + z).remove() })
}

function add() {
    fname = document.getElementById("fname").value
    lname = document.getElementById("lname").value
    addelement(fname, lname)
}

function render() {
    for (let u = 0; u < 10; u++) {
        addelement("test", "test" + u)
    }

    if (document.getElementById("checkbx").checked == true) {
        checkall()
    }
}

function removechecked() {
    boxes = document.getElementsByClassName("chk")
    divs = document.getElementsByClassName("div")
    document.getElementById("checkbx").checked = false
    for (let x = 0; x < boxes.length; x++) {
        let box = boxes[x]
        if (box.checked) {
            $('#list').children().eq(x).fadeOut(1000, function () { $('#list').children().eq(x).remove() })
            /*
            div.parentNode.removeChild(div)
            */
        }
    }
    for (x = 0; x < boxes.length; x++) {
        let box = boxes[x]
        if (box.checked) {
            $('#list').children().eq(x).fadeOut(1000, function () { $('#list').children().eq(x).remove() })
        }
    }
}

function changeSelected() {

    $('input:checkbox').each(function () {
        if($(this).is(':checked')){
            $(this).siblings('div').children('p').css('background-color', $('#selectedColorModify').val())
            if($('#textSizeModify option:selected').text() == 'Large') {
                console.log('Large')
                $(this).siblings('div').children('p').css('font-size','large')
            } else if ($('#textSizeModify option:selected').text() == 'Medium') {
                console.log('Medium')
                $(this).siblings('div').children('p').css('font-size','medium')
            } else if ($('#textSizeModify option:selected').text() == 'Small') {
                console.log('Small')
                $(this).siblings('div').children('p').css('font-size','small')
            }
        }
    })

    /*
    boxes = document.getElementsByClassName("chk")
    for (let x = 0; x < boxes.length; x++) {
        let box = boxes[x]
        if (box.checked) {
            console.log($('#selectedColorModify').val())
                $('#innamef').css('background-color', $('#selectedColorModify').val())
            

            
            div.parentNode.removeChild(div)
            
        }
    }
    */
}

document.getElementById('modifySelected').addEventListener('click', changeSelected.bind(null))
document.getElementById("checkbx").addEventListener("click", checkall)
document.getElementById("checkdel").addEventListener("click", removechecked)
document.getElementById("render").addEventListener("click", render)
document.getElementById("confirmEdit").addEventListener("click", editFinish.bind(null, v))
document.getElementById("Add").addEventListener("click", add)