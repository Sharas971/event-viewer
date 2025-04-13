import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { f1Colors } from "~/settings/constants";
import type { IChartDataPoint } from "~/types/types";
import s from "../ChartWrapper/ChartWrapper.module.scss";

interface ColumnChartProps {
  data: IChartDataPoint[];
  dataKeys: string[];
  title: string;
}

export const ColumnChartView = ({
  data,
  dataKeys,
  title,
}: ColumnChartProps) => {
  return (
    <div className={`${s.card} ${s.columnChart}`}>
      <h3 className={s.title}>{title}</h3>
      <ResponsiveContainer className={s.responsiveContainer} width="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map((key, index) => (
            <Bar key={index} dataKey={key} fill={f1Colors[key]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
