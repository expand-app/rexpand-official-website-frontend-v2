import clsx from "clsx";
import React, { useMemo } from "react";
import styles from "./Avatar.module.css";
import useScreen from "../useScreen/useScreen";

function getLastWordInitial(str: string) {
  // 将字符串按空格分割成单词数组
  const words = str.split(" ");

  // 获取最后一个单词
  const lastWord = words[words.length - 1];

  // 提取最后一个单词的首字母
  const initial = lastWord.charAt(0);

  return initial;
}

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
  const name = useMemo(() => {
    return `${getLastWordInitial(data.userName)}同学`;
  }, [data.userName]);

  return <div className={combinedClassName}>{name}</div>;
};

const PCView = ({ data, className }: Props) => {
  let combinedClassName = clsx(
    "rounded-full bg-green-700 text-white w-14 h-14 flex items-center justify-center",
    className
  );
  const name = useMemo(() => {
    return `${getLastWordInitial(data.userName)}同学`;
  }, [data.userName]);

  return <div className={combinedClassName}>{name}</div>;
};

export default Avatar;

export interface Props {
  data: AvatarData;
  className: string;
}

export interface AvatarData {
  userName: string;
}
