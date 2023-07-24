//-------- Read Excel --------------------------------------------------------------------------------
//document.getElementById('upload').addEventListener('change', handleFileSelect, false);
//var ExcelToJSON = function() {

//    this.parseExcel = function(file) {
//      var reader = new FileReader();

//        reader.onload = function (e) {
//            var data = e.target.result;
//            var workbook = XLSX.read(data, {
//                type: 'binary'
//            });
//        workbook.SheetNames.forEach(function(sheetName) {
//          var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
//          var json_object = JSON.stringify(XL_row_object);
//          console.log(JSON.parse(json_object));
//          jQuery('#xlx_json').val(json_object);
//        })
//      };

//      reader.onerror = function(ex) {
//        console.log(ex);
//      };

//      reader.readAsBinaryString(file);
//    };
//  };

//  function handleFileSelect(evt) {

//    var files = evt.target.files;
//    var xl2json = new ExcelToJSON();
//    xl2json.parseExcel(files[0]);
//  }
//-------------- ExportExcel ------------------------------------------------------
window.onbeforeunload = function () {
    return "Sau khi đọc được thông báo này, mọi trách nhiệm đã thuộc về bạn !!!"
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
        filename: titlename +"_"+ fullDate+"Winners.xlsx",
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
let arrData = localStorage.getItem("DataLuckyDraw");
//------------- Run Draw -----------------------------------------------------------
const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);
const arrHistory = [];
function handleFormSubmit(event) {
    //---------------------------------------
    var table = document.getElementById("joiner");
    var header = [];
    var rows = [];

    for (var i = 0; i < table.rows[0].cells.length; i++) {
        var headerrow = table.rows[0].cells[i].innerHTML;

        var singledata = headerrow;
        headerrow = singledata.replace(/ /g, "");
        var splitdata = headerrow;
        headerrow = splitdata.replace(/\n/g, "");
        //var splitnhay = headerrow;
        //headerrow = splitnhay.replace(/"/g, "");
        header.push(headerrow);
    }

    for (var i = 1; i < table.rows.length; i++) {
        var row = {};
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            var singledata = row[header[j]] = table.rows[i].cells[j].innerHTML;
            row[header[j]] = singledata.replace(/ /g, "");
            var splitdata = row[header[j]];
            row[header[j]] = splitdata.replace(/\n/g, "");

        }
        rows.push(row);
    }
