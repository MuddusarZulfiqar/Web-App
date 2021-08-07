import Swal from 'sweetalert2'
import { EditCart } from './EditCart';
export const addToCart = (productId,Quantity,product)=>{
    const cartData = {
        id : productId,
        quantity:Quantity,
        title: product.title,
        image: product.image,
        category: product.category,
        price: product.price,
        shareprice: product.shareprice,
        detail:product.detail,
        avalible:product.avalible
    }
    fetch(`http://localhost:3004/cart`).then((response) => response.json()).then((data) => {
            const response = data;
            console.log('Cart Data',response)
            const updateCart =  response.find((cartItem)=> cartItem.id === productId);
            localStorage.setItem('CardItems', JSON.stringify(data));
            const productTotalArr =  response.map((product)=>{
                return product.quantity * product.price
            }).reduce( (acc,val)=>{
                return acc+val
             },0);
             console.log("Product Total from cart",productTotalArr)
            //  localStorage.setItem('CartTotal', JSON.stringify(productTotalArr));
            if(Quantity==0){
                fetch('http://localhost:3004/cart/' + productId, {
                    method: 'DELETE',
                })
                .then(res => res.text()) // or res.json()
                .then(res => {
                    Swal.fire({
                        title:`Product is remove from cart`,
                        text:'',
                        icon:'success'
                    }).then((result)=>{
                        const url = window.location.href
                        url.replace('#','')
                        window.location.href = url
                    })
                })
                
            }
            else{
                if(updateCart === undefined){
                    fetch('http://localhost:3004/cart', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                            body: JSON.stringify(cartData),
                        })
                        .then(response => {
                            if (response.ok) {
                            }
                            response.json()
                        })
                        .then(data => {
                            Swal.fire({
                                title:`Product is Add to cart !`,
                                text:'Goto Cart and update the Product',
                                icon:'success'
                            }).then((result)=>{
                                const url = window.location.href;
                                window.location.href = url
                            })
                            console.log('Success:', data);
                        })
                        .catch((error) => {
                            Swal.fire(
                                `${error}`,
                                '',
                                'error'
                            )
                            console.error('Error:', error);
                        });
                        
                }
                else{
                    EditCart(productId,Quantity,product)
                }   
            }
            
        })
        .catch((error) => {
            Swal.fire(
                `${error}`,
                '',
                'error'
                )
        });
}