
import React, { useRef, useEffect, useState } from 'react';

interface DataSet {
  label: string;
  data: number[];
  color: string;
}

interface LineChartProps {
  data: {
    labels: string[];
    datasets: DataSet[];
  };
  yMax: number;
  isActive: boolean;
}

const LineChart: React.FC<LineChartProps> = ({ data, yMax, isActive }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [pathLengths, setPathLengths] = useState<number[]>([]);

  const width = 300;
  const height = 200;
  const padding = 30;

  const getX = (index: number) => padding + (index * (width - 2 * padding)) / (data.labels.length - 1);
  const getY = (value: number) => height - padding - ((value / yMax) * (height - 2 * padding));

  const linePaths = data.datasets.map(dataset => {
    return dataset.data
      .map((point, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(point)}`)
      .join(' ');
  });

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll('path.data-line');
      const lengths = Array.from(paths).map(p => (p as SVGPathElement).getTotalLength());
      setPathLengths(lengths);
    }
  }, [data]); // Recalculate if data changes

  return (
    <div className="w-full h-full flex flex-col items-center">
       <h4 className="text-center font-bold text-white text-lg mb-2">Odor Intensity Levels</h4>
      <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
        {/* Y-Axis Labels */}
        {Array.from({ length: yMax + 1 }).map((_, i) => {
          const y = getY(i);
          if (i % 1 !== 0) return null; // Show only integer labels
          return (
            <g key={`y-label-${i}`}>
              <text x={padding - 10} y={y + 3} textAnchor="end" fontSize="10" fill="#94a3b8">
                {i}
              </text>
              <line
                x1={padding}
                y1={y}
                x2={width - padding}
                y2={y}
                stroke="#475569"
                strokeWidth="0.5"
                strokeDasharray="2,2"
              />
            </g>
          );
        })}
        {/* X-Axis Labels */}
        {data.labels.map((label, i) => (
          <text key={`x-label-${i}`} x={getX(i)} y={height - padding + 15} textAnchor="middle" fontSize="10" fill="#94a3b8">
            {label}
          </text>
        ))}
        {/* Data Lines and Points */}
        {data.datasets.map((dataset, setIndex) => (
          <g key={dataset.label}>
            <path
              className="data-line"
              d={linePaths[setIndex]}
              fill="none"
              stroke={dataset.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: pathLengths[setIndex] || 0,
                strokeDashoffset: isActive ? 0 : (pathLengths[setIndex] || 0),
                transition: 'stroke-dashoffset 1.5s ease-in-out',
                transitionDelay: `${setIndex * 200}ms`
              }}
            />
            {dataset.data.map((point, pointIndex) => (
                <circle
                    key={`${dataset.label}-point-${pointIndex}`}
                    cx={getX(pointIndex)}
                    cy={getY(point)}
                    r="3"
                    fill={dataset.color}
                    style={{
                        opacity: isActive ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out',
                        transitionDelay: `${(pointIndex * 150) + (setIndex * 200) + 200}ms`
                    }}
                />
            ))}
          </g>
        ))}
      </svg>
      {/* Legend */}
      <div className="flex justify-center space-x-4 mt-2">
        {data.datasets.map(dataset => (
          <div key={dataset.label} className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: dataset.color }}></div>
            <span className="text-xs text-slate-300">{dataset.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineChart;
