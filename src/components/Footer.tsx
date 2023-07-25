import { Icons } from "@/components/Icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 text-slate-300 shadow-lg dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-2 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © 2023
          <a
            target="_blank"
            href="/"
            className="mx-1 hover:underline"
          >
            code space
          </a>
          . All Rights Reserved.
        </span>

        <ul className="mt-3 flex flex-wrap items-center gap-4 text-sm font-medium md:mt-0">
         
          <li>
            <a
              target="_blank"
              href="https://github.com/riad-azz"
              className="hover:underline"
            >
              Open source project by riad-azz
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
