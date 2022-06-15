import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <hr />
      <div className="py-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-lg-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#">
                    <Image width={44} height={44} src={logo} alt="logo" />
                  </a>

                  <ul className="d-flex ms-5">
                    <li>
                      <a href="#" className="link p-3">
                        Link
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link p-3">
                        Link
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link p-3">
                        Link
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex justify-content-center mt-5 mt-lg-0 ms-lg-10">
                  <a href="#" className="icon-social is-twitter mx-3"></a>
                  <a href="#" className="icon-social is-telegram mx-3"></a>
                  <a href="#" className="icon-social is-discord "></a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
              <p className="text-micro text-lg-end">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                sollicitudin lacus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
