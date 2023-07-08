let items = localStorage.getItem('itemList')
items = items ? JSON.parse(items) : []
// Operador Ternario
//items = items ? items.split(',') : []
showItem()

function addItem() {
    let pedido = document.getElementById('pedido').value
    let can = document.getElementById('cantidad').value
    let prod = document.getElementById('producto').value
    let valor = document.getElementById('valor').value

    if(pedido && can && prod && valor){
        items.push({ 'Pedido': pedido, 'Cantidad': can,
                     'Producto': prod, 'valor': valor 
                    })
        showItem()
    }
   
}

function showItem() {
    document.getElementById('pedido').value      = ''
    document.getElementById('cantidad').value    = ''
    document.getElementById('producto').value    = ''
    document.getElementById('valor').value       = ''

    let html = ''
    items.forEach((element, i) => {
        html += `<div class="col-4 mb-3"> ${element.Pedido} </div>`
        html += `<div class="col-4 mb-3"> ${element.Cantidad} </div>`
        html += `<div class="col mb-3">   ${element.Producto} </div>`
        html += `<div class="col mb-3">   ${element.valor} </div>`
        html += `<div class="col"> <a href="#" class="btn btn-danger" onclick="deleteItem(${i})"> X </a> </div>`
        
    });

    localStorage.setItem('itemList',JSON.stringify(items))
    document.getElementById('items').innerHTML = html
}
function deleteItem(pedido) {
    items.splice(pedido, 1)
    showItem()
}