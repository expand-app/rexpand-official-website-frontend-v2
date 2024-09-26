import clsx from "clsx";
import React from "react";
import styles from "./Avatar.module.css";
import useScreen from "../useScreen/useScreen";

const Avatar = ({ ...props }: Props) => {
  const { isMobile } = useScreen();

  return (
    <div>
      {isMobile?.() ? <MobileView {...props} /> : <PCView {...props} />}
    </div>
  );
};

const MobileView = ({ data, className }: Props) => {
  let combinedClassName = clsx(
    "rounded-full bg-green-700 text-white flex items-center justify-center",
    styles.m_avatar_container,
    className
  );

  return <div className={combinedClassName}>{`${data.userName[0]}同学`}</div>;
};

const PCView = ({ data, className }: Props) => {
  let combinedClassName = clsx(
    "rounded-full bg-green-700 text-white w-14 h-14 flex items-center justify-center",
    className
  );

  return <div className={combinedClassName}>{`${data.userName[0]}同学`}</div>;
};

export default Avatar;

export interface Props {
  data: AvatarData;
  className: string;
}

export interface AvatarData {
  userName: string;
}
