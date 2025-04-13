import { AreaChartView } from "../AreaChartView/AreaChartView";
import { ColumnChartView } from "../ColumnChartView/ColumnChartView";
import {
  racesPointsData,
  teamWinsData,
  driverPodiumsData,
} from "~/data/mockData";
import s from "./ChartWrapper.module.scss";

export const ChartWrapper = () => {
  return (
    <div className={s.wrapper}>
      <AreaChartView
        data={racesPointsData}
        dataKeys={["Ferrari", "Mercedes", "RedBull"]}
        title="2024 Race Points"
      />
      <ColumnChartView
        data={teamWinsData}
        dataKeys={["Ferrari", "Mercedes", "RedBull"]}
        title="Team Wins"
      />
      <ColumnChartView
        data={driverPodiumsData}
        dataKeys={["Leclerc", "Hamilton", "Verstappen"]}
        title="Driver Podiums"
      />
    </div>
  );
};
