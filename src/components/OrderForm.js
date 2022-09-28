//
import { t } from "i18next";
import FormInput from "./FormInput";

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

  let itemTotalCost = itemList.reduce(
    (total, item) => total + item.itemCost * item.itemQuantity,
    0
  );
  return (
    <div className='orderForm-container order-section'>
      <section className='order-form'>
        <h2>{t("orderform.customerInfo.title")}</h2>
        <form
          id='orderForm'
          action='https://formsubmit.co/o4jimenez@outlook.com'
          method='POST'
        >
          <FormInput name='clientName' type='text' />
          <FormInput name='date' type='date' />
          <FormInput name='phone' type='text' />
          {/* TODO: autocomplete address input system*/}
          <FormInput name='address' type='text' />

          <div id='call-preference'>
            <label>{t("orderform.customerInfo.call.label")}</label>
            <div className='checkboxes-container'>
              <div>
                <label htmlFor='call-morn'>
                  {t("orderform.customerInfo.call.morning")}
                </label>
                <input
                  id='call-morn'
                  name='call-morn'
                  type='checkbox'
                  value=''
                ></input>
              </div>
              <div>
                <label htmlFor='call-after'>
                  {t("orderform.customerInfo.call.afternoon")}
                </label>
                <input
                  id='call-after'
                  name='call-after'
                  type='checkbox'
                  value=''
                ></input>
              </div>
              <div>
                <label htmlFor='call-even'>
                  {t("orderform.customerInfo.call.evening")}
                </label>
                <input
                  id='call-even'
                  name='call-even'
                  type='checkbox'
                  value=''
                ></input>
              </div>
            </div>
          </div>

          <input
            id='itemlist'
            name='itemlist'
            value={JSON.stringify(formattedList)}
            readOnly
            hidden
          />
          <input
            id='total'
            name='total'
            value={itemTotalCost}
            hidden
            readOnly
          />

          <p>* Order is NOT confirmed until follow up call</p>
          <button className='flat-button' type='submit'>
            {t("contact.form.submit")}
          </button>
        </form>
      </section>
    </div>
  );
};

export default OrderForm;
