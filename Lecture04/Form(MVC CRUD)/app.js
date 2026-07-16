document.addEventListener('DOMContentLoaded', ()=>{
    const model = new OrderModel();
    const view = new OrderView();
    const controller = new OrderController(model, view)
})