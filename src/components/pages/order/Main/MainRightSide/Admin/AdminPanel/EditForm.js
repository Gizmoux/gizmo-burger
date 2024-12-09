import { useContext, useState } from "react";
import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../../context/OrderContext";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import Button from "../../../../../../reusable-ui/Button";
import { getInputTextsConfig } from "./inputTextConfig";
import TextInput from "../../../../../../reusable-ui/TextInput";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";

export default function EditForm() {
  const { ProductSelected } = useContext(OrderContext);

  const inputTexts = getInputTextsConfig(ProductSelected);
  const [productBeingEdited, setProductBeingEdited] = useState(EMPTY_PRODUCT);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductBeingEdited({ ...productBeingEdited, [name]: value });
  };

  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={ProductSelected.imageSource}
        title={ProductSelected.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {/* {isSubmitted && <SubmitMessage />} */}
      </div>
    </EditFormStyled>
  );
}
const EditFormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    /* background: blue; */
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      /* width: 50%; */
      height: 100%;
    }
  }
`;
