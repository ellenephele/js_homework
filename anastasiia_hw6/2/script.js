var item1 = {
    name: "White T-Shirt",
    imgSrc: "img/item1.png",
    price: 15
};

var item2 = {
    name: "Blue Jacket",
    imgSrc: "img/item2.png",
    price: 30
};

var item3 = {
    name: "Grey Shirt",
    imgSrc: "img/item3.png",
    price: 20
};

var catalogArray = [item1, item2, item3,];

var total = 0;

function init() {
    var catalog = document.getElementsByClassName("catalog")[0];
    var i, item;
    for (i=0;i<catalogArray.length; i++){
        item = document.createElement("div");
        item.setAttribute("class", "catalog_item");

        itemImg = document.createElement("img");
        itemImg.src = catalogArray[i].imgSrc;
        item.appendChild(itemImg);
        
        itemTitle = document.createElement("p");
        itemTitle.textContent = catalogArray[i].name;
        item.appendChild(itemTitle);
        
        itemPrice = document.createElement("p");
        itemPrice.textContent = catalogArray[i].price + "$";
        item.appendChild(itemPrice);

        itemBtn = document.createElement("button");
        itemBtn.textContent = "Add to cart";
        itemBtn.setAttribute("id", "btn_"+i);
        itemBtn.onclick = addItem;
        item.appendChild(itemBtn);

        catalog.appendChild(item);
    }
}

function addItem(obj){
	
    var selectedItem = catalogArray[obj.target.id.split("_")[1]];
    var selectedItems = document.getElementsByClassName("selected_items")[0];
    var tr = selectedItems.insertRow(-1);
    var td = tr.insertCell(-1);
    td.appendChild(document.createTextNode(selectedItem.name));
    var td = tr.insertCell(-1);

    td.appendChild(document.createTextNode("    " + selectedItem.price + "$"));


    total += selectedItem.price;
    document.getElementsByClassName("total")[0].textContent = "Total: " + total + "$";    
}
window.onload = init;