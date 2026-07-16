class OrderView{

    constructor(){
        this.formEl = document.getElementById('order-form')
        this.orderIdInput = document.getElementById('orderId')
        this.customerInput= document.getElementById('customerName')
        this.itemInput =document.getElementById('itemName')
        this.qtyInput =document.getElementById('quantity')
        this.priceInput =document.getElementById('price')
        this.statusInput =document.getElementById('status')
        this.submitBtn =document.getElementById('submit-btn')
        this.cancelBtn =document.getElementById('cancel-btn')
        this.tableBody=document.getElementById('order-table-body')
        this.searchInput = document.getElementById('searchBox')
        this.sortInput = document.getElementById('sort-select')
    }

    getFormData(){
        return{
            customerName: this.customerInput.value.trim(),
            itemName: this.itemInput.value.trim(),
            quantity: Number(this.qtyInput.value),
            price: Number(this.priceInput.value),
            status: this.statusInput.value
        }
    }
    
    fillFormForEdit(order){
        this.customerInput.value = order.customerName,
        this.itemInput.value = order.itemName,
        this.orderIdInput.value = order.id,
        this.priceInput.value = order.price,
        this.qtyInput.value = order.quantity
        this.statusInput.value = order.status

        this.submitBtn.textContent = 'Update Order'
        this.cancelBtn.style.display = 'inline-block'
    }

    resetForm(){
        this.formEl.reset()
        this.submitBtn.textContent = 'Add Order'
        this.cancelBtn.style.display = 'none' 
        this.orderIdInput.value = '';
    }

    getEditingId(){
        return this.orderIdInput.value ? Number(this.orderIdInput.value) : null
    }

    getSearchQuery(){
        return this.searchInput.value //returns value wriiten in serachbox
    }

    getSortDirection(){
        return this.sortInput.value
    }

    renderOrders(orders){

        this.tableBody.innerHTML = ``
        if(orders.length === 0){
            this.tableBody.innerHTML = `
            <tr>
                <td>No orders as such, go get a life!</td>
            </tr>
            `
            return;
        }

        orders.forEach((order)=>{
            const row = document.createElement('tr')

            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.customerName}</td>
                <td>${order.itemName}</td>
                <td>${order.quantity}</td>
                <td>${order.price}</td>
                <td>${order.status}</td>
                <td>
                    <button class='edit-btn' data-id = '${order.id}'>Edit</button> 
                    <button class='delete-btn' data-id = '${order.id}'>Delete</button>
                </td>`
            this.tableBody.appendChild(row)
        })
    }

    bindFormSubmit(handler){
        this.formEl.addEventListener('submit', (e)=>{
            console.log(e);
            e.preventDefault()
            handler()
        })
    }

    bindCancelEdit(handler){
        this.cancelBtn.addEventListener('click', ()=>{
            handler()
        })
    }

    bindTableBody(onEdit, onDelete){
        this.tableBody.addEventListener('click', (e)=>{
            console.log("Table Event", e)
            console.log("Table event target", e.target)
            console.log("Table Event Target Datase", e.target.dataset)

            const id = Number(e.target.dataset.id);

            console.log("in view bindTableBody", id)

            if(!id){
                return;
            }

            if(e.target.classList.contains('edit-btn')){
                onEdit(id);
            }
            else if(e.target.classList.contains('delete-btn')){
                if(confirm("pakka delete karduu....")){
                    onDelete(id);
                }
            }
        })
    }

     bindSearch(handler){

        this.searchInput.addEventListener('input', ()=>{
        const query = this.getSearchQuery()
        handler(query)
        handler()
        })
    }
    
    bindSort(handler){
        this.sortInput.addEventListener('change', ()=>{
            handler()
        })
    }

}