import { useState } from "react";

function Post() {
  function getDate() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  console.log(Date());

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentDate] = useState(getDate());

  return (
    <>
      <div className={"grid lg:grid-cols-2 grid-rows-2 bg-[#EDF7FA]"}>
        {/*place-items-center*/}
        <div className={"p-4 grid lg:grid-cols-2 "}>
          <div className={"bg-white p-4 text-justify col-start-2"}>
            <h3 className={"font-bold mb-4"}>
              Making a design system from <br /> scratch
            </h3>
            <h5 className={"mb-2"}>{currentDate}</h5>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam
              <br /> consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className={"p-4 grid lg:grid-cols-2 break-all"}>
          <div className={"bg-white p-4 text-justify col-end-2 "}>
            <h3 className={"font-bold mb-4"}>
              Creating pixel perfect icons in Figma
            </h3>
            <h5 className={"mb-2"}>{currentDate} </h5>
            <p className={""}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
