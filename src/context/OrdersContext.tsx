import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect
} from 'react';

const ordersContext = createContext<{
  orders: any[];
  setOrders: any;
}>({
  orders: [],
  setOrders: () => {},
});

export const OrdersProvider: React.FC = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("orders");
      const initialValue = JSON.parse(saved as string);
      return initialValue || [];
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);
  
  return (
    <ordersContext.Provider value={{orders, setOrders}}>
      {children}
    </ordersContext.Provider>
  );
};

export const useOrders = () => useContext(ordersContext);
