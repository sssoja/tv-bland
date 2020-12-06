import Link from "next/link";
import Padding from "../styles/Padding";

const Header = () => {
  return (
    <Padding p={[3, 3, 3, 6]}>
      <h2>
        <Link href="/">
          <a>
            <h1>TV Bland</h1>
          </a>
        </Link>
      </h2>
    </Padding>
  );
};

export default Header;
