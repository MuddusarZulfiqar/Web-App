import Swal from 'sweetalert2'

export const EditCart = (id,quantity,product)=>{
    fetch(`http://localhost:3004/cart`).then((response) => response.json()).then((data) => {
        const response = data;
       const updateCart =  response.find((cartItem)=> cartItem.id === id);
        console.log('Product',product.avalible)
        console.log('UpateCart',updateCart.quantity)
        fetch(`http://localhost:3004/cart/${updateCart.id}`, { 
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                    },
                body: JSON.stringify(
                    {
                        "quantity": quantity            
                    }
                )
            });
            Swal.fire({
                title:`Product is Updated !`,
                text:'Goto Cart and update the Product',
                icon:'success',
            }).then((result)=>{
                    const url = window.location.href;
                    window.location.href = url
                })
    })
    // if(product.avalible < updateCart.quantity){
    //     console.log('Cart Must be Update')
    //     // fetch(`http://localhost:3004/cart/${updateCart.id}`, { 
    //     //     method: "PATCH",
    //     //     headers: {
    //     //         "Content-Type" : "application/json"
    //     //         },
    //     //     body: JSON.stringify(
    //     //         {
    //     //             "quantity": updateCart.quantity + Quantity            
    //     //         }
    //     //     )
    //     // });
    //     // Swal.fire({
    //     //     title:`Product is Updated !`,
    //     //     text:'Goto Cart and update the Product',
    //     //     icon:'success',
    //     // }).then((result)=>{
    //     //         const url = window.location.href;
    //     //         window.location.href = url
    //     //     })
    // }
    // else{
    //     console.log('Cart Must be Full')
    //     // fetch(`http://localhost:3004/cart/${updateCart.id}`, { 
    //     //     method: "PATCH",
    //     //     headers: {
    //     //             "Content-Type" : "application/json"
    //     //             },
    //     //             body: JSON.stringify(
    //     //                 {
    //     //                     "quantity": product.avalible            
    //     //                 }
    //     //             )
    //     // });
    //     // Swal.fire(
    //     //     `Product Limit is Reached`,
    //     //     'Goto Cart and update the Product',
    //     //     'error'
    //     //     )
    // }
}