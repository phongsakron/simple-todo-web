import { PropsWithChildren } from "react";

export default function Card(props: PropsWithChildren) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">{props.children}</div>
    </div>
  );
}
