//-------------- ExportExcel ------------------------------------------------------
window.onbeforeunload = function () {
    return "Sau khi đọc được thông báo này, mọi trách nhiệm đã thuộc về bạn !!!";
}
var titlename = document.getElementById("nameCamp").value;
const date = new Date()
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
let fullDate = day + "-" + month + "-" + year;
function ExportExcel() {
    $("#table2excel").table2excel({
        name: "TênFile",
        filename: titlename + "_" + fullDate + "Winners.xlsx",
        fileext: ".xls",
    });
};
function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    const startTime = performance.now()
    function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime
        if (elapsedTime > duration) {
            callback(finalNumber)
        } else {
            const rate = elapsedTime / duration
            const currentNumber = Math.round(rate * finalNumber)
            callback(currentNumber)
            requestAnimationFrame(updateNumber)
        }
    }
    requestAnimationFrame(updateNumber)
}
function myTimer() {
    for (var i = 0; i < 10; i++) {
        const rd = Math.round(Math.random() * 9);
        document.getElementById(i).innerHTML = rd;
    }

}
function myTimer8() {

    for (var i = 0; i < 8; i++) {
        let x = "text" + i;
        const rd = Math.round(Math.random() * 9);
        document.getElementById(x).innerHTML = rd;
    }

}
function myTimer3() {
    for (var i = 0; i < 3; i++) {
        const rd = Math.round(Math.random() * 9);
        document.getElementById(i).innerHTML = rd;
    }

}
function myTimer4() {
    for (var i = 0; i < 4; i++) {
        const rd = Math.round(Math.random() * 9);
        document.getElementById(i).innerHTML = rd;
    }

}
let arrData = localStorage.getItem("DataLuckyDrawhadStop");

var startInteval;
const btnsubmit = document.getElementById("submit");

const btnstartDraw = document.getElementById("startDraw");
function startDraw3() {
    const max = document.getElementById("max");
    max.disabled = true;
    if (max.value == null || max.value == "") {
        alert("Nhập số để quay");
        location.reload()

    }
    document.getElementById("drawAudio").play();
    btnsubmit.style.display = "block";
    btnstartDraw.style.display = "none";
    document.getElementById("status").style.color = "white";
    startInteval = setInterval(myTimer3, 30);

}
function startDraw4() {
    const max = document.getElementById("max");
    max.disabled = true;
    if (max.value == null || max.value == "") {
        alert("Nhập số để quay");
        location.reload()

    }
    document.getElementById("drawAudio").play();
    btnsubmit.style.display = "block";
    btnstartDraw.style.display = "none";
    document.getElementById("status").style.color = "white";
    startInteval = setInterval(myTimer4, 30);

}
function startDraw8() {
    document.getElementById("drawAudio").play();
    btnsubmit.style.display = "block";
    btnstartDraw.style.display = "none";
    document.getElementById("status").style.color = "white";
    startInteval = setInterval(myTimer8, 30);

}
function startDraw() {
    document.getElementById("drawAudio").play();
   btnsubmit.style.display = "block";
    btnstartDraw.style.display = "none";
    document.getElementById("status").style.color = "white";
     startInteval = setInterval(myTimer, 30);

}
//------------- Run Draw -----------------------------------------------------------
const form = document.querySelector('.contact-form');
//form.addEventListener('submit', handleFormSubmit);
const arrHistoryHadStop = [];

