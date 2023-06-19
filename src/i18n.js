import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // tries to detect user language from cookies, localStorage, browser, etc.
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // note need for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          nav: {
            homePage: "Home",
            rentalPage: "Rentals",
            contactPage: "Contact Us",
            languageSwitch: "En Español",
          },
          home: {
            greeting: "Welcome to Louis Party Rental",
            description: {
              part1: "We provide Tents, Jumpers, Tables, Chairs, and more.",
              part2:
                "We are here for all your party rental needs. We take pride in providing the best customer service so your party runs smoothly.",
              part3: "There is a $10.00 delivery charge in Simi Valley. $20 outside of Simi Valley",
            },
          },
          catalog: {
            categories: {
              100: "Jumpers",
              200: "Tables & Chairs",
              300: "Tents & Canopies",
              400: "Other Items",
            },
            111: {
              itemName: "Blue Castle #1",
              itemDescription: "11ft W x 11ft L ",
            },
            112: {
              itemName: "Blue Castle #2",
              itemDescription: "13ft W x 13ft L",
            },
            121: {
              itemName: "Pink Castle #1",
              itemDescription: "11ft W x 11ft L",
            },
            122: {
              itemName: "Pink Castle #2",
              itemDescription: "13ft W x 13ft L",
            },
            131: {
              itemName: "Combo Slide",
              itemDescription: "16ft W x 24ft L",
            },
            141: {
              itemName: "Jungle",
              itemDescription: "13ft W x 13ft L",
            },
            142: {
              itemName: "Sports",
              itemDescription: "11ft W x 11ft L",
            },
            151: {
              itemName: "Waterslide",
              itemDescription: "10ft H x 13ft W x 22ft L",
            },
            211: {
              itemName: "Rectangular Tables",
              itemDescription: "6ft x 2ft",
            },
            212: {
              itemName: "Large Round Table",
              itemDescription: "60 in, seats up to 8",
            },
            213: {
              itemName: "Small Round Table",
              itemDescription: "48 in, seats up to 6",
            },
            214: {
              itemName: "Kids Table",
              itemDescription: "",
            },
            223: {
              itemName: "Kids Chair",
              itemDescription: "",
            },
            215: {
              itemName: "Cocktail Table",
              itemDescription: "3.5ft tall",
            },
            221: {
              itemName: "White Folding Chair",
              itemDescription: "",
            },
            222: {
              itemName: "Beige Folding Chair",
              itemDescription: "",
            },
            311: {
              itemName: "12ft x 20ft Tent",
              itemDescription: "",
            },
            312: {
              itemName: "12ft x 30ft Tent",
              itemDescription: "",
            },
            313: {
              itemName: "20ft x 30ft Tent",
              itemDescription: "",
            },
            441: {
              itemName: "13ft x 13ft Canopy",
              itemDescription: "",
            },
            411: {
              itemName: "Patio Heater",
              itemDescription: "",
            },
            421: {
              itemName: "Snowcone Machine",
              itemDescription: "",
            },
            431: {
              itemName: "Portable Bathroom",
              itemDescription: "",
            },
          },
          contact: {
            form: {
              clientName: "Name",
              date: "Date of Event",
              phone: "Phone",
              email: "Email",
              address: "Delivery Address",
              message: "Message",
              submit: "Send",
            },
            call: "Call or Text",
          },
          orderform: {
            addItem: "Add to Cart",
            removeItem: "Remove from Cart",
            summary: {
              title: "Order Summary",
              total: "Total",
              // eslint-disable-next-line no-template-curly-in-string
              delivery: "Delivery cost not included",
            },
            customerInfo: {
              title: "Customer Information",
              message: "We will call to confirm the order",
              call: {
                label: "Preferred Call Time",
                morning: "Morning",
                afternoon: "Afternoon",
                evening: "Evening",
              },
            },
          },
        },
      },
      es: {
        translation: {
          nav: {
            homePage: "Principal",
            rentalPage: "Mercancías",
            contactPage: "Contactar",
            languageSwitch: "In English",
          },
          home: {
            greeting: "Bienvenido a Louis Party Rental",
            description: {
              part1: "Tenemos Carpas, Brincolín , Mesas, Sillas, y más",
              part2:
                "Estamos aqui para todos sus necesidades de fiestas. Nos enorgullece darte el mejor servicio para que su fiesta será sin problema.",
              part3: "Hay un cargo de entrega de $10.00 en Simi Valley. $20 fuera de Simi Valley",
            },
          },
          catalog: {
            categories: {
              100: "Brincolínes",
              200: "Mesas y Sillas",
              300: "Carpas",
              400: "Cosas Diversa",
            },
            111: {
              itemName: "Castillo Azul #1",
              itemDescription: "11 pies x 11 pies",
            },
            112: {
              itemName: "Castillo Azul #2",
              itemDescription: "13 pies x 13 pies",
            },
            121: {
              itemName: "Castillo Rosa #1",
              itemDescription: "11 pies x 11 pies",
            },
            122: {
              itemName: "Castillo Rosa #2",
              itemDescription: "13 pies x 13 pies",
            },
            131: {
              itemName: "Castillo con resbaladera",
              itemDescription: "16 pies x 24 pies",
            },
            141: {
              itemName: "Selva",
              itemDescription: "13 pies x 13 pies",
            },
            142: {
              itemName: "Deportes",
              itemDescription: "11 pies x 11 pies",
            },
            151: {
              itemName: "Tobogán de agua",
              itemDescription: "22 pies largo x 13 pies ancho x 10 pies alto",
            },
            211: {
              itemName: "Mesa Rectangular",
              itemDescription: "6 pies largo",
            },
            212: {
              itemName: "Mesa Redonda Grande",
              itemDescription: "60 plugadas diámetro",
            },
            213: {
              itemName: "Mesa Redonda Pequeña",
              itemDescription: "48 plugadas diámetro",
            },
            214: {
              itemName: "Mesas de Niños",
              itemDescription: "",
            },
            223: {
              itemName: "Sillas de Niños",
              itemDescription: "",
            },
            215: {
              itemName: "Mesa de Coctel",
              itemDescription: "",
            },
            221: {
              itemName: "Silla Blanca",
              itemDescription: "",
            },
            222: {
              itemName: "Silla Beige",
              itemDescription: "",
            },
            311: {
              itemName: "12 pies x 20 pies Carpa",
              itemDescription: "",
            },
            312: {
              itemName: "12 pies x 30 pies Carpa",
              itemDescription: "",
            },
            313: {
              itemName: "20 pies x 30 pies Carpa",
              itemDescription: "",
            },
            441: {
              itemName: "13 pies x 13 pies Canopy",
              itemDescription: "",
            },
            411: {
              itemName: "Calentador de Patio",
              itemDescription: "",
            },
            421: {
              itemName: "Máquina de Raspado",
              itemDescription: "",
            },
            431: {
              itemName: "Baño Portátil",
              itemDescription: "",
            },
          },
          contact: {
            form: {
              clientName: "Nombre",
              date: "Fecha de Evento",
              phone: "Tele",
              email: "Email",
              address: "Dirección de Entregar",
              message: "Mensaje",
              submit: "Enviar",
            },
            call: "Llama o Envía texto",
          },
          orderform: {
            addItem: "Agregar al Carrito",
            removeItem: "Quitar del Carrito",
            summary: {
              title: "Resumen de Orden",
              total: "Total",
              // eslint-disable-next-line no-template-curly-in-string
              delivery: "Costo de entrega no incluido",
            },
            customerInfo: {
              title: "Información del Cliente",
              message: "Llamaremos para confirmar el pedido",
              call: {
                label: "Hora de llamada preferida",
                morning: "Mañana",
                afternoon: "Tarde",
                evening: "Noche",
              },
            },
          },
        },
      },
    },
  });

export default i18n;
