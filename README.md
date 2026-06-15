# EventFabric

<img
    src="https://raw.githubusercontent.com/devn-ch/EventFabric/next/media/EventFabric.webp"
    width="1024"
    alt="Event Fabric"
/>

## Installation

Find all packages and installation instructions at [jsr.io](https://jsr.io/@nimbus-cqrs) or [npmjs.com](https://www.npmjs.com/org/nimbus-cqrs).

## Documentation

Find the full documentation at [https://devn-ch.github.io/EventFabric/](https://devn-ch.github.io/EventFabric/).

For coding agents and LLM tools, the site also publishes [llms.txt](https://nimbus.overlap.at/llms.txt) (guide index) and [llms-full.txt](https://nimbus.overlap.at/llms-full.txt) (full guide in one file), following the [llms.txt specification](https://llmstxt.org/).

In addition code documentation is automatically generated and can be found for
each package at [jsr.io](https://jsr.io/@nimbus-cqrs).

## Technical informations

<details>
<summary><h3>Deployment</h3></summary>

1. ensure that you commited all changes

2. Set a new version
```sh
deno task version:set x.x.x
```

3. Deploy deno packages to <a href="https://jsr.io/" target="_blank">JSR.io</a>
```sh
deno publish
```

4. Build packages for
```sh
deno task build:npm
```

5. Deploy to npm registry

```sh
cd dist/npm/core
npm publish --access public
```

</details>

## License

Copyright 2026 devn.ch

Copyright 2024 [Overlap GmbH & Co KG](https://overlap.at)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
