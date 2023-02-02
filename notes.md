Relevant PRs:
- [Add hidelines code class to enable hiding in non-Rust blocks #1379 ](https://github.com/rust-lang/mdBook/pull/1379)
- [Open up support for alternative playground languages #1759](https://github.com/rust-lang/mdBook/pull/1759)
- [Support hidden lines in languages other than Rust #1761](https://github.com/rust-lang/mdBook/pull/1761)

Relevant Issues:
- [How to make JavaScript code examples runnable? #1453](https://github.com/rust-lang/mdBook/issues/1453)
- [Consider alternative playpen backends for remote code execution #350](https://github.com/rust-lang/mdBook/issues/350)
- [Support line numbers for any block of code #1303](https://github.com/rust-lang/mdBook/issues/1303)
- [Playground code with no main fails to compile #1767](https://github.com/rust-lang/mdBook/issues/1767)
- [Support languages other than Rust for "Hiding code lines" #1475](https://github.com/rust-lang/mdBook/issues/1475)
- [[Feature Request] "Show hidden lines" functionality for non-rust files #1502](https://github.com/rust-lang/mdBook/issues/1502)


Other issues:
- [ Rethink theme management #351 ](https://github.com/rust-lang/mdBook/issues/351)
- [ Rethink book.js organization #352 ](https://github.com/rust-lang/mdBook/issues/352)
- [ Rethink index.hbs organization #353 ](https://github.com/rust-lang/mdBook/issues/353)
- [ Rethink playpen configuration #354 ](https://github.com/rust-lang/mdBook/issues/354)


Potential:
- [Disabling the expansion of hidden lines in code snippets #767](https://github.com/rust-lang/mdBook/issues/767)


To fix:
- Code file inclusion   {{#include file.rs}}
- mdbook test -> runs rust code samples, maybe can run others as well?


Alternative Editors:
- https://copenhagen.autocode.com/
- https://microsoft.github.io/monaco-editor/
- https://codemirror.net/

Alternative Highlighting:
- https://github.com/wooorm/starry-night
