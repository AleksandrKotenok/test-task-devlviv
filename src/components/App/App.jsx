import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const AsyncConverter = lazy(() => import("../Converter/Converter"));
const AsyncCurrencyExchange = lazy(() => import("../CurrencyExchange/CurrencyExchange"));

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/currency-exchange" element={<AsyncCurrencyExchange />} />
          <Route path="/converter" element={<AsyncConverter />} />
          <Route path="*" element={<Navigate to="/currency-exchange" />} />
        </Routes>
      </Suspense>
    </div>
  );
}
