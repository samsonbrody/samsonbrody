import React from "react";

function Projects() {
  return (
    <div
      id="projects"
      className="w-screen bg-[#02111B] flex items-center justify-center pb-10"
    >
      <div className="flex-col flex justify-center items-center max-w-4xl mx-6">
        <h3 className="text-[#77ACA2] font-Inter mt-10 text-3xl font-light">
          Projects
        </h3>
        <FadeInWhenVisible>
          <Link href="https://holocyne.vercel.app">
            <motion.img
              src="/Screen Shot 2023-02-12 at 10.09.52 PM.png"
              alt="shoes project"
              className=" object-scale-down mb-10 mt-10 hover:opacity-80 cursor-pointer transition-all duration-200"
            />
          </Link>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Link href="https://shoez.vercel.app/allproducts">
            <motion.img
              src="/shoes.png"
              alt="shoes project"
              className=" object-scale-down mb-10 mt-10 hover:opacity-80 cursor-pointer transition-all duration-200"
            />
          </Link>
        </FadeInWhenVisible>
        <div className="mt-10 flex space-x-4">
          <Link href="https://github.com/samsonbrody">
            <BsGithub
              className="text-indigo-500 cursor-pointer hover:opacity-30"
              size={20}
              opacity="40%"
            />
          </Link>
          <Link href="https://www.instagram.com/samson_brody/">
            <BsInstagram
              className="text-indigo-500 cursor-pointer hover:opacity-30"
              size={20}
              opacity="40%"
            />
          </Link>
          <Link href="https://twitter.com/samson_brody">
            <BsTwitter
              className="text-purple-500 cursor-pointer hover:opacity-30"
              size={20}
              opacity="40%"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
