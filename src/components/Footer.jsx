import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" text-white w-full">
      <div className="max-w-[1240px] py-16 px-4 grid lg:grid-cols-3">
        <div>
          <h2 className="text-3xl font-bold text-[#00df9a]">REACT</h2>
          <p className="py-4 mr-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            dignissimos, cupiditate temporibus iure similique quo sunt nesciunt
            dolor voluptatibus repudiandae?
          </p>
          <div className="flex justify-between gap-2 md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>

         <div className="lg:col-span-2 flex justify-between mt-6 ">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="text-sm py-2">Analytics</li>
              <li className="text-sm py-2">Marketing</li>
              <li className="text-sm py-2">Commerce</li>
              <li className="text-sm py-2">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="text-sm py-2">Pricing</li>
              <li className="text-sm py-2">Documentation</li>
              <li className="text-sm py-2">Guides</li>
              <li className="text-sm py-2">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="text-sm py-2">About</li>
              <li className="text-sm py-2">Blog</li>
              <li className="text-sm py-2">Jobs</li>
              <li className="text-sm py-2">Press</li>
              <li className="text-sm py-2">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="text-sm py-2">Claims</li>
              <li className="text-sm py-2">Policy</li>
              <li className="text-sm py-2">Terms</li>
            </ul>
          </div>
         
          </div>
        </div>
      </div>
  );
};

export default Footer;
