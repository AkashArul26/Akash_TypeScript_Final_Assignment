var userId = 1000;
var courseId = 1000;
var UserDetails = /** @class */ (function () {
    function UserDetails(username, userage, userphonenumber) {
        this.Uname = username;
        this.Uage = userage;
        this.Uphonenumber = userphonenumber;
        this.Uid = "CR" + userId.toString();
    }
    return UserDetails;
}());
var CourseDetails = /** @class */ (function () {
    function CourseDetails(coursename, courserequireddays) {
        courseId++;
        this.Cid = courseId.toString();
        this.Cname = coursename;
        this.Crequireddays = courserequireddays;
        this.Uid = document.getElementById("userid").value;
    }
    return CourseDetails;
}());
var userdetailarray = [];
var coursedetailarray = [];
function mainmenu() {
    document.getElementById("mainmenu").style.visibility = "visible";
    document.getElementById("registration").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("secondmenu").style.visibility = "hidden";
    document.getElementById("availablecourses").style.visibility = "hidden";
    document.getElementById("enrolledcourses").style.visibility = "hidden";
}
function registration() {
    document.getElementById("mainmenu").style.visibility = "hidden";
    document.getElementById("registration").style.visibility = "visible";
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("secondmenu").style.visibility = "hidden";
    document.getElementById("availablecourses").style.visibility = "hidden";
    document.getElementById("enrolledcourses").style.visibility = "hidden";
}
function loginpage() {
    document.getElementById("mainmenu").style.visibility = "hidden";
    document.getElementById("registration").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("secondmenu").style.visibility = "hidden";
    document.getElementById("availablecourses").style.visibility = "hidden";
    document.getElementById("enrolledcourses").style.visibility = "hidden";
}
function secondmenu() {
    document.getElementById("mainmenu").style.visibility = "hidden";
    document.getElementById("registration").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("secondmenu").style.visibility = "visible";
    document.getElementById("availablecourses").style.visibility = "hidden";
    document.getElementById("enrolledcourses").style.visibility = "hidden";
}
function availablecourses() {
    document.getElementById("mainmenu").style.visibility = "hidden";
    document.getElementById("registration").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("secondmenu").style.visibility = "hidden";
    document.getElementById("availablecourses").style.visibility = "visible";
    document.getElementById("enrolledcourses").style.visibility = "hidden";
}
function enrolledcourses() {
    document.getElementById("mainmenu").style.visibility = "hidden";
    document.getElementById("registration").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("secondmenu").style.visibility = "hidden";
    document.getElementById("availablecourses").style.visibility = "hidden";
    document.getElementById("enrolledcourses").style.visibility = "visible";
}
function register() {
    var name = document.getElementById("name").value;
    var phnum = document.getElementById("phonenumber").value;
    var age = document.getElementById("age").value;
    var nameregx = /^[a-zA-Z]+$/;
    var phnumregx = /^[6-9][0-9]{9}$/;
    var ageregx = /^[0-9][0-9]?[0-9]?$/;
    if (nameregx.test(name) && phnumregx.test(phnum) && ageregx.test(age)) {
        userId++;
        var uname = document.getElementById("name").value;
        var uphnum = document.getElementById("phonenumber").value;
        var uage = document.getElementById("age").value;
        userdetailarray.push(new UserDetails(uname, uage, uphnum));
        mainmenu();
        document.getElementById("userdetails").innerHTML += "NAME : " + name + "<br>" + "USER ID : " + "CR" + userId + "<br>" + "AGE : " + age + "<br>" + "PHONE NUMBER : " + phnum + "<br><hr>";
    }
    else {
        alert("Invalid Entry!");
    }
}
function login() {
    for (var i = 0; i < userdetailarray.length; i++) {
        if (document.getElementById("userid").value == userdetailarray[i].Uid) {
            secondmenu();
        }
    }
}
function enroll() {
    var course;
    var days = parseInt(document.getElementById("requireddays").value);
    if (document.getElementById("courses").value == "c#") {
        course = document.getElementById("csharp").value;
    }
    else if (document.getElementById("courses").value == "java") {
        course = document.getElementById("java").value;
    }
    else if (document.getElementById("courses").value == "html") {
        course = document.getElementById("html").value;
    }
    else if (document.getElementById("courses").value == "css") {
        course = document.getElementById("css").value;
    }
    else if (document.getElementById("courses").value == "javascript") {
        course = document.getElementById("javascript").value;
    }
    else if (document.getElementById("courses").value == "typescript") {
        course = document.getElementById("typescript").value;
    }
    coursedetailarray.push(new CourseDetails(course, days));
    secondmenu();
}
function enrolledcourse() {
    var totalreqdays = 0;
    enrolledcourses();
    for (var i = 0; i < coursedetailarray.length; i++) {
        if (document.getElementById("userid").value == coursedetailarray[i].Uid) {
            document.getElementById("enrolledcourseinfo").innerHTML += "USER ID : " + coursedetailarray[i].Uid + "<br>" + " COURSE NAME : " + coursedetailarray[i].Cname + "<br>" + "COURSE ID : " + coursedetailarray[i].Cid + "<br>" + "REQUIRED DAYS : " + coursedetailarray[i].Crequireddays + "<br><hr>";
            totalreqdays = totalreqdays + coursedetailarray[i].Crequireddays;
        }
    }
    document.getElementById("enrolledcourseinfo").innerHTML += "TOTAL REQUIRED DAYS : " + totalreqdays;
}
function goback() {
    document.getElementById("enrolledcourseinfo").innerHTML = null;
    secondmenu();
}
