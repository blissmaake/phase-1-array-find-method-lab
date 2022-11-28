// code your solution here
function superbowlWin (result) {
    const wonYear = result.find (record => record.result ==="W")
    return wonYear ? wonYear.year : undefined
} 