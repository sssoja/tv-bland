import Show from "../pages/shows/[show]";

type ShowProps = {
  title: string;
};

const urlDecoded = ({ title }: ShowProps) => {
  let removeWhiteSpace = title.replace(/\s/g, "");
  let url_enc = `/shows/${removeWhiteSpace}`;
  return decodeURIComponent(url_enc);
};

export default urlDecoded;
