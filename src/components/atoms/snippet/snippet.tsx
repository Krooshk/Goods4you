import { SnippetType } from "../../../types/types";

export function Snippet({ params }: { params: SnippetType }) {
  return (
    <div>
      <img src={params.img} alt="Очумелые скороходы" />
      <div>{params.name}</div>
      <div>{params.price} $</div>
    </div>
  );
}
