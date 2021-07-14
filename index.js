// a = document.querySelector(".F_T_one").addEventListener("click", Myprogram);

// function Myprogram() {
//     document.querySelector(".indie_ele_item").classList.contains("indie_one") ? alert("yes") : alert("no")


// }


// a = document.querySelector(".F_T_one").addEventListener("click", Myprogram);

// function Myprogram() {

//     if (document.querySelector(".indie_ele_item").contains("disappear")) {
//         document.querySelector(".indie_ele_item").classList.remove("disappear")
//     }
//     else {
//         alert("yo")
//     }



// }


document.querySelector(".F_T_one").addEventListener("click", magician)


function magician() {
    var a = document.getElementById("indie_one")
    if (a.style.display === "none") {
        document.getElementById("indie_one").style.display = "block";
    }
    else {
        document.getElementById("indie_one").style.display = "none";
    }


}

