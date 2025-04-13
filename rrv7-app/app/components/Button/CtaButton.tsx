import s from "./CtaButton.module.scss";

type CtaButtonProps = {
  text: string;
  type?: "button" | "submit";
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
};

export const CtaButton = ({
  text,
  type,
  style,
  className,
  onClick,
}: CtaButtonProps) => {
  const classNames = `${s.ctaButton} ${className}`;

  return (
    <button className={classNames} type={type} style={style} onClick={onClick}>
      {text}
    </button>
  );
};
