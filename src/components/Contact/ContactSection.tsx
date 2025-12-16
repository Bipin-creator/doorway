import { ABOUT_VISION_03 } from "@/constants/imagePath";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:h-screen text-black pl-10 py-4 bg-black">
      {/* LEFT CONTENT */}
      <div className="py-12 md:py-24 px-8 lg:px-20 flex flex-col md:flex-row md:justify-between md:col-span-2 bg-white rounded-l-4xl">
        <h2 className=" font-helveticaNeue text-xl md:text-2xl leading-relaxed mt-14 max-w-xs  md:w-1/2">
          For any enquiries, or just to say hello, get in touch and contact us.
        </h2>

        {/* CONTACT GRID */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-2 gap-y-12 gap-x-10 text-sm md:w-1/2">
          {/* New Projects */}
          <div>
            <p className=" mb-3 font-helveticaNeue tracking-wider text-base">
              New projects
            </p>
            <p className="font-garamondlight tracking-wider">
              The Tech Website
            </p>
            <p className="font-garamondlight tracking-wider">
              thedoorwayTech.com
            </p>
          </div>

          {/* General Inquiries */}
          <div>
            <p className=" mb-3 font-helveticaNeue tracking-wider text-base">
              General inquiries
            </p>
            <p className="font-garamondlight tracking-wider">
              info@thedoorway.com
            </p>
            <p className="font-garamondlight tracking-wider">+977 01565913</p>
          </div>

          {/* Address #1 */}
          <div>
            <p className=" mb-3 font-helveticaNeue tracking-wider text-base">
              Address
            </p>
            <p className="font-garamondlight tracking-wider">
              Kathmandu , <br />
              1205 Buddhanagar, <br />
              Nepal
            </p>
          </div>

          {/* Careers */}
          <div>
            <p className=" mb-3 font-helveticaNeue tracking-wider text-base">
              Careers & Internships
            </p>
            <p className="font-garamondlight tracking-wider">
              jobs@normcph.com
            </p>
          </div>

          {/* Address #2 */}
          <div>
            <p className=" mb-3 font-helveticaNeue tracking-wider text-base">
              Address
            </p>
            <p className="font-garamondlight tracking-wider">
              Snaregade 14, <br />
              1205 København, <br />
              Denmark
            </p>
          </div>

          {/* Social */}
          <div>
            <p className=" mb-3 font-helveticaNeue tracking-wider text-base">
              Follow us
            </p>
            <div className="flex gap-4 ">
              <span>Tw</span>
              <span>Fb</span>
              <span>Ins</span>
              <span>Pin</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative md:h-auto">
        <Image
          src={ABOUT_VISION_03}
          alt="Contact Side Image"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default ContactSection;
