import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter-sign.png";

function Socialmedia() {
  return (
    <div>
      {/*className={"grid grid-cols-4 mb-6 mt-6"}*/}
      <div className={"flex justify-center gap-6 mb-10 mt-[150px]"}>
        {/*className={"col-start-3 mt-10 mb-6 flex gap-6"}*/}
        <img
          alt={"Linkedin"}
          src={Linkedin}
          className={""}
          height={"50"}
          width={"50"}
        />
        <img
          alt={"Linkedin"}
          src={Twitter}
          className={""}
          height={"50"}
          width={"50"}
        />
      </div>
      <p className={"break-all p-4"}>Copyright ©2020 All rights reserved </p>
    </div>
  );
}

export default Socialmedia;
