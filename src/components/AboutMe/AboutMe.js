import React from 'react';

function About(){
    return (
        <section className="relative pt-12">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <h3 className="text-3xl font-semibol text-gray-700">About Me</h3>
              <p className="mt-4 text-lg leading-relaxed text-black-700">
              My name is Annalisa Bauer. I am a 27 year old student in the University of Arizona Coding Boot Camp. I currently live in the Phoenix Metropolitan area and I have live in Arizona for 17 years. I am married to my husband of 4 years and have two dogs and two cats. In my downtime I enjoy hiking, traveling, and photography.
I recently decided on a career change from the mortgage home loan industry to web development. I was in the mortgage industry for six years and I am excited for this new challenge that web development will bring. My goal with this course would be to hopefully get my foot in the door in the web development world. I have a passion for code and I am eager to learn.
            </p>
            </div>
          </div>
        </div>
        </section>
    )
}

export default About;