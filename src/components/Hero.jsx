/* TODO: create hero section here */

function Hero() {
  return (
    <section className="w-full h-full bg-hero bg-fixed bg-cover bg-no-repeat relative after:absolute after:bg-slate-100
    after:opacity-80  after:left-0 after:top-0 after:w-full after:h-full z-10">
      <div className='container'>
        <div className="w-11/12  sm:w-8/12 md:w-6/12 lg:w-4/12 flex flex-col m-auto items-center text-center text-xl justify-center h-screen space-y-5">
          <h1 className="heading text-7xl">We turn dreams into reality</h1>
          <p className="text-text-p z-20 font-medium text-2xl font-Overlock">Scelebration is the best and well-known event planners in India and does its best to plan your wedding according to your desire and make it the most happening event of your lives.</p>
          <button className="btn">CONTACT US</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
