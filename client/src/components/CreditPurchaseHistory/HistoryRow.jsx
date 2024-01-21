import React, {useRef, useState} from "react";
import thousandSeparator from "../../utils/thousandSeparator";
import chevrondownblack from "../../icons/chevrondown-black.svg";
import formatDate from "../../utils/formatDate";
import TextWithTooltip from "./TextWithTooltip";

const HistoryRow = ({history}) => {
  const [rowCollapsed, setRowCollapsed] = useState(true);
  const gridRef = useRef(null);

  const toggleRow = () => {
    if (rowCollapsed) {
      gridRef.current.style.maxHeight = gridRef.current.scrollHeight + "px";
    } else {
      gridRef.current.style.maxHeight = null;
    }

    setRowCollapsed(!rowCollapsed);
  }

  return (
      <div>
        <div className="flex !flex-row">
          <div className="w-5/12 lg:w-1/5 py-1 pr-2 my-1">{formatDate(new Date(history.purchasedAt))}</div>
          <div className="w-5/12 lg:w-1/5 py-1 pr-2 my-1">{history.paymentStatus}</div>
          <TextWithTooltip text={history.paymentTransactionId} classes="w-1/5 hidden lg:block py-1 pr-2 my-1" breakWord={false} />
          <div className="w-1/5 hidden lg:block py-1 pr-2 my-1">{thousandSeparator(history.purchasedCredit)}</div>
          <div className="w-1/5 hidden lg:block py-1 pr-2 my-1">{thousandSeparator(history.spentMoney)} Ft</div>
          <div className="w-2/12 block lg:hidden py-1 pr-2 my-1">
            <img
                onClick={toggleRow}
                src={chevrondownblack}
                className={`h-4 w-4 cursor-pointer transition duration-300 ml-auto ${!rowCollapsed ? 'rotate-180' : ''}`}
            />
          </div>
        </div>

        <div
            className={`grid !grid-cols-12 transition-all duration-300 max-h-0 overflow-hidden ${!rowCollapsed ? 'open max-h-100' : ''}`}
            ref={gridRef}
        >
          <div className="flex !flex-row !items-start font-bold py-1 pr-2 my-1 col-span-5">Tranzakció azonosító</div>
          <TextWithTooltip text={history.paymentTransactionId} classes="flex !flex-row !items-start py-1 pr-2 my-1 col-span-7" breakWord={true} />

          <div className="flex !flex-row !items-start font-bold py-1 pr-2 my-1 col-span-5">Vásárolt kredit</div>
          <div className="flex !flex-row !items-start py-1 pr-2 my-1 col-span-7">{thousandSeparator(history.purchasedCredit)} Ft</div>

          <div className="flex !flex-row !items-start font-bold py-1 pr-2 my-1 col-span-5">Elköltött összeg</div>
          <div className="flex !flex-row !items-start py-1 pr-2 my-1 col-span-7">{thousandSeparator(history.spentMoney)} Ft</div>
          <div className="w-full h-10"></div>
        </div>
      </div>
  );
}

export default HistoryRow;