function handleFormSubmit() {
    btnsubmit.style.cursor = "no-drop";

    clearInterval(startInteval);

    //---------------------------------------
    var table = document.getElementById("joiner");
    var header = [];
    var rows = [];

    for (var i = 0; i < table.rows[0].cells.length; i++) {
        var headerrow = table.rows[0].cells[i].innerHTML;

        var singledata = headerrow;
        headerrow = singledata.trim();
        var splitdata = headerrow;
        headerrow = splitdata.replace(/\n/g, "");
        header.push(headerrow);
    }

    for (var i = 1; i < table.rows.length; i++) {
        var row = {};
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            var singledata = row[header[j]] = table.rows[i].cells[j].innerHTML;
            row[header[j]] = singledata.trim();
            var splitdata = row[header[j]];
            row[header[j]] = splitdata.replace(/\n/g, "");

        }
        rows.push(row);
    }
    //---------------------------------------
    //
    document.getElementById("congraAudio").pause();
    //
    document.getElementById("phaohoa").style.display = "none";
   btnsubmit.disabled = true;

 
    const myInterval = setInterval(myTimer, 30);

    function myStop() {
        clearInterval(myInterval);
    }
    event.preventDefault();
     var obj = [];
    if (arrData == [] || arrData == null || arrData == "[]") {
        obj = rows;
        localStorage.removeItem("DataLuckyDrawhadStop");
        localStorage.clear();
        
    }
    else {

        obj = JSON.parse(arrData);

    }
    let x = Math.floor(Math.random() * obj.length);
    let numbTostring = obj[x].IDJOINER.toString();
    setTimeout(result, 0);
    function result() {
        for (let i = 0; i < 10; i++) {
            animateNumber(numbTostring[i], 800, 0, function (number) {
                if (i == 3 || i==4 || i==5||i==6) {
                    number ="x";

                    document.getElementById(i).innerText = number;
                }
                document.getElementById(i).innerText = number;
            })
        };
    }

    const phoneUser = obj[x].IDJOINER;
    const person = obj[x].NAME;
    person.toString();

    const nameCus = document.getElementById("nameCus").value;
    const nameCamp = document.getElementById("nameCamp").value;
    const datetime = new Date().toLocaleString().replace(",", " ");
    //---------------------------
    var IDitemprize = $("#IDDETAIL option:selected").val();
    var e = document.getElementById("IDDETAIL");
    var itemprize = e.options[e.selectedIndex].text;
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    //--------
    $("#result").append(
        "<tr>"
        + "<td> " + itemprize + "</td>"
        + "<td>" + person + "</td>"
        + "<td>" + phoneUser + "</td>"
        + "<td>" + date + "</td>"
        + "<td style=\"display:none\"> " + IDitemprize + "</td>"

        + "</tr>"
    );
    function myGreeting() {
        document.getElementById("drawAudio").pause();
        document.getElementById("phaohoa").style.display = "block";
        document.getElementById("congraAudio").play();
        document.getElementById("modal-congrate").style.display = "block";
       
        const alertWinner = "<div style=\"    display: flex; flex-direction: column; align-items: center;padding: 15px \">" 
            + "<p>" + "Chúc mừng " + "</p>"
            + "<p class=\"colorCongrate\">" + person + "</p>"
            + "<p>" + " SĐT " + " <span class=\"colorCongrate\">" + phoneUser + "</span>" + "</p>"
            + "<p>" + " Đoạt " + " <span class=\"colorCongrate\">" + itemprize + "</span>" + "</p>"
            + "</div>";
        document.getElementById("congrate").innerHTML = alertWinner;
        document.getElementById("status").style.color = "transparent";
        btnsubmit.style.cursor = "pointer";

       btnsubmit.disabled = false;
        btnstartDraw.style.display = "block";
        btnsubmit.style.display = "none";
        setTimeout(stopPhaohoa, 5000)

    }
    obj.splice(x, 1);
    localStorage.setItem("DataLuckyDrawhadStop", JSON.stringify(obj));
    const itemHistory = "<p>" + datetime + ": \"" + nameCus + "\" - " + nameCamp + " - " + person + " - " + phoneUser + " - " + itemprize + "</p>";
    arrHistoryHadStop.push(itemHistory);
    localStorage.setItem("HistoryDrawHadStop", arrHistoryHadStop)
    localStorage.setItem("DataLuckyDrawhadStop", JSON.stringify(obj));
    arrData = JSON.stringify(obj);
    setTimeout(myGreeting, 1000);
    setTimeout(myStop, 0);
    function stopPhaohoa() {
        document.getElementById("phaohoa").style.display = "none";
    }

}

