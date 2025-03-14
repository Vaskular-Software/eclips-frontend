import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Dynamic3DGraph = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#ffffff" tick={{ fill: '#aaa' }} />
                <YAxis stroke="#ffffff" tick={{ fill: '#aaa' }} />
                <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "8px" }} />
                <Line type="monotone" dataKey="risk" stroke="#4F46E5" strokeWidth={4} dot={{ r: 6, fill: "#4F46E5" }} />
            </LineChart>
        </ResponsiveContainer>
    );
};
export default Dynamic3DGraph;
