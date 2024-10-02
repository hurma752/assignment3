import Link from "next/link";
import Image from "next/image";
import myImage from "@/app/linkedin.png";
import myImage1 from "@/app/github.png";
import myImage2 from "@/app/instagram.png";
export default function Footer() {
  return (
    
    <div className="footer">
      <ul className="social-icons">
        <li>
          <Link
            href="https://www.linkedin.com/in/hurma-zafar-4391982b4/"
            target="_blank"
          >
            <Image src={myImage} alt="LinkedIn" />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/hurma752" target="_blank">
            <Image src={myImage1} alt="GitHub" />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/hurma_zafar" target="_blank">
            <Image src={myImage2} alt="Instagram" />
          </Link>
        </li>
        <p className="footer-text">© 2024 Hurma Zafar. All rights reserved.</p>
      </ul>
    </div>
  );
}


