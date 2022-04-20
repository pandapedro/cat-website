import i18n from "i18next";
import { useRouter } from "next/router";

const Lang = () => {
   const router = useRouter();
   const changeLanguage = (event) => {
     router.push("/", "/", { locale: event.target.value });
     i18n.changeLanguage(event.target.value);
   };

   return (
     <select value={router.locale} onChange={changeLanguage}>
       <option value="en-US">English</option>
       <option value="pt-BR">Português</option>
     </select>
   ); 
}

export default Lang;
