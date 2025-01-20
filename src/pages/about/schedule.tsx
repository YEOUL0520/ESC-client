import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Schedule: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<{ [key: string]: string[] }>({
    '2023-01-15': ['Event 1', 'Event 2'],
    '2023-01-20': ['Event 3'],
  });

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0]; // 'YYYY-MM-DD' 형식으로 변환
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
  {/* 상단 헤더 */}
  <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url(/schedule.jpg)' }}>
    <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
      <h1 className="text-white text-3xl font-bold mb-2 mt-5">일정.</h1> 
      <p className="text-white text-lg">밑에 문구도 넣을건지?</p> 
    </div>
  </div>

      {/* 달력 */}
      <div className="w-full max-w-md p-4">
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileContent={({ date }) => {
            const formattedDate = formatDate(date);
            return (
              <div>
                {events[formattedDate]?.map((event, index) => (
                  <div key={index} className="text-xs text-red-500">{event}</div>
                ))}
              </div>
            );
          }}
        />
        <p className="mt-4 text-center">선택된 날짜: {date.toDateString()}</p>
      </div>
    </div>
  );
};

export default Schedule;
