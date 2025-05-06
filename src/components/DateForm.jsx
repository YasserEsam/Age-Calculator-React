import React from "react";
import { useForm } from "react-hook-form";
import useStore from "../Store";

const DateForm = () => {
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const setDay = useStore((state) => state.setDay);
  const setMonth = useStore((state) => state.setMonth);
  const setYear = useStore((state) => state.setYear);

  // Watch all fields
  const dayValue = watch("day");
  const monthValue = watch("month");
  const yearValue = watch("year");

  // Update store when values change and form is valid
  React.useEffect(() => {
    if (isValid && dayValue && monthValue && yearValue) {
      setDay(parseInt(dayValue));
      setMonth(parseInt(monthValue));
      setYear(parseInt(yearValue));
    } else {
      // Reset store values if form is invalid
      setDay(0);
      setMonth(0);
      setYear(0);
    }
  }, [dayValue, monthValue, yearValue, isValid, setDay, setMonth, setYear]);

  const fieldStyles = "relative flex flex-col w-28 md:w-32";

  const inputStyles =
    "px-3 md:px-4 py-2.5 md:py-3 text-base md:text-lg font-semibold text-gray-800 placeholder-gray-400 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition";

  const errorTextStyles = "absolute -bottom-5 left-0 text-xs text-red-500";

  return (
    <form className="flex flex-row items-end gap-4 md:gap-6 relative">
      {/* DAY */}
      <div className={fieldStyles}>
        <label htmlFor="day" className="text-sm font-thin text-gray-500 mb-1">
          DAY
        </label>
        <input
          type="text"
          id="day"
          placeholder="DD"
          className={inputStyles}
          {...register("day", {
            required: "This field is required",
            min: { value: 1, message: "Min is 1" },
            max: { value: 31, message: "Max is 31" },
            pattern: {
              value: /^[0-9]*$/,
              message: "Invalid number",
            },
            validate: (value) => {
              const day = parseInt(value);
              const month = parseInt(monthValue);
              const year = parseInt(yearValue);

              if (day && month && year) {
                const date = new Date(year, month - 1, day);
                return date.getDate() === day || "Invalid date";
              }
              return true;
            },
          })}
        />
        {errors.day && (
          <span className={errorTextStyles}>{errors.day.message}</span>
        )}
      </div>

      {/* MONTH */}
      <div className={fieldStyles}>
        <label htmlFor="month" className="text-sm font-thin text-gray-500 mb-1">
          MONTH
        </label>
        <input
          type="text"
          id="month"
          placeholder="MM"
          className={inputStyles}
          {...register("month", {
            required: "This field is required",
            min: { value: 1, message: "Min is 1" },
            max: { value: 12, message: "Max is 12" },
            pattern: {
              value: /^[0-9]*$/,
              message: "Invalid number",
            },
          })}
        />
        {errors.month && (
          <span className={errorTextStyles}>{errors.month.message}</span>
        )}
      </div>

      {/* YEAR */}
      <div className={fieldStyles}>
        <label htmlFor="year" className="text-sm font-thin text-gray-500 mb-1">
          YEAR
        </label>
        <input
          type="text"
          id="year"
          placeholder="YYYY"
          className={inputStyles}
          {...register("year", {
            required: "This field is required",
            min: { value: 1900, message: "Min is 1900" },
            max: {
              value: new Date().getFullYear(),
              message: "Too far in future",
            },
            pattern: {
              value: /^[0-9]*$/,
              message: "Invalid number",
            },
          })}
        />
        {errors.year && (
          <span className={errorTextStyles}>{errors.year.message}</span>
        )}
      </div>
    </form>
  );
};

export default DateForm;
