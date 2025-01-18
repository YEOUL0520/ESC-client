import { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header
        className="bg-customGray p-4 flex items-center justify-between fixed top-0 left-0 w-full z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="ml-24">로고이미지 들어갈 곳</div>
        
        <nav className="flex-grow text-center">
          <ul className="flex justify-center space-x-20">
            <li>About ESC</li>
            <li>커뮤니티</li>
            <li>마일리지</li>
            <li>마이페이지</li>
          </ul>
        </nav>

        <div className="mr-24">로그인</div>
      </header>

      {isDropdownOpen && (
        <div
          className="fixed top-14 left-0 bg-customGray w-full z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center justify-center h-32">
            {/* About ESC 메뉴 */}
            <ul className="space-y-2 mx-8">
              <li><Link href="/about/introduction">소개</Link></li>
              <li><Link href="/about/organization">조직도</Link></li>
              <li><Link href="/about/schedule">일정</Link></li>
              <li><Link href="/about/contact">CONTACT</Link></li>
            </ul>
            {/* 커뮤니티 메뉴 */}
            <ul className="space-y-2 mx-8">
              <li><Link href="/community/announcements">공지사항</Link></li>
              <li><Link href="/community/free-board">자유게시판</Link></li>
              <li><Link href="/community/info-board">정보게시판</Link></li>
              <li><Link href="/community/honor">명예의 전당</Link></li>
            </ul>
            {/* 마일리지 메뉴 */}
            <ul className="space-y-2 mx-8">
              <li><Link href="/mileage/shop">마일리지샵</Link></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;