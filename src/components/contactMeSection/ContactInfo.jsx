import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="cmhara1@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+94 70 311 83 27" Image={FiPhone} />
      <SingleInfo text="Matara , Sri Lanka" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
