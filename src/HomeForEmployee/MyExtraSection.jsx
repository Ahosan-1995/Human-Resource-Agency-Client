
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import calendar styles

const MyExtraSection = () => {
  const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
    if (Array.isArray(newValue)) {
      console.log(
        `Selected range: ${newValue[0]?.toDateString()} - ${newValue[1]?.toDateString()}`
      );
    } else {
      console.log(`Selected date: ${newValue?.toDateString()}`);
    }
  };

  return (
    <div className="mb-20">
        <h1 className="text-center">My Calendar</h1>
    <div>
        <Calendar
          onChange={handleChange}
          value={value}
          selectRange={true} // Enables range selection
        />
        <div>
          {Array.isArray(value) ? (
            <p>
              Start: {value[0]?.toLocaleDateString()} - End:{" "}
              {value[1]?.toLocaleDateString()}
            </p>
          ) : (
            <p>Selected Date: {value?.toLocaleDateString()}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyExtraSection;
