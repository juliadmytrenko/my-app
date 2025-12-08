"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <div className="mt-8">
      <Giscus
        id="comments"
        repo="juliadmytrenko/my-app"
        repoId="R_kgDOQjQn-Q"
        category="General"
        categoryId="DIC_kwDOQjQn-c4CzjHv"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="pl"
        loading="lazy"
      />
    </div>
  );
}
