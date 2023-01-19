

var nrProduse = 0;
function addProduct(){
    let product = document.getElementById('product').value;
    if (!product)
    return;
    const text = "<li class='product'>" +
    product + "<span id='"+nrProduse+"'>Sterge</span></li>"
    document.getElementById('list').insertAdjacentHTML('beforeend',text)
    document.getElementById('product').value = '';
    nrProduse =nrProduse + 1;
    if (typeof(Storage) !== "undefined" ){
        localStorage.setItem(nrProduse,text);
        localStorage.setItem('numarProduse', nrProduse);
    }
}
const button = document.getElementById('add');
button.addEventListener("click",addProduct);

document.getElementById('list').addEventListener('click',function(event){
    const element = event.target;
    element.classList.toggle("done");    
});

window.onload = function () {
    var nr =(localStorage.getItem('numarProduse'));
    let i;
    if (typeof(Storage) !=="undefined" && nr>0) {
        nrProduse = Number(nr);
        for (i = 1; i<= nr; i++){
            document.getElementById("list").insertAdjacentHTML('beforeend', localStorage.getItem(i));
        }
    }
    else{
        nrProduse=0;
    }
};

document.getElementById('list').addEventListener('dblclick', function(event){
    const element = event.target;
    let storageKey = Number(element.id) + 1;
    alert(nrProduse)
    nrProduse = nrProduse - 1;
    localStorage.removeItem(storageKey)
    // localStorage.setItem('numarProduse',nrProduse);    
    location.reload()
});