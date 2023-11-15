import { createContext, useState } from "react";
export const CrudContext = createContext();

export const CrudProvider = ({ children }) => {
  const [crud, setCrud] = useState([]);

  const addItem = (item) => {
    setCrud([...crud, item]);
  };

  const removeItem = (item) => {
    const newCrud = crud.filter((i) => i.id !== item.id);
    setCrud(newCrud);
  };

  const updateItem = (item) => {
    const newCrud = crud.map((i) => {
      if (i.id === item.id) {
        return item;
      }
      return i;
    });
    setCrud(newCrud);
  };

  return (
    <CrudContext.Provider value={{ crud, addItem, removeItem, updateItem }}>
      {children}
    </CrudContext.Provider>
  );
};
