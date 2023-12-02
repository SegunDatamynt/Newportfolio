import Picture from "../assets/manimage.jpg";

function JobsSection() {
  return (
    <div className={"p-4 justify-center"}>
      <h4 className={"mt-4 mb-8 text-center "}>Featured Works</h4>
      <div>
        <div className={"lg:flex lg:justify-center"}>
          <div className={""}>
            <img
              alt={"feat image"}
              className={
                "lg:ml-[148px] lg:mr-[18px] radius-[6px] justify-center"
              }
              src={Picture}
              width={339}
              height={230}
            />
          </div>
          <div className={"break-all"}>
            <h3 className={"mb-[16px] text-[24px] font-semibold p-2"}>
              Designing Dashboards
            </h3>
            <p className={"mb-[17px] color-[#8695A4] font-[20px]"}>Dashboard</p>
            <p className={""}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <hr
          style={{
            color: "",
            background: "",
            height: "3px",
            marginLeft: "9em",
            borderColor: "",
            marginTop: "1em",
            marginBottom: "3em",
            marginRight: "19em",
          }}
        />
      </div>
    </div>
  );
}

export default JobsSection;
