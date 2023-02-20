import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { SalesStores } from '../../types';
import { makeRquest } from '../../utils/request';
import './styles.css';

export type FilterData = {
  stores?: SalesStores;
};

type Props = {
  onSubmitFilter: (data: FilterData) => void;
};

function Filter({ onSubmitFilter }: Props) {
  const [selectStore, setSelectStore] = useState<SalesStores[]>([]);

  const { setValue, getValues, control } = useForm<FilterData>();

  const handleChangeStore = (value: SalesStores) => {
    setValue('stores', value);

    const obj: FilterData = {
      stores: getValues('stores')
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    makeRquest
      .get<SalesStores[]>('/stores')
      .then((response) => {
        setSelectStore(response.data);
      })
      .catch(() => {
        console.log('Error to fetch Sales Stores');
      });
  }, []);

  return (
    <div className="filter-container base-card">
      <form>
        <div className="filter-store-container">
          <Controller
            name="stores"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectStore}
                isClearable
                placeholder="Lojas"
                classNamePrefix="sales-store-filter-select"
                onChange={(value) => handleChangeStore(value as SalesStores)}
                getOptionLabel={(store: SalesStores) => store.name}
                getOptionValue={(store: SalesStores) => String(store.id)}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
}

export default Filter;
