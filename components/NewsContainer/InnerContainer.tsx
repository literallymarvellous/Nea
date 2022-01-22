import { FaEllipsisV } from "react-icons/fa";
import dayjs from "dayjs";
import policeImg from "../../public/images/images.jpeg";
import Image from "next/image";
import { NewsDataProps } from "../../pages";

type InnerContainerProps = {
  data: NewsDataProps | undefined;
};

const InnerContainer = ({ data }: InnerContainerProps) => {
  return (
    <>
      <div className="author">
        {/* <div className="source">{data?.source.name}</div> */}
        <div className="icons">
          <FaEllipsisV />
        </div>
      </div>

      <div className="title">{data?.title}</div>
      <div className="image">
        <img
          src={data?.image_url}
          alt="police"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="footer">
        <div className="publish-time">
          <div>
            {dayjs(data?.published_at).format("ddd DD MMM YYYY; HH:MM ZZ")}
          </div>
          <div>{data?.locale}</div>
        </div>
        {/* <div className="tags">
          {data?.categories.map((cat) => (
            <div key={cat}>#{cat}</div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default InnerContainer;
