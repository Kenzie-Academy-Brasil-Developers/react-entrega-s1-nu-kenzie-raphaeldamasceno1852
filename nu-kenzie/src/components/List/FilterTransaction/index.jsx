import { Button } from "../../Button";

export const FilterTransaction = ({ optionList, setFilter }) => {
  return (
    <>
      <Button className="active" onClick={() => setFilter('')} name={"Todos"} />
      {optionList.map((choice) => (
        <Button
          className="default"
          key={choice}
          name={choice}
          onClick={() => setFilter(choice)}
        />
      ))}
    </>
  );
};
