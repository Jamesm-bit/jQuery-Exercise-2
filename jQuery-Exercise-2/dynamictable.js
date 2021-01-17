
let i = 0;
let v = 0;
let divlist = null;
let fNameTag = null;
let lNameTag = null;
let listele = null;
let editbutton = null;
let delbutton = null;
let checkBox = null;
let boxes = null;
let divs = null;
let checkBoxes = document.getElementsByClassName("chk");

function uncheck(i) {

    if ($("#cB" + i) && $("#checkbx").is(':checked')) {
        $("#checkbx").is(':checked') = false
    }
    showcurrselec()
    $('#selectedColorModify').css('visibility', 'visible')
    $('#textSizeModify').css('visibility', 'visible')
    $('#modifySelected').css('visibility', 'visible')
}

function checkall() {
    checkBoxes = document.getElementsByClassName("chk")
    if ($('#checkbx').is(':checked')) {
        for (let item in checkBoxes) {
            checkBoxes[item].checked = true
        }

    } else {
        for (let item in checkBoxes) {
            checkBoxes[item].checked = false
        }
    }
    showcurrselec()

}

function showcurrselec() {
    let yt = 0
    for (let item in checkBoxes) {
        if (checkBoxes[item].checked == true) {
            yt++
        }
    }
    $("#totalselec").html(`Total ${yt} Rows`)
}

function addelement(f, l, c, s) {
    i++

    let fnames = $(".innamef")
    let lnames = $(".innamel")

    if (fnames.length > 0) {
        for (let z = 0; z < fnames.length; z++) {
            if (f == fnames[z].innerHTML) {
                if (l == lnames[z].innerHTML) {
                    alert('That username and password combination has already been taken')
                    return;
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

    fNameTag.style.fontSize = s
    lNameTag.style.fontSize = s
    
    $(divlist2).hide().appendTo('#list').fadeIn(1000)

    document.getElementById("cB" + i).addEventListener("click", uncheck.bind(null, i))
    document.getElementById("edit" + i).addEventListener("click", editpush.bind(null, i))
    document.getElementById("del" + i).addEventListener("click", del.bind(null, i))
}

function editFinish() {
    $("#fName" + v).html($("#fname").val())
    $("#lName" + v).html($("#lname").val())
    $("#edit" + v).css("visibility", "visible")
    $("#del" + v).css("visibility", "visible")
    $("#confirmEdit").css("visibility", "hidden")
    $("#Add").css("visibility", "visible")
    $("#fname").val('')
    $("#lname").val('')
    $("#checkdel").css("visibility", "visible")
    $("#checkbx").css("visibility", "visible")
    $('#selectedColor').css('visibility', 'visible')
    $('#textSize').css('visibility', 'visible')
    boxes = document.getElementsByClassName("chk")
    for (let item in boxes) {
        if (item < 10) {
            boxes[item].style.visibility = "visible"
        }
    }
}

function editpush(j) {
    v = j
    $("#fname").val($("#fName" + v).html())
    $("#lname").val($("#lName" + v).html())
    let fbuttons = $(".fNameButton")
    let lbuttons = $(".lNameButton")

    for (item in fbuttons) {
        if (item != "length" && item != "item" && item != "namedItem") {
            if (item < 10) {
                fbuttons[item].style.visibility = "visible"
                lbuttons[item].style.visibility = "visible"
            }
        }
    }
    $("#checkdel").css('visibility', 'hidden')
    $("#checkbx").css('visibility', 'hidden')
    $("#edit" + v).css('visibility', 'hidden')
    $("#del" + v).css('visibility', 'hidden')
    $('#selectedColor').css('visibility', 'hidden')
    $('#textSize').css('visibility', 'hidden')
    $("#confirmEdit").css("visibility", "visible")
    $("#Add").css('visibility', 'hidden')
    $("#cB" + v).css('visibility', 'hidden')

}

function del(z) {
    $("#div21" + z).fadeOut(1000, function () { $("#div21" + z).remove(); showcurrselec() })



}

function add() {
    if (fname.length == 0 || lname.length == 0 || document.getElementById("selectedColor").value.length == 0) {
        return;
    }
    if (!(/^#[0-9A-F]{6}$/i.test($('#selectedColor').val().toString()))) {
        alert('please enter a valid Hex color')
        return;
    }
    addelement($("#fname").val(), $("#lname").val(), $('#selectedColor').val().toString(), $('#textSize option:selected').text())
    $('#selectedColor').val('')
    if ($("#checkbx").is(':checked')) {
        checkall()
    }
}

function render() {
    let ucolors = ['#ff0000', '#3366ff', '#66ff33', '#ff0066', '#cc3300', '#3366ff', '#cc3399', '#00ff99', '#99cc00', '#33cccc']
    let usize = ['Large', 'Small', 'Medium', 'Large', 'Medium', 'Small', 'Medium', 'Large', 'Small', 'Medium']
    for (item in ucolors) {
        addelement("test", "test" + item, ucolors[item], usize[item])
    }

    if ($("#checkbx").is(':checked')) {
        checkall()
    }
}

async function removechecked() {
    boxes = document.getElementsByClassName("chk")
    document.getElementById("checkbx").checked = false

    for (let curr of boxes) {
        if (curr.checked) {
            $('#' + curr.id).parent().fadeOut(1000, function () { $('#' + curr.id).parent().remove(); showcurrselec() })

        }
    }
}

function changeSelected() {
    if (!(/^#[0-9A-F]{6}$/i.test($('#selectedColorModify').val().toString()))) {
        alert('please enter a valid Hex color')
        return
    }
    $('input:checkbox').each(function () {
        if ($(this).is(':checked')) {
            $(this).siblings('div').children('p').css('background-color', $('#selectedColorModify').val())
            $(this).siblings('div').children('p').css('font-size', $('#textSizeModify option:selected').text())
        }
        $('#selectedColorModify').css('visibility', 'hidden')
        $('#textSizeModify').css('visibility', 'hidden')
        $('#modifySelected').css('visibility', 'hidden')
    })
    boxes = $(".chk")
    for (let curr of boxes) {
        if (curr.checked) {
            curr.checked = false

        }

    }
    $('#selectedColorModify').val('')
}

document.getElementById('modifySelected').addEventListener('click', changeSelected.bind(null))
document.getElementById("checkbx").addEventListener("click", checkall)
document.getElementById("checkdel").addEventListener("click", removechecked)
document.getElementById("render").addEventListener("click", render)
document.getElementById("confirmEdit").addEventListener("click", editFinish.bind(null, v))
document.getElementById("Add").addEventListener("click", add)