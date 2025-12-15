const dateofBirth= "02/07/2003"
const getStudentName =() =>
{
return "Dilipmani Sharma"
}
const getCampusName = () =>
{return ("UEL Campus ")
}
//exporting functions & variable outside the module
exports.getName=getStudentName
exports.Location=getCampusName
exports.dob=dateofBirth
// How to export function with parameters
exports.Studentgrade=(marks)=>
{
if (marks>50 && marks <70) return ("B grade")
else
return ("A grade)")
}