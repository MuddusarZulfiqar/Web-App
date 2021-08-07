import React,{useState,useEffect} from 'react'

function Footer() {
    const [user, setuser] = useState('')
    const [isUser, setisUser] = useState(false);
    const setLocalstorage = (response)=>{
        localStorage.setItem('CardItems', JSON.stringify(response));
    }
    useEffect(() => {
        fetch('http://localhost:3004/subscribe')
            .then((response) => response.json())
            .then((data) => {
                let response = data;
                
                
            })
            .catch((error) => console.log(error.message));
    }, [isUser])
    // Example POST method implementation:
       const postData = (data)=>{
        
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        xmlhttp.open("POST", "http://localhost:3004/subscribe");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(data));
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4) {
                var response = JSON.parse(xmlhttp.responseText);
                if (xmlhttp.status === 200) {
                    alert(`Thanks for Join Us ${data.name}`)
                console.log('successful');
                } else {
                console.log('failed');
                }
            }
        }       
       }
        const sendSubs = (event)=>{
            event.preventDefault();
            let datas = {name:user}
            fetch('http://localhost:3004/subscribe')
            .then((response) => response.json())
            .then((data) => {
                let response = data;
               const avalible =  response.find((email)=>{
                    return datas.name === email.name
                });
                if(avalible==undefined){
                    postData(datas)
                    alert('Now you are a user');
                    setLocalstorage(response)
                    
                    setisUser(!isUser)
                }
                else{
                    alert('You are already a user')
                    setisUser(!isUser)
                }
                console.log(avalible)
            })
            .catch((error) => console.log(error.message));
            setuser('')
        }
    return (
        <>
            <div className="footer-top-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-about-us">
                                <h2>u<span>Stora</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at?</p>
                                <div className="footer-social">
                                    <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-twitter"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="footer-menu">
                                <h2 className="footer-wid-title">User Navigation </h2>
                                <ul>
                                    <li><a href="#">My account</a></li>
                                    <li><a href="#">Order history</a></li>
                                    <li><a href="#">Wishlist</a></li>
                                    <li><a href="#">Vendor contact</a></li>
                                    <li><a href="#">Front page</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="footer-menu">
                                <h2 className="footer-wid-title">Categories</h2>
                                <ul>
                                    <li><a href="#">Mobile Phone</a></li>
                                    <li><a href="#">Home accesseries</a></li>
                                    <li><a href="#">LED TV</a></li>
                                    <li><a href="#">Computer</a></li>
                                    <li><a href="#">Gadets</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="footer-newsletter">
                                <h2 className="footer-wid-title">Newsletter</h2>
                                <p>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                                <div className="newsletter-form">
                                    <form onSubmit={sendSubs}>
                                        <input required value={user} onChange={(e)=>setuser(e.target.value)} type ="email" placeholder="Type your email" />
                                        <input type ="submit" value="Subscribe" />
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="copyright">
                                    <p>&copy; 2015 uCommerce. All Rights Reserved. <a href="http://www.freshdesignweb.com" target="_blank">freshDesignweb.com</a></p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="footer-card-icon">
                                    <i className="fa fa-cc-discover mx-1"></i>
                                    <i className="fa fa-cc-mastercard mx-1"></i>
                                    <i className="fa fa-cc-paypal mx-1"></i>
                                    <i className="fa fa-cc-visa mx-1"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
}
export default Footer
