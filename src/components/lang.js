import { useTranslation } from "next-i18next";

export default function Lang() {
  const { i18n } = useTranslation(),
    onChange = (event) => {
      i18n.changeLanguage(event.target.value);
    };

  return (
    <select value={i18n.language} onChange={onChange}>
      <option value="en-US">English</option>
      <option value="pt-BR">Português</option>
    </select>
  );
}
