// special value that means this program has graphical output

function $(id) {
    return document.getElementById(id);
}

window.onload = function() {
    $("fixindentation").onclick = indent;
    $("indentbyspaces").onclick = enableSpacesBox;
    $("indentbytabs").onclick = enableSpacesBox;
    $("sourcecode").onchange = $("sourcecode").onkeydown = 
            $("sourcecode").onkeypress = $("sourcecode").onblur = 
            $("sourcecode").onfocus = delayedSourceCodeChange;
};

function enableSpacesBox(event) {
    $("spaces").disabled = $("indentbytabs").checked;
}

function indent(event) {
    var code = $("sourcecode").value;
    // code += "\n:-)";
    
    var indentString = "\t";
    if ($("indentbyspaces").checked) {
        indentString = "";
        var spaces = Number($("spaces").value);
        for (var i = 0; i < spaces; i++) {
            indentString += " ";
        }
    }
    
    var newCode = "";
    var indentLevel = 0;
    var indentDuration = 0;   // used for temporary indents like 1-line ifs
    var newLines = [];
    var inMultiLineComment = false;
    
    var lines = code.split(/[\r]?\n/gi);
    for (var i = 0; i < lines.length; i++) {
        var line = trim(lines[i]);
        var lineForMatching = line.replace(/\/\/.*/, "");
        
        if (inMultiLineComment) {
            if (line.match(/\*\//)) {
                lineForMatching = line.replace(/.*\*\//, "");
                inMultiLineComment = false;
            } else {
                // entire line is part of multi-line comment;
                // ignore it for indentation purposes
                lineForMatching = "";
            }
        }

        if (lineForMatching.match(/\/\*/)) {
            if (lineForMatching.match(/\*\//)) {
                // a multi-line comment contained within one line; strip it
                lineForMatching = lineForMatching.replace(/\/\*.*\*\//, "");
            } else {
                inMultiLineComment = true;
                lineForMatching = lineForMatching.replace(/\/\*.*/, "");
            }
        }
        
        // ignore stuff in comments
        
        var lbrackets = lineForMatching.replace(/[^\{]+/gi, "");
        var rbrackets = lineForMatching.replace(/[^\}]+/gi, "");
        var lbracket1 = lineForMatching.indexOf("{");
        var rbracket1 = lineForMatching.indexOf("}");
        var lbracketN = lineForMatching.lastIndexOf("{");
        var rbracketN = lineForMatching.lastIndexOf("}");

        var increaseIndentBefore = false;
        var decreaseIndentBefore = false;
        var increaseIndentAfter = false;
        var decreaseIndentAfter = false;
        
        if (lbrackets.length > rbrackets.length ||
                lbracketN >= 0 && lbracketN > rbracketN) {
            // opening brace(s) on this line; indent subsequent lines
            increaseIndentAfter = true;
        }
        if (rbrackets.length > lbrackets.length ||
                rbracket1 >= 0 && rbracket1 < lbracket1) {
            // closing brace(s) on this line; decrease this line and subseqent lines
            decreaseIndentBefore = true;
        }
        
        // closing bracket; decrease indent
        // indentLevel = Math.max(0, indentLevel - 1);

        // check for a prior temporary indent (unbracketed if/else)
        // and get rid of it if so
        if (indentDuration > 0) {
            // if (lbrackets.length != rbrackets.length ||
            // (!lineForMatching.match(/(if |for |while )[ \t]*([^)]*)/) && !lineForMatching.match(/else /))) {
            indentDuration--;
            if (indentDuration == 0) {
                // indentLevel = Math.max(0, indent - 1);
                decreaseIndentAfter = true;
            }
            // }
        }
        
        // check for a new temporary indent (unbracketed if/else)
        // on this line and increase subsequent indent temporarily if so
        // side note: f**k unbracketed if/elses for making me write this code
        if (
                (
                    // (lbrackets.length < rbrackets.length || rbracketN > lbracketN) ||
                    // increaseIndentAfter ||
                    (lbrackets.length == 0 && rbrackets.length == 0)
                )
                &&
                (
                    (lineForMatching.match(/(if |while )[ \t]*([^)]*)/) && !lineForMatching.match(/;/)) ||
                    (lineForMatching.match(/(for )[ \t]*([^)]*)/)) ||
                    (lineForMatching.match(/else/) && 
                        (
                            !lineForMatching.match(/else[ ]+if/) &&
                            // !lineForMatching.match(/ /)
                            (lbrackets.length == 0 || lbrackets.length > rbrackets.length)
                        )
                    )
                )
           ) {
            increaseIndentAfter = true;
            indentDuration = 1;
        }
        
        // pre-print indentation adjustments
        if (increaseIndentBefore) {
            indentLevel++;
        } else if (decreaseIndentBefore) {
            indentLevel = Math.max(0, indentLevel - 1);
        }
        
        // store this line, indented (hopefully) properly
        for (var tabs = 0; tabs < indentLevel; tabs++) {
            line = indentString + line;
        }
        newLines.push(line);

        // post-print indentation adjustments
        if (increaseIndentAfter) {
            indentLevel++;
        } else if (decreaseIndentAfter) {
            indentLevel = Math.max(0, indentLevel - 1);
        }
    }
    
    // put the newly indented lines into the text area on the page
    newCode = newLines.join("\n");
    $("sourcecode").value = newCode;
}

function delayedSourceCodeChange(event) {
    event = event || window.event;
    sourceCodeChange(event);
    setTimeout(sourceCodeChange, 20);
}


// Called when the text in the text box changes; shows the count of lines.
function sourceCodeChange(event) {
    var codeText = $("sourcecode").value;
    var lineCount = codeText ? trim(codeText).split(/\n/).length : 0;

    // remove // comments
    codeText = "\n" + codeText + "\n";   // makes regexes match ends of input
    codeText = codeText.replace(/\s*\/\/.*/gim, "");
    
    // remove / * * / comments
    codeText = codeText.replace(/\/\*([^*]*\*)*([^*]*\*)\//gi, "");

    // remove blank lines and lines containing only { or } braces
    // (hack: I remove the regex 5x because for some reason it doesn't
    // properly remove multiple lines of } in a row)
    codeText = codeText.replace(/\r/, "");
    codeText = codeText.replace(/$\s*([{}])?\s*\n/gim, "$1\n");
    codeText = codeText.replace(/$\s*([{}])?\s*\n/gim, "$1\n");
    codeText = codeText.replace(/$\s*([{}])?\s*\n/gim, "$1\n");
    codeText = codeText.replace(/$\s*([{}])?\s*\n/gim, "$1\n");
    codeText = codeText.replace(/$\s*([{}])?\s*\n/gim, "$1\n");
    
    codeText = trim(codeText);   // kill leading/trailing \n that I inserted
    
    // dump to page for debugging
    // $("dumptarget").innerHTML = htmlEncode(codeText);

    var substantiveLineCount = codeText ? trim(codeText).split(/\n/).length : 0;
    $("linecount").innerHTML = lineCount;
    $("substantivelinecount").innerHTML = substantiveLineCount;
}

function padL(text, length) {
    while (text.length < length) {
        text = " " + text;
    }
    return text;
}

function htmlEncode(text) {
    text = text.replace(/</g, "&lt;");
    text = text.replace(/>/g, "&gt;");
    text = text.replace(/ /g, "&nbsp;");
    return text;
}

function ltrim(str) { 
    for (var k = 0; k < str.length && str.charAt(k) <= " "; k++);
    return str.substring(k, str.length);
}

function rtrim(str) {
    for (var j = str.length - 1; j >= 0 && str.charAt(j) <= " "; j--);
    return str.substring(0, j+1);
}

function trim(str) {
    return ltrim(rtrim(str));
}
