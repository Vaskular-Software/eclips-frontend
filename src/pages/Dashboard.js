import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import dynamic from 'next/dynamic';

// Temporary UI Components
const Card = ({ children }) => <div className="p-6 bg-gray-800 rounded-lg">{children}</div>;
const CardContent = ({ children }) => <div>{children}</div>;
const Button = ({ children, ...props }) => (
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg" {...props}>{children}</button>
);
const Input = (props) => <input className="p-3 border rounded-lg bg-gray-900 text-white" {...props} />;

// Dynamic Imports
const HolographicEffect = dynamic(() => import('@/components/HolographicEffect'), { ssr: false });
const Dynamic3DGraph = dynamic(() => import('@/components/Dynamic3DGraph'), { ssr: false });

const Dashboard = () => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([
        { name: 'Jan', risk: 20 },
        { name: 'Feb', risk: 40 },
        { name: 'Mar', risk: 50 },
        { name: 'Apr', risk: 80 },
        { name: 'May', risk: 65 },
    ]);

    useEffect(() => {
        loadFull(Particles);
    }, []);

    const handleScan = () => {
        setLoading(true);
        setTimeout(() => {
            setData(data.map(d => ({ ...d, risk: Math.floor(Math.random() * 100) })));
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="relative p-10 bg-gradient-to-br from-gray-950 via-black to-gray-900 min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">
            <Particles
                id="tsparticles"
                options={{
                    particles: {
                        number: { value: 100 },
                        color: { value: "#4F46E5" },
                        shape: { type: "circle" },
                        opacity: { value: 0.7 },
                        size: { value: 3 },
                        move: { enable: true, speed: 1.5, direction: "top-right" }
                    }
                }}
                className="absolute inset-0 z-0"
            />
            
            <motion.h1 
                className="text-6xl font-extrabold mb-6 text-gray-200 tracking-wide drop-shadow-lg uppercase z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Eclips: AI Cybersecurity Hub
            </motion.h1>
            
            <HolographicEffect />
            
            <Card className="w-full max-w-5xl p-12 bg-gray-950 shadow-2xl rounded-3xl border border-gray-800 relative z-10 backdrop-blur-lg bg-opacity-80">
                <CardContent>
                    <div className="flex gap-6 mb-8">
                        <Input 
                            className="flex-1 bg-gray-800 text-white border border-gray-700 px-5 py-4 rounded-lg shadow-inner placeholder-gray-400 text-lg hover:bg-gray-700 transition-all" 
                            placeholder="Enter name, email, or website to scan..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Button 
                            className={`px-7 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 text-lg text-white ${
                                loading ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-800 shadow-lg transform hover:scale-105 active:scale-95"
                            }`}
                            disabled={loading}
                            onClick={handleScan}
                        >
                            {loading ? <Loader2 className="animate-spin" size={24} /> : null}
                            {loading ? "Scanning..." : "Scan Now"}
                        </Button>
                    </div>

                    <Dynamic3DGraph data={data} />

                    <div className="p-6 bg-gray-900 rounded-lg shadow-2xl backdrop-blur-lg">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data}>
                                <XAxis dataKey="name" stroke="#ffffff" tick={{ fill: '#aaa' }} />
                                <YAxis stroke="#ffffff" tick={{ fill: '#aaa' }} />
                                <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "8px" }} />
                                <Line type="monotone" dataKey="risk" stroke="#4F46E5" strokeWidth={4} dot={{ r: 6, fill: "#4F46E5" }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Dashboard;

