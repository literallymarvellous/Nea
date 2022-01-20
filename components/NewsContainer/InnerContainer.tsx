import { FaEllipsisV } from "react-icons/fa";
import * as dayjs from "dayjs";
import policeImg from "../../public/images/images.jpeg";
import Image from "next/image";

const InnerContainer = () => {
  return (
    <>
      <div className="author">
        <div className="source">CNN News</div>
        <div className="icons">
          <FaEllipsisV />
        </div>
      </div>

      <div className="title">jupiter as youve never seen it before</div>
      <div className="image">
        <Image src={policeImg} alt="police" width={300} height={200} />
      </div>

      <div className="footer">
        <div className="publish-time">
          <div>10:25GMT</div>
          <div>Atlanta Usa</div>
        </div>
        <div className="tags">
          <div>#politcs</div>
          <div>#police</div>
        </div>
      </div>
    </>
  );
};

export default InnerContainer;
