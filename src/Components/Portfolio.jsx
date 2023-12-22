/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/aditya's first msft visit.jpg";

const imageAltText = "my first visit to microsoft";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "my linkedIn profile🎉",
    description:
      "here's my linkedIn profile, feel free to connect with me and let's talk about tech and life!",
    url: "https://www.linkedin.com/in/adityashankarkhorne",
  },
  {
    title: "my Instagram profile",
    description:
      "here's my Instagram profile, feel free to connect with me and let's talk about tech and life!",
    url: "https://instagram.com/adityaskhorne?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/adityaSkhorne2401/AdityaShankarKhorne1973.git",
  },
  {
    title: "my You-Tube account",
    description:
      "here's my You-Tube account, feel free to connect with me and let's talk about tech and life!",
    url: "https://youtube.com/@dmadityakhorne6827?si=bKF6RBUPwdtVM9EW",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
