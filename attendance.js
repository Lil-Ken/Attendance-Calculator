let allPresentTime = 0, allCurrentTime = 0, attendance, numAttended = 0;
let lecPresentTime, praPresentTime, tutPresentTime;
let lecOccur = 0, pracOccur = 0, tutOccur = 0;

document.getElementById("selLecture").onclick = () => {
    if(lecOccur === 0){
        document.getElementById("addLecture").innerHTML = `
            <div id="lecture">
                <h2 class="title">Lecture</h2>
                <label for="lecDuration">Duration of a class (hours)</label>
                <input type="number" id="lecDuration" required>

                <label for="numLecAttended">The number of attended</label>
                <input type="number" id="numLecAttended" required>
            </div>`;
        lecOccur = 1;
    }else if (lecOccur === 1){
        document.getElementById("addLecture").innerHTML = null;
        lecOccur = 0;
    }
}

document.getElementById("selPractical").onclick = () => {
    if(pracOccur === 0){
        document.getElementById("addPractical").innerHTML = `
            <div id="practical">
                <h2 class="title">Practical</h2>
                <label for="pracDuration">Duration of a class (hours)</label>
                <input type="number" id="pracDuration" required>

                <label for="numPracAttended">The number of attended</label>
                <input type="number" id="numPracAttended" required>
            </div>`;
        pracOccur = 1;
    }else if (pracOccur === 1){
        document.getElementById("addPractical").innerHTML = null;
        pracOccur = 0;
    }
}

document.getElementById("selTutorial").onclick = () => {
    if(tutOccur === 0){
        document.getElementById("addTutorial").innerHTML = `
            <div id="tutorial">
                <h2 class="title">Tutorial</h2>
                <label for="tutDuration">Duration of a class (hours)</label>
                <input type="number" id="tutDuration" required>

                <label for="numTutAttended">The number of attended</label>
                <input type="number" id="numTutAttended" required>
            </div>`;
            tutOccur = 1;
    }else if (tutOccur === 1){
        document.getElementById("addTutorial").innerHTML = null;
        tutOccur = 0;
    }
}

class Student{
    constructor(name, weeks, courseName){
        this.name = name;
        this.weeks = Number(weeks);
        this.courseName = courseName;
    }
    
}

class Lecture extends Student{
    constructor(duration, numAttended){
        super();
        this.duration = Number(duration);
        this.numAttended = Number(numAttended);
    }
}

class Practical extends Student{
    constructor(duration, numAttended){
        super();
        this.duration = Number(duration);
        this.numAttended = Number(numAttended);
    }
}

class Tutorial extends Student{
    constructor(duration, numAttended){
        super();
        this.duration = Number(duration);
        this.numAttended = Number(numAttended);
    }
}


document.getElementById("calculate-btn").onclick = () => {
    const student1 = new Student(
        document.getElementById("name").value, 
        document.getElementById("week").value, 
        document.getElementById("courseName").value
    );

    let lecture1;
    if(lecOccur === 1){
        lecture1 = new Lecture(
            document.getElementById("lecDuration").value,
            document.getElementById("numLecAttended").value
        );
    } else lecture1 = new Lecture(0, 0);
    
    let practical1;
    if(pracOccur === 1){
        practical1 = new Practical(
            document.getElementById("pracDuration").value, 
            document.getElementById("numPracAttended").value
        );
    } else practical1 = new Practical(0, 0);

    let tutorial1;
    if(tutOccur === 1){ 
        tutorial1 = new Tutorial(
            document.getElementById("tutDuration").value,
            document.getElementById("numTutAttended").value
        );
    } else tutorial1 = new Tutorial(0, 0);

    function calCurrentAllDuration(){
        lecture1.currentTime = student1.weeks * lecture1.duration;
        practical1.currentTime = student1.weeks * practical1.duration;
        tutorial1.currentTime = student1.weeks * tutorial1.duration;
    }
    
    function calAllPresentDuration(){
        lecPresentTime = lecture1.duration * lecture1.numAttended;
        praPresentTime = practical1.duration * practical1.numAttended;
        tutPresentTime = tutorial1.duration * tutorial1.numAttended;
    }
    
    function calAttendance(){
        allPresentTime = lecPresentTime + praPresentTime + tutPresentTime;
        allCurrentTime = lecture1.currentTime + practical1.currentTime + tutorial1.currentTime;
        attendance = (allPresentTime / allCurrentTime) * 100;
    }

    calCurrentAllDuration();
    calAllPresentDuration();
    calAttendance();

    if (attendance.toFixed(2) < 80)
        attendance = `<span style= "color: #ff0800">${attendance.toFixed(2)}%</span>`
    else attendance = `${attendance.toFixed(2)}%`
    
    document.body.innerHTML = `
        <div id= "display">
            <ul id="list">
                <li><b>name:</b> ${student1.name}</li>
                <li><b>Course name:</b> ${student1.courseName}</li>
                <p>Your attendance is ${attendance}</p>
            </ul>
            <a href= ""><button id="back-btn">BACK</button></a>
        </div>
        <footer id="footer">
            <div>Developer: KEN</div> 
            <div>Consultant: Chao Ze</div>
        </footer>
    `;
}

// // console.log(student1);
// // console.log(lecture1);
// // console.log(practical1);
// // console.log(tutorial1);
