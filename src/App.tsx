import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import './App.css'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Layout from './pages/Layout'

function App() {
  const wallets = [new PetraWallet()];

  return (
    <>
      <BrowserRouter>
        {/* Move the Routes component inside AptosWalletAdapterProvider */}
        <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {/* Use index for the default route under "/" */}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AptosWalletAdapterProvider>
      </BrowserRouter>
    </>
  )
}

export default App
