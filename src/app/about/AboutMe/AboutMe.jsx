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
        style={{ width: "19rem", margin: "2rem", background: "#cfd2d5" }}
      >
        <Image
          src="/Image/shivamPic.png"
          className="card-img-top"
          alt="my_image"
          width={150}
          height={350}
          background={"#cfd2d5"}
        />
        {/* <Image
          src="/Image/shivam.jpg"
          className="card-img-top"
          alt="my_image"
          width={150}
          height={350}
          background={"#cfd2d5"}
        /> */}
        <div className="card-body" style={{ background: "#fff" }}>
          <h4 className="card-title text-center" style={{fontWeight:"800"}}>
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
