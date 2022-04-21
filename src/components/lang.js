import { useTranslation } from "next-i18next";

export default function Lang() {
  const { i18n } = useTranslation();

  return (
    <select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.name)}
    >
      <option value="en-US">English</option>
      <option value="pt-BR">Português</option>
    </select>
  );
}
