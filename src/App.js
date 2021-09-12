import "antd/dist/antd.css";
import "./App.css";
import { Button, Table } from "antd";
import SearchProperty from "./SearchProperty";
import { useState } from "react";
import ChangeModal from "./ChangeModal";

const data = [
  {
    key: "1",
    featureName: "Feature 1",
    property: "property",
    comp1: "Feature 1 value",
    comp2: "Feature 1 value",
    comp3: "Feature 1 value",
    comp4: "Feature 1 value",
  },
  {
    key: "0",
    featureName: "Feature 2",
    property: "property",
    comp1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut urna sed nisi varius consectetur ac sed neque. Aliquam sit amet vulputate augue, id varius quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dapibus, erat vel aliquet tincidunt, massa ligula lacinia libero, ac sodales elit dolor sed neque. Aliquam erat volutpat. Nulla eget lacus a elit consectetur pellentesque et eu massa. Duis euismod dui vel dui viverra pretium. Suspendisse potenti. Curabitur vulputate tempus sapien ut fermentum.",
    comp2: "Feature 2 value",
    comp3: "Feature 2 value",
    comp4: "Feature 2 value",
  },
  {
    key: "3",
    featureName: "Feature 3",
    property: "property",
    comp1: "Feature 3 value",
    comp2: "Feature 3 value",
    comp3: "Feature 3 value",
    comp4: "Feature 3 value",
  },
  {
    key: "4",
    featureName: "Feature 4",
    property: "property",
    comp1: "Feature 4 value",
    comp2: "Feature 4 value",
    comp3: "Feature 4 value",
    comp4: "Feature 4 value",
  },
  {
    key: "5",
    featureName: "Feature 5",
    property: "property",
    comp1: "Feature 5 value",
    comp2: "Feature 5 value",
    comp3: "Feature 5 value",
    comp4: "Feature 5 value",
  },
];

console.log(data);

const comp = [
  { name: "Comp# 1", key: "comp1" },
  { name: "Comp# 2", key: "comp2" },
  { name: "Comp# 3", key: "comp3" },
  { name: "Comp# 4", key: "comp4" },
];

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div className="search-container">
        <SearchProperty btnName="Show Comps" onSave={(d) => console.log(d)}/>
      </div>
      <div className="table-container">
        <Table
          dataSource={data}
          scroll={{ x: 1500 }}
          sticky
          pagination={false}
          bordered
        >
          <Table.Column title="Features" dataIndex="featureName" />
          <Table.Column
            title="Subject Property"
            dataIndex="property"
            key="Subject Property"
          />
          {comp.map((c, i) => (
            <Table.Column
              key={`comp-${i}`}
              title={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span>{c.name}</span>
                  <Button
                    type="primary"
                    style={{ margin: "1rem 0" }}
                    onClick={() => setShow(true)}
                  >
                    Change
                  </Button>
                </div>
              }
              dataIndex={c.key}
            />
          ))}
        </Table>
      </div>
      <ChangeModal show={show} setShow={setShow} />
    </div>
  );
}

export default App;
