import React, { useState, useMemo } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";

const Nav = ({ location }) => {
  const [componentMenuOpen, setComponentMenuOpen] = useState(false);
  const [formMenuOpen, setFormMenuOpen] = useState(false);
  const [tableMenuOpen, setTableMenuOpen] = useState(false);
  const [mapMenuOpen, setMapMenuOpen] = useState(false);

  const isPathActive = useMemo(
    () => (path) => {
      return location.pathname.startsWith(path);
    },
    [location.pathname]
  );

  return (
    <ul className="nav">
      <li className={location.pathname === "/" ? "active" : null}>
        <Link to="/">
          <i className="pe-7s-graph"></i>
          <p>Dashboard</p>
        </Link>
      </li>
      <li
        className={
          isPathActive("/components") || componentMenuOpen ? "active" : null
        }
      >
        <a
          onClick={() => setComponentMenuOpen(!componentMenuOpen)}
          data-toggle="collapse"
        >
          <i className="pe-7s-plugin"></i>
          <p>
            Components
            <b className="caret"></b>
          </p>
        </a>
        <Collapse in={componentMenuOpen}>
          <div>
            <ul className="nav">
              <li
                className={
                  isPathActive("/components/buttons") ? "active" : null
                }
              >
                <Link to="/components/buttons">Buttons</Link>
              </li>
              <li
                className={isPathActive("/components/grid") ? "active" : null}
              >
                <Link to="/components/grid">Grid System</Link>
              </li>
              <li
                className={isPathActive("/components/icons") ? "active" : null}
              >
                <Link to="/components/icons">Icons</Link>
              </li>
              <li
                className={
                  isPathActive("/components/notifications") ? "active" : null
                }
              >
                <Link to="/components/notifications">Notifications</Link>
              </li>
              <li
                className={isPathActive("/components/panels") ? "active" : null}
              >
                <Link to="/components/panels">Panels</Link>
              </li>
              <li
                className={
                  isPathActive("/components/sweetalert") ? "active" : null
                }
              >
                <Link to="/components/sweetalert">Sweet Alert</Link>
              </li>
              <li
                className={
                  isPathActive("/components/typography") ? "active" : null
                }
              >
                <Link to="/components/typography">Typography</Link>
              </li>
            </ul>
          </div>
        </Collapse>
      </li>
      <li className={isPathActive("/forms") || formMenuOpen ? "active" : null}>
        <a
          onClick={() => setFormMenuOpen(!formMenuOpen)}
          data-toggle="collapse"
        >
          <i className="pe-7s-note2"></i>
          <p>
            Forms <b className="caret"></b>
          </p>
        </a>
        <Collapse in={formMenuOpen}>
          <div>
            <ul className="nav">
              <li
                className={
                  isPathActive("/forms/regular-forms") ? "active" : null
                }
              >
                <Link to="/forms/regular-forms">Regular Forms</Link>
              </li>
              <li
                className={
                  isPathActive("/forms/extended-forms") ? "active" : null
                }
              >
                <Link to="/forms/extended-forms">Extended Forms</Link>
              </li>
              <li
                className={
                  isPathActive("/forms/validation-forms") ? "active" : null
                }
              >
                <Link to="/forms/validation-forms">Validation Forms</Link>
              </li>
            </ul>
          </div>
        </Collapse>
      </li>
      <li
        className={isPathActive("/tables") || tableMenuOpen ? "active" : null}
      >
        <a
          onClick={() => setTableMenuOpen(!tableMenuOpen)}
          data-toggle="collapse"
        >
          <i className="pe-7s-news-paper"></i>
          <p>
            Tables <b className="caret"></b>
          </p>
        </a>
        <Collapse in={tableMenuOpen}>
          <div>
            <ul className="nav">
              <li
                className={
                  isPathActive("/tables/regular-tables") ? "active" : null
                }
              >
                <Link to="/tables/regular-tables">Regular Table</Link>
              </li>
              <li
                className={
                  isPathActive("/tables/extended-tables") ? "active" : null
                }
              >
                <Link to="/tables/extended-tables">Extended Tables</Link>
              </li>
              <li
                className={
                  isPathActive("/tables/fixed-data-table") ? "active" : null
                }
              >
                <Link to="/tables/react-bootstrap-table">
                  React Bootstrap Table
                </Link>
              </li>
            </ul>
          </div>
        </Collapse>
      </li>
      <li className={isPathActive("/maps") || mapMenuOpen ? "active" : null}>
        <a onClick={() => setMapMenuOpen(!mapMenuOpen)} data-toggle="collapse">
          <i className="pe-7s-map-marker"></i>
          <p>
            Map <b className="caret"></b>
          </p>
        </a>
        <Collapse in={mapMenuOpen}>
          <div>
            <ul className="nav">
              <li
                className={isPathActive("/maps/google-map") ? "active" : null}
              >
                <Link to="/maps/google-map">Google Map</Link>
              </li>
              <li
                className={isPathActive("/maps/vector-map") ? "active" : null}
              >
                <Link to="/maps/vector-map">Vector Map</Link>
              </li>
            </ul>
          </div>
        </Collapse>
      </li>
      <li className={isPathActive("/charts") ? "active" : null}>
        <Link to="/charts">
          <i className="pe-7s-graph"></i>
          <p>Charts</p>
        </Link>
      </li>
      <li className={isPathActive("/calendar") ? "active" : null}>
        <Link to="/calendar">
          <i className="pe-7s-date"></i>
          <p>Calendar</p>
        </Link>
      </li>
    </ul>
  );
};

export default withRouter(Nav);
