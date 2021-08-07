import React,{useEffect} from 'react'
import Slider from '../components/Home/HeaderSlider';
import PolicyDetail from '../components/Home/PolicyDetail';
import LatestProduct from '../components/Home/LatestProduct';
import Brands from '../components/Home/Brands';

function Home() {
    useEffect(() => {
        document.querySelectorAll('.slick-arrow').forEach((arrow)=>{
          console.log(arrow)
          arrow.textContent = ''
        })
      }, [])
    return (
        <>
            <Slider />
            <PolicyDetail />
            <LatestProduct />
            <Brands />
        </>
    )
}

export default Home
