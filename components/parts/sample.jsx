import { useCallback } from "react";
import cc from "classcat";
import copy from "clipboard-copy";

export const SampleItem = (props) => {
  const { className, title } = props;
  const handleClick = () => {
    copy(className);
    const comment = "コピーしました「" + className + "」";
    console.log(comment);
    alert(comment);
  };
  return (
    <>
      <div
        className={cc([className, "border h-full w-full rounded"])}
        title={className}
        onClick={handleClick}
      >
        {title}
      </div>
    </>
  );
};

export const SampleBox = (props) => {
  const { className } = props;
  const handleClick = () => {
    copy(className);
    const comment = "コピーしました「" + className + "」";
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
      </div>
    </>
  );
};

export const SampleBoxs = (props) => {
  const { className } = props;
  const handleClick = useCallback(() => {
    copy(className);
    const comment = "コピーしました「" + className + "」";
    console.log(comment);
    alert(comment);
  }, [className]);
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
      </div>
    </>
  );
};
