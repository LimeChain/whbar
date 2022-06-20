export default function Footer() {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <hr />
          <ul className="d-flex justify-content-center mt-5">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/LimeChain/whbar"
                className="text-small link p-3"
              >
                Go to contract repo
              </a>
            </li>
            {/* <li>
              <a href="#" className="link p-3">
                Browse in hashscan
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
