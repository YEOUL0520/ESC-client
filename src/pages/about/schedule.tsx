import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../../styles/App.css'; // CSS 파일 경로

const Schedule: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<{ [key: string]: { title: string }[] }>({
    '2025-03-15': [{ title: '개강총회' }, { title: '개강회식' }],
    '2025-03-20': [{ title: '자고싶어요길이확인' }],
  });

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0]; // 'YYYY-MM-DD' 형식으로 변환
  };

  const selectedDate = formatDate(date);
  const selectedEvents = events[selectedDate] || [];

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      {/* 상단 헤더 */}
      <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url(/schedule.jpg)' }}>
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-3xl font-bold mb-2" style={{ marginTop: '50px' }}>일정</h1>
          <p className="text-white text-lg">주요 일정을 확인할 수 있습니다.</p>
        </div>
      </div>

      {/* 달력 */}
      <div className="flex flex-col w-full max-w-4xl p-4">
        <div className="w-full"> {/* 변경: w-1/2에서 w-full로 수정 */}
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileContent={({ date }) => {
              const formattedDate = formatDate(date);
              return (
                <div className={`custom-tile ${events[formattedDate] ? 'has-event' : ''}`}>
                  
                  {events[formattedDate]?.map((event, index) => (
                    <div key={index} className="event-label">{event.title}</div>
                  ))}
                </div>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
