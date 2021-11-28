import { Link } from "remix";

import RemixLogo from "./RemixLogo";

export default function Navbar(): JSX.Element {
  return (
    <nav className="py-2 w-full flex flex-row justify-between content-center">
      <Link to="/" title="Remix" className="remix-app__header-home-link">
        <RemixLogo />
      </Link>
      <ul className="flex gap-10 text-lg">
        <li className="flex content-center">
          <Link to="/">Home</Link>
        </li>
        <li className="flex content-center">
          <Link to="/about">About</Link>
        </li>
        <li className="flex content-center">
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}
