import React, { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import TextInput from "../TextInput/TextInput";

type Props = {
  text: string;
  isComplete: boolean;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (text: string) => void;
};

export default function TodoItem(props: Props) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const onEdit = (text: string) => {
    props.onEdit(text);
    setIsEdit(false);
  };

  if (isEdit) return <TextInput onComplete={onEdit} value={props.text} />;

  return (
    <Card>
      <div className="flex flex-row justify-between items-center gap-2">
        <input
          className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out m-2"
          type="checkbox"
          checked={props.isComplete}
          onChange={props.onToggle}
        />
        <div className="flex-1">
          {
            // if isComplete is true, add line-through class
            props.isComplete ? (
              <span className="line-through text-gray-400 whitespace-pre-wrap">
                {props.text}
              </span>
            ) : (
              <span className="whitespace-pre-wrap">{props.text}</span>
            )
          }
        </div>
        <Button buttonType="danger" onClick={props.onDelete} text="Delete" />
        {props.isComplete === false && (
          <Button
            buttonType="primary"
            onClick={() => setIsEdit(true)}
            text="Edit"
          />
        )}
      </div>
    </Card>
  );
}
