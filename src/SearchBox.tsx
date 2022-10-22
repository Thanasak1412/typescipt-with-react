import { useEffect, useRef, useState } from "react";

type Props = {
  onSearch?: (criteria: string) => void;
};

const SearchBox = ({ onSearch }: Props) => {
  const [criteria, setCriteria] = useState<string>("");
  const element = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCriteria(e.currentTarget.value);

    if (onSearch) {
      onSearch(e.currentTarget.value);
    }
  };

  useEffect(() => {
    if (element.current) {
      element.current.focus();
    }
  }, []);

  return (
    <>
      <input type="text" value={criteria} onChange={onChange} ref={element} />
    </>
  );
};

export default SearchBox;
