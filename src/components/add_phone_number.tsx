import { useContext } from "react";
import { PhoneItemContext } from "../context/context";

export const AddPhoneNumber = () => {
  const context = useContext(PhoneItemContext);
  const { state } = context;
  return (
    <div className="bg-pink-100 rounded-none p-6 border-2 border-black">
      <h2 className="text-2xl font-bold text-black mb-4 font-serif tracking-wide">
        Add New Contact
      </h2>
    </div>
  );
};
