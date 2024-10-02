import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <ul className="header-buttons">
        <div className="name-logo">
          <li>HZ</li>
        </div>
        <div className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
        </div>
        <Link href="contact_us">
          <button className="Contact-us-Button">Contact Us</button>
        </Link>
      </ul>
    </div>
  );
}
