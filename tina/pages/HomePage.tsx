import { tinaField, useTina } from "tinacms/dist/react";
import type {
  PageBlocks,
  PageQuery,
  PageQueryVariables,
} from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Blocks } from "../../src/components/react/Blocks";

type Props = {
  variables: PageQueryVariables;
  data: PageQuery;
  query: string;
  children: React.ReactNode;
};

const HomePage = (props: Props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.page;

  return (
    <main>
      <div data-tina-field={tinaField(page, "blocks")}>
        {/* <Blocks blocks={page.blocks as PageBlocks[]} /> */}
        {props.children}
      </div>
      {/* <div data-tina-field={tinaField(page, "body")}>
        <TinaMarkdown content={page.body} />
      </div> */}
    </main>
  );
};

export default HomePage;
