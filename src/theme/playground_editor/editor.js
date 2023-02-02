"use strict";
window.editors = [];
(function(editors) {
    if (typeof(ace) === 'undefined' || !ace) {
        return;
    }

    Array.from(document.querySelectorAll('.editable')).forEach(function(editable) {
        let display_line_numbers = window.playground_line_numbers || false;

        let editor = ace.edit(editable);
            editor.setOptions({
            highlightActiveLine: false,
            showPrintMargin: false,
            showLineNumbers: display_line_numbers,
            showGutter: display_line_numbers,
            maxLines: Infinity,
            fontSize: "0.875em" // please adjust the font size of the code in general.css
        });

        let lang = "";
        const classes = editable.classList;
        for (const value of classes) {
            if (value.startsWith("language-")) {
                lang = value.split("-")[1];
                break;
            }
        }

        const languageModes = {
            "rust": "ace/mode/rust",
            "c": "ace/mode/c_cpp",
            "cpp": "ace/mode/c_cpp",
            "bash": "ace/mode/sh",
            "sh": "ace/mode/sh",
            "shell": "ace/mode/sh",
            "zsh": "ace/mode/sh",
            "python": "ace/mode/python",
            "py": "ace/mode/python",
            "js": "ace/mode/javascript",
            "javascript": "ace/mode/javascript",
            "json": "ace/mode/json",
            "html": "ace/mode/html",
            "xml": "ace/mode/xml",
            "css": "ace/mode/css",
            "toml": "ace/mode/toml",
            "yaml": "ace/mode/yaml",
            "csharp": "ace/mode/csharp",
            "go": "ace/mode/golang",
            "java": "ace/mode/java",
            "haskell": "ace/mode/haskell",
            "kotlin": "ace/mode/kotlin",
        }

        editor.$blockScrolling = Infinity;

        editor.getSession().setMode(languageModes[lang] || "ace/mode/rust");

        editor.originalCode = editor.getValue();

        editors.push(editor);
    });
})(window.editors);
