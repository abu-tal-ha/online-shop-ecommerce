import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-200">
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        {/* <div className='container mx-auto p-4'>
 <p className='text-center font-bold' title="Youtube Channel"> Coding with Amit</p>
</div> */}
        <Link to="/" className="flex">
          <div className="flex">
            <h1 className="text-2xl font-bold text-black px-2 py-1 rounded">
              Abu Talha
            </h1>
          </div>
        </Link>

        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          © 2025 ecommerce —
          <a
            href="mailto:mabutalha468@gmail.com"
            className="text-gray-600 ml-1"
          >
            mabutalha468@gmail.com
          </a>
        </p>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.facebook.com/md.abu.tal.ha.206"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-500"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>

          <a
            href="https://x.com/talha2064"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-500 hover:text-red-500"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>

          <a
            href="https://github.com/abu-tal-ha"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-500 hover:text-red-500"
          >
            <FaGithub className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/abu-talha-/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-500 hover:text-red-500"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
