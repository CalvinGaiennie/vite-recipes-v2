export function Header({ pageTitle }) {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="display-4 mb-3"> {pageTitle}</h1>
        <hr className="my-4"></hr>
      </div>
    </div>
  );
}
