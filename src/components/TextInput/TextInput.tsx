import React, { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";

type Props = {
  onComplete: (text: string) => void;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

export default function TextInput(prop: Props) {
  const [value, setValue] = useState<string>(prop.value?.toString() || "");

  const onCompleteButton = () => {
    prop.onComplete(value);
    setValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const buttonDisable = value === "";

  return (
    <Card>
      <div className="flex flex-row gap-2 items-center">
        <textarea
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md border-2"
          type="text"
          {...prop}
          value={value}
          onChange={onChange}
        />

        <Button
          buttonType="primary"
          onClick={onCompleteButton}
          text="Done"
          disabled={buttonDisable}
        />
      </div>
    </Card>
  );
}
