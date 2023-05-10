import React from "react";

const Header = ({ level, text, category }) => {
  const HeadingTag = `h${level}`;
  return (
    <div className="typo-line">
      <HeadingTag>
        <p className="category">{category}</p>
        {text}
      </HeadingTag>
    </div>
  );
};

const Typography = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="header">
              <h4 className="title">Light Bootstrap Table Heading</h4>
              <p className="category">Created using Roboto Font Family</p>
            </div>
            <div className="content">
              <Header
                level={1}
                text="Light Bootstrap Table Heading"
                category="Header 1"
              />
              <Header
                level={2}
                text="Light Bootstrap Table Heading"
                category="Header 2"
              />
              <Header
                level={3}
                text="Light Bootstrap Table Heading"
                category="Header 3"
              />
              <Header
                level={4}
                text="Light Bootstrap Table Heading"
                category="Header 4"
              />
              <Header
                level={5}
                text="Light Bootstrap Table Heading"
                category="Header 5"
              />
              <Header
                level={6}
                text="Light Bootstrap Table Heading"
                category="Header 6"
              />
              <div className="typo-line">
                <p>
                  <span className="category">Paragraph</span>Lorem ipsum dolor
                  sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat
                  volutpat. Ut wisi enim ad minim veniam.
                </p>
              </div>
              <div className="typo-line">
                <p className="category">Quote</p>
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                  </p>
                  <small>Steve Jobs, CEO Apple</small>
                </blockquote>
              </div>

              <div className="typo-line">
                <p className="category">Muted Text</p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </div>
              <div className="typo-line">
                <p className="category">Coloured Text</p>
                <p className="text-primary">
                  Text Primary - Light Bootstrap Table Heading and complex
                  bootstrap dashboard you've ever seen on the internet.
                </p>
                <p className="text-info">
                  Text Info - Light Bootstrap Table Heading and complex
                  bootstrap dashboard you've ever seen on the internet.
                </p>
                <p className="text-success">
                  Text Success - Light Bootstrap Table Heading and complex
                  bootstrap dashboard you've ever seen on the internet.
                </p>
                <p className="text-warning">
                  Text Warning - Light Bootstrap Table Heading and complex
                  bootstrap dashboard you've ever seen on the internet.
                </p>
                <p className="text-danger">
                  Text Danger - Light Bootstrap Table Heading and complex
                  bootstrap dashboard you've ever seen on the internet.
                </p>
              </div>

              <div className="typo-line">
                <h2>
                  <p className="category">Small Tag</p>Header with small
                  subtitle <br />
                  <small>".small" is a tag for the headers</small>{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Typography;
