// add items to the cart
var num_of_items=0;
function addCartItem() {
    num_of_items = num_of_items + 1;
    console.log(num_of_items);
    alert("Number of Items: " + num_of_items);
}




//Change view style CSS
var view = "grid";
let grid = document.getElementById("grid");
let list = document.getElementById("list");
let proList = document.getElementById("pc-list");
let proGrid1 = document.getElementById("pc-grid1");
let proGrid2 = document.getElementById("pc-grid2");
let proGrid3 = document.getElementById("pc-grid3");
function changeView() {
    if (view == "grid") {
        //Change to list view
        list.style.backgroundColor = "rgb(253, 245, 223)";
        grid.style.backgroundColor = "#ffffff";
        proList.style.display = "block";
        proGrid1.style.display = "none";
        proGrid2.style.display = "none";
        proGrid3.style.display = "none";
        view = "list";
    } else {
        //Change to grid view
        grid.style.backgroundColor = "rgb(253, 245, 223)";
        list.style.backgroundColor = "#ffffff";
        proList.style.display = "none";
        proGrid1.style.display = "flex";
        proGrid2.style.display = "flex";
        proGrid3.style.display = "flex";
        view = "grid";
    }
}

grid.style.backgroundColor = "rgb(253, 245, 223)";
list.style.backgroundColor = "#ffffff"

