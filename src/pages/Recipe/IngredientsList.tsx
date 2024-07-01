import { IngredientItem, Section } from "../../components";
import React from "react";
import { BiSolidComponent } from "react-icons/bi";
import { ExtendedIngredient } from "../../core/Api/entities/Helpers";

interface Props {
  extendedIngredients: ExtendedIngredient[];
}

export default React.memo((props: Props) => {
  const { extendedIngredients } = props;
  return (
    <Section
      icon={<BiSolidComponent size={20} />}
      title="Ingredients"
      subtitle="You need the ingredients below to cook it"
    >
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-1">
        {extendedIngredients.map((ingredient: ExtendedIngredient) => (
          <li key={ingredient.id}>
            <IngredientItem
              title={ingredient.name}
              subTitle={ingredient.originalName}
              image={`https://img.spoonacular.com/ingredients_500x500/${
                ingredient.image ?? ""
              }`}
              measurement={`${ingredient.amount} ${ingredient.unit}`}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
});
