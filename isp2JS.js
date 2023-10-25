let page = ""
let portWin = null;

// Function to open new window
function openWin() {
    if (portWin != null) {
        portWin.close();
    }
    portWin = window.open("", "Portfolio", "width=800,height=800");
    portWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="portWin.css"></head></html>');
    portWin.document.write(page);
}

// Function to add name to portfolio
function addName() {
    let name = prompt("Enter your first and last name");
    if (name) {
        let nameLine = "<h1>" + name + "</h1>";
        page += nameLine;
    }
}

// Function to add image to portfolio
function importPic() {
    let file = document.getElementById("userPic");
    let pic = file.files[0];
    if (file) {
        let profPic = "<img src=" + URL.createObjectURL(pic) + ">"
        page += profPic;
    } else {
        alert("Image upload failed");
    }
}

// Function to add phone number
function addNumber() {
    let phoneNumber = prompt("Enter Phone Number in form: XXX-XXX-XXXX");
    if(phoneNumber) {
        let phoneLine = "<p>" + phoneNumber + "</p>";
        page += phoneLine;
    }
}

// Function to add email
function addEmail() {
    let email = prompt("Enter your email");
    if (email) {
        let emailLine = "<p>" + email + "</p>"
        page += emailLine;
    }
}

// Function to add home address
function addAddress() {
    let adrs = prompt("Enter your home address");
    if (adrs) {
        let adrsLine = "<p>" + adrs + "</p>";
        page += adrsLine;
    }
}

// Function to add a link to GitHub
function addGitHub() {
    let ghub = document.getElementById("GitHub").value;
    if (ghub) {
        let ghubLine = "<a href=" + ghub + " target =_blank>" + ghub + "</a>";
        page += ghubLine;
    }
}

// Function to add a link to LinkedIn
function addLinkedIn() {
    let lI = document.getElementById("LinkedIn").value;
    if (lI) {
        let lILine = "<a href=" + lI + " target =_blank>" + lI + "</a>";
        page += lILine;
    }
}

// work experience class
class workExp {
    static expNum = 0;
    constructor(employer, location, startDate, endDate, description) {
        employer = prompt("What is the name of your employer?");
        location = prompt("Where is your job located?");
        startDate = prompt("When did you start working there?");
        endDate = prompt("When did you stop working there? If current employer, leave blank.");
        description = prompt("Describe your role.");
        if (workExp.expNum == 0) {
            let workHead = "<h2>Work Experience</h2>" + "<hr>";
            page += workHead;
        }
        page += "<ul><li><p>" + employer + " " + location + "</p></li>";
        if (endDate) {
            page +=  "<p>" + startDate + "-" + endDate + "</p>";
        } else {
            page +=  "<p>" + startDate + "-Current</p>";
        }
        page += "<p>" + description + "</p></ul>";
        workExp.expNum++;
    }
}

// project class
class project {
    static projNum = 0;
    constructor(title, description) {
        title = prompt("What is the title of your project?");
        description = prompt("Describe your project");
        if (project.projNum == 0) {
            let projHead = "<h2>Projects</h2>" + "<hr>";
            page += projHead;
        }
        page += "<ul><li><h3>" + title + "</h3></li>";
        page += "<p>" + description + "</p></ul>"
        project.projNum++;
    }
}

// Function to add project video
function importVid() {
    let file = document.getElementById("projVid");
    let vid = file.files[0];
    if (file) {
        let projVid = "<video width=480px height=271px controls><source src=" + URL.createObjectURL(vid) + " type=video/mp4>Video failed to load</video>"
        page += projVid;
    } else {
        alert("Video upload failed");
    }
}

// education class
class education {
    static eduNum = 0;
    constructor(school, location, degree, start, end, description) {
        school = prompt("Name of school/university");
        location = prompt("Location");
        degree = prompt("Degree name");
        start = prompt("Start date (mm/dd/yyyy)");
        end = prompt("End date (mm/dd/yyyy)");
        description = prompt("Describe your education");
        if (education.eduNum == 0) {
            let eduHead = "<h2>Education</h2>" + "<hr>";
            page += eduHead;
        }
        page += "<h3>" + school + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + location + "</h3>";
        page += "<p font-weight=bold>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + degree + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + start + "-" + end + "</p>";
        page += "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + description + "</p>";
        education.eduNum++;
    }
}

// skills class
class skill {
    static skillNum = 0;
    constructor(skillName, description) {
        skillName = prompt("Name of your skill");
        description = prompt("Describe your skill/experience using that skill");
        if (skill.skillNum == 0) {
            let skillHead = "<h2>Skills</h2>" + "<hr>";
            page += skillHead;
        }
        page += "<ul><li><b>" + skillName + ":</b> " + description + "</li></ul>";
        skill.skillNum++;
    }
}

// extracurricular class
class extracurricular {
    static extrNum = 0;
    constructor(extrName, description) {
        extrName = prompt("Name of your extracurricular");
        description = prompt("Describe your extracurricular");
        if (extracurricular.extrNum == 0) {
            let extrHead = "<h2>Extracurriculars</h2>" + "<hr>";
            page += extrHead;
        }
        page += "<ul><li><b>" + extrName + "</b></li>";
        page += "<p>" + description + "</p></ul>";
        extracurricular.extrNum++;
    }
}