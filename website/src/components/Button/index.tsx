import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

interface ButtonProps {
  link: string;
  internal?: boolean;
  children: React.ReactNode;
  className?: string;
}
export default function Button({
  link,
  internal = true,
  children,
  className,
}: ButtonProps): JSX.Element {
  if (internal) {
    return (
      <Link className={clsx(styles.solidBtn, className)} to={link}>
        {children}
      </Link>
    );
  }
  return (
    <Link
      className={clsx(styles.solidBtn, className)}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
