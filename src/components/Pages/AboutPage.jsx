import React from 'react';
import Common from '../Share/Common';

const AboutPage = () => {
    return (
        <>
            <Common text="About Us" pra="Our Business Is X Memory Making" img="https://scelebration.com/wp-content/uploads/elementor/thumbs/about-us-scaled-p5h2gej8tqn4r4n2jjtpj339rr781zwolxq8zcfyqo.jpg" />
            <section className='bg-bg-color py-16'>
                <div className='container space-y-4 py-12 px-24 bg-white'>
                    <h1 className='heading text-6xl'>Who we are</h1>
                    <p className='font-semibold text-slate-500'>If we simply put it, we’re professionals with heart! <br /><br />

                        We might get listed as Wedding Planner or Event Manager but we are above these mediocre terms. We’re Counselors. We do all what others do but in a different way. We simply instill life in your celebration and you will say, Superb Celebration it is. <br />
                        <br />
                        For any event we work for, we take the perspective of the person who would be most interested in making that event spectacular. A wedding for example is a father’s pride and we work the way father would. This makes it easier for us to ensure the best of best among services. We know that budgets are limited so we reach out to places where we get best deals but our focus remains on quality–unmatched quality. <br /><br />

                        So you can start with a nearby restaurant and can stretch upto Jag Mandir of Udaipur for a royal wedding, we can help you get it done easily. <br />

                        We’re a bunch of people who congregated on a same motto to create spectacular events. We are self-driven individuals who work as a gelled team. We create ideas out of nowhere and then brainstorm. From the main entrance design to the corner which will be least visible, we work on each and every part with a thorough plan.</p>
                    <div className='flex justify-around items-center'>
                        <div className='text-center'>
                            <h3 className='sub-heading'>Location</h3>
                            <p className='font-semibold text-gray-600'>32 A, Dhuleshwar Garden, <br />
                                C-Scheme, <br />
                                Jaipur – 302001

                            </p>
                        </div>
                        <div className='text-center'>
                            <h3 className='sub-heading'>Contacts</h3>
                            <p className='font-semibold text-gray-600'>+91 98294 44440 <br />
                                contact@scelebration.com

                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-16 '>
                <div className='container px-24 space-y-4'>
                    <h2 className='heading text-6xl'>Our Founder</h2>
                    <p className='font-semibold text-slate-500'>Coming from the background of  Gems & Jewelers, our founder Mr. Vipul Mittal has started Scelebration in 2012 with the vision to completely take the stress off the lovely to-be-wed couples and their family, to let them enjoy and cherish every second of their vows and new beginnings. For him Scelebration isn’t a business; it is a reliable shoulder people can lean on when planning to tie a knot.
                        <br /><br />
                        With experience in all types of events and expertise in the wedding, he had completed 120 happy weddings and embraced some amazing memories, and now he is on the mission to make Scelebration Jaipur’s biggest event company by spreading abundance of happiness and love.</p>
                </div>
            </section>
          

        </>
    );
};

export default AboutPage;