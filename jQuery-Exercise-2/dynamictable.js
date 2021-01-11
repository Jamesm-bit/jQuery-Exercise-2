
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
    $('#selectedColorModify').css('visibility', 'visible')
    $('#textSizeModify').css('visibility', 'visible')
    $('#modifySelected').css('visibility', 'visible')
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
    showcurrselec()

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

function addelement(f, l, c, s) {
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
    fNameTag.style.backgroundColor = c
    lNameTag.style.backgroundColor = c

    if (s == 'Large') {
        fNameTag.style.fontSize = 'Large'
        lNameTag.style.fontSize = 'Large'
    } else if (s == 'Medium') {
        fNameTag.style.fontSize = 'Medium'
        lNameTag.style.fontSize = 'Medium'
    } else if (s == 'Small') {
        fNameTag.style.fontSize = 'Small'
        lNameTag.style.fontSize = 'Small'
    }
    
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
    console.log(/^#[0-9A-F]{6}$/i.test($('#selectedColor').val().toString()))
    if(fname.length == 0 || lname.length == 0 || document.getElementById("selectedColor").value.length == 0 ) {
        alert('Please fill out all feilds')
        return;
    }
    if(!(/^#[0-9A-F]{6}$/i.test($('#selectedColor').val().toString()))) {
        alert('please enter a valid Hex color')
        return
    }
    addelement(fname, lname, $('#selectedColor').val().toString(),$('#textSize option:selected').text())
}

function render() {
    let ucolors = ['#ff0000','#3366ff','#66ff33','#ff0066','#cc3300','#3366ff','#cc3399','#00ff99','#99cc00','#33cccc']
    let usize = ['Large','Small','Medium','Large','Medium','Small','Medium','Large','Small','Medium']
    for (let u = 0; u < 10; u++) {
        addelement("test", "test" + u,ucolors[u],usize[u])
    }

    if (document.getElementById("checkbx").checked == true) {
        checkall()
    }
}

function removechecked() {
    boxes = document.getElementsByClassName("chk")
    divs = document.getElementsByClassName("div")
    document.getElementById("checkbx").checked = false
    
    for(let curr of boxes) {
        if(curr.checked){
            $('#'+curr.id).parent().fadeOut(1000, function() {$('#'+curr.id).parent().remove()})
            
        }
    }
    showcurrselec()
}

function changeSelected() {
    if(!(/^#[0-9A-F]{6}$/i.test($('#selectedColor').val().toString()))) {
        alert('please enter a valid Hex color')
        return
    }
    $('input:checkbox').each(function () {
        
        if ($(this).is(':checked')) {
            $(this).siblings('div').children('p').css('background-color', $('#selectedColorModify').val())
            if ($('#textSizeModify option:selected').text() == 'Large') {
                console.log('Large')
                $(this).siblings('div').children('p').css('font-size', 'large')
            } else if ($('#textSizeModify option:selected').text() == 'Medium') {
                console.log('Medium')
                $(this).siblings('div').children('p').css('font-size', 'medium')
            } else if ($('#textSizeModify option:selected').text() == 'Small') {
                console.log('Small')
                $(this).siblings('div').children('p').css('font-size', 'small')
            }
        }
        $('#selectedColorModify').css('visibility', 'hidden')
        $('#textSizeModify').css('visibility', 'hidden')
        $('#modifySelected').css('visibility', 'hidden')
        if (document.getElementById("cB" + i)) {
            if (document.getElementById("checkbx").checked) {
                document.getElementById("checkbx").checked = false
            }
        }
    })
}

document.getElementById('modifySelected').addEventListener('click', changeSelected.bind(null))
document.getElementById("checkbx").addEventListener("click", checkall)
document.getElementById("checkdel").addEventListener("click", removechecked)
document.getElementById("render").addEventListener("click", render)
document.getElementById("confirmEdit").addEventListener("click", editFinish.bind(null, v))
document.getElementById("Add").addEventListener("click", add)