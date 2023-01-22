export const TrafficLightRed = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="60"
      version="1.1"
    >
      <defs></defs>
      <g stroke="none">
        <circle r="10" cx="10" cy="10" fill="#888" />
        <circle r="10" cx="30" cy="10" fill="#888" />
        <circle r="10" cx="50" cy="10" fill="#d40000" />
      </g>
    </svg>
  );
};

export const TrafficLightGreen = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="60"
      version="1.1"
    >
      <defs></defs>
      <g stroke="none">
        <circle r="10" cx="10" cy="10" fill="#00b300" />
        <circle r="10" cx="30" cy="10" fill="#888" />
        <circle r="10" cx="50" cy="10" fill="#888" />
      </g>
    </svg>
  );
};
