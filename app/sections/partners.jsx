const PartnersSection = () => {
    return (
      <section className="py-[7rem] md:py-40">
        <div className="container mx-auto">
          <h2 className="text-6xl md:text-8xl max-w-7xl text-left font-regular   mx-auto  px-3 ">Nossos <span className=" text-[var(--main)]">Parceiros</span> </h2>
          <div className="flex mx-auto flex-col md:flex-row justify-center align-middle gap-10 md:gap-20 mt-10">
            <div className="w-[250px] md:w-[400px] rounded-lg p-4 mx-auto flex justify-center">
              <img 
                src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/flssjn9ry9wj0evwyenz" 
                alt="Logo 1" 
                className="mx-auto"
              />
            </div>
            <div className="mx-auto w-[250px] md:w-[350px] rounded-lg p-4 flex justify-center">
              <img 
                src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/iypvt1sujt0rnhbmqb7s" 
                alt="Logo 2" 
                className="mx-auto"
              />
            </div>
            <div className="mx-auto w-[250px] md:w-[350px] rounded-lg p-4 flex justify-center">
              <img 
                src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/xyxzrfb28zmimc60r1wp" 
                alt="Logo 3" 
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PartnersSection;