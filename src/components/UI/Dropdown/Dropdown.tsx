interface ListItem {
  label: string;
  link?: string;
  onClick?: () => void;
}

interface DropdownProps {
  label?: JSX.Element | string;
  list: ListItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, list }: DropdownProps) => {
  const clickHandler = () => {
    const menu = document.getElementById("menu");
    menu?.classList.toggle("hidden");
    menu?.classList.toggle("relative");
  }
  return (
    <div className="">
      <div id="menu-button" className="cursor-pointer mx-3 flex gap-1" onClick={clickHandler}>{label ? label : "Dropdown"} <i className="bi bi-chevron-down"></i></div>
      <div id="menu" className="hidden sm:top-4">
        <ul className="absolute px-6 sm:px-8 py-4 bg-sky-50 rounded shadow list-none gap-1 flex flex-col sm:items-end">
          {list.map((item) => (
            <li key={item.label} className="cursor-pointer" onClick={clickHandler}>
              {item.link ? (
                <a href={item.link}>{item.label}</a>
              ) : (
                <span onClick={item.onClick}>{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown;