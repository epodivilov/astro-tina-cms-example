import React from "react";

import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { Hero } from "./blocks/hero";

import type { PageBlocks } from "../../../tina/__generated__/types";

export const Blocks = (props: { blocks: PageBlocks[] }) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "PageBlocksContent":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Content data={block} />
                  </React.Fragment>
                );
              case "PageBlocksHero":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Hero data={block} />
                  </React.Fragment>
                );
              case "PageBlocksFeatures":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Features data={block} />
                  </React.Fragment>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
