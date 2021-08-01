import { useRef } from "react";
import cc from "classcat";
export const SampleBox = (props) => {
  const inputEl = useRef(null);
  const { className } = props;
  const handleClick = () => {
    inputEl.current.value = className;
    inputEl.current.select();
    document.execCommand("Copy");
    const comment = "コピーしました「" + inputEl.current.value + "」";
    console.log(comment);
    alert(comment);
  };
  return (
    <>
      <div className="p-2 h-24 w-24" title={className}>
        <div
          className={cc([
            className,
            "border bg-white h-full w-full p-2 rounded"
          ])}
          onClick={handleClick}
        >
          <div className="w-full h-full border bg-blue-400 rounded"></div>
        </div>
        <input
          type="text"
          defaultValue={className}
          className="w-0 h-0 p-0 m-0 outline-none text-xs"
          ref={inputEl}
        />
      </div>
    </>
  );
};

export const SampleBoxs = (props) => {
  const inputEl = useRef(null);
  const { className } = props;
  const handleClick = () => {
    inputEl.current.value = className;
    inputEl.current.select();
    document.execCommand("Copy");
    const comment = "コピーしました「" + inputEl.current.value + "」";
    console.log(comment);
    alert(comment);
  };
  return (
    <>
      <div className="p-2 h-24 w-24" title={className}>
        <div
          className={cc([
            className,
            "border bg-white h-full w-full p-2 rounded"
          ])}
          onClick={handleClick}
        >
          <div className="w-full h-full border bg-blue-400 rounded"></div>
          <div className="w-full h-full border bg-blue-400 rounded"></div>
          <div className="w-full h-full border bg-blue-400 rounded"></div>
          <div className="w-full h-full border bg-blue-400 rounded"></div>
          <div className="w-full h-full border bg-blue-400 rounded"></div>
          <div className="w-full h-full border bg-blue-400 rounded"></div>
          <div className="w-full h-full border bg-blue-400 rounded"></div>
          <div className="w-full h-full border bg-blue-400 rounded"></div>
        </div>
        <input
          type="text"
          defaultValue={className}
          className="w-0 h-0 p-0 m-0 outline-none text-xs"
          ref={inputEl}
        />
      </div>
    </>
  );
};
