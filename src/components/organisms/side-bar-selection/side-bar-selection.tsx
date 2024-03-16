import { CategoryFilter } from "../../molecules/categoryFilter/categoryFilter";
import { Button } from "../../atoms/button/button";

export function SideBarSelection() {
  return (
    <div>
      <h3>Selection by parameters</h3>
      <CategoryFilter />
      <Button type="primary" text="Apply" handleClick={() => {}} />
      <Button type="transparent" text="Reset" handleClick={() => {}} />
    </div>
  );
}
