import { useGetKpisQuery } from "@/services/querys";
import DashboardBox from "./MUI/DashboardBox"
import { ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area, LineChart, CartesianGrid, Line, Legend, Bar, BarChart } from "recharts";
import { useMemo } from "react";
import { Typography, useTheme } from "@mui/material";
import { BoxHeader } from ".";


const Row1 = () => {

    const { data, error, isLoading } = useGetKpisQuery();
    const { palette } = useTheme()
    const revenueExpenses = useMemo(() => {
        return (
            data &&
            data?.[0]?.monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue,
                    expenses,
                };
            }) || []
        );
    }, [data]);
    const revenue = useMemo(() => {
        return (
            data &&
            data[0].monthlyData.map(({ month, revenue }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                };
            })
        );
    }, [data]);
    const revenueProfit = useMemo(() => {
        return (
            data &&
            data[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    profit: (revenue - expenses).toFixed(2),
                };
            })
        );
    }, [data]);
    if (isLoading) {
        return <Typography> Is Loading ...</Typography>
    }
    if (error) {
        return <Typography> Error </Typography>
    }
    return (
        <>
            <DashboardBox gridArea="a" className="bg-black">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={revenueExpenses}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="b">
                <BoxHeader
                    title="Profit and Revenue"
                    subtitle="top line represents revenue, bottom line represents expenses"
                    sideText="+4%"
                />
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={400}
                        data={revenueProfit}
                        margin={{
                            top: 20,
                            right: 0,
                            left: -10,
                            bottom: 55,
                        }}
                    >
                        <CartesianGrid vertical={false} stroke={palette.grey[800]} />
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <YAxis
                            yAxisId="left"
                            tickLine={false}
                            axisLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            tickLine={false}
                            axisLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <Tooltip />
                        <Legend
                            height={20}
                            wrapperStyle={{
                                margin: "0 0 10px 0",
                            }}
                        />
                        <Line
                            yAxisId="left"
                            type="monotone"
                            dataKey="profit"
                            stroke={palette.tertiary[500]}
                        />
                        <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="revenue"
                            stroke={palette.primary.main}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="c">
                <BoxHeader
                    title="Revenue Month by Month"
                    subtitle="graph representing the revenue month by month"
                    sideText="+4%"
                />
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={revenue}
                        margin={{
                            top: 17,
                            right: 15,
                            left: -5,
                            bottom: 58,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor={palette.primary[300]}
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor={palette.primary[300]}
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} stroke={palette.grey[800]} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <Tooltip />
                        <Bar dataKey="revenue" fill="url(#colorRevenue)" />
                    </BarChart>
                </ResponsiveContainer>
            </DashboardBox>
        </>
    )
}
export default Row1