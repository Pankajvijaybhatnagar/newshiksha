"use client";
import "./global.css";
import React, { useEffect } from "react";
import { ScrollToTop } from "../components/scroll_to_top/ScrollToTop";
import { HeaderOne } from "../components/headers/HeaderOne";
import { FooterOne } from "../components/footers/FooterOne";
import { Breadcrumb } from "../components/breadcrumb/Breadcrumb";

import "../public/assets/css/jquery-ui.min.css";

export default function RootLayout({ children, header = 1, footer = 1, bodyClass = "", breadcrumbTitle, breadcrumbSubtitle }) {
  useEffect(() => {
    if (bodyClass) {
      document.body.classList.add(bodyClass);
      return () => document.body.classList.remove(bodyClass);
    }
  }, [bodyClass]);

  return (
    <html lang="en">
      <body>
        {/* scroll to top */}
        <ScrollToTop />

        {/* header */}
        {header === 1 && <HeaderOne />}
      

        {/* breadcrumb */}
        {breadcrumbTitle && (
          <Breadcrumb title={breadcrumbTitle} subtitle={breadcrumbSubtitle} />
        )}

        {children}

        {/* footer */}
        {footer === 1 && <FooterOne />}
       
      </body>
    </html>
  );
}
