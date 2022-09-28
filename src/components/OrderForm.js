//
import { t } from "i18next";
import FormInput from "./FormInput";

const containerStyle = {
  padding: "10px",
};

const OrderForm = ({ itemList }) => {
  //console.log("Order form render");

  // TODO: send data from form and item list to backend
  /*
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.elements.itemlist.value);
    console.log("submitted");
  }
  */

  const formattedList = itemList.map((item) => {
    let itemName = t(`catalog.${item.itemNumber}.itemName`);
    return `${itemName} : ${item.itemQuantity}`;
  });

  return (
    <div className='orderForm-container order-section' style={containerStyle}>
      <section className='order-form'>
        <h2>{t("orderform.customerInfo.title")}</h2>
        <form id='orderForm' method='POST'>
          <FormInput name='clientName' type='text' />
          <FormInput name='date' type='date' />
          <FormInput name='phone' type='text' />
          {/* TODO: autocomplete address input system*/}
          <FormInput name='address' type='text' />

          {/*TODO: best time to call (input)*/}
          <input
            id='itemlist'
            name='itemlist'
            value={JSON.stringify(formattedList)}
            readOnly
            hidden
          />

          <p>* Order is NOT confirmed until you recieve a call from us</p>
          <button className='flat-button' type='submit'>
            {t("contact.form.submit")}
          </button>
        </form>
      </section>
    </div>
  );
};

export default OrderForm;
