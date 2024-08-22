import { listFeatures } from "../../datas";
import Slider from "./Slider";

const HomePages = () => {
  return (
    <>
      <main>
        <section>
          <div className="container flex flex-col md:flex-row items-center md:py-24 sm:px-4 lg:px-0">
            <div className="w-full relative xl:h-[640px]">
              <div className="text-center md:text-left xl:absolute z-10">
                <h1
                  className="xl:max-w-[700px] xl:text-[80px] sm:text-[40px] sm:text-center xl:text-start
                  mb-6 md:mb-12 aos-init aos-animate title-color leading-[1.1]"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  {" "}
                  Save your data storage here.
                </h1>
                <p
                  className="text-lg font-medium color-primary xl:max-w-[380px] mb-6 lg:mb-12 aos-init
                  sm:text-center xl:text-start"
                  data-aos="fade-down"
                  data-aos-delay="500"
                >
                  Data Warehouse is a data storage area that has been tested for
                  security, so you can store your data here safely but not be
                  afraid of being stolen by others.
                </p>
                <div className="sm:flex sm:justify-center xl:justify-start">
                  <button
                    className="mb-8 xl:mb-0 aos-init
                    xl:w-[168px] sm:w-[152px] h-[59.63px] bg-primary flex justify-center text-white
                    items-center gap-x-[20px] rounded-[50px] text-lg px-4"
                    data-aos="fade-down"
                    data-aos-delay="600"
                    data-aos-duration="1500"
                  >
                    Learn more
                  </button>
                </div>
              </div>
              <div
                className="xl:w-[769px] xl:absolute xl:right-0 xl:top-[150px] md:top-[200px] aos-init aos-animate z-0"
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="1500"
              >
                <img
                  src="https://warehouse-blue.vercel.app/static/media/hero-img.d06ff33bd5f804baba29.png"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container sm:px-4 lg:px-0">
            <div className="text-center">
              <h2
                className="text-[40px] title-color font-bold mb-6 xl:mb-12 aos-init aos-animate"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                Features
              </h2>
              <p
                className="text-lg font-medium color-primary max-w-[584px] mx-auto mb-16 xl:mb-24 aos-init aos-animate"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                Some of the features and advantages that we provide for those of
                you who store data in this Data Warehouse.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:gap-[50px] sm:gap-5">
              {listFeatures.map((listFeature, i) => (
                <div
                  key={i}
                  className="w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-offset={100}
                  data-aos-delay={400}
                >
                  <div className="sm:hidden xl:flex absolute top-0 right-0 bottom-0 -z-10">
                    <img src={listFeature.backgroundImage} />
                  </div>
                  <div
                    className="max-w-[120px] xl:mr-7 xl:max-w-[228px] aos-init aos-animate"
                    data-aos="zoom-in-right"
                    data-aos-delay={400}
                  >
                    <img src={listFeature.imageFeature} />
                  </div>
                  <div className="max-w-[216px]">
                    <h3 className="mb-4 text-2xl font-normal title-color">
                      {listFeature.title}
                    </h3>
                    <p className="font-light italic mb-4 text-base color-primary">
                      {listFeature.description}
                    </p>
                    <div className="flex items-center gap-x-2 group">
                      <a
                        className="text-primary font-bold title-color transition-all group-hover:text-[#9c69e2]"
                        href="#"
                      >
                        Learn more
                      </a>
                      <svg
                        stroke="currentColor"
                        fill="#9c69e2"
                        strokeWidth={0}
                        viewBox="0 0 16 16"
                        className="text-xl text-accent-primary group-hover:ml-[5px] transition-all"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="container sm:px-4 lg:px-0">
            <div
              className="bg-primary flex justify-center items-center min-h-[800px] rounded-[50px] aos-init aos-animate my-[120px] sm:px-3 md:px-5 xl:px-0"
              data-aos-offset="300"
              data-aos="fade-up"
            >
              <div className="w-full">
                <div className="flex justify-center">
                  <h1 className="xl:w-[931px] text-white text-[40px] font-bold">
                    Testimonials
                  </h1>
                </div>
                <Slider />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePages;
