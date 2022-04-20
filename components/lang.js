import { useRouter } from "next/router";

const Lang = () => {
  const router = useRouter(),
    changeLanguage = (event) => {
      router.push("/", "/", { locale: event.target.value });
      document.location.reload(true);
    };

  return (
    <select value={router.locale} onChange={changeLanguage}>
      <option value="en-US">English</option>
      <option value="pt-BR">Português</option>
    </select>
  );
};

export default Lang;
