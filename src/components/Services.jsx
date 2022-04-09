/* TODO: create services section here */
import { AiOutlineHeart } from 'react-icons/ai'

function Services() {
  return (
    <section className='py-16'>
      <div className='container text-center'>
        <h2 className='heading text-7xl'>Services</h2>
        <h5 className='sub-heading py-3'>
          We plan & design weddings that <br /> capture the imagination.
        </h5>
        <div className="bg-white py-12 text-left px-8 lg:grid lg:grid-cols-3 gap-4  ">
          <div>
          <div className="space-y-3 mb-8">
            <img className='w-full' src="https://scelebration.com/wp-content/uploads/2021/02/entertainment.png" alt="" />
            <h4 className="sub-heading">Entertainment</h4>
            <p className='text-justify'>Entertainment remains the prime attraction of any event. It actually keeps the main event and people glued. It creates an ambiance that engages guest’s mood with the rest of the things this is why we love to keep our guests entertained.</p>
          </div>
          <div className="space-y-3">
            <img className='w-full' src="https://scelebration.com/wp-content/uploads/2021/02/entertainment.png" alt="" />
            <h4 className="sub-heading">Entertainment</h4>
            <p className='text-justify'>Entertainment remains the prime attraction of any event. It actually keeps the main event and people glued. It creates an ambiance that engages guest’s mood with the rest of the things this is why we love to keep our guests entertained.</p>
          </div>
          </div>
          <div className='flex flex-col justify-center items-center space-y-3 border-solid border-8 border-slate-200 px-4 py-16 mb-8 lg:mb-0'>
            <AiOutlineHeart className='text-5xl text-text-heading' />
            <h2 className='heading  '>Joint Couple Session</h2>
            <p className='text-justify'>The biggest dream of any youngster is marriage because it is a lifetime event. Once guided individually, the Scelebration counselor will make them sit together next to each other and help them feel the magic of togetherness.</p>
            <button className='btn '>BOOK NOW</button>
          </div>
          <div>
          <div className="space-y-3 mb-8">
            <img className='w-full' src="https://scelebration.com/wp-content/uploads/2021/02/entertainment.png" alt="" />
            <h4 className="sub-heading">Entertainment</h4>
            <p className='text-justify'>Entertainment remains the prime attraction of any event. It actually keeps the main event and people glued. It creates an ambiance that engages guest’s mood with the rest of the things this is why we love to keep our guests entertained.</p>
          </div>
          <div className="space-y-3">
            <img className='w-full' src="https://scelebration.com/wp-content/uploads/2021/02/entertainment.png" alt="" />
            <h4 className="sub-heading">Entertainment</h4>
            <p className='text-justify'>Entertainment remains the prime attraction of any event. It actually keeps the main event and people glued. It creates an ambiance that engages guest’s mood with the rest of the things this is why we love to keep our guests entertained.</p>
          </div>
          </div>
          

        </div>
      </div>
    </section>
  );
}

export default Services;
