export default function RulerStrip({ dark = false }) {
  const marks = Array.from({ length: 25 });
  const color = dark ? "text-paper" : "text-mat";

  return (
    <div className={`relative w-full overflow-hidden ${color}`}>
      <div className="flex items-end h-8 px-2">
        {marks.map((_, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-end relative">
            <span
              className={`block w-px ${i % 5 === 0 ? "h-4" : "h-2"} bg-current opacity-40`}
            />
            {i % 5 === 0 && (
              <span className="absolute -top-1 text-[9px] tick-label opacity-50">
                {i}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
