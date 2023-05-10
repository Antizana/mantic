import React from "react";

const sampleTitle = "Paragraph Title";
const sampleContent =
  "Paragraph ContentAs the sun rose over the mountains, Sarah woke up to the sound of chirping birds outside her window. She stretched her arms and legs, feeling the warmth of the blankets wrapped around her. As she got up from bed, she glanced at the clock on her nightstand and realized she was running late for work. She quickly got dressed and rushed out the door, hoping to catch the bus on time. As she walked down the street, she felt a cool breeze on her face and saw the leaves rustling on the trees. It was a beautiful day, but Sarah couldn't shake off the feeling that something was off.";

const ParagraphItem = ({ title, content, colSize }) => (
  <div className={colSize}>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

const Paragraph = () => (
  <div>
    <h4 className="title">Paragraphs</h4>
    <div className="card">
      <div className="content">
        <div className="row">
          <ParagraphItem
            title={sampleTitle}
            content={sampleContent}
            colSize="col-sm-6"
          />
          <ParagraphItem
            title={sampleTitle}
            content={sampleContent}
            colSize="col-sm-6"
          />
        </div>

        <br />
        <div className="row">
          <ParagraphItem
            title={sampleTitle}
            content={sampleContent}
            colSize="col-sm-4"
          />

          <ParagraphItem
            title={sampleTitle}
            content={sampleContent}
            colSize="col-sm-4"
          />

          <ParagraphItem
            title={sampleTitle}
            content={sampleContent}
            colSize="col-sm-4"
          />
        </div>

        <br />
        <div className="row">
          <ParagraphItem
            title={sampleTitle}
            content={sampleContent}
            colSize="col-sm-4"
          />

          <ParagraphItem
            title={sampleTitle}
            content={sampleContent}
            colSize="col-sm-8"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Paragraph;
