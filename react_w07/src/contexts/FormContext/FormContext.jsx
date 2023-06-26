import { createContext, useState } from "react";

export const FormContext = createContext({
  usersRegistered: {},
  addUser: () => {},
});

// eslint-disable-next-line react/prop-types
export const FormProvider = ({ children }) => {
  const [usersRegistered, setusersRegistered] = useState({});

  const addUser = (usuario) => {
    setusersRegistered({
      ...usersRegistered,
      [usuario.email]: usuario,
    });
  };

  return (
    <FormContext.Provider value={{ usersRegistered, addUser }}>
      {children}
    </FormContext.Provider>
  );
};
