
let i = 0;
let v = 0;
let fNameTag = null;
let lNameTag = null;
let checkBox = null;
let checkBoxes = document.getElementsByClassName("chk");



const unCheck = (i) => {

    if ($("#cB" + i) && $("#checkbx").is(':checked')) {
        $("#checkbx").prop('checked', false);
    }
    showCurrSelec();
    $('#selectedColorModify').css('visibility', 'visible');
    $('#textSizeModify').css('visibility', 'visible');
    $('#modifySelected').css('visibility', 'visible');
}
const checkAll = () => {
    checkBoxes = document.getElementsByClassName("chk");
    for (let item in checkBoxes) {
        checkBoxes[item].checked = $('#checkbx').is(':checked') ? true : false;
    }
    showCurrSelec();
}

const showCurrSelec = () => {
    let yt = 0;
    for (let item in checkBoxes) {
        if (checkBoxes[item].checked == true && typeof (checkBoxes[item]) == 'object') {
            yt++;
        }
    }
    $("#totalselec").html(`Total ${yt} Selected Rows`);
}
const addElement = (f, l, c, s) => {
    i++;
    const fNames = $(".innamef");
    const lNames = $(".innamel");
    if (fNames.length > 0) {
        for (let z = 0; z < fNames.length; z++) {
            if (f == fNames[z].innerHTML && l == lNames[z].innerHTML) {
                alert('That username and password combination has already been taken');
                return;
            }
        }
    }
    divList2 = document.createElement("div");
    divList2.setAttribute("id", "div21" + i);
    divList2.setAttribute("class", "divhold");

    divList = document.createElement("div");
    divList.setAttribute("id", "div" + i);
    divList.setAttribute("class", "div");

    checkBox = document.createElement('input');
    checkBox.setAttribute("class", "chk");
    checkBox.setAttribute("id", "cB" + i);
    checkBox.type = "checkbox"

    fNameTag = document.createElement("p");
    fNameTag.setAttribute("id", "fName" + i);
    fNameTag.setAttribute("class", "innamef");
    fNameTag.innerHTML = f;

    lNameTag = document.createElement("p");
    lNameTag.setAttribute("id", "lName" + i);
    lNameTag.setAttribute("class", "innamel");
    lNameTag.innerHTML = l;

    listEle = document.getElementById("list");

    editButton = document.createElement("button");
    editButton.setAttribute("class", "fNameButton");
    editButton.textContent = "Edit";
    editButton.id = ("edit" + i);

    delButton = document.createElement("button");
    delButton.setAttribute("class", "lNameButton");
    delButton.textContent = "Delete";
    delButton.id = ("del" + i);

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";

    divList2.appendChild(checkBox);
    divList.appendChild(fNameTag);
    divList.appendChild(lNameTag);
    divList.appendChild(editButton);
    divList.appendChild(delButton);
    divList2.appendChild(divList);
    fNameTag.style.backgroundColor = c;
    lNameTag.style.backgroundColor = c;

    fNameTag.style.fontSize = s;
    lNameTag.style.fontSize = s;

    $(divList2).hide().appendTo('#list').fadeIn(1000);

    document.getElementById("cB" + i).addEventListener("click", unCheck.bind(null, i));
    document.getElementById("edit" + i).addEventListener("click", editPush.bind(null, i));
    document.getElementById("del" + i).addEventListener("click", del.bind(null, i));
}
const editFinish = () => {
    $("#fName" + v).html($("#fname").val());
    $("#lName" + v).html($("#lname").val());
    $("#edit" + v).css("visibility", "visible");
    $("#del" + v).css("visibility", "visible");
    $("#confirmEdit").css("visibility", "hidden");
    $("#Add").css("visibility", "visible");
    $("#fname").val('');
    $("#lname").val('');
    $("#checkdel").css("visibility", "visible");
    $("#checkbx").css("visibility", "visible");
    $('#selectedColor').css('visibility', 'visible');
    $('#textSize').css('visibility', 'visible');
    checkBoxes = $(".chk");
    for (let item in checkBoxes) {
        if (item < 10) {
            checkBoxes[item].style.visibility = "visible";
        }
    }
}
const editPush = (j) => {
    v = j;
    $("#fname").val($("#fName" + v).html());
    $("#lname").val($("#lName" + v).html());
    let fButtons = $(".fNameButton");
    let lButtons = $(".lNameButton");
    for (item in fButtons) {
        /* turn into one and condition */
        if (item != "length" && item != "item" && item != "namedItem" && item < 10) {
            fButtons[item].style.visibility = "visible";
            lButtons[item].style.visibility = "visible";
        }
    }
    $("#checkdel").css('visibility', 'hidden');
    $("#checkbx").css('visibility', 'hidden');
    $("#edit" + v).css('visibility', 'hidden');
    $("#del" + v).css('visibility', 'hidden');
    $('#selectedColor').css('visibility', 'hidden');
    $('#textSize').css('visibility', 'hidden');
    $("#confirmEdit").css("visibility", "visible");
    $("#Add").css('visibility', 'hidden');
    $("#cB" + v).css('visibility', 'hidden');
}
const del = (z) => {
    $("#div21" + z).fadeOut(1000, function () { $("#div21" + z).remove(); showCurrSelec() });
}
const add = () => {
    fName = $("#fname").val();
    lName = $("#lname").val();
    selectColor = $('#selectedColor').val().toString();
    selectSize = $('#textSize option:selected').text();
    if (!(/^#[0-9A-F]{6}$/i.test(selectColor)) || fName.length == 0 || lName.length == 0) {
        alert('please enter valid data');
    } else {
        addElement(fName, lName, selectColor, selectSize);
        $('#selectedColor').val('');
        if ($("#checkbx").is(':checked')) {
            checkAll();
        }
    }
}
const renderTestData = () => {
    const uColors = ['#ff0000', '#3366ff', '#66ff33', '#ff0066', '#cc3300', '#3366ff', '#cc3399', '#00ff99', '#99cc00', '#33cccc'];
    const uSize = ['Large', 'Small', 'Medium', 'Large', 'Medium', 'Small', 'Medium', 'Large', 'Small', 'Medium'];
    for (item in uColors) {
        addElement("test", "test" + item, uColors[item], uSize[item]);
    }

    if ($("#checkbx").is(':checked')) {
        checkAll();
    }
}
const removeChecked = () => {
    checkBoxes = document.getElementsByClassName("chk");
    document.getElementById("checkbx").checked = false;

    for (let curr of checkBoxes) {
        if (curr.checked) {
            $('#' + curr.id).parent().fadeOut(1000, function () { $('#' + curr.id).parent().remove(); showCurrSelec() });

        }
    }
}
const changeSelected = () => {
    const selectedColorModify = $('#selectedColorModify');
    if (!(/^#[0-9A-F]{6}$/i.test(selectedColorModify.val().toString()))) {
        alert('please enter a valid Hex color');
        return;
    }
    $('input:checkbox').each(function () {
        if ($(this).is(':checked')) {
            $(this).siblings('div').children('p').css('background-color', selectedColorModify.val());
            $(this).siblings('div').children('p').css('font-size', $('#textSizeModify option:selected').text());
        }
        selectedColorModify.css('visibility', 'hidden');
        $('#textSizeModify').css('visibility', 'hidden');
        $('#modifySelected').css('visibility', 'hidden');
    })
    boxes = $(".chk")
    for (let curr of boxes) {
        if (curr.checked) {
            curr.checked = false;

        }

    }
    $('#selectedColorModify').val('');
    showCurrSelec();
}