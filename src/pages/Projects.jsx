import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { CTA, Footer, Loader } from "../components";
import { Canvas } from "@react-three/fiber";
import { Coins } from "../models";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";
import Pig from "../assets/images/pig.png";
import LST from "../assets/images/LST.png";
import RST from "../assets/images/RST.png";
import HURS from "../assets/images/hursey.png"


const Projects = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)] ">
        <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins text-rose">
          Our Team:
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-300">
          <p className="">
            Our team of skilled developers, designers, and digital strategists
            work collaboratively to transform ideas into compelling online
            experiences. With a passion for technology and a commitment to
            excellence, we bring a fresh and dynamic approach to every web
            development project.
          </p>
        </div>

      {/* Company Values */}
        <div className="py-16">
          <h3 className="font-semibold sm:text-3xl text-2xl relative font-poppins text-rose">
            Company Value Proposition:
          </h3>
          <p className="mt-5 flex flex-col gap-3 text-slate-300">
            At Allison Web Consultants, we go beyond creating stunning websites;
            we're dedicated to growing your revenue. Our services are
            strategically designed to enhance your online presence, attract a
            wider audience, and convert visitors into loyal customers. By
            leveraging the power of cutting-edge web development and innovative
            digital solutions, we ensure that your business not only stands out
            in the crowded online landscape but also experiences tangible
            growth. Partner with us, and let TechWeb Innovations be the catalyst
            that propels your business to new heights, unlocking the full
            potential of your online success. Your growth is our priority, and
            we are committed to delivering results that positively impact your
            bottom line.
          </p>
        </div>

        {/* Coins */}
        <div className="relative h-[500px] w-full ">
          <Canvas
            camera={{
              position: [0, 0.5, 3],
            }}
          >
            <Suspense fallback={<Loader />}>
              <Coins position={[0, -2.5, 0]} scale={2} />
              <EffectComposer>
                <Bloom
                  intensity={0.3}
                  luminanceThreshold={0.7}
                  luminanceSmoothing={0.9}
                  height={300}
                />
              </EffectComposer>
            </Suspense>
          </Canvas>
        </div>

        {/* Projects */}
        <div className="pt-16">
          <h3 className="font-semibold sm:text-3xl text-2xl relative font-poppins text-rose">
            Some of our clients include:
          </h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-300">
             Each project reflects our commitment to
            excellence in web development and creating impactful solutions for
            our clients.
          </div>
        </div>

        {/* Projects map*/}
        <div className="flex flex-wrap my-10 gap-10">
         
            <div className="lg:w-[400px] w-full">
              <div className="block-container w-102 h-72">
                
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={Pig}
                    alt="Project icon"
                    className="w-15 h-15 object-contain"
                    
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h3 className="text-xl font-poppins font-semibold text-rose">
                  North Carolina BBQ Hall of Fame
                </h3>
                

              </div>
            </div>
            <div className="lg:w-[400px] w-full">
              <div className="block-container w-102 h-72">
                
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={LST}
                    alt="Project icon"
                    className="w-15 h-15 object-contain"
                    
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h3 className="text-xl font-poppins font-semibold text-rose">
                  Liberty Showcase Theater
                </h3>
                

              </div>
            </div>
            <div className="lg:w-[400px] w-full">
              <div className="block-container w-102 h-72">
                
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={RST}
                    alt="Project icon"
                    className="w-15 h-15 object-contain"
                    
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h3 className="text-xl font-poppins font-semibold text-rose">
                  Reidsville Showcase Theater
                </h3>
                

              </div>
            </div>
            <div className="lg:w-[400px] w-full">
              <div className="block-container w-102 h-72">
                
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={HURS}
                    alt="Project icon"
                  className="w-15 h-15 object-contain"
                  style={{display:"flex",justifyContent:"center",marginRight:"40px"}}
                    
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h3 className="text-xl font-poppins font-semibold text-rose">
                  Hursey's BBQ
                </h3>
                

              </div>
            </div>
        
        </div>

        <hr className="border-rose" />

        {/* Contact */}
        <CTA />
      </section>
      <Footer />
    </>
  );
};

export default Projects;
