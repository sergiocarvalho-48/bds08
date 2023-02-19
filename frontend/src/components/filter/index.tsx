import './styles.css';

function Filter() {
  return (
    <div className="filter-container base-card">
      <select className="filter-imput">
        <option value="">Selecione uma cidade</option>
        <option value="Araguari">Araguari</option>
        <option value="Uberlândia">Uberlândia</option>
        <option value="Uberaba">Uberaba</option>
      </select>
    </div>
  );
}

export default Filter;

/*<Controller
        name="stores"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options="stores"
            isClearable
            placeholder="Selecione a cidade"
            classNamePrefix="stores-filter-select"
            onChange={() => handleChangeStores}
            getOptionLabel={() => }
            getOptionValue={() => }
          />
        )}
      />*/
