class OrderController{
    constructor(model,view){
        this.model=model;
        this.view=view;

        this.view.bindFormSubmit(this.handleAddOrUpdate.bind(this));
        this.view.bindCancelEdit(this.handleCancelEdit.bind(this));
        this.view.bindTableBody(this.handleEditClick.bind(this), this.handleDeleteClick.bind(this));
        this.view.bindSearch(this.handleSearch.bind(this));
        this.view.bindSort(this.handleSort.bind(this));
        this.refreshView();
    }
    refreshView(){
        const orders = this.model.getAllOrders()

        this.view.renderOrders(orders)
    }
    handleAddOrUpdate(){
        const formData = this.view.getFormData()

        if(!formData.customerName || !formData.itemName || !formData.quantity || !formData.price || !formData.status){
            alert("all fields are mandatory")
            return
        }

        const editingId = this.view.getEditingId()

        if(!editingId){
            this.model.addOrder(formData)
        }else{
            this.model.updateOrder(editingId, formData)
        }
        this.view.resetForm()
        this.refreshView()
    }
    handleCancelEdit(){
        this.view.resetForm()
    }

    handleEditClick(id){
        console.log("clicked id is: ", id)
        const order = this.model.getOrderById(id)
        console.log("Order is:", order)
        this.view.fillFormForEdit(order)
    }

    handleDeleteClick(id){
        this.model.deleteOrder(id)
        this.refreshView()
    }

    handleSearch(){
        const query = this.view.getSearchQuery()
        const searchedOrders = this.model.searchOrders(query)
        this.view.renderOrders(searchedOrders)

    }

    handleSort(){
        const direction = this.view.getSortDirection()
        const sortedOrders = this.model.sortOrders(direction)
        this.view.renderOrders(sortedOrders)
        
    }

}