import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#334155] mt-14">
      <div className="w-full max-w-7xl mx-auto pt-12 pb-6">
        <div className="grid grid-cols-6 gap-12 pb-12">
          <div className="col-span-12 md:col-span-1">
            <p className="text-2xl sm:text-[28px] font-bold leading-9 mb-4 sm:mb-0 text-white">
              <span className="text-primary text-white">Food Supply</span>{" "}
              <br />
              <span className="font-thin text-sm">Management</span>
            </p>
          </div>

          <div className="col-span-12 md:col-span-1">
            <ul className="">
              <li className="text-base font-medium leading-4 py-3 text-white">
                Product
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Pricing
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Overview
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Browse
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Accessibility
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-1">
            <ul className="">
              <li className="text-base font-medium leading-4 py-3 text-white">
                Solutions
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Brainstorming
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Ideation
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Wireframing
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Research
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-1">
            <ul className="">
              <li className="text-base font-medium leading-4 py-3 text-white">
                Resources
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Help Center
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Blog
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Tutorials
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                FAQs
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-1">
            <ul className="">
              <li className="text-base font-medium leading-4 py-3 text-white">
                Support
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Contact Us
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Developers
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Documentation
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Integrations
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-1">
            <ul className="">
              <li className="text-base font-medium leading-4 py-3 text-white">
                Company
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                About
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Press
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0]">
                Events
              </li>
              <li className="text-base font-normal leading-4 py-3 text-[#E2E8F0] flex items-center">
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary h-[1px] w-full max-w-[1250px]"></div>

        <p className="py-6 flex items-center justify-center text-[#E2E8F0] text-xs md:text-base font-normal leading-snug">
          @ 2023. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
