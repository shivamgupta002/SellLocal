import React from "react";
import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const AboutMe = () => {
  return (
    <>
      <div
        className="card"
        style={{ width: "18rem", margin: "2rem", background: "#cfd2d5" }}
      >
        <Image
          src="/Image/shivamPic.png"
          className="card-img-top"
          alt="my_image"
          width={150}
          height={320}
          background={"#cfd2d5"}
          //   styles={{ background: "#cfd2d5 !important" }}
        />
        <div className="card-body" style={{background: "#fff"}}>
          <h4 className="card-title font-weight-bold text-center">
            Shivam Gupta
          </h4>
          <p className="card-text text-center">Founder of SellLocal</p>
          <div className="d-flex align-items-center justify-content-center">
            <Link
              href="https://www.linkedin.com/in/shivam-gupta-4b62a0206"
              className="mx-2"
            >
              <LinkedInIcon />
            </Link>
            <Link href="https://www.instagram.com/sell_local24">
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
