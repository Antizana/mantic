import React from "react";
import BigCalendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { calendarEvents } from "./calendarData";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const calendarViews = Object.values(BigCalendar.views);

const Calendar = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <BigCalendar
            events={calendarEvents}
            views={calendarViews}
            defaultDate={new Date(2021, 3, 1)}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Calendar;
