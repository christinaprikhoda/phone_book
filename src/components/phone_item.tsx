import { useContext } from "react";
import { IPhoneItem, Types } from "../types";
import { PhoneItemContext } from "../context/context";
import { deleteContact } from "../context/api";

interface IPhoneItemProps {
  contact: IPhoneItem;
}

export const PhoneItem: React.FC<IPhoneItemProps> = ({ contact }) => {
  const context = useContext(PhoneItemContext);
  const { dispatch } = context;

  const handleDelete = async (id: string) => {
    await deleteContact(id);
    dispatch({ type: Types.DELETE_PHONE_NUMBER, payload: id });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-[#6FCCE8] hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xl font-serif font-bold text-[#EB88D1] mb-2">
            {contact.name}
          </p>
          <p className="text-[#6FCCE8] font-mono">{contact.phoneNumber}</p>
        </div>
        <button
          onClick={() => handleDelete(contact.id)}
          className="px-4 py-2 text-sm font-medium text-white bg-[#EB88D1] rounded hover:bg-[#d174ba] transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
