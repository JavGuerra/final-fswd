import SortIcon from "./SortIcon";

const Sort = ({sortData, setSortData, setCurrentPage}) => {

  const { sortmodel, sortprice, sortyear, relevant, limit } = sortData;

  const changeSort = (sortObj) => {
    setSortData(sortObj);
    setCurrentPage(1);
  };

  const handleIcon = (sortName, order) => () =>
    changeSort({ [sortName]: order ? -order : 1, relevant, limit }); // Función

  const handleCheckBox = () =>
    changeSort({ ...sortData, relevant: !relevant });

  const handleSelect = event => 
    changeSort({ ...sortData, limit: Number(event.target.value) });

  return (
    <ul className="bg-sort">

      <li onClick={handleIcon("sortmodel", sortmodel)}>
        <SortIcon name="Modelo" order={sortmodel} />
      </li>

      <li onClick={handleIcon("sortprice", sortprice)}>
        <SortIcon name="Precio" order={sortprice} />
      </li>

      <li onClick={handleIcon("sortyear", sortyear)}>
        <SortIcon name="Año" order={sortyear} />
      </li>

      <li>
        <label>
          <input type="checkbox"
          defaultChecked={relevant} onChange={handleCheckBox} />
          &nbsp;Relevancia
        </label> 
      </li>

      <li>
        <label htmlFor="cardsNumber" className="sr">Tarjetas: </label>
        <select id="cardsNumber" value={limit} onChange={handleSelect} >
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="24">24</option>
        </select>
      </li>
      
    </ul>
  );
}

export default Sort;
