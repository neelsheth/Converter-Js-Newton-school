"use strict";

function swap() {
    var unit1 = document.getElementById("unit1").value;
    var unit2 = document.getElementById("unit2").value;

    document.querySelector('#unit1').value = unit2;
    document.querySelector('#unit2').value = unit1;
}

function convert() {

    //Conversion unit
    var unit1 = document.getElementById("unit1").value;
    var unit2 = document.getElementById("unit2").value;
    //Input Value
    let num = document.getElementById('x').value;


    //if input = 0; than ans = 0 in all unite
    if (num == 0) {
        document.getElementById('y').innerText = document.getElementById('x').value;
        return;
    }

    //no change if conversion unit same
    if (unit1 == unit2) {
        document.getElementById('y').innerText = document.getElementById('x').value;
        return;
    }

    let num1 = Math.round(num);
    //no flot, only Integer
    if (num != num1 && unit1 != "hex") {
        
        let check = num1 - num;

        if(check >= 0 || check <=0){
            alert("Enter Round Off Value");

        }
        else{
            alert("Enter Valid Input")
        }
        location.reload();
        return;
    }

    //Decimal to bineary
    if (unit1 == "decimal" && unit2 == "binary") {
        if (num == 0) {
            alert("Enter Input");
            return
        }

        ans = d_to_b(num);
        document.getElementById('y').innerText = ans;
    }

    //Binary To Decimal:-
    if (unit1 == "binary" && unit2 == "decimal") {

        ans = b_to_d(num);
        document.getElementById('y').innerText = ans;

    }

    //decimal to hexadecimal
    if (unit1 == "decimal" && unit2 == "hex") {
        var ans1 = d_to_h(num);
        document.getElementById('y').innerText = ans1;
    }

    //decimal to octal
    if (unit1 == "decimal" && unit2 == "octal") {

        var ans = d_to_o(num);
        document.getElementById('y').innerText = ans;
    }

    //octa to decimal
    if (unit1 == "octal" && unit2 == "decimal") {
        var ans = o_to_d(num);
        document.getElementById('y').innerText = ans;
    }

    //hexa to decimal
    if (unit1 == "hex" && unit2 == "decimal") {
        var ans = h_to_d(num);
        document.getElementById('y').innerText = ans;
    }

    //binary to octal
    if (unit1 == "binary" && unit2 == "octal") {
        //binary to decimal
        var ans = ans = b_to_d(num);
        //decimal to octal
        var ans1 = d_to_o(ans);
        document.getElementById('y').innerText = ans1;
    }
    //binary to hexa
    if (unit1 == "binary" && unit2 == "hex") {
        //binary to decimal
        var ans = ans = b_to_d(num);
        //decimal to octal
        var ans1 = d_to_h(ans);
        document.getElementById('y').innerText = ans1;
    }
    //octa to Binary
    if (unit1 == "octal" && unit2 == "binary") {
        var ans = o_to_d(num);
        var ans1 = d_to_b(ans);
        document.getElementById('y').innerText = ans1;
    }

    //octa to Hexa
    if (unit1 == "octal" && unit2 == "hex") {
        var ans = o_to_d(num);
        var ans1 = d_to_h(ans);
        document.getElementById('y').innerText = ans1;
    }

    //hexa to binary
    if (unit1 == "hex" && unit2 == "binary") {
        var ans = h_to_d(num);
        var ans1 = d_to_b(ans);
        document.getElementById('y').innerText = ans1;
    }

    //hexa to octa
    if (unit1 == "hex" && unit2 == "octal") {
        var ans = h_to_d(num);
        var ans1 = d_to_o(ans);
        document.getElementById('y').innerText = ans1;
    }

    //=======================Function===============================================================//

    // function Decimal to bineary
    function d_to_b(num) {
        var ans = "";
        while (num > 0) {

            ans = num % 2 + ans;
            num = parseInt(num / 2);
        }
        return ans;
    }

    //function Binary To Decimal:-
    function b_to_d(num) {
        //num to arr
        var myArr = String(num).split("").map((num) => {
            return Number(num)
        })

        var count = 1;
        var ans = 0;
        for (var i = myArr.length - 1; i >= 0; i--) {

            if (myArr[i] == 1) {
                ans = ans + count;
            }
            count = count * 2;
        }
        return ans;

    }

    //function decimal to hexadecimal
    function d_to_h(num) {
        var ans = "";
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        function convert(num) {
            while (num > 0) {
                var left = num % 16;
                ans = arr[left] + ans;
                num = parseInt(num / 16);
            }
            return ans;
        }
        var ans1 = convert(num);

        return ans1;

    }

    //function decimal to octal
    function d_to_o(num) {
        var ans = "";
        while (num > 0) {
            ans = num % 8 + ans;
            num = parseInt(num / 8);
        }
        return ans;
    }

    //function hexa to decimal
    function h_to_d(num) {

        // var ans = 0;
        // var myArr = String(num).split("").map((num) => {
        //     return Number(num)
        // })
        // var count = 1;
        // for (var i = myArr.length - 1; i >= 0; i--) {
        //     ans = ans + myArr[i] * count;
        //     count = count * 16;
        // }

        // console.log(ans);
        // return ans;
        var ans = parseInt(num, 16);
        return ans;

    }

    //function octa to decimal
    function o_to_d(num) {
        var myArr = String(num).split("").map((num) => {
            return Number(num)
        })
        var count = 1;
        var ans = 0;
        for (var i = myArr.length - 1; i >= 0; i--) {

            if (myArr[i] != 0) {
                ans = ans + myArr[i] * count;
            }
            count = count * 8;
        }
        return ans;
    }

}

function fromChange(){
    var unit1 = document.getElementById("unit1").value;

    if(unit1 == "binary"){
        document.getElementById("inputLabel").innerHTML = "Binary Number";
    }
    if(unit1 == "decimal"){
        document.getElementById("inputLabel").innerHTML = "Decimal Number";
    }
    if(unit1 == "hex"){
        document.getElementById("inputLabel").innerHTML = "Hexadecimal Number";
    }
    if(unit1 == "octal"){
        document.getElementById("inputLabel").innerHTML = "Octal Number";
    }
}

function toChange(){
    var unit2 = document.getElementById("unit2").value;

    //document.getElementById("ansUnit").innerHTML = unit2;
    if(unit2 == "binary"){
        document.getElementById("ansUnit").innerHTML = "Binary Number";
    }
    if(unit2 == "decimal"){
        document.getElementById("ansUnit").innerHTML = "Decimal Number";
    }
    if(unit2 == "hex"){
        document.getElementById("ansUnit").innerHTML = "Hexadecimal Number";
    }
    if(unit2 == "octal"){
        document.getElementById("ansUnit").innerHTML = "Octal Number";
    }

}

// Enter Function
const enter = document.getElementById("x");

enter.addEventListener('keypress', (e) =>{
    //console.log(e);
    if(e.key == 'Enter'){
        convert();
    }
})

