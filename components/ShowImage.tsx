import Link from "next/link";

interface ShowImageProps {
  title: string;
  src: string;
  show: string;
  alt: string;
}

const ShowImage = ({ title, src, show }: ShowImageProps) => {
  const image = <img src={src} alt={`Cover Image for ${title}`} />;
  return (
    <div>
      {show ? (
        <Link as={`/shows/${show}`} href="/shows/[show]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default ShowImage;
