let allPresentTime = 0, allCurrentTime = 0, attendance, numAttended = 0;
let lecPresentTime, praPresentTime, tutPresentTime;
// let lecture1, practical1, tutorial1;
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
    
    const lecture1 = new Lecture(
        document.getElementById("lecDuration").value,  
        document.getElementById("numLecAttended").value
    );
    
    const practical1 = new Practical(
        document.getElementById("pracDuration").value, 
        document.getElementById("numPracAttended").value
    );
    
    const tutorial1 = new Tutorial(
        document.getElementById("tutDuration").value,
        document.getElementById("numTutAttended").value
    );

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
    
    document.getElementById("display").innerHTML = `
        <div>
            <ul id="list">
                <li><b>name:</b> ${student1.name}</li>
                <li><b>Course name:</b> ${student1.courseName}</li>
                <p>Your attendance is ${attendance.toFixed(2)}%</p>
            </ul>
        </div>
    `;
    console.log(document.getElementById("name").value);
}

// console.log(student1);
// console.log(lecture1);
// console.log(practical1);
// console.log(tutorial1);
