/* TODO: create testimonial section here */

function Testimonial() {
  const testimonialArray = [
    {
      id: "01",
      name: "Subhash Sharma",
      info: "I am extremely happy with the services offered by Scelebration. They have a professional team with lot of soft attitude. Most of the time, I was relaxing with family and all the arrangements were done without any effort of mine. I wish Scelebration all the best for future. I will recommend them for sure.",
    },
    {
      id: "02",
      name: "Ankit Rai",
      info: "We had an International conference to be held in Udaipur and I was the in-charge. We got Scelebration recommended by someone and we trusted them. Today we own an award of best conference. Thank you Vipul and team. You guys rock!",
    },
    {
      id: "03",
      name: "Vihaan Shrivastava",
      info: "The Occasion was the first birthday of my son and I wanted it to be spectacular. I keep busy and my wife was in the US. So I had to opt for a planner. We got in touch with Scelebration and were amazed at their services. They are not just planners or arrangers, they are counselors. Their representative worked with me and despite short time frames from my side, she managed it beautifully. Scelebration got it all awesome and my entire family loved it.",
    },
    {
      id: "04",
      name: "Nivedita Patra",
      info: "I have been living in Jaipur for past 10 years and have attended scores of events but the way Scelebration operates is extraordinary. Each of the part of their work is so planned that you can have a feel of high-end event at your end. Best thing is that they stay prepared for any possible issue.",
    },
  ];
  return (
    <section>
      <div className='container py-16 text-center'>
        <h2 className='heading text-7xl'>What They Say About Us?</h2>
        <h5 className='sub-heading'>Our Business is making memory.</h5>
        <div className=' md:grid md:grid-cols-2 mt-14 gap-6'>
          {testimonialArray.map((item) => (
            <div key={item?.id} className='bg-white mb-4 md:mb-0 px-8 py-12 space-y-6'>
              <div className='flex items-center'>
                <img
                  className='pr-16'
                  src='https://scelebration.com/wp-content/uploads/elementor/thumbs/testimonial-user-2-p5h2gfgwfr8tap8482wxqyrlj7871zlwdclhayvihk.png'
                  alt=''
                />
                <h5 className=' text-xl font-Overlock text-sub font-bold'>
                  {item?.name}
                </h5>
              </div>
              <p className=' text-sub-p font-semibold font-Karla text-justify'>
                {item?.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
