/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Select } from "antd";
import React, { useEffect, useState } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";

export default function SearchProperty({ btnName, onSave, clear }) {
  const [selectedValue, setSelectedValue] = useState("");

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete({ cache: 24 * 60 * 60 });

  useEffect(() => {
    console.log(ready, value, status, data);
  }, [ready, value, status, data]);

  useEffect(() => {
    if (clear !== undefined) {
      setSelectedValue("");
      setValue("");
    }
  }, [clear]);

  return (
    <>
      <Select
        style={{ width: 300, margin: "1rem" }}
        showSearch
        value={selectedValue || null}
        placeholder={"Enter the address"}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={(value) => setValue(value)}
        onChange={(value) => setSelectedValue(value)}
        notFoundContent={null}
      >
        {status === "OK" &&
          data.map(({ place_id, description }) => (
            <Select.Option value={description} key={place_id}>
              {description}
            </Select.Option>
          ))}
      </Select>
      <Button
        type="primary"
        style={{ margin: "1rem 0" }}
        disabled={!selectedValue}
        onClick={() => onSave(selectedValue)}
      >
        {btnName}
      </Button>
    </>
  );
}
