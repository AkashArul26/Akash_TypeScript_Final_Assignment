let userId = 1000;
let courseId=1000;
class UserDetails
{
    Uid : string;
    Uname : string;
    Uage : string;
    Uphonenumber : string;
    constructor(username:string,userage:string,userphonenumber:string)
    {
        this.Uname = username;
        this.Uage = userage;
        this.Uphonenumber = userphonenumber;
        this.Uid="CR"+userId.toString();
    }
}
class CourseDetails
{
    Cid : string;
    Cname : string;
    Crequireddays: number;
    Uid: string;
    constructor(coursename:string,courserequireddays:number)
    {
        courseId++;
        this.Cid = courseId.toString();
        this.Cname = coursename;
        this.Crequireddays = courserequireddays;
        this.Uid = (document.getElementById("userid") as HTMLInputElement).value;
    }
}
let userdetailarray = [];
let coursedetailarray = [];
function mainmenu()
{
    (document.getElementById("mainmenu") as HTMLElement).style.visibility = "visible";
    (document.getElementById("registration") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("login") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("secondmenu") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("availablecourses") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("enrolledcourses") as HTMLElement).style.visibility = "hidden";
}
function registration()
{
    (document.getElementById("mainmenu") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("registration") as HTMLElement).style.visibility = "visible";
    (document.getElementById("login") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("secondmenu") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("availablecourses") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("enrolledcourses") as HTMLElement).style.visibility = "hidden";
}
function loginpage()
{
    (document.getElementById("mainmenu") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("registration") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("login") as HTMLElement).style.visibility = "visible";
    (document.getElementById("secondmenu") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("availablecourses") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("enrolledcourses") as HTMLElement).style.visibility = "hidden";
}
function secondmenu()
{
    (document.getElementById("mainmenu") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("registration") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("login") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("secondmenu") as HTMLElement).style.visibility = "visible";
    (document.getElementById("availablecourses") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("enrolledcourses") as HTMLElement).style.visibility = "hidden";
}
function availablecourses()
{
    (document.getElementById("mainmenu") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("registration") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("login") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("secondmenu") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("availablecourses") as HTMLElement).style.visibility = "visible";
    (document.getElementById("enrolledcourses") as HTMLElement).style.visibility = "hidden";
}
function enrolledcourses()
{
    (document.getElementById("mainmenu") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("registration") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("login") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("secondmenu") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("availablecourses") as HTMLElement).style.visibility = "hidden";
    (document.getElementById("enrolledcourses") as HTMLElement).style.visibility = "visible";
}
function register()
{
    var name = (document.getElementById("name") as HTMLInputElement).value;
    var phnum = (document.getElementById("phonenumber") as HTMLInputElement).value;
    var age = (document.getElementById("age") as HTMLInputElement).value;
    var nameregx = /^[a-zA-Z]+$/
    var phnumregx = /^[6-9][0-9]{9}$/
    var ageregx = /^[0-9][0-9]?[0-9]?$/
    if(nameregx.test(name) && phnumregx.test(phnum) && ageregx.test(age))
    {
        userId++;
        let uname = (document.getElementById("name") as HTMLInputElement).value;
        let uphnum = (document.getElementById("phonenumber") as HTMLInputElement).value;
        let uage = (document.getElementById("age") as HTMLInputElement).value;
        userdetailarray.push(new UserDetails(uname,uage,uphnum));
        mainmenu();
        (document.getElementById("userdetails") as HTMLInputElement).innerHTML += "NAME : " + name +"<br>"+ "USER ID : " +"CR"+userId +"<br>"+"AGE : " + age +"<br>"+"PHONE NUMBER : " + phnum +"<br><hr>";
    }
    else
    {
        alert("Invalid Entry!")
    }
}
function login()
{
    for(let i = 0 ; i < userdetailarray.length ; i++)
    {
        if((document.getElementById("userid") as HTMLInputElement).value == userdetailarray[i].Uid)
        {
            secondmenu();
        }
    }
}
function enroll()
{
    let course;
    let days = parseInt((document.getElementById("requireddays") as HTMLInputElement).value);
    if((document.getElementById("courses") as HTMLInputElement).value == "c#")
    {
        course = (document.getElementById("csharp") as HTMLInputElement).value;
    }
    else if((document.getElementById("courses") as HTMLInputElement).value == "java")
    {
        course = (document.getElementById("java") as HTMLInputElement).value;
    }
    else if((document.getElementById("courses") as HTMLInputElement).value == "html")
    {
        course = (document.getElementById("html") as HTMLInputElement).value;
    }
    else if((document.getElementById("courses") as HTMLInputElement).value == "css")
    {
        course = (document.getElementById("css") as HTMLInputElement).value;
    }
    else if((document.getElementById("courses") as HTMLInputElement).value == "javascript")
    {
        course = (document.getElementById("javascript") as HTMLInputElement).value;
    }
    else if((document.getElementById("courses") as HTMLInputElement).value == "typescript")
    {
        course = (document.getElementById("typescript") as HTMLInputElement).value;
    }
    coursedetailarray.push(new CourseDetails(course,days));
    secondmenu();
}
function enrolledcourse()
{
    let totalreqdays = 0 ;
    enrolledcourses();
    for(let i = 0 ; i < coursedetailarray.length ; i++)
    {
        if((document.getElementById("userid") as HTMLInputElement).value == coursedetailarray[i].Uid)
        {
            (document.getElementById("enrolledcourseinfo") as HTMLInputElement).innerHTML += "USER ID : " + coursedetailarray[i].Uid +"<br>"+ " COURSE NAME : "+  coursedetailarray[i].Cname +"<br>"+ "COURSE ID : " + coursedetailarray[i].Cid +"<br>" +"REQUIRED DAYS : " + coursedetailarray[i].Crequireddays +"<br><hr>";
            totalreqdays = totalreqdays + coursedetailarray[i].Crequireddays;
        }
    }
    (document.getElementById("enrolledcourseinfo") as HTMLInputElement).innerHTML += "TOTAL REQUIRED DAYS : " + totalreqdays;
}
function goback()
{
    (document.getElementById("enrolledcourseinfo") as HTMLInputElement).innerHTML = null;
    secondmenu();
}

