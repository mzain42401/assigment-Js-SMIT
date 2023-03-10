var totalNum = +prompt("write total number");
var engNum = +prompt("write english number you obtain");
var urduNum = +prompt("write urdu number you obtain");
var mathNum = +prompt("write math number you obtain");
var obtainedNum = engNum + urduNum + mathNum;
var percentage = obtainedNum / totalNum * 100;
if (percentage >= 80) {
    document.write(` <table border="2" >
    <tr>
        <td colspan="2">Mark sheet</td>
    </tr>
    <tr>
        <td>Total Mark</td>
        <td >${totalNum}</td>
    </tr>
    <tr>
        <td>Obtain Mark</td>
        <td>${obtainedNum}</td>
    </tr><tr>
        <td>Percentage</td>
        <td>${percentage}</td>
    </tr><tr>
        <td>Grade</td>
        <td>A-one</td>
    </tr><tr>
        <td>Remarks</td>
        <td>Excellent</td>
    </tr>
    </table>
    `)
}
else if (percentage >= 70) {
    document.write(` <table border="2" >
    <tr>
        <td colspan="2">Mark sheet</td>
    </tr>
    <tr>
        <td>Total Mark</td>
        <td >${totalNum}</td>
    </tr>
    <tr>
        <td>Obtain Mark</td>
        <td>${obtainedNum}</td>
    </tr><tr>
        <td>Percentage</td>
        <td>${percentage}</td>
    </tr><tr>
        <td>Grade</td>
        <td>A</td>
    </tr><tr>
        <td>Remarks</td>
        <td>Good</td>
    </tr>
    </table>
    `)

}

else if (percentage >= 60) {
    document.write(` <table border="2" >
    <tr>
        <td colspan="2">Mark sheet</td>
    </tr>
    <tr>
        <td>Total Mark</td>
        <td >${totalNum}</td>
    </tr>
    <tr>
        <td>Obtain Mark</td>
        <td>${obtainedNum}</td>
    </tr><tr>
        <td>Percentage</td>
        <td>${percentage}</td>
    </tr><tr>
        <td>Grade</td>
        <td>B</td>
    </tr><tr>
        <td>Remarks</td>
        <td>you need to improve</td>
    </tr>
    </table>
    `)
}
else if (percentage < 60) {
    document.write(` <table border="2" >
    <tr>
        <td colspan="2">Mark sheet</td>
    </tr>
    <tr>
        <td>Total Mark</td>
        <td >${totalNum}</td>
    </tr>
    <tr>
        <td>Obtain Mark</td>
        <td>${obtainedNum}</td>
    </tr><tr>
        <td>Percentage</td>
        <td>${percentage}</td>
    </tr><tr>
        <td>Grade</td>
        <td>fail</td>
    </tr><tr>
        <td>Remarks</td>
        <td>sorry</td>
    </tr>
    </table>
    `)
}