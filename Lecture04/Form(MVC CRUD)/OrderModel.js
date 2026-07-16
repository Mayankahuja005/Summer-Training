//model file:-it'll repersent data layer, it'lll store data and behaviour performed on data
class OrderModel{
    constructor(){//helps to initialize the objects while creations
        this.orders=[];
        this.nextId=1;
    }
    //Read all orders
    getAllOrders(){
        return this.orders;
    }
    getOrderById(id){
        return this.orders.find((order)=>order.id===id);
    }
    //delete
    deleteOrder(id){
        this.orders=this.orders.filter((order)=>order.id!==id);
    }
    //create order
    addOrder(orderData){
        const newOrder={
            id:this.nextId++,
            ...orderData
        }
        this.orders.push(newOrder);
        return newOrder;
    }
    //update order
    updateOrder(id, updatedData){
        const order=this.getOrderById(id);
        if(order){
            Object.assign(order,updatedData);
        }
        return order;
    }
    //search
    searchOrders(query){
         return this.orders.filter((order) => order.customerName.toLowerCase().includes(query.trim().toLowerCase()) ||
          order.itemName.toLowerCase().includes(query.trim().toLowerCase()))
    }
    
    sortOrders(direction){
        if(direction === 'asc'){
            return this.orders.toSorted((a,b)=>a.price-b.price)
        }else if(direction === 'desc'){
            return this.orders.toSorted((a,b)=>b.price-a.price)
        }
        return this.orders;
    }

}