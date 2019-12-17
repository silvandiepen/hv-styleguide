import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "hv-styleguide",
  plugins: [
    sass({
      injectGlobalPaths: [
        "node_modules/hv-color/hv/transavia.scss",
        "node_modules/hv-style/src/scss/default.scss"
      ]
    })
  ],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: "hv-styleguide",
      proxiesFile: "../hv-styleguide-react/src/components.ts"
    }),
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ]
};
