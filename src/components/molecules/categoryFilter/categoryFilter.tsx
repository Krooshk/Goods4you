import { Option } from "../../atoms/option/option";
import styles from "./categoryfilter.module.css";
import { useState } from "react";

export function CategoryFilter() {
  // checked={this.state.site === result.SITE_NAME}
  //             onChange={this.onSiteChanged}

  const categoties = [
    "smartphones",
    "laptops",
    "sneakers",
    "sneakers",
    "sneakers",
    "sneakers",
    "sneakers",
    "sneakers",
  ];

  const [id, setId] = useState("0");
  return (
    <fieldset>
      <legend>Category</legend>
      <div className={styles.grid}>
        {categoties.map((category, index) => (
          <Option
            name="category"
            value={category}
            id={index.toString()}
            checked={id === index.toString()}
            handleChange={(id) => setId(id)}
          />
        ))}
      </div>
    </fieldset>
  );
}
