import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";


const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/chiran-vdanagamage-b218202a5/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/VgcMalhara" Icon={FiGithub} />
      <SingleContactSocial link="https://web.facebook.com/chiranmalhara.vidanagamage/" Icon={FaFacebook} />
    </div>
  );
};

export default ContactSocial;
