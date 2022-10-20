//
import { createContext, useMemo, useState, useCallback } from "react";

import Category from "./components/Category";
import OrderForm from "./components/OrderForm";
import OrderSummary from "./components/OrderSummary";

export const ItemListContext = createContext();

function Rentals() {
  // main catalog layout should only render once
  //console.log("Rental render");

  let [itemList, setItemList] = useState([]);

  // Update itemList without dependent on the itemList state itself
  const onChange = useCallback((quantity, itemInfo) => {
    if (quantity === 0) {
      setItemList((prevList) =>
        prevList.filter((entry) => entry.itemNumber !== itemInfo.itemNumber)
      );
    } else {
      setItemList((prevList) => {
        let tempList = prevList.filter(
          (entry) => entry.itemNumber !== itemInfo.itemNumber
        );
        return tempList.concat({ ...itemInfo, itemQuantity: quantity });
      });
    }
  }, []);

  const loadCatalog = useMemo(() => {
    // TODO - retrieve data from a backend
    const catalogData = [
      {
        categoryName: "jumpers",
        categoryNumber: 100,
        items: [
          {
            imageUrl: "/image/jumper_blue_11.jpeg",
            itemInfo: {
              itemNumber: 111,
              itemCost: 60,
              itemInventory: 1,
            },
          },
          {
            imageUrl: "/image/jumper_blue_13.jpeg",
            itemInfo: {
              itemNumber: 112,
              itemCost: 60,
              itemInventory: 1,
            },
          },
          {
            imageUrl: "/image/jumper_pink_11.jpeg",
            itemInfo: {
              itemNumber: 121,
              itemCost: 60,
              itemInventory: 1,
            },
          },
          {
            imageUrl: "/image/jumper_pink_13.jpeg",
            itemInfo: {
              itemNumber: 122,
              itemCost: 60,
              itemInventory: 1,
            },
          },
          {
            imageUrl: "/image/jumper_combo.jpeg",
            itemInfo: {
              itemNumber: 131,
              itemCost: 100,
              itemInventory: 1,
            },
          },
          {
            imageUrl: "/image/jumper_jungle.jpeg",
            itemInfo: {
              itemNumber: 141,
              itemCost: 60,
              itemInventory: 1,
            },
          },
          {
            imageUrl: "/image/jumper_sport.jpeg",
            itemInfo: {
              itemNumber: 142,
              itemCost: 60,
              itemInventory: 1,
            },
          },
          {
            imageUrl: "/image/waterslide_blue.jpeg",
            itemInfo: {
              itemNumber: 151,
              itemCost: 160,
              itemInventory: 1,
            },
          },
        ],
      },
      {
        categoryName: "tables-chairs",
        categoryNumber: 200,
        items: [
          {
            imageUrl: "/image/table_rectangle_6.jpeg",
            itemInfo: {
              itemNumber: 211,
              itemCost: 5,
              itemInventory: 60,
            },
          },
          {
            imageUrl: "/image/table_round_60.jpeg",
            itemInfo: {
              itemNumber: 212,
              itemCost: 8,
              itemInventory: 10,
            },
          },
          {
            imageUrl: "/image/table_round_48.jpeg",
            itemInfo: {
              itemNumber: 213,
              itemCost: 5,
              itemInventory: 14,
            },
          },
          {
            imageUrl: "/image/table_chair_kids.jpeg",
            itemInfo: {
              itemNumber: 214,
              itemCost: 5,
              itemInventory: 5,
            },
          },
          {
            imageUrl: "/image/table_chair_kids.jpeg",
            itemInfo: {
              itemNumber: 223,
              itemCost: 0.5,
              itemInventory: 20,
            },
          },
          {
            imageUrl: "/image/table_cocktail.jpeg",
            itemInfo: {
              itemNumber: 215,
              itemCost: 8,
              itemInventory: 5,
            },
          },
          {
            imageUrl: "/image/chair_white.jpeg",
            itemInfo: {
              itemNumber: 221,
              itemCost: 1,
              itemInventory: 175,
            },
          },
          {
            imageUrl: "/image/chair_beige.jpeg",
            itemInfo: {
              itemNumber: 222,
              itemCost: 0.75,
              itemInventory: 480,
            },
          },
        ],
      },
      {
        categoryName: "tents-canopies",
        categoryNumber: 300,
        items: [
          {
            imageUrl: "/image/tent_12x20.jpeg",
            itemInfo: {
              itemNumber: 311,
              itemCost: 100,
              itemInventory: 1,
            },
          },
          {
            imageUrl: "/image/tent_12X30.jpeg",
            itemInfo: {
              itemNumber: 312,
              itemCost: 125,
              itemInventory: 1,
            },
          },
          {
            imageUrl: "/image/tent_20x30.jpeg",
            itemInfo: {
              itemNumber: 313,
              itemCost: 150,
              itemInventory: 1,
            },
          },
          {
            imageUrl: "/image/canopy.jpeg",
            itemInfo: {
              itemNumber: 441,
              itemCost: 35,
              itemInventory: 3,
            },
          },
        ],
      },
      {
        categoryName: "other-items",
        categoryNumber: 400,
        items: [
          {
            imageUrl: "/image/patio_heater.jpeg",
            itemInfo: {
              itemNumber: 411,
              itemCost: 65,
              itemInventory: 4,
            },
          },
          {
            imageUrl: "/image/snowcone_machine.jpeg",
            itemInfo: {
              itemNumber: 421,
              itemCost: 50,
              itemInventory: 1,
            },
          },
          {
            imageUrl: "/image/portable_bathroom.jpeg",
            itemInfo: {
              itemNumber: 431,
              itemCost: 100,
              itemInventory: 2,
            },
          },
        ],
      },
    ];

    return catalogData.map((category) => (
      <Category
        key={category.categoryNumber}
        categoryNumber={category.categoryNumber}
        items={category.items}
      />
    ));
  }, []);

  return (
    <main>
      <ItemListContext.Provider value={onChange}>
        <div id='catalog'>{loadCatalog}</div>
      </ItemListContext.Provider>
      <div className='order-container'>
        <OrderSummary itemList={itemList} />
        <OrderForm itemList={itemList} />
      </div>
    </main>
  );
}

export default Rentals;
