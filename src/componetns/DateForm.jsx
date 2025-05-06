import React from "react";
import { useForm } from "react-hook-form";

const DateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange", // Live validation
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const fieldStyles =
    "relative flex flex-col w-32";

  const inputStyles =
    "px-4 py-3 text-lg font-semibold text-gray-800 placeholder-gray-400 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition";

  const errorTextStyles =
    "absolute -bottom-5 left-0 text-xs text-red-500";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row items-end gap-6 relative"
    >
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
          })}
        />
        {errors.day && (
          <span className={errorTextStyles}>{errors.day.message}</span>
        )}
      </div>

      {/* MONTH */}
      <div className={fieldStyles}>
        <label
          htmlFor="month"
          className="text-sm font-thin text-gray-500 mb-1"
        >
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
