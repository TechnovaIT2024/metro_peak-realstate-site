"use client";

import NavLinkStyle from "@/utils/NavLinkStyle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  children,
  href,
  exact = false,
  activeClassName,
  ...props
}) => {
  const path = usePathname();
  const active = exact ? path === href : path.startsWith(href);
  const styles = NavLinkStyle(props.className, active && activeClassName);

  if (styles) {
    props.className = styles;
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
