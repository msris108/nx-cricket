import { useEffect, useState, useCallback } from 'react';
import React from 'react';

import { Cricketer } from '@nx-cricket/shared-types';

export function Index() {
  const [search, setSearch] = useState('');
  const [cricketer, setCricketer] = useState<Cricketer[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3333/search?q=${escape(search)}`)
      .then((resp) => resp.json())
      .then((data) => setCricketer(data));
  }, [search]);

  const onSetSearch = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(evt.target.value);
    },
    []
  );

  return (
    <div>
      <input
        style={{ padding: '10px', margin: '20px' }}
        value={search}
        placeholder="Enter Cricketer Name"
        onChange={onSetSearch}
      />
      <ul>
        {cricketer.map(({ Id, Name, Country, Age }) => (
          <li key={Id}>
            {Name}, {Country}, {Age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
