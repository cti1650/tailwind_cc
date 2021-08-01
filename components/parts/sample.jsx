import { useRef } from "react";
export const SampleBox = (props) => {
  const inputEl = useRef(null);
  const { className } = props;
  const handleClick = () => {
    inputEl.current.value = className;
    inputEl.current.select();
    document.execCommand("Copy");
    alert("コピーしました「" + inputEl.current.value + "」");
  };
  return (
    <>
      <div className="p-2">
        <div
          className={className + " border bg-white h-20 w-20"}
          onClick={handleClick}
        >
          <div className="border bg-blue-400 h-10 w-10"></div>
        </div>
        <input
          type="text"
          defaultValue={className}
          className="outline-none text-xs w-20"
          ref={inputEl}
        />
      </div>
    </>
  );
};
