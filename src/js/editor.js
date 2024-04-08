// Initialize CodeMirror editor\
window.addEventListener('DOMContentLoaded', function() {
    const editor = CodeMirror.fromTextArea(document.getElementById("code-input"), {
        lineNumbers: true,
        mode: "javascript", // Default mode
        theme: "dracula",
        autoCloseBrackets: true,
        matchBrackets: true,
        indentUnit: 4,
        styleActiveLine: true, // Highlight the active line
        foldGutter: true, // Enable code folding
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"], // Add fold gutter
        extraKeys: {
            "Ctrl-Space": "autocomplete", // Enable autocomplete (Ctrl+Space)
            "Ctrl-Q": cm => cm.foldCode(cm.getCursor()) // Fold the current line/block with Ctrl-Q
        },
        lint: true
    });

    // Function to change the mode of the editor based on the selected language
    function changeEditorMode(language) {
        const modeMap = {
            'java': 'text/x-java',
            'python': 'python',
            'javascript': 'javascript'
        };
        const mode = modeMap[language] || '';
        editor.setOption("mode", mode);
    }

    // Event listener for language selector changes
    document.querySelector(".language-selector").addEventListener("change", function() {
        const selectedLanguage = this.value;
        changeEditorMode(selectedLanguage);
    });

    // Event listener for run button
    document.getElementById("run-button").addEventListener("click", function() {
        const language = document.querySelector(".language-selector").value;
        const code = editor.getValue();
        console.log(language, code);
        
        // Placeholder for code execution logic
        const output = `Output for ${language}:\n${code}`;
        
        document.getElementById("output-container").innerHTML = `<pre>${output}</pre>`;
    });
});