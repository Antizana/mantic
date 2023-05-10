import React, { useState } from "react";
import { SingleDatePicker, DateRangePicker } from "react-dates";
import moment from "moment";

const DatePicker = () => {
  const [date, setDate] = useState(moment());
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [dateRangeFocusedInput, setDateRangeFocusedInput] = useState(null);

  return (
    <div className="row">
      <div className="col-md-6">
        <h4 className="title">Date Picker</h4>
        <div className="form-group">
          <SingleDatePicker
            date={date}
            onDateChange={(date) => setDate(date)}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
          />
        </div>
      </div>
      <div className="col-md-6">
        <h4 className="title">DateRange Picker</h4>
        <div className="form-group">
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            focusedInput={dateRangeFocusedInput}
            onFocusChange={(focusedInput) =>
              setDateRangeFocusedInput(focusedInput)
            }
            onDatesChange={({ startDate, endDate }) => {
              setStartDate(startDate);
              setEndDate(endDate);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
