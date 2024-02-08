var imageSrc;
function handleImageInput() {
  var fileInput = document.getElementById("images");
  var reader = new FileReader();
  reader.onload = function (e) {
    imageSrc = e.target.result;
  };
  reader.readAsDataURL(fileInput.files[0]);
}

function resume() {
  var b = document.getElementById("fullname").value;
  if (!b.match(/^[A-Z\s]+$/)) {
    alert("Please enter your full name in ALL CAPITAL LETTERS.");
    return;
  }
  var c = document.getElementById("phone").value;
  if (!c.match(/^\d{10}$/)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }
  var d = document.getElementById("email").value;
  if (!d.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    alert("Please enter a valid email address.");
    return;
  }
  var e = document.getElementById("cgoal").value;
  var f = document.getElementById("q1").value;
  var g = document.getElementById("b1").value;
  var h = document.getElementById("s1").value;
  var i = document.getElementById("p1").value;
  var j = document.getElementById("q2").value;
  var k = document.getElementById("b2").value;
  var l = document.getElementById("s2").value;
  var m = document.getElementById("p2").value;
  var v = document.getElementById("exp1").value;
  var w = document.getElementById("exp2").value;
  var x = document.getElementById("skil1").value;
  var y = document.getElementById("skil2").value;
  var z = document.getElementById("skil3").value;
  var aa = document.getElementById("skil4").value;
  var ab = document.getElementById("skil5").value;
  var ac = document.getElementById("dob").value;
  var ad = document.getElementById("nat").value;
  var ae = document.getElementById("add").value;
  var af = document.getElementById("q3").value;
  var ag = document.getElementById("b3").value;
  var ah = document.getElementById("s3").value;
  var ai = document.getElementById("p3").value;

  document.getElementById("div1").innerHTML =
    "<img src='" + imageSrc + "' style='height:170px; width:140px;'>";

  document.getElementById("div2").innerHTML = b;
  document.getElementById("div3").innerHTML = "Phone No:-" + c;
  document.getElementById("div4").innerHTML = "Email:-" + d;
  document.getElementById("div5").innerHTML =
    "<table style='border:solid black 2px; width:1200px; '><tr><th>Career Objective</th></tr><tr><td style='border-top:solid black 1px;' >" +
    e +
    "</td></tr></table>";

  document.getElementById("div6").innerHTML =
    "<table style='border:solid black 2px; width:1200px; margin-top:10px; '>" +
    "<tr><th>Education</th></tr>" +
    "<tr>" +
    "<td style='border-top:solid black 1px;' >" +
    f +
    "</td>" +
    "<td style='border-top:solid black 1px;' >" +
    g +
    "</td>" +
    "<td style='border-top:solid black 1px;' >" +
    h +
    "</td>" +
    "<td style='border-top:solid black 1px;' >" +
    i +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td style='border-top:solid black 1px;' >" +
    j +
    "</td>" +
    "<td style='border-top:solid black 1px;' >" +
    k +
    "</td>" +
    "<td style='border-top:solid black 1px;' >" +
    l +
    "</td>" +
    "<td style='border-top:solid black 1px;' >" +
    m +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td style='border-top:solid black 1px;' >" +
    af +
    "</td>" +
    "<td style='border-top:solid black 1px;' >" +
    ag +
    "</td>" +
    "<td style='border-top:solid black 1px;' >" +
    ah +
    "</td>" +
    "<td style='border-top:solid black 1px;' >" +
    ai +
    "</td>" +
    "</tr>" +
    "</table>";

  document.getElementById("div7").innerHTML =
    "<table style='border:solid black 2px; width:1200px; margin-top:10px; '><tr><th>Projects</th></tr><tr><td style='border-top:solid black 1px;' ><ul><li>" +
    v +
    "</li></ul></td></tr><tr><td style='border-top:solid black 1px;'><ul><li>" +
    w +
    "</li></ul></tr></table>";
  document.getElementById("div8").innerHTML =
    "<table style='border:solid black 2px; width:1200px; margin-top:10px; '><tr><th>Skills</th></tr><tr><td style='border-top:solid black 1px;' ><ul><li>" +
    x +
    "</li></ul></td></tr>" +
    "<tr><td style='border-top:solid black 1px;'><ul><li>" +
    y +
    "</li></ul></tr>" +
    "<tr><td style='border-top:solid black 1px;'><ul><li>" +
    z +
    "</li></ul></tr>" +
    "<tr><td style='border-top:solid black 1px;'><ul><li>" +
    aa +
    "</li></ul></tr>" +
    "<tr><td style='border-top:solid black 1px;'><ul><li>" +
    ab +
    "</li></ul></tr>" +
    "</table>";
  document.getElementById("div9").innerHTML =
    "<table style='border:solid black 2px; width:1200px; margin-top:10px;'><tr><th>Personal Details</th></tr>" +
    "<tr><td style='border-top:solid black 1px;'>LinkedIn link </td><td style='border-top:solid black 1px;'>" +
    ac +
    "</td></tr>" +
    "<tr><td style='border-top:solid black 1px;'>Hobbies : </td><td style='border-top:solid black 1px;'>" +
    ad +
    "</td></tr>" +
    "<tr><td style='border-top:solid black 1px;'>Address : </td><td style='border-top:solid black 1px;'>" +
    ae +
    "</td></tr>" +
    "<tr><td style='border-top:solid black 1px;'>Phone No. : </td><td style='border-top:solid black 1px;'>" +
    c +
    "</td></tr>" +
    "<tr><td style='border-top:solid black 1px;'>Email : </td><td style='border-top:solid black 1px;'>" +
    d +
    "</td></tr>" +
    "</table>";
}
function printcontent() {
  var pp = document.getElementById("center2").innerHTML;
  var org = document.body.innerHTML;
  document.body.innerHTML = pp;
  window.print();
  document.body.innerHTML = org;
}
