import {
  AreaChart,
  Area,
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

interface AreaChartProps {
  data: IChartDataPoint[];
  dataKeys: string[];
  title: string;
}

export const AreaChartView = ({ data, dataKeys, title }: AreaChartProps) => {
  return (
    <div className={`${s.card} ${s.areaChart}`}>
      <h3 className={s.title}>{title}</h3>
      <ResponsiveContainer className={s.responsiveContainer} width="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 50]} />
          <Tooltip />
          {dataKeys.map((key, index) => (
            <Area
              type="monotone"
              key={index}
              dataKey={key}
              stroke={f1Colors[key]}
              fill={f1Colors[key]}
            />
          ))}
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
