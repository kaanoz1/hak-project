import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

const Page: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {Array.isArray(children) ? (
        children.map((child, i) => <section key={i}>{child}</section>)
      ) : (
        <section>{children}</section>
      )}
    </div>
  );
};

export default Page;
