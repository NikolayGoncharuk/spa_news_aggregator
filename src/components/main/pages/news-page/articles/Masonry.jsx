import React from 'react';
import PropTypes from 'prop-types';

Masonry.defaultProps = {
  columns: 2,
  gap: 32
};

Masonry.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  columns: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired
};

export default function Masonry(props) {
  const columnWrapper = {};
  const result = [];

  const [breakpoint, setBreakpoint] = React.useState(window.innerWidth);
  const [columns, setColumns] = React.useState(props.columns);
  const [gap, setGap] = React.useState(props.gap);

  const classes = {
    root: {
      display: 'flex'
    },
    columnWrapper: {
      marginBottom: `${gap}px`
    },
    result(i) {
      return {
        marginLeft: `${i > 0 ? gap : 0}px`,
        flex: 1,
      };
    },
  };

  // Записывает текущую ширину страницы
  window.addEventListener('resize', getBreakpoint);
  function getBreakpoint() {
    setBreakpoint(window.innerWidth);
  };

  // Если заданы параметры, устанавливает их, в зависимости от текущей ширины страницы
  React.useEffect(() => {
    if (breakpoint >= 1920) {
      setColumns(props.cxl ? props.cxl : props.columns);
      setGap(props.gxl >= 0 ? props.gxl : props.gap);
    }
    else if (breakpoint >= 1280 && breakpoint < 1920) {
      setColumns(props.clg ? props.clg : props.columns);
      setGap(props.glg >= 0 ? props.glg : props.gap);
    }
    else if (breakpoint >= 960 && breakpoint < 1280) {
      setColumns(props.cmd ? props.cmd : props.columns);
      setGap(props.gmd >= 0 ? props.gmd : props.gap);
    }
    else if (breakpoint >= 600 && breakpoint < 960) {
      setColumns(props.csm ? props.csm : props.columns);
      setGap(props.gsm >= 0 ? props.gsm : props.gap);
    }
    else if (breakpoint >= 0 && breakpoint < 600) {
      setColumns(props.cxs ? props.cxs : props.columns);
      setGap(props.gxs >= 0 ? props.gxs : props.gap);
    };
  }, [breakpoint]);

  // Создаёт пустой массив колонки в качестве свойства columnWrapper
  for (let i = 0; i < columns; i++) {
    columnWrapper[`column${i}`] = [];
  };

  // Устанавливает дочерние элементы поочереди в каждую колонку
  for (let i = 0; i < props.children.length; i++) {
    const columnIndex = i % columns;
    columnWrapper[`column${columnIndex}`].push(
      <div style={classes.columnWrapper}>
        {props.children[i]}
      </div>
    );
  };

  // Устанавливает колонки в массив
  for (let i = 0; i < columns; i++) {
    result.push(
      <div style={classes.result(i)}>
        {columnWrapper[`column${i}`]}
      </div>
    );
  };

  return (
    <div style={classes.root}>
      {result}
    </div>
  );
};