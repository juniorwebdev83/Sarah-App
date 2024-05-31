// Calendar.js

import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 1,
    title: "Mom's Outing at the Park",
    start: new Date(2024, 5, 5), // Year, Month (0-indexed), Day
    end: new Date(2024, 5, 5),
  },
  // Add more events here...
];

const MyCalendar = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <div>Please login to view the calendar</div>;
  }

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '50px' }}
      />
    </div>
  );
};

export default MyCalendar;
