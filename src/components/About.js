import { changeLanguage } from 'i18next';
import React from 'react'
import { useTranslation } from "react-i18next";
export default function About() {
  const { t, i18n } = useTranslation();

  const changeLag = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <div >
      <select onChange={(e)=>changeLag(e.target.value)}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
      <h1>{t("content.hello")}</h1>
    </div>
  )
}