function draw8() {
    btnsubmit.style.cursor = "no-drop";
    clearInterval(startInteval);

    //---------------------------------------
    var table = document.getElementById("joiner");
    var header = [];
    var rows = [];

    for (var i = 0; i < table.rows[0].cells.length; i++) {
        var headerrow = table.rows[0].cells[i].innerHTML;

        var singledata = headerrow;
        headerrow = singledata.trim();
        var splitdata = headerrow;
        headerrow = splitdata.replace(/\n/g, "");
        header.push(headerrow);
    }

    for (var i = 1; i < table.rows.length; i++) {
        var row = {};
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            var singledata = row[header[j]] = table.rows[i].cells[j].innerHTML;
            row[header[j]] = singledata.trim();
            var splitdata = row[header[j]];
            row[header[j]] = splitdata.replace(/\n/g, "");
        }
        rows.push(row);

    }
    //---------------------------------------
    //
    document.getElementById("congraAudio").pause();
    //
    document.getElementById("phaohoa").style.display = "none";
    btnsubmit.disabled = true;


    const myInterval = setInterval(myTimer8, 30);

    function myStop() {
        clearInterval(myInterval);
    }
    event.preventDefault();
    var obj = [];
    if (arrData == [] || arrData == null || arrData == "[]") {
        obj = rows;
        localStorage.removeItem("DataLuckyDrawhadStop");
        localStorage.clear();

    }
    else {

        obj = JSON.parse(arrData);

    }
    let x = Math.floor(Math.random() * obj.length);
    let numbTostring = obj[x].IDJOINER.toString();
    setTimeout(result, 0);
    function result() {

        for (let i = 0; i <= 7; i++) {

            animateNumber(numbTostring[i], 800, 0, function (number) {
                let x = "text" + i;
                document.getElementById(x).innerText = number;
                //document.getElementById(i).insertAdjacentElement("beforeend", document.getElementById("overlaybtn" + i))

            })
        };
    }

    const phoneUser = obj[x].IDJOINER;
    console.log(phoneUser)
    const person = obj[x].NAME;
    console.log(person)
    const position = obj[x].ADDRESS;
    const nameCus = document.getElementById("nameCus").value;
    const nameCamp = document.getElementById("nameCamp").value;
    const datetime = new Date().toLocaleString().replace(",", " ");
    person.toString();
    //---------------------------
    var IDitemprize = $("#IDDETAIL option:selected").val();
    var e = document.getElementById("IDDETAIL");
    var itemprize = e.options[e.selectedIndex].text;
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    //--------
    $("#result").append(
        "<tr>"
        + "<td> " + itemprize + "</td>"
        + "<td>" + person + "</td>"
        + "<td>" + phoneUser + "</td>"
        + "<td>" + date + "</td>"
        + "<td style=\"display:none\"> " + IDitemprize + "</td>"

        + "</tr>"
    );
    function myGreeting() {
        document.getElementById("drawAudio").pause();
        document.getElementById("phaohoa").style.display = "block";
        document.getElementById("congraAudio").play();
        document.getElementById("modal-congrate").style.display = "block";
        const alertWinner = "<div style=\"display:flex;justify-content: center;text-align: center;flex-direction: column;padding: 15px;\">"
            + "<p style=\"color:#32707d;margin:0\">" + "CHÚC MỪNG" + "</p>"
            + "<p style=\"color:#199ed9;margin:0\" >" + person + "</p>"
            + "<p style=\"color:#32707d;margin:0\">MSNV : " + phoneUser + " - SITE :" + position + "</p>"
            + "<p style=\"padding: 25px 86px; color: white;margin-top: 10px;background-position: center;background-image: url(/Assets/img/brush.png);background-size: cover;background-repeat: no-repeat; \">" + "ĐÃ TRÚNG GIẢI" + "</p>"
            + "<div>";



            //"<p>" + "Chúc mừng \"" + " <span class=\"colorCongrate\">" + person + "</span>\"" + "</p>"
            //+ "<p>" + " có số điện thoại \"" + " <span class=\"colorCongrate\">" + phoneUser + "</span>\"" + "</p>"
            //+ "<p>" + " đã đoạt " + " <span class=\"colorCongrate\">" + itemprize + "</span>" + " của chương trình" + "</p>";
        document.getElementById("congrate").innerHTML = alertWinner;
        document.getElementById("status").style.color = "transparent";
        btnsubmit.disabled = false;
        btnstartDraw.style.display = "block";
        btnsubmit.style.display = "none";
        setTimeout(stopPhaohoa, 5000)

    }
    obj.splice(x, 1);
    localStorage.setItem("DataLuckyDrawhadStop", JSON.stringify(obj));
    const itemHistory = "<p>" + datetime + ": \"" + nameCus + "\" - " + nameCamp + " - " + person + " - " + phoneUser + " - " + itemprize + "</p>";
    arrHistoryHadStop.push(itemHistory);
    localStorage.setItem("HistoryDrawHadStop", arrHistoryHadStop)
    localStorage.setItem("DataLuckyDrawhadStop", JSON.stringify(obj));
    arrData = JSON.stringify(obj);
    setTimeout(myGreeting, 1000);
    setTimeout(myStop, 0);
    function stopPhaohoa() {
        document.getElementById("phaohoa").style.display = "none";
    }

}
function draw8special() {
    document.getElementById("drawAudio").pause();   
    var buttons = document.querySelectorAll(".square");
    var overlays = document.querySelectorAll(".overlay");

    buttons.forEach((button, idx) => {
        const overlay = overlays[idx];

        const onClick = () => {
            overlay.style.opacity = "0";
            overlay.style.pointerEvents = "none";

            const allHidden = [...overlays].every(o => o.style.opacity === "0");

            if (allHidden) {
                myGreeting()
            }
        };

        button.addEventListener("click", onClick);
        overlay.addEventListener("click", onClick);
    });
    for (i = 0; i < 8; i++) {
        document.getElementById("overlaybtn" + i).style.opacity = "1";
    }
    document.getElementById("btnstop").style.cursor = "no-drop";
    clearInterval(startInteval);

    //---------------------------------------
    var table = document.getElementById("joiner");
    var header = [];
    var rows = [];

    for (var i = 0; i < table.rows[0].cells.length; i++) {
        var headerrow = table.rows[0].cells[i].innerHTML;

        var singledata = headerrow;
        headerrow = singledata.trim();
        var splitdata = headerrow;
        headerrow = splitdata.replace(/\n/g, "");
        header.push(headerrow);
    }

    for (var i = 1; i < table.rows.length; i++) {
        var row = {};
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            var singledata = row[header[j]] = table.rows[i].cells[j].innerHTML;
            row[header[j]] = singledata.trim();
            var splitdata = row[header[j]];
            row[header[j]] = splitdata.replace(/\n/g, "");
        }
        rows.push(row);

    }
    //---------------------------------------
    //
    document.getElementById("congraAudio").pause();
    //
    document.getElementById("phaohoa").style.display = "none";
    btnsubmit.disabled = true;


    const myInterval = setInterval(myTimer8, 30);

    function myStop() {
        clearInterval(myInterval);
    }
    event.preventDefault();
    var obj = [];
    if (arrData == [] || arrData == null || arrData == "[]") {
        obj = rows;
        localStorage.removeItem("DataLuckyDrawhadStop");
        localStorage.clear();

    }
    else {

        obj = JSON.parse(arrData);

    }
    let x = Math.floor(Math.random() * obj.length);
    let numbTostring = obj[x].IDJOINER.toString();
    setTimeout(result, 0);
    function result() {

        for (let i = 0; i <= 7; i++) {

            animateNumber(numbTostring[i], 800, 0, function (number) {
                let x = "text" + i;
                document.getElementById(x).innerText = number;
                //document.getElementById(i).insertAdjacentElement("beforeend", document.getElementById("overlaybtn" + i))

            })
        };
    }

    const phoneUser = obj[x].IDJOINER;
    console.log(phoneUser)
    const person = obj[x].NAME;
    console.log(person)
    const position = obj[x].ADDRESS;
    const nameCus = document.getElementById("nameCus").value;
    const nameCamp = document.getElementById("nameCamp").value;
    const datetime = new Date().toLocaleString().replace(",", " ");
    person.toString();
    //---------------------------
    var IDitemprize = $("#IDDETAIL option:selected").val();
    var e = document.getElementById("IDDETAIL");
    var itemprize = e.options[e.selectedIndex].text;
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    //--------
    $("#result").append(
        "<tr>"
        + "<td> " + itemprize + "</td>"
        + "<td>" + person + "</td>"
        + "<td>" + phoneUser + "</td>"
        + "<td>" + date + "</td>"
        + "<td style=\"display:none\"> " + IDitemprize + "</td>"

        + "</tr>"
    );
    function myGreeting() {
        document.getElementById("drawAudio").pause();
        document.getElementById("phaohoa").style.display = "block";
        document.getElementById("congraAudio").play();
        document.getElementById("modal-congrate").style.display = "block";

        const alertWinner = "<div style=\"display:flex;justify-content: center;text-align: center;flex-direction: column;padding: 15px;\">"
            + "<p style=\"color:#32707d;margin:0\">" + "CHÚC MỪNG" + "</p>"
            + "<p style=\"color:#199ed9;margin:0\" >" + person + "</p>"
            + "<p style=\"color:#32707d;margin:0\">MSNV : " + phoneUser + " - SITE :" + position + "</p>"
            + "<p style=\"padding: 25px 86px; color: white;margin-top: 10px;background-position: center;background-image: url(/Assets/img/brush.png);background-size: cover;background-repeat: no-repeat; \">" + "ĐÃ TRÚNG GIẢI" + "</p>"
            + "<div>";
        document.getElementById("congrate").innerHTML = alertWinner;
        document.getElementById("status").style.color = "transparent";
        btnsubmit.disabled = false;
        btnstartDraw.style.display = "block";
        btnsubmit.style.display = "none";
        document.getElementById("btnstop").style.display = "none";

        setTimeout(stopPhaohoa, 5000)

    }
    obj.splice(x, 1);
    localStorage.setItem("DataLuckyDrawhadStop", JSON.stringify(obj));
    const itemHistory = "<p>" + datetime + ": \"" + nameCus + "\" - " + nameCamp + " - " + person + " - " + phoneUser + " - " + itemprize + "</p>";
    arrHistoryHadStop.push(itemHistory);
    localStorage.setItem("HistoryDrawHadStop", arrHistoryHadStop)
    localStorage.setItem("DataLuckyDrawhadStop", JSON.stringify(obj));
    arrData = JSON.stringify(obj);
    //setTimeout(myGreeting, 1000);
    setTimeout(myStop, 0);
    function stopPhaohoa() {
        document.getElementById("phaohoa").style.display = "none";
    }

}
//-------------------- Draw 3 ô Nesle----------------------------------------------------------//
//thiết lập danh sách
var temp = [];
var arrayUsed = [];

