//
import { PropTypes } from "prop-types";
import { useTranslation } from "react-i18next";

// Component definition
const OrderSummary = ({ itemList }) => {
  //console.log("Order summary render");
  const { t } = useTranslation();

  let deliveryCost = 10;
  let itemTotalCost = itemList.reduce(
    (total, item) => total + item.itemCost * item.itemQuantity,
    0
  );

  const getItemName = (itemNumber) => {
    let itemName = t(`catalog.${itemNumber}.itemName`);
    return Math.floor(itemNumber / 100) === 1
      ? "Bounce House - " + itemName
      : itemName;
  };

  return (
    <div className='order-section'>
      <h2>{t("orderform.summary.title")}</h2>
      <section>
        <ul>
          {itemList.map((item) => {
            return (
              <li key={item.itemNumber}>
                <p>
                  ({item.itemQuantity}) {getItemName(item.itemNumber)}: $
                  {item.itemCost * item.itemQuantity}
                </p>
              </li>
            );
          })}
        </ul>
        <p className='summary-total'>
          Total: ${itemTotalCost ? itemTotalCost + deliveryCost : 0}
        </p>
        <p>- {t("orderform.summary.delivery", { price: deliveryCost })}</p>
      </section>
    </div>
  );
};

// Prop validation
OrderSummary.propTypes = {
  itemList: PropTypes.array,
};

export default OrderSummary;
