import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

// Sample data
const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 200 },
  { name: 'May', value: 600 },
];

const PriceGraph = ({PriceLog}) => {
  const maxValue = Math.max(...data.map(d => d.value));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
            backgroundColor: 'white',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 0 5px rgba(0,0,0,0.2)'
        }}>
            <p style={{ margin: 0, fontWeight: 'bold', color: '#000000' }}>{payload[0].value}</p>
            <p style={{ margin: 0, color: '#8884d8' }}>{label}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
        <ResponsiveContainer width={800} height={300}>
            <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis ticks={[maxValue]} domain={[0, maxValue + 40]} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    </>
  );
};

export default PriceGraph;