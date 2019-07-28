import React, { Fragment as f, createElement as e, useState, useEffect } from 'react';

const List = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async callback => {
      try {
        const url = `https://api.github.com/users/ouweiya/repos?sort=updated`;
        const response = await fetch(url);
        const responseBody = await response.json();
        const names = await responseBody.map(git => git.name);
        const lis = names.map((name, i) => e('li', { key: i }, name));
        setList(lis);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return list;
};

export default e(f, null, e(List));
