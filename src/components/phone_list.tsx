import { useContext } from "react";
import { PhoneItemContext } from "../context/context";
import { PhoneItem } from "./phone_item";

export const PhoneList = () => {
  const context = useContext(PhoneItemContext);
  const { state } = context;

  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-[#6FCCE8]">
      <div className="grid gap-6">
        {state.contacts.map((contact) => (
          <PhoneItem key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};
