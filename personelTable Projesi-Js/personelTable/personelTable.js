let maxNo = 0;
const userArray = [];
generateUserId();

function generateUserId() {
    const generateUserId = generateRandomID();
    document.getElementById("generateduser-id").innerText = generateUserId;

}

function generateRandomID() {
    // Generate a random number between 1000000 and 99999999
    return Math.floor(Math.random() * 9000000) + 1000000;
}

function addUser() {
    maxNo = maxNo + 1;

    var generatedId = document.getElementById("generateduser-id").innerText;
    console.log("generatedId :", generatedId);
    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value;

    var surnameInput = document.getElementById("surname");
    var surnameValue = surnameInput.value;

    var tcInput = document.getElementById("tc");
    var tcValue = tcInput.value;

    var telInput = document.getElementById("tel");
    var telValue = telInput.value;

    if (nameValue === "") {
        alert("Lütfen ad alanını doldurun.");
        return;
    }

    if (surnameValue === "") {
        alert("Lütfen soyad alanını doldurun.");
        return;
    }

    if (tcValue === "") {
        alert("Lütfen TC kimlik numarası alanını doldurun.");
        return;
    }

    if (tcValue.length !== 11 || isNaN(tcValue)) {
        alert("TC kimlik numarası 11 haneli ve sadece rakamlardan oluşmalıdır.");
        return;
    }

    var table = document.getElementById("personelTable");
    var row = table.insertRow(-1);
    var cellNo = row.insertCell(0);
    var cellId = row.insertCell(1);
    var cellName = row.insertCell(2);
    var cellSurname = row.insertCell(3);
    var cellTc = row.insertCell(4);
    var cellTel = row.insertCell(5);
    var actionCell = row.insertCell(6);

    cellNo.innerHTML = maxNo;
    cellId.innerHTML = generatedId;
    cellName.innerHTML = nameValue;
    cellSurname.innerHTML = surnameValue;
    cellTc.innerHTML = tcValue;
    cellTel.innerHTML = telValue;



    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("tc").value = "";
    document.getElementById("tel").value = "";

    generateUserId();

    userArray.push({
        no: maxNo,
        id: generatedId,
        name: nameValue,
        surname: surnameValue,
        tc: tcValue,
        tel: telValue
    });

    console.log(userArray);
    //edit

    var editBtn = document.createElement("span");
    editBtn.id = maxNo;
    editBtn.innerHTML = " <i></i> ";
    editBtn.className = "edit-btn fa-regular fa-pen-to-square";

    editBtn.onclick = function editUser(edit) {
        console.log("edit :", edit);
        let edt = userArray.find(usredit => usredit.no === Number(edit.target.id));


        var cellId = edt.id;
        var cellName = edt.name;
        var cellSurname = edt.surname;
        var cellTc = edt.tc;
        var cellTel = edt.tel;

        document.getElementById("edit-id").innerText = cellId;
        document.getElementById("edit-name").value = cellName;
        document.getElementById("edit-surname").value = cellSurname;
        document.getElementById("edit-tc").value = cellTc;
        document.getElementById("edit-tel").value = cellTel;
    }

    //sil
    var delBtn = document.createElement("span");
    delBtn.id = maxNo;
    delBtn.innerHTML = "<i></i>";
    delBtn.className = "del-btn fa-regular fa-trash-can";
    delBtn.onclick = function (del) {
        deleteRow(row);

        console.log("del:", del);


    };
    actionCell.appendChild(editBtn);
    actionCell.appendChild(delBtn);
}

function deleteRow(row) {
    var table = document.getElementById("personelTable");
    table.deleteRow(row.rowIndex);
    var rowCount = table.rows.length;
    let dlt = userArray.findIndex(usredit => usredit.no === rowCount - 1)
    console.log(rowCount);
    const index = userArray.indexOf(dlt);
    userArray.splice(index, 1);

    console.log("userArray", userArray);
}

function updateEditUser() {
    // var editId = document.getElementById("edit-id").innerText;
    var editName = document.getElementById("edit-name").value;
    var editSurname = document.getElementById("edit-surname").value;
    var editTc = document.getElementById("edit-tc").value;
    var editTel = document.getElementById("edit-tel").value;


    var table = document.getElementById("personelTable");
    var UserRow = Array.from(table.rows).find(el => el.children[1].innerText === editId);

    // var userIndex = userArray.findIndex(user => user.id === Number(editId));

    // Kullanıcıyı görüntüleme alanında günceller
    if (UserRow) {
        UserRow.children[2].innerText = editName;
        UserRow.children[3].innerText = editSurname;
        UserRow.children[4].innerText = editTc;
        UserRow.children[5].innerText = editTel;
    }

    // if (userIndex !== -1) {
    //     userArray[userIndex].name = editName;
    //     userArray[userIndex].surname = editSurname;
    //     userArray[userIndex].tc = editTc;
    //     userArray[userIndex].tel = editTel;  
    // }

    document.getElementById("edit-id").innerText = "";
    document.getElementById("edit-name").value = "";
    document.getElementById("edit-surname").value = "";
    document.getElementById("edit-tc").value = "";
    document.getElementById("edit-tel").value = "";

}

function deleteAllTasks() {
    var table = document.getElementById("personelTable");
    var rowCount = table.rows.length;
    for(var i= rowCount - 1; i>0; i--) {
        table.deleteRow(i);
    }

    userArray.splice(0, userArray.length);
}

function deleteUser() {
    var idToDelete = document.getElementById("no-id-del").value;
    // var deleteIndex = userArray.findIndex(user => user.id === idToDelete);
    // Kullanıcıdan silmek istediği verinin ID'sini girmesini isteyin
    // if (idToDelete === "") {
    //     alert("Lütfen silmek istediğiniz kullanıcının ID'sini girin.");
    //     return;
    // }

    var table = document.getElementById("personelTable");
    for (var i = 1; i < table.rows.length; i++) {
        var row = table.rows[i];
        var cell = row.children[1]; 
        console.log("cell.innerText:", cell.innerText);
        if(cell.innerText === idToDelete) {
            table.deleteRow(i);
            alert("Kullanıcı başarıyla silindi.");
            
            document.getElementById("no-id-del").value = "";
        }   
        
    }
    
    
    
}
