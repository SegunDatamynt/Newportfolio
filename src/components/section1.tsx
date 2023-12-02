import ManImage from "../assets/manimage.jpg";

function SectionOne() {
  return (
    <>
      <div className={"lg:flex"}>
        <div className={""}>
          <img
            className={"rounded-full lg:mt-12 mx-auto mb-8"}
            src={ManImage}
            alt={"man house"}
            height={200}
            width={200}
          />
        </div>
        <div className={""}>
          <div className={""}>
            <h3 className={"text-center text-3xl font-bold"}>
              Hi, I am John,
              <br /> Creative Technologist{" "}
            </h3>
            <p className={"break-all p-4 mt-4 text-center"}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <div className={"text-center mt-[27px] mb-[58px]"}>
              <button className={"bg-[#FF6464] p-2 w-[208px] h-[47px]"}>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
