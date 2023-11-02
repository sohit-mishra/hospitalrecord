// fill in javascript code here
var drname = document.querySelector("#name");
var id = document.querySelector("#docID");
var specialization = document.querySelector("#dept");
var exp = document.querySelector("#exp");
var email = document.querySelector("#email");
var mNummber = document.querySelector("#mbl");
var btn = document.querySelector("input[type='submit']");

var array = [];


btn.addEventListener("click", function (e) {
    e.preventDefault();
    var tbody = document.querySelector("tbody");
    tbody.innerText = "";

    var obj = {
        DrName: drname.value,
        Doctorid: id.value,
        Specialization: specialization.value,
        Experience: exp.value,
        EmailAddress: email.value,
        MobileNumber: mNummber.value
    }

    array.push(obj);
    array.forEach(element => {
        var tabRow = document.createElement("tr");

        var exbag = "";
        var objectdata = element;
        for (let x in objectdata) {
            var objecttd = document.createElement("td");
            objecttd.innerText = objectdata[x];
            tabRow.append(objecttd);
            exbag = objectdata['Experience'];
        }

        var roletd = document.createElement("td");
        if (Number(exbag > 5)) {
            roletd.innerText = "Senior";
        } else if (Number(exbag) > 2 && Number(exbag) < 5) {
            roletd.innerText = "Junior";
        } else {
            roletd.innerText = "Trainee";
        }
        tabRow.append(roletd);

        var btntd = document.createElement("td");
        var btn = document.createElement("Button");
        btn.innerText = "Delete";
        btntd.append(btn);

        btn.addEventListener("click", function () {
            var index = array.indexOf(element);
            if (index !== -1) {
                array.splice(index, 1);
            }
            tabRow.remove();
        })

        tabRow.append(btntd);
        var tbody = document.querySelector("tbody");
        tbody.append(tabRow);

    });
 

});
