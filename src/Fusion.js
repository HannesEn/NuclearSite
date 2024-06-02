// src/Fusion.js
import React from 'react';

function Fusion() {
  return (
    <div style={{ padding: '20px', textAlign: 'left', color: '#e0e0e0' }}>
      <h2 style={{ color: '#ff9e80' }}>Nuclear Fusion</h2>
      <p>
      Although nuclear fusion might seem complicated it passed around the simple concept that we can add or fuse two smaller elements together to form a larger one. And in the process energy is released. It was first discovered in the 1930s as the process that powers the sun and stars.
      </p>
      <p>
      Yet there arises our first challenge. When we try to fuse two nuclei we come across electromagnetic repulsion due to the positively charged protons within the nucleus of each atom. This means that we will require a lot of energy to push two elements together
      </p>
      <p>
      But pushing individual atom pairs together one at a time would be terribly inefficient and quite difficult to do.
      </p>
      <p>
      Thus some very smart humans have thought of another way. We can ionise the elements, giving them a net positive charge, and then heat them up to form plasma. One of the four states of matter.
      </p>
      <p>
      Due to the ionisation, extremely powerful magnets can be used to contain the plasma, and compress it further, thus becoming even hotter. The magnets also keep the plasma off the reactor walls, as it now would be able to instantly melt any substance in the universe.
      </p>
      <p className='vid'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/b8l43hrDcJ8?si=Z_HM_8poiePx-BOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </p>
      <p>
      As we compress the plasma the nuclei start to move incredibly fast making their speed alone enough to smash through the electromagnetic repulsion.
      </p>
      <p>
      The atoms which we decide to fuse play a major part in how efficient our reaction will be. Most reactors use two isotopes of hydrogen. We could use regular hydrogen, but the energy output would be less. If we fuse two regular hydrogen atoms we also risk getting helium-2 as the product which is unstable and almost instantly decays back to two hydrogen atoms.
      </p>
      <p>
      Instead we want to use deuterium and tritium, two other isotopes of hydrogen which almost always for helium-4 in the process. This releases a lot of energy. When adjusted for mass it releases 4 times more than a nuclear fission event. Helium is also a very useful byproduct compared to the radioactive material that we get from nuclear fission. Helium has many applications from cooling superconductors to airships to rockets. And helium is not abundant, thus humanity having a way of producing it is quite useful.
      </p>
      <p>
      So we can perform nuclear fusion. But at the moment we are inputting more energy than we are getting out making it more of a science experiment and less of an energy source.
      </p>
      <p>
      Deuterium is heavy water and makes up about 0.02% percent of the ocean and can be extracted relatively easily. The problem is tritium which is very rare, but we have found a way to produce it right within the fusion reactor. High energy neutrons released during fusion reactions can be aimed at lithium which has a very high likelihood of splitting into tritium and helium. These neutrons are able to escape the magnetic confinement due to their neutral charge. These neutrons are then used for the mentioned secondary tritium reaction and to be converted into heat.
      </p>
      <p>
      Nuclear fusion is powering the universe in the form of stars. We just need to figure out how we can do it on earth. And I believe we will. Each and every day thousands of talented people work towards this goal. Once we get there, every person on this planet will have access to nearly abundant and fully reliable energy with no fear of nuclear proliferation, accidents or black outs. Industries that were previously too energy consuming like large scale water distillation will become the norm providing the whole world with clean and nearly limitless drinking water. Industries requiring lots of heat like steel manufacturing can be completely electrified and space crafts could travel up to 12% the speed of light and take humans faster and further than ever before. Helping us set up colonies on mars, explore the moons of Jupiter and venture into interstellar space. One day humans will look up at an alien night sky struggling to identify our sun amidst a sea of stars, and remember that it all began with nuclear fusion.
      </p>
      <p>
        Besides goverments there are also some eager companies working on nuclear fusion. One of them is <a href='https://www.tokamakenergy.co.uk/'>Tokamak Energy</a> which is based in the UK. They are working on a compact fusion reactor that could be used to power cities. Another company is <a href='https://www.iter.org/'>ITER</a> which is an international collaboration to build the world's largest fusion reactor in France. They are working on a tokamak reactor which is a doughnut shaped reactor that uses magnetic fields to contain the plasma. 
      </p>
      <p className='vid'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4BkOUOK0XzM?si=8N8kOKcIGdpLNU9u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </p>
      <p>
      Or the american based <a href='https://www.helionenergy.com/'>Helion</a> which is using a completly new approach to fusion.
      </p>
      <p className='vid'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_bDXXWQxK38?si=KLGlZQA2-jb_s7Dh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </p>
      <p>
        As you can see there are many ways to achieve nuclear fusion and many people are working on it. It is only a matter of time before we have a working fusion reactor.
      </p>
    </div>
  );
}

export default Fusion;
