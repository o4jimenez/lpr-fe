//
import { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { useTranslation } from "react-i18next";
import { ItemListContext } from "../Rentals";

// Handles updating the order list
const ItemListInput = ({ itemInfo }) => {
  //console.log("Input render");
  const { t } = useTranslation();
  const onChange = useContext(ItemListContext);
  // item quantity input from user
  let [quantity, setQuantity] = useState(0);
  // jumper and tents items have different design from other items
  let isUnique = itemInfo.itemInventory === 1;

  const handleItemInput = (e) => {
    let quantityInput = Number(e.target.value);
    setQuantity(quantityInput);
    onChange(quantityInput, itemInfo);
  };

  return (
    <div className='addCartButton'>
      {
        // TODO: prevent user input of item quantity greater than inventory
        // Jumper items use different input type from other types of items
        isUnique ? (
          <button
            className='flat-button catalog-button'
            value={quantity === 0 ? 1 : 0}
            onClick={handleItemInput}
          >
            {quantity === 0
              ? t("orderform.addItem")
              : t("orderform.removeItem")}
          </button>
        ) : (
          <input
            name={itemInfo.itemName}
            type='number'
            max={itemInfo.itemInventory}
            min='0'
            placeholder='0'
            onChange={handleItemInput}
          ></input>
        )
      }
    </div>
  );
};

// Component definition
const Item = ({ imageUrl, itemInfo }) => {
  //console.log("Item render");
  const { t } = useTranslation();

  return (
    // inCart class so selected items stand out
    <figure className={"item"}>
      <img className='item-image' src={imageUrl} alt={itemInfo.itemName}></img>
      <figcaption className='item-info'>
        <div className='item-name'>
          {t(`catalog.${itemInfo.itemNumber}.itemName`)}
        </div>
        <div className='item-description'>
          {t(`catalog.${itemInfo.itemNumber}.itemDescription`)}
        </div>
        <div className='item-cost'>${itemInfo.itemCost}</div>
      </figcaption>
      <ItemListInput itemInfo={itemInfo} />
    </figure>
  );
};

// Prop validation
Item.propTypes = {
  imageUrl: PropTypes.string,
  itemInfo: PropTypes.object,
};

export default Item;
