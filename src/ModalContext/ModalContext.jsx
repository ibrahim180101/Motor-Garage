import { createContext, useContext, useState } from "react";
import Navbar from "../Shared/NavBar";
import { MdClose } from "react-icons/md";

const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 duration-500 bg-black/60 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white relative max-h-[90vh] overflow-y-auto p-8 rounded-xl shadow-xl lg:w-1/2 w-[90%]"
            onClick={(e) => e.stopPropagation()}
            >
            <div>
                <h2 className="text-center font-bold text-4xl text-[#292929] mb-4">Book an Appointment</h2>
                <p className="text-center text-black-base text-lg">Schedule your service online and get real-time updates via ShopMonkey. We'll confirm your appointment shortly.</p>
            </div>
            <div className="absolute top-3 right-3 cursor-pointer hover:bg-red-secondary hover:text-white duration-500 p-3 border rounded-full" onClick={closeModal}>
                <MdClose className="text-3xl"></MdClose>
            </div>

            <form className="flex flex-col mt-8 gap-4">
                <div className="flex flex-col gap-3">
                    <label className="text-base text-black-accent">Name</label>
                    <input className="py-4 px-4 bg-[#e9e6e6bf] outline-red-secondary rounded-lg" type="text" name="name" required placeholder="Enter Your Name" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-3">
                        <label className="text-base text-black-accent">Phone Number</label>
                        <input className="py-4 outline-red-secondary px-4 bg-[#e9e6e6bf] rounded-lg" type="text" required name="number" placeholder="Enter Your Phone Number" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-base text-black-accent">Email</label>
                        <input className="py-4 outline-red-secondary px-4 bg-[#e9e6e6bf] rounded-lg" type="email" required name="email" placeholder="Enter Your Email" />
                    </div>
                </div>
                <div>
                    <h4 className="text-base text-black-accent">Vehicle Details</h4>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div className="flex flex-col gap-3">
                            <label className="text-base text-black-accent">Year</label>
                            <input className="py-4 outline-red-secondary px-4 bg-[#e9e6e6bf] rounded-lg" type="text" required name="number" placeholder="Enter Year" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-base text-black-accent">Make</label>
                            <input className="py-4 outline-red-secondary px-4 bg-[#e9e6e6bf] rounded-lg" type="text" required name="number" placeholder="Toyota" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-base text-black-accent">Model</label>
                            <input className="py-4 outline-red-secondary px-4 bg-[#e9e6e6bf] rounded-lg" type="text" required name="number" placeholder="2025" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="text-base text-black-accent">Select Service Type</label>
                    <input className="py-4 outline-red-secondary px-4 bg-[#e9e6e6bf] rounded-lg" type="text" required name="number" placeholder="Select Service Type" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-3">
                        <label className="text-base text-black-accent">Preferred Date</label>
                        <input className="py-4 w-full outline-red-secondary px-4 bg-[#e9e6e6bf] rounded-lg" type="text" required name="number" placeholder="Preferred Date" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-base text-black-accent">Preferred Date</label>
                        <input className="py-4 w-full outline-red-secondary px-4 bg-[#e9e6e6bf] rounded-lg" type="text" required name="number" placeholder="Preferred Date" />
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="text-base text-black-accent">Additional Notes</label>
                    <textarea rows={4} cols={4} className="py-4 w-full outline-red-secondary px-4 bg-[#e9e6e6bf] rounded-lg" type="text" required name="number" placeholder="ender Your Message" />
                </div>
                <div>
                    <p className="text-base
                     text-black-base">Submitting this form means you agree to receive booking and service notifications.</p>
                </div>
                <div>
                    <button className="common-btn w-full">Send Message</button>
                </div>
            </form>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};
