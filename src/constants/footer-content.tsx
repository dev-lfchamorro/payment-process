import { RedirectionListProps } from "../components/RedirectionList";

type FooterMap = {
  [key in ERedirectionList]: RedirectionListProps;
};

enum ERedirectionList {
  LegalInformation = "LegalInformation",
  Contact = "Contact",
}

export const footerContent: FooterMap = {
  [ERedirectionList.LegalInformation]: {
    title: "Información Legal",
    redirects: [
      { redirectUrl: "##", text: "Términos y Condiciones" },
      { redirectUrl: "##", text: "Política de Devoluciones" },
      { redirectUrl: "##", text: "Política de Privacidad" },
    ],
  },
  [ERedirectionList.Contact]: {
    title: "Contacto",
    redirects: [
      {
        redirectUrl: "https://co.linkedin.com/in/lfchamorro",
        text: "Soporte",
      },
      { redirectUrl: "tel:+57 3118648813", text: "+57 311 864 8813" },
      {
        redirectUrl: "malito:ing.lfchamorro@gmail.com",
        text: "ing.lfchamorro@gmail.com",
      },
    ],
  },
};
