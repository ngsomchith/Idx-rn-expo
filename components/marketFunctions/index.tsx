import React, { useState } from 'react';

// const marketFunctions = () => {

// export    const [cart, setCart] = useState([]);

export    const addToCartFn = (article: any, cart:any, setCart:any) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === article.id ? { ...item, qte: item.qte - 1 } : item
        )
        .filter((item) => item.qte > 0)
    );
  };

// => {
//         setCart((prevCart) => {
//           const existingItem = prevCart.find((item:any) => item.id === article.id);
//           if (existingItem) {
//             return prevCart.map((item:any) =>
//               item.id === article.id ? { ...item, qte: item.qte + 1 } : item
//             );
//           }
//           return [...prevCart, { ...article, qte: 1 }];
//         });
//       };
    
export     const removeFromCartFn = (article: any, cart:any, setCart:any) => {
        setCart((prevCart:any) =>
          prevCart
            .map((item:any) =>
              item.id === article.id ? { ...item, qte: item.qte - 1 } : item
            )
            .filter((item:any) => item.qte > 0)
        );
      };
    


//     return (
//         {addToCart(), removeFromCart()}
//     );
// };

// export default marketFunctions;