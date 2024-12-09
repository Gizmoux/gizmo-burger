import { useContext } from "react";
import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../../context/OrderContext";

export default function EditForm({ AddForm }) {
  const { ProductSelected } = useContext(OrderContext);
  return (
    <div>
      <HintMessage />
      <span>title{ProductSelected && ProductSelected.title}</span>
      <span>price{ProductSelected && ProductSelected.price}</span>
      <span>id{ProductSelected && ProductSelected.id}</span>
    </div>
  );
}
