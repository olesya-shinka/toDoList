"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { CiHome } from "react-icons/ci";
import { MdNotificationImportant } from "react-icons/md";
import { MdIncompleteCircle } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const handleClick = (link: string) => {
    router.push(link);
  };

  const selectedName = usePathname();

  return (
    <Styles>
      <div className="profile">
        <div className="profile-above"></div>
        <CgProfile />
        <h2>
          <span>Olesya</span>
          <span>Shinkarenko</span>
        </h2>
      </div>
      <ul className="sidebar-items">
        <li className={`sidebar-item`} onClick={() => handleClick}>
          <Link href={`/`}>
            <CiHome />
          </Link>
        </li>
        <li className={`sidebar-item`} onClick={() => handleClick}>
          <Link href={`/important`}>
            <MdNotificationImportant />
          </Link>
        </li>
        <li className={`sidebar-item`} onClick={() => handleClick}>
          <Link href={`/incomplete`}>
            <MdIncompleteCircle />
          </Link>
        </li>
        <li className={`sidebar-item`} onClick={() => handleClick}>
          <Link href={`/completed`}>
            <MdDoneOutline />
          </Link>
        </li>
      </ul>
    </Styles>
  );
}
const Styles = styled.nav`
  background-color: grey;
  position: relative;
  width: 200px;
  border: 1px solid;
  border-radius: 1rem;
  box-shadow: 3px 2px 5px darkgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .profile {
    margin: 1.3rem;
    padding: 1rem 0.8rem;
    position: relative;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .profile-above {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdpop-filter: blur(10px);
  }
`;

export default Sidebar;
