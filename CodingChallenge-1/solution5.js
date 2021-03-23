// 5. Write a JavaScript program to check whether a given integer
// is within 20 of 100 or 400.

function check20(num) {

    var difFrom100 = Math.abs(num - 100);
    var difFrom400 = Math.abs(num - 400);

    if (difFrom100 <= 20 || difFrom400 <= 20) {
        return true;
    }
    else return false;
}
console.log(check20(419));
console.log(check20(80));
console.log(check20(79));
console.log(check20(421));
