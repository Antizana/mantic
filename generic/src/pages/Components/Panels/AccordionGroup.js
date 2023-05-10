import React from "react";
import { Accordion, Panel } from "react-bootstrap";

const AccordionGroups = () => (
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="header">
          <h4 className="title">Collapsible Accordion</h4>
          <p className="category">Bootstrap default style</p>
        </div>
        <div className="content">
          <div className="panel-group" id="accordion">
            <Accordion>
              <Panel
                header={
                  <span>
                    Collapse item 1<b className="caret"></b>
                  </span>
                }
                eventKey="1"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend, mauris vel ultricies rhoncus, odio est consectetur
                sapien, vel vestibulum velit magna eu enim. Praesent id orci vel
                mi vehicula sodales. Phasellus sed mi nec nisl blandit faucibus.
                Quisque eleifend elit non quam commodo, non dapibus nibh
                tincidunt. Aliquam at ex orci. Aenean sed felis ac odio varius
                pretium vitae vel metus. Suspendisse et mollis turpis. Nam
                viverra faucibus orci, sit amet auctor nulla maximus vel. Sed
                ornare quis neque ac vestibulum. Nullam varius, enim euismod
                sagittis luctus, ante velit malesuada purus, a lacinia dolor
                orci vitae nulla. Sed at orci ipsum. Vivamus consequat, turpis
                eu dictum efficitur, enim metus feugiat mi, a egestas purus ex a
                sapien.
              </Panel>
              <Panel
                header={
                  <span>
                    Collapse item 1<b className="caret"></b>
                  </span>
                }
                eventKey="2"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend, mauris vel ultricies rhoncus, odio est consectetur
                sapien, vel vestibulum velit magna eu enim. Praesent id orci vel
                mi vehicula sodales. Phasellus sed mi nec nisl blandit faucibus.
                Quisque eleifend elit non quam commodo, non dapibus nibh
                tincidunt. Aliquam at ex orci. Aenean sed felis ac odio varius
                pretium vitae vel metus. Suspendisse et mollis turpis. Nam
                viverra faucibus orci, sit amet auctor nulla maximus vel. Sed
                ornare quis neque ac vestibulum. Nullam varius, enim euismod
                sagittis luctus, ante velit malesuada purus, a lacinia dolor
                orci vitae nulla. Sed at orci ipsum. Vivamus consequat, turpis
                eu dictum efficitur, enim metus feugiat mi, a egestas purus ex a
                sapien.
              </Panel>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AccordionGroups;
