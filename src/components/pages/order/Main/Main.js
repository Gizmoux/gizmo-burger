import { useContext, useState } from "react"
import styled from "styled-components"
import OrderContext from "../../../../context/OrderContext"
import { theme } from "../../../../theme"
import Admin from "./Admin/Admin"
import Menu from "./Menu"

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isAddSelected, setIsAddSelected] = useState(true)
  const [isEditSelected, setIsEditSelected] = useState(false)

  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && (
          <Admin
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            isAddSelected={isAddSelected}
            setIsAddSelected={setIsAddSelected}
            isEditSelected={isEditSelected}
            setIsEditSelected={setIsEditSelected}
          />
        )}
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;

  /* .basket {
    background: pink;
  } */

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`
