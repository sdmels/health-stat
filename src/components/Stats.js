import React, { useEffect, useState } from 'react';
import axios from 'axios';

const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM0I0VzUiLCJzdWIiOiIzTlNaMkoiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdzZXQgd2FjdCB3bG9jIiwiZXhwIjoxNjUxNTM5ODEwLCJpYXQiOjE2MjAwMDM4MTB9.ZQIGDci5_b60HMjtnSZ-qIwFK0eWdlXGMRpDO4RihcM`;

const Stats = () => {
  const [stat, setStat] = useState(null);

  useEffect(() => {
    const fetchStat = async () => {
      const result = await axios.get(
        'https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = result;

      setStat(data['activities-heart']);
    };

    const interval = setInterval(fetchStat, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <pre>{JSON.stringify(stat, null, 2)}</pre>;
};

export default Stats;
