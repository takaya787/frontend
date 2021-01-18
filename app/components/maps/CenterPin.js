const markerStyle = {
  height: 20,
  width: 20,
  backgroundColor: 'red',
  cursor: 'pointer'
};
const hoverStyle = {
  height: 20,
  width: 20,
  backgroundColor: 'blue',
  cursor: 'pointer',
};

export default function CenterPin(props) {
  const style = props.$hover ? hoverStyle : markerStyle;

  return (
    <div className="marker" style={style}>
    </div>
  )
}
