import React from 'react'
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
    const searchQuery = useSearchParams()[0];
    const referenceNum = searchQuery.get("reference");

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
        <div style={{ textAlign: 'center', color:'black' }}>
            <h1 style={{ textTransform: 'uppercase', margin: 0 }}>Order Successful</h1>
            <p style={{ margin: 0 }}>Reference No. {referenceNum}</p>
        </div>
    </div>
  );
};

export default PaymentSuccess
