export default function Tabs(props) {
  let selected = props.selected;
  console.log(selected);
  return (
    <li
      data-select={selected}
      id={`tab${props.i}`}
      aria-controls={`panel${props.i}`}
    >
      <button
        data-spec={`tab-link--${props.i}`}
        data-automation={`tab-link--${props.i}`}
        aria-label=""
        type="button"
      >
        <span>{props.title}</span>
      </button>
    </li>
  );
}