//---------------------------------------
    //
        document.getElementById("drawAudio").play();
        document.getElementById("congraAudio").pause();
    //
    document.getElementById("phaohoa").style.display = "none";
    document.getElementById("submit").disabled=true;

    function myTimer() {
        for(var i=0;i<10;i++){
            const rd = Math.floor(Math.random()*9);
            document.getElementById(i).innerHTML = rd;
        }
    
    }
    const myInterval = setInterval(myTimer, 30);

    function myStop() {
        clearInterval(myInterval);
      }
  
    //const data = new FormData(event.target);

    //const formJSON = Object.fromEntries(data.entries());
    //const varname = document.getElementById("xlx_json").value;

    //if (varname == null || varname == undefined || varname == "" || varname =="                                "||varname==" ") {
    //    alert("Cần dữ liệu CSV - JSON");
    //    window.location.reload();
    //}
    event.preventDefault();
    var obj = [];
    if (arrData == [] || arrData == null || arrData == "[]") {
        obj = rows;
        localStorage.removeItem("DataLuckyDraw");
        localStorage.clear();

    }
    else {

        obj = JSON.parse(arrData);

    }
    if (obj.length == 0 || obj == null) {
        alert("Hãy kiểm tra danh sách người tham dự")
        window.location.reload();
    }

    document.getElementById("submit").style.alignContent = "center";
    document.getElementById("submit").textContent = "Quay";
    document.getElementById("status").style.color = "white";

    let x = Math.floor(Math.random() * obj.length);
    var arr = obj[x].IDJOINER;
    let numbTostring = arr.toString();
    setTimeout(result,1800);
    function result() {
        for (let i = 0; i < 10; i++) {
            animateNumber(numbTostring[i], 3000, 0, function (number) {
                if (i == 3 || i == 4 || i == 5 || i == 6) {
                    number = "x";

                    document.getElementById(i).innerText = number;
                }
                document.getElementById(i).innerText = number;
            })
        };
    
    }
    const phoneUser = obj[x].IDJOINER;
    const person = obj[x].NAME;
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
    //---------------------------
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
         document.getElementById("phaohoa").style.display = "block";
        document.getElementById("congraAudio").play();
        document.getElementById("modal-congrate").style.display = "block";
        const alertWinner = "<p>" + "Chúc mừng \"" + " <span class=\"colorCongrate\">" + person + "</span>\"" + "</p>"
            + "<p>" + " có số điện thoại \"" + " <span class=\"colorCongrate\">" + phoneUser + "</span>\"" + "</p>"
            + "<p>" + " đã đoạt " + " <span class=\"colorCongrate\">" + itemprize + "</span>" + " của chương trình" + "</p>";
        document.getElementById("congrate").innerHTML = alertWinner;
        document.getElementById("status").style.color = "transparent";
        document.getElementById("submit").disabled=false;
        setTimeout(stopPhaohoa, 7000)

        
    }
    obj.splice(x, 1);
    localStorage.setItem("DataLuckyDraw", JSON.stringify(obj));
    //------------History------------------------
    const itemHistory = "<p>" + datetime + ": \"" + nameCus + "\" - " + nameCamp + " - " + person + " - " + phoneUser + " - " + itemprize + "</p>";
    
    arrHistory.push(itemHistory);
    localStorage.setItem("HistoryDraw", arrHistory )
    arrData = JSON.stringify(obj);
    setTimeout(myGreeting, 5000);
    setTimeout(myStop, 1800);
    function stopPhaohoa() {
        document.getElementById("phaohoa").style.display = "none";
}

}
function runprogram3() {
    //---------------------------------------
    var table = document.getElementById("joiner");
    var header = [];
    var rows = [];

    for (var i = 0; i < table.rows[0].cells.length; i++) {
        var headerrow = table.rows[0].cells[i].innerHTML;

        var singledata = headerrow;
        headerrow = singledata.replace(/ /g, "");
        var splitdata = headerrow;
        headerrow = splitdata.replace(/\n/g, "");
        //var splitnhay = headerrow;
        //headerrow = splitnhay.replace(/"/g, "");
        header.push(headerrow);
    }

    for (var i = 1; i < table.rows.length; i++) {
        var row = {};
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            var singledata = row[header[j]] = table.rows[i].cells[j].innerHTML;
            row[header[j]] = singledata.replace(/ /g, "");
            var splitdata = row[header[j]];
            row[header[j]] = splitdata.replace(/\n/g, "");

        }
        rows.push(row);
    }
    var obj = [];
    if (arrData == [] || arrData == null || arrData == "[]") {
        obj = rows;
        localStorage.removeItem("DataLuckyDraw");
        localStorage.clear();

    }
    else {

        obj = JSON.parse(arrData);

    }
    if (obj.length == 0 || obj == null) {
        alert("Hãy kiểm tra danh sách người tham dự")
        window.location.reload();
    }

    //---------------------------------------
    //
    document.getElementById("drawAudio").play();
    document.getElementById("congraAudio").pause();
    //
    document.getElementById("phaohoa").style.display = "none";
    document.getElementById("submit").disabled = true;

    function myTimer() {
        for (var i = 0; i < 3; i++) {
            const rd = Math.floor(Math.random() * 9);
            document.getElementById(i).innerHTML = rd;
        }

    }
    const myInterval = setInterval(myTimer, 30);

    function myStop() {
        clearInterval(myInterval);
    }

    //const data = new FormData(event.target);

    //const formJSON = Object.fromEntries(data.entries());
    //const varname = document.getElementById("xlx_json").value;

    //if (varname == null || varname == undefined || varname == "" || varname =="                                "||varname==" ") {
    //    alert("Cần dữ liệu CSV - JSON");
    //    window.location.reload();
    //}
    event.preventDefault();
    
    document.getElementById("submit").style.alignContent = "center";
    document.getElementById("submit").textContent = "Quay";
    document.getElementById("status").style.color = "white";

    let x = Math.floor(Math.random() * obj.length);
    var arr = obj[x].IDJOINER;
    let numbTostring = arr.toString();
    setTimeout(result, 1800);
    function result() {
        for (let i = 0; i < 3; i++) {
            animateNumber(numbTostring[i], 3000, 0, function (number) {
                document.getElementById(i).innerText = number;
            })
        };

    }
    const phoneUser = obj[x].PHONE;
    const person = obj[x].NAME;
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
    //---------------------------
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
        document.getElementById("phaohoa").style.display = "block";
        document.getElementById("congraAudio").play();
        document.getElementById("modal-congrate").style.display = "block";
        const alertWinner = "<p>" + "Chúc mừng \"" + " <span class=\"colorCongrate\">" + person + "</span>\"" + "</p>"
            + "<p>" + " có số điện thoại \"" + " <span class=\"colorCongrate\">" + phoneUser + "</span>\"" + "</p>"
            + "<p>" + " đã đoạt " + " <span class=\"colorCongrate\">" + itemprize + "</span>" + " của chương trình" + "</p>";
        document.getElementById("congrate").innerHTML = alertWinner;
        document.getElementById("status").style.display = "transparent";
        document.getElementById("submit").disabled = false;
        setTimeout(stopPhaohoa, 7000)


    }
    obj.splice(x, 1);
    localStorage.setItem("DataLuckyDraw", JSON.stringify(obj));
    //------------History------------------------
    const itemHistory = "<p>" + datetime + ": \"" + nameCus + "\" - " + nameCamp + " - " + person + " - " + phoneUser + " - " + itemprize + "</p>";

    arrHistory.push(itemHistory);
    localStorage.setItem("HistoryDraw", arrHistory)
    arrData = JSON.stringify(obj);
    setTimeout(myGreeting, 5000);
    setTimeout(myStop, 1800);
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
