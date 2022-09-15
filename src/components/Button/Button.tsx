import React, { ButtonHTMLAttributes } from "react";

type ButtonType =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "link";

type Props = {
  text: string;
  buttonType: ButtonType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonDefault =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
const buttonDanger =
  "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded";
const buttonWarning =
  "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded";
const buttonSuccess =
  "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded";
const buttonInfo =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
const buttonLight =
  "bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded";
const buttonDark =
  "bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded";
const buttonLink =
  "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";
const buttonDisable =
  "disabled:bg-gray-300 disabled:text-gray-600 disabled:font-bold";

export default function Button(props: Props) {
  const { text, buttonType, ...rest } = props;

  let buttonClass = buttonDefault;
  switch (buttonType) {
    case "primary":
      buttonClass = buttonDefault;
      break;
    case "secondary":
      buttonClass = buttonDefault;
      break;
    case "success":
      buttonClass = buttonSuccess;
      break;
    case "danger":
      buttonClass = buttonDanger;
      break;
    case "warning":
      buttonClass = buttonWarning;
      break;
    case "info":
      buttonClass = buttonInfo;
      break;
    case "light":
      buttonClass = buttonLight;
      break;
    case "dark":
      buttonClass = buttonDark;
      break;
    case "link":
      buttonClass = buttonLink;
      break;
    default:
      buttonClass = buttonDefault;
      break;
  }

  buttonClass += " " +buttonDisable;

  return (
    <button className={buttonClass} {...rest}>
      {text}
    </button>
  );
}
