import Image from "next/image";
import logo_large from "../../../public/images/logo_large.svg";
import logo_small from "../../../public/images/logo_small.svg";
import Link from "next/link";

const GNB = () => {
  return (
    <nav className="wrapper border-b border-slate-200 h-[60px] bg-white">
      <div className="container-layout flex items-center">
        <Link href="/">
          {/* 데스크탑, 태블릿 */}
          <Image
            src={logo_large}
            alt="메인 로고"
            width={151}
            height={40}
            priority
            className="hidden tablet:block"
          />

          {/* 모바일 */}
          <Image
            src={logo_small}
            alt="모바일 로고"
            width={71}
            height={40}
            priority
            className="block tablet:hidden"
          />
        </Link>
      </div>
    </nav>
  );
};

export default GNB;
