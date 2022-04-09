import React from "react";

const Gallery = () => {
  const imgArray = [
    {
      id: "01",
      img1: "https://scelebration.com/wp-content/uploads/2021/04/Jhinjha-weds-Jandu-2-1024x684.png",
      img2: "https://scelebration.com/wp-content/uploads/2021/04/Jhinjha-weds-Jandu-4-1024x683.png",
      img3: "https://scelebration.com/wp-content/uploads/2021/04/Jhinjha-weds-Jandu-6-1024x683.png",
    },
    {
      id: "02",
      img1: "https://scelebration.com/wp-content/uploads/2021/04/Aditi-weds-Gaurav-12-1024x683.jpg",
      img2: "https://scelebration.com/wp-content/uploads/2021/04/Aditi-weds-Gaurav-13-1024x683.jpg",
      img3: "https://scelebration.com/wp-content/uploads/2021/04/Aditi-weds-Gaurav-15-1024x684.jpg",
    },
    {
      id: "01",
      img1: "https://scelebration.com/wp-content/uploads/2021/04/Aanchal-weds-Samvit-6-1024x575.jpeg",
      img2: "https://scelebration.com/wp-content/uploads/2021/04/Aanchal-weds-Samvit-22-1-1024x682.jpeg",
      img3: "https://scelebration.com/wp-content/uploads/2021/04/Aanchal-weds-Samvit-14-1-1024x576.jpeg",
    },
  ];
  return (
    <section className='bg-bg-color py-16'>
      <div className='container text-center space-y-3'>
        <h1 className='heading text-7xl'>Our Gallery</h1>
        <h5 className='sub-heading'>An event that gives back</h5>
        <div className='bg-white py-8 rounded-lg'>
          <div className=' w-10/12 m-auto grid grid-cols-1 lg:grid-cols-3 gap-8 '>
            {imgArray.map((item) => (
              <div>
                <img
                  className='w-full transform transition duration-300 hover:scale-110 shadow-lg shadow-black rounded-sm '
                  src={item?.img1}
                  alt=''
                />
                <div className='grid grid-cols-2 gap-4  '>
                  <img
                    className='mt-4 transform transition duration-300 hover:scale-110  shadow-lg shadow-black rounded-sm '
                    src={item?.img2}
                    alt=''
                  />
                  <img
                    className='mt-4 transform transition duration-300 hover:scale-110  shadow-lg shadow-black rounded-sm '
                    src={item?.img3}
                    alt=''
                  />
                </div>
              </div>
            ))}
                  </div>
                  <button className="btn mt-8">EXPLORE MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
