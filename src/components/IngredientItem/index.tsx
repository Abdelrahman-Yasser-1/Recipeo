import React from "react";
import { Img } from "react-image";
import { Balancer } from "react-wrap-balancer";
import ImagePlaceholder from "../ImagePlaceholder";

interface IngredientCardProps {
  image: string;
  title: string;
  subTitle: string;
  measurement: string;
}

export default React.memo((props: IngredientCardProps) => {
  const { image, title, subTitle, measurement } = props;
  return (
    <article className="grid grid-cols-[80px,1fr] space-x-3 rounded-lg border p-2">
      <Img
        className="aspect-square w-20 border bg-slate-100 rounded-lg flex items-center justify-center"
        src={image}
        alt={title}
        unloader={
          <ImagePlaceholder
            alt={title}
            className="aspect-square w-20 border bg-slate-100 rounded-lg flex items-center justify-center"
          />
        }
        loader={
          <ImagePlaceholder
            alt={title}
            className="aspect-square w-20 border bg-slate-100 rounded-lg flex items-center justify-center"
          />
        }
      />
      <header className="flex flex-col justify-center py-2">
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="text-xs lg:text-sm">
          <Balancer>{subTitle}</Balancer>
        </p>
        <p className="mt-1 text-xs text-muted-foreground lg:text-sm">
          <em>{measurement}</em>
        </p>
      </header>
    </article>
  );
});
