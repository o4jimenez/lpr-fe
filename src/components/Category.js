//
import { PropTypes } from "prop-types";
import { useTranslation } from "react-i18next";

import Item from "./Item";

// Component definition
const Category = ({ categoryNumber, items }) => {
  //console.log("Category render");
  const { t } = useTranslation();

  return (
    <div className='item-section'>
      <h2 tabIndex='0' className='section-header'>
        {t(`catalog.categories.${categoryNumber}`)}
      </h2>
      <section>
        <div className='item-grid'>
          {items.map((item) => (
            <Item
              key={item.itemInfo.itemNumber}
              imageUrl={item.imageUrl}
              itemInfo={item.itemInfo}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

// Prop validation
Category.propTypes = {
  categoryNumber: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
};

export default Category;
