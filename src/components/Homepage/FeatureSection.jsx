import { features } from "/src/constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] mt-[130px]">
      <div className="text-center">
        {/* <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Events
        </span> */}
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        What we{" "}
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          stand for!
        </span>
      </h2>
        
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 m-0.2">
            <div className="flex hover:bg-neutral-900 hover:rounded-3xl hover:border hover:border-neutral-800 p-4">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-green-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-left">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500 text-left">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
