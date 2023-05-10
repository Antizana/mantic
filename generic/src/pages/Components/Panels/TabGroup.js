import React from "react";
import { Tabs, Tab } from "react-bootstrap";

const TabGroup = () => (
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <div className="header">
          <h4 className="title">Tabs</h4>
          <p className="category">Plain text tabs</p>
        </div>
        <div className="content">
          <Tabs defaultActiveKey={1} id="plan-text-tabs">
            <Tab eventKey={1} title="Tab 1">
              Our team of experts creates top-quality clothing. We've trained at
              renowned design schools and have outfitted the most fashionable
              men in the business. We're here for you!
            </Tab>
            <Tab eventKey={2} title="Tab 2">
              We are Studio Design, a team of architects and designers operating
              worldwide, creating beautiful spaces for happy clients.
            </Tab>
            <Tab eventKey={3} title="Tab 3">
              Discover a range of options, customize to your liking, and entrust
              us with crafting your dream space. Our expertise is evident in the
              products and feedback presented.
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="card">
        <div className="header">
          <h4 className="title">Tabs &amp; Icons</h4>
          <p className="category">Tabs with icons and full width</p>
        </div>
        <div className="content content-full-width">
          <Tabs defaultActiveKey={1} id="tab-with-icons">
            <Tab
              eventKey={1}
              title={
                <span>
                  <i className="fa fa-info"></i> Info
                </span>
              }
            >
              Our team of experts creates top-quality clothing. We've trained at
              renowned design schools and have outfitted the most fashionable
              men in the business. We're here for you!
            </Tab>
            <Tab
              eventKey={2}
              title={
                <span>
                  <i className="fa fa-user"></i> Account
                </span>
              }
            >
              We are Studio Design, a team of architects and designers operating
              worldwide, creating beautiful spaces for happy clients.
            </Tab>
            <Tab
              eventKey={3}
              title={
                <span>
                  <i className="fa fa-cube"></i> Style
                </span>
              }
            >
              Discover a range of options, customize to your liking, and entrust
              us with crafting your dream space. Our expertise is evident in the
              products and feedback presented.
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
);

export default TabGroup;
