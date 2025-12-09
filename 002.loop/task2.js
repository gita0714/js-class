let marks = "";
function Grade(marks)
{
switch (true) {

    case (marks >= 0 && marks <= 36):
        console.log("You are Failed");
        break;

    case (marks >= 37 && marks <= 50):
        console.log("You are D class");
        break;

    case (marks >= 51 && marks <= 60):
        console.log("You are C class");
        break;

    case (marks >= 61 && marks <= 70):
        console.log("You are B class");
        break;

    case (marks >= 71 && marks <= 80):
        console.log("You are A class");
        break;

    case (marks >= 81 && marks <= 100):
        console.log("You are A+ class");
        break;

    default:
        console.log("Invalid number");
}
}
Grade(36);
