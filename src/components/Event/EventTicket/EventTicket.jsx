import React, { useEffect, useState, useContext } from "react";
import HeaderTicket from "./HeaderTicket";
import HomeNavConatiner from "./HomeNavContainer";
import StructureDrawer from "./StructureDrawer";
import styles from "./EventTicket.module.css";
import MidTicketContainer from "./MidTicketContainer";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import DrawerTicket from "./DrawerTicket";
import CreateSectionPopper from "./CreateSectionPopper";
import Admission from "./Admission";
import TicketPage from "./TicketPage";
import PromoCodeDrawer from "./PromoCodeDrawer";
import CreateAddOnDrawer from "./CreateAddOnDrawer";
import UploadCSV from "./UploadCSV";
const addTicket = [
  // { name: "let's party", quantity: "1", price: "100" },
  // { name: "shaima", quantity: "2", price: "100" },
];
const addPromoCode = [
  // { name: "let's party", quantity: "1", price: "100" },
  // { name: "shaima", quantity: "2", price: "100" },
];

export default function EventTicket() {
  const [isVisibleDrawer, setIsVisibleDrawer] = useState(true);
  const [showCreateSectionPopper, setShowCreateSectionPopper] = useState(false);

  const [addTicketList, setAddTicketList] = useState(addTicket);
  const [addPromoCodeList, setAddPromoCodeList] = useState(addPromoCode);

  const [showMidTicket, setShowMidTicket] = useState(true);
  const [isVisiblePromoCodeDrawer, setIsVisiblePromoCodeDrawer] =
    useState(false);
  const [isVisibleUploadCSVDrawer, setIsVisibleUploadCSVDrawer] =
    useState(false);
  const [isVisibleAddTicket, setIsVisibleAddTicket] = useState(false);

  const [isVisibleAddOnDrawer, setIsVisibleAddOnDrawer] = useState(false);

  const [showPromoCodes, setShowPromoCodes] = useState(false);
  const [ticketNameValue, setTicketNameTitle] = useState("");

  return (
    <>
      <HeaderTicket></HeaderTicket>
      <div className={styles["bigger-container"]}>
        <HomeNavConatiner />
        <div className={styles["structure-drawer-left-container"]}>
          <StructureDrawer />
        </div>
        <hr />
        <div className={styles["mid-container"]}>
          {showMidTicket && (
            <MidTicketContainer
              showDrawerButton={(value) => setIsVisibleDrawer(value)}
              createSectionButton={(value) => setShowCreateSectionPopper(value)}
            />
          )}
          {!showMidTicket && (
            <TicketPage
              showDrawerButton={(value) => setIsVisibleDrawer(value)}
              showPromoCodeDrawer={(value) =>
                setIsVisiblePromoCodeDrawer(value)
              }
              showUploadCSVDrawer={(value) =>
                setIsVisibleUploadCSVDrawer(value)
              }
              ticketList={addTicketList}
              promoCodeList={addPromoCodeList}
              showAddOnDrawer={(value) => setIsVisibleAddOnDrawer(value)}
              setShowPromoCodesAvailable={(value) => setShowPromoCodes(value)}
              ShowPromoCodesAvailable={showPromoCodes}
              setTicketList={(value) => setAddTicketList(value)}
              setTicketNameTitle={(value) => setTicketNameTitle(value)}
            />
          )}

          {isVisibleDrawer && (
            <DrawerTicket
              showDrawerButton={(value) => setIsVisibleDrawer(value)}
              showMidTicketOnSave={(value) => setShowMidTicket(value)}
              ticketList={addTicketList}
              setTicketList={(value) => setAddTicketList(value)}
              setTicketNameTitle={(value) => setTicketNameTitle(value)}
              ticketNameValue={ticketNameValue}
            />
          )}

          {isVisiblePromoCodeDrawer && (
            <PromoCodeDrawer
              closePromoCodeDrawer={(value) =>
                setIsVisiblePromoCodeDrawer(value)
              }
              promoCodeList={addPromoCodeList}
              setPromoCodeList={(value) => setAddPromoCodeList(value)}
              setShowPromoCodesAvailable={(value) => setShowPromoCodes(value)}
            />
          )}
          {isVisibleUploadCSVDrawer && (
            <UploadCSV
              closeUploadCSVDrawer={(value) =>
                setIsVisibleUploadCSVDrawer(value)
              }
            />
          )}
          {isVisibleAddOnDrawer && (
            <CreateAddOnDrawer
              closeAddOnDrawer={(value) => setIsVisibleAddOnDrawer(value)}
            />
          )}
        </div>
        {showCreateSectionPopper && (
          <CreateSectionPopper
            createSectionButton={(value) => setShowCreateSectionPopper(value)}
          />
        )}
      </div>
    </>
  );
}
