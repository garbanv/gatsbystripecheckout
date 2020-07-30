import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartProvider } from "./src/components/CartContext"
export const wrapRootElement = ({ element }) => (
  <CartProvider>{element}</CartProvider>
)