function drawNestle() {
    btnsubmit.style.cursor = "no-drop";

    const max = document.getElementById("max");
    if (max.value == null || max.value == "") {
        alert("Nhập số để quay");
        location.reload;
    }
    if (temp.length == 0) {

        for (var i = 1; i <= max.value; i++) {
            temp.push(i)
        }
    }
    else {
        var temp1 = []
        for (var i = 1; i <= max.value; i++) {
            temp1.push(i)
        }
        for (let j = 0; j <= arrayUsed.length; j++) {
            temp1 = temp1.filter(item => item !== arrayUsed[j])
        }
        temp = [];
        for (let i = 0; i < temp1.length; i++) {
            temp.push(temp1[i]);
        }
    }
  
    clearInterval(startInteval);
    document.getElementById("congraAudio").pause();
  
    //
    document.getElementById("phaohoa").style.display = "none";
    btnsubmit.disabled = true;
    const myInterval = setInterval(myTimer3, 30);
    function myStop() {
        clearInterval(myInterval);
    }

    event.preventDefault();
    document.getElementById("submit").style.alignContent = "center";
    //document.getElementById("submit").textContent = "Quay";
    document.getElementById("status").style.color = "white";

  

    let x = Math.floor(Math.random() * temp.length);
    arrayUsed.push(temp[x])

    var numbTostring = temp[x].toString();
    if (numbTostring.length == 2) {
        const endhandle = "0" + numbTostring;
         numbTostring = endhandle;

    }
    if (numbTostring.length == 1) {
        const endhandle = "00" + numbTostring;
        numbTostring = endhandle;

    }
    setTimeout(result, 0);
    function result() {
        for (let i = 0; i < 3; i++) {
            animateNumber(numbTostring[i], 400, 0, function (number) {
                document.getElementById(i).innerText = number;
            })
        };

    }
    
    const numb = numbTostring;
    const nameCus = document.getElementById("nameCus").value;
    const nameCamp = document.getElementById("nameCamp").value;
    const datetime = new Date().toLocaleString().replace(",", " ");
    
    //------------Thêm vào thông báo
    var IDitemprize = $("#IDDETAIL option:selected").val();
    var e = document.getElementById("IDDETAIL");
    var itemprize = e.options[e.selectedIndex].text;
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    //---------------------------
    
    $("#result").append(
        "<tr>"
        + "<td> " + itemprize + "</td>"
        + "<td> " + numb + "</td>"
        + "<td>" + date + "</td>"
        + "<td style=\"display:none\"> " + IDitemprize + "</td>"
        + "</tr>"
    );
    //------------------Thêm vào thông báo
    function myGreeting() {
        document.getElementById("drawAudio").pause();
        document.getElementById("phaohoa").style.display = "block";
        document.getElementById("congraAudio").play();
        document.getElementById("status").style.color = "transparent";
        btnsubmit.disabled = false;
        max.disabled = false;
        btnsubmit.style.cursor = "pointer";

        btnstartDraw.style.display = "block";
        btnsubmit.style.display = "none";
        setTimeout(stopPhaohoa, 4000)
    }
 

    temp.splice(x, 1);
    localStorage.setItem("DataLuckyDrawhadStop", JSON.stringify(temp));

    const itemHistory = "<p>" + datetime + ": \"" + nameCus + "\" - " + "\"" + nameCamp + "\"" + " - " + numb + " - " + itemprize + "</p>";
    arrHistoryHadStop.push(itemHistory);
    localStorage.setItem("HistoryDrawHadStop", arrHistoryHadStop)
    setTimeout(myGreeting, 600);
    //setTimeout(myStop, 0);
    clearInterval(myInterval);

    function stopPhaohoa() {
        document.getElementById("phaohoa").style.display = "none";
    }
}
function drawNestleCharity() {
    var table = document.getElementById("joiner");
    var header = [];
    var rows = [];

    for (var i = 0; i < table.rows[0].cells.length; i++) {
        var headerrow = table.rows[0].cells[i].innerHTML;

        var singledata = headerrow;
        headerrow = singledata.trim();
        var splitdata = headerrow;
        headerrow = splitdata.replace(/\n/g, "");
        header.push(headerrow);
    }

    for (var i = 1; i < table.rows.length; i++) {
        var row = {};
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            var singledata = row[header[j]] = table.rows[i].cells[j].innerHTML;
            row[header[j]] = singledata.trim();
            var splitdata = row[header[j]];
            row[header[j]] = splitdata.replace(/\n/g, "");

        }
        rows.push(row);
    }
    var data = [];
    data = rows;
    console.log("data", data);
    
    
    btnsubmit.style.cursor = "no-drop";

    const max = document.getElementById("max");
    if (max.value == null || max.value == "") {
        alert("Nhập số để quay");
        location.reload;
    }
    if (temp.length == 0) {

        for (var i = 1; i <= max.value; i++) {
            temp.push(i)
        }
    }
    else {
        var temp1 = []
        for (var i = 1; i <= max.value; i++) {
            temp1.push(i)
        }
        for (let j = 0; j <= arrayUsed.length; j++) {
            temp1 = temp1.filter(item => item !== arrayUsed[j])
        }
        temp = [];
        for (let i = 0; i < temp1.length; i++) {
            temp.push(temp1[i]);
        }
    }

    clearInterval(startInteval);
    document.getElementById("congraAudio").pause();

    //
    document.getElementById("phaohoa").style.display = "none";
    btnsubmit.disabled = true;
    const myInterval = setInterval(myTimer4, 30);
    function myStop() {
        clearInterval(myInterval);
    }

    event.preventDefault();
    document.getElementById("submit").style.alignContent = "center";
    //document.getElementById("submit").textContent = "Quay";
    document.getElementById("status").style.color = "white";



    let x = Math.floor(Math.random() * temp.length);

    var finddata = data.find(item => item.PHONE === temp[x].toString());
    
    console.log(temp[x])
    if (finddata == undefined) {
        var person = "Số may mắn";
    }
    else {
        var person = finddata.NAME;
        console.log(person)
    }
    arrayUsed.push(temp[x])

    var numbTostring = temp[x].toString();
    if (numbTostring.length == 3) {
        const endhandle = "0" + numbTostring;
        numbTostring = endhandle;

    }
    if (numbTostring.length == 2) {
        const endhandle = "00" + numbTostring;
        numbTostring = endhandle;

    }
    if (numbTostring.length == 1) {
        const endhandle = "000" + numbTostring;
        numbTostring = endhandle;

    }
    setTimeout(result, 0);
    function result() {
        for (let i = 0; i < 4; i++) {
            animateNumber(numbTostring[i], 400, 0, function (number) {
                document.getElementById(i).innerText = number;
            })
        };

    }

    const numb = numbTostring;
    const nameCus = document.getElementById("nameCus").value;
    const nameCamp = document.getElementById("nameCamp").value;
    const datetime = new Date().toLocaleString().replace(",", " ");

    //------------Thêm vào thông báo
    var IDitemprize = $("#IDDETAIL option:selected").val();
    var e = document.getElementById("IDDETAIL");
    var itemprize = e.options[e.selectedIndex].text;
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    //---------------------------

    $("#result").append(
        "<tr>"
        + "<td> " + itemprize + "</td>"
        + "<td> " + numb + "</td>"
        + "<td>" + date + "</td>"
        + "<td style=\"display:none\"> " + IDitemprize + "</td>"
        + "</tr>"
    );
    //------------------Thêm vào thông báo
    function myGreeting() {
        document.getElementById("drawAudio").pause();
        document.getElementById("phaohoa").style.display = "block";
        document.getElementById("congraAudio").play();
        document.getElementById("status").style.color = "transparent";
        document.getElementById("modal-congrate").style.display = "block";

        const alertWinner = "<div style=\"    display: flex; flex-direction: column; align-items: center;padding: 15px \">"
            + "<p>" + "Chúc mừng " + "</p>"
            + "<p class=\"colorCongrate\">" + person + "</p>"
            + "<p> <span class=\"colorCongrate\">" + numb + "</span>" + "</p>"
            //+ "<p>" + " Đoạt " + " <span class=\"colorCongrate\">" + itemprize + "</span>" + "</p>"
            + "</div>";
        document.getElementById("congrate").innerHTML = alertWinner;
        btnsubmit.disabled = false;
        max.disabled = false;
        btnsubmit.style.cursor = "pointer";

        btnstartDraw.style.display = "block";
        btnsubmit.style.display = "none";
        setTimeout(stopPhaohoa, 4000)
    }


    temp.splice(x, 1);
    localStorage.setItem("DataLuckyDrawhadStop", JSON.stringify(temp));

    const itemHistory = "<p>" + datetime + ": \"" + nameCus + "\" - " + "\"" + nameCamp + "\"" + " - " + numb + " - " + itemprize + "</p>";
    arrHistoryHadStop.push(itemHistory);
    localStorage.setItem("HistoryDrawHadStop", arrHistoryHadStop)
    setTimeout(myGreeting, 600);
    //setTimeout(myStop, 0);
    clearInterval(myInterval);

    function stopPhaohoa() {
        document.getElementById("phaohoa").style.display = "none";
    }
}
//-------------------- Modal ----------------------------------------
// Modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 

function Export() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it                     
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (document.getElementById("modal-congrate")) {
        document.getElementById("modal-congrate").style.display = "none";

    }
}
//--------HideShow Title---------------
function showhideTitle() {
    const title = document.getElementById("titlecampaign").style;
    if (title.color == "transparent") {
        title.color = "#b2b2b2";
    } else {
        title.color = "transparent";
    }
}
function showhideTitle_vifon() {
    const title = document.getElementById("titlecampaignvifon").style;
    if (title.color == "transparent") {
        title.color = "rgb(221, 54, 62)";
    } else {
        title.color = "transparent";
    }

}
function showhide_input() {
    var iddetail = document.getElementById("IDDETAIL");
    var btn_kq = document.getElementById("myBtn");

    if (btn_kq.style.display == "none") {
        iddetail.style.display = "block";
        btn_kq.style.display = "block";
    }
    else {
        iddetail.style.display = "none";
        btn_kq.style.display = "none";
    }

}