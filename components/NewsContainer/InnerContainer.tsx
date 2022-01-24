import { FaEllipsisV } from "react-icons/fa";
import dayjs from "dayjs";
import policeImg from "../../public/images/images.jpeg";
import Image from "next/image";
import { NewsDataProps } from "../../pages";
import Link from "next/link";

type InnerContainerProps = {
  data: NewsDataProps | undefined;
};

const InnerContainer = ({ data }: InnerContainerProps) => {
  const modalHandle = () => {};
  return (
    <>
      <div className="author">
        <div className="source">{data?.source.replace(".com", "")}</div>
        <div className="icons">
          <FaEllipsisV />
        </div>
      </div>

      <div className="title">
        <a href={data?.url} target="_blank" rel="noreferrer">
          {data?.title}
        </a>
      </div>
      <div className="image">
        <a href={data?.url} target="_blank" rel="noreferrer">
          <img
            src={data?.image_url}
            alt="police"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>

      <div className="footer">
        <div className="publish-time">
          <div>
            {dayjs(data?.published_at).format("ddd DD MMM YYYY; HH:MM ZZ")}
          </div>
          <div>{data?.locale}</div>
        </div>
        <div className="tags">
          {data?.categories.map((cat) => (
            <div key={cat}>#{cat}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InnerContainer;
