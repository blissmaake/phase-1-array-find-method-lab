// code your solution here
function superbowlWin (result) {
    for (const wonYear of result) {
        if (wonYear.result === "W") {
            return wonYear.year;
        }
    }
}