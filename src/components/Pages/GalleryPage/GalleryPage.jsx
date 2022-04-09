import React from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Common from "../../Share/Common";

const GalleryPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const imgArray1 = [
    "https://scelebration.com/wp-content/uploads/2021/04/Aditi-weds-Gaurav-5-scaled.jpg",
    "https://scelebration.com/wp-content/uploads/2021/04/Aditi-weds-Gaurav-7-scaled.jpg",
    "https://scelebration.com/wp-content/uploads/2021/04/Aditi-weds-Gaurav-6-scaled.jpg"

  ]
  return (
    <>
      <Common text="Gallery" pra='A Portrait Is Not Made X
                        On The Camera But X
                        On Either Side Of It.' img='http://scelebration.com/wp-content/uploads/2021/03/Gaurav-weds-Aditi-Scelebration.com-5-scaled.jpg' />
      <section className='bg-bg-color py-16'>
        <div className='container '>
          <h2 className='heading text-6xl text-center'>Aditi weds Gaurav</h2>
          <div className=" md:w-full m-auto lg:w-8/12 mt-6 relative after:absolute after:left-0 after:-bottom-9 after:w-full after:h-px after:bg-slate-500 before:content-['★'] before:left-1/2 before:-bottom-12 before:absolute before:text-2xl before:z-20 before:text-gray-400 before:bg-bg-color before:w-10 before:text-center ">
            <Slider {...settings}>
              {
                imgArray1.map((item, i) => (
                  <img className="h-1/2 rounded-md" key={i} src={item} alt="" />
                ))
              }

            </Slider>
            <div className="lg:columns-3 sm:columns-2 columns-1 md:gap-4 mt-8 space-y-4">
              <img src="https://scelebration.com/wp-content/uploads/2021/04/Aditi-weds-Gaurav-17-2048x1367.jpg" alt="" />
              <img src="https://scelebration.com/wp-content/uploads/2021/04/Aditi-weds-Gaurav-16-2048x1367.jpg" alt="" />
              <img src="https://scelebration.com/wp-content/uploads/2021/04/Aditi-weds-Gaurav-15-scaled.jpg" alt="" />
            </div>

          </div>
        </div>
        <div className='container mt-24 '>
          <h2 className='heading text-6xl text-center'>Rashi weds Shekar</h2>
          <div className=" md:w-full m-auto lg:w-8/12 mt-6 relative after:absolute after:left-0 after:-bottom-9 after:w-full after:h-px after:bg-slate-500 before:content-['★'] before:left-1/2 before:-bottom-12 before:absolute before:text-2xl before:z-20 before:text-gray-400 before:bg-bg-color before:w-10 before:text-center ">
            <Slider {...settings}>
              {
                imgArray1.map((item, i) => (
                  <img className="h-1/2 rounded-md" key={i} src={item} alt="" />
                ))
              }

            </Slider>
            <div className="lg:columns-3 sm:columns-2 columns-1 md:gap-4 mt-8 space-y-4">
              <img src="https://scelebration.com/wp-content/uploads/2021/04/Rashi-weds-Shekar-6-scaled.jpg" alt="" />
              <img src="https://scelebration.com/wp-content/uploads/2021/04/Rashi-weds-Shekar-4-scaled.jpg" alt="" />
              <img src="https://scelebration.com/wp-content/uploads/2021/04/Aditi-weds-Gaurav-15-scaled.jpg" alt="" />
            </div>

          </div>
        </div>
        <div className='container mt-24 '>
          <h2 className='heading text-6xl text-center'>Jhinjha weds Jandu</h2>
          <div className=" md:w-full m-auto lg:w-8/12 mt-6 relative after:absolute after:left-0 after:-bottom-9 after:w-full after:h-px after:bg-slate-500 before:content-['★'] before:left-1/2 before:-bottom-12 before:absolute before:text-2xl before:z-20 before:text-gray-400 before:bg-bg-color before:w-10 before:text-center ">
            <Slider {...settings}>
              {
                imgArray1.map((item, i) => (
                  <img className="h-1/2 rounded-md" key={i} src={item} alt="" />
                ))
              }

            </Slider>
            <div className="lg:columns-3 sm:columns-2 columns-1 md:gap-4 space-y-4 mt-8">
              <img src="https://scelebration.com/wp-content/uploads/2021/04/Jhinjha-weds-Jandu-10-1024x683.png" alt="" />
              <img src="https://scelebration.com/wp-content/uploads/2021/04/Jhinjha-weds-Jandu-9-1024x683.png" alt="" />
              <img src="https://scelebration.com/wp-content/uploads/2021/04/Jhinjha-weds-Jandu-8-1024x683.png" alt="" />
            </div>

          </div>
        </div>
        <div className='container mt-24 '>
          <h2 className='heading text-6xl text-center'>Jhinjha weds Jandu</h2>
          <div className=" md:w-full m-auto lg:w-8/12 mt-6 relative after:absolute after:left-0 after:-bottom-9 after:w-full after:h-px after:bg-slate-500 before:content-['★'] before:left-1/2 before:-bottom-12 before:absolute before:text-2xl before:z-20 before:text-gray-400 before:bg-bg-color before:w-10 before:text-center ">
          
            <div className=" md:flex  space-y-4 md:space-y-0 "> 
              <img className="md:w-2/3 w-full  md:pr-4" src="https://scelebration.com/wp-content/uploads/2021/04/Jhinjha-weds-Jandu-10-1024x683.png" alt="" />
              <div>
                <img className="pb-2" src="https://scelebration.com/wp-content/uploads/2021/04/Jhinjha-weds-Jandu-9-1024x683.png" alt="" />
                <img className="pt-2" src="https://scelebration.com/wp-content/uploads/2021/04/Jhinjha-weds-Jandu-9-1024x683.png" alt="" />
              </div>
           </div>
            <div className=" md:flex pt-4 space-y-4 md:space-y-0 "> 
            <div>
                <img className="pb-2 w-full" src="https://scelebration.com/wp-content/uploads/2021/04/Jhinjha-weds-Jandu-9-1024x683.png" alt="" />
                <img className="pt-2 w-full" src="https://scelebration.com/wp-content/uploads/2021/04/Jhinjha-weds-Jandu-9-1024x683.png" alt="" />
              </div>
              <img className="md:w-2/3 md:pl-4   w-full" src="https://scelebration.com/wp-content/uploads/2021/04/Jhinjha-weds-Jandu-10-1024x683.png" alt="" />
              
           </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
