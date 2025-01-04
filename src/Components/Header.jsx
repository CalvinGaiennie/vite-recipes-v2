export function Header({ pageTitle }) {
  return (
    <div className="header margin">
      <div>
        <h1 className="header-content"> {pageTitle}</h1>
        <hr></hr>
      </div>
    </div>
  );
}
