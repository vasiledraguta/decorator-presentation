interface CodeBlockProps {
  code: string;
  className?: string;
  fontSize?: string;
}

type TokenType = "keyword" | "string" | "comment" | "type" | "punctuation" | "plain";

interface Token {
  type: TokenType;
  value: string;
}

const KEYWORD_SET = new Set([
  "class",
  "extends",
  "implements",
  "interface",
  "function",
  "return",
  "new",
  "const",
  "let",
  "var",
  "export",
  "default",
  "import",
  "from",
  "if",
  "else",
  "this",
  "super",
  "constructor",
  "protected",
  "private",
  "public",
  "abstract",
  "readonly",
  "static",
  "void",
  "typeof",
  "instanceof",
  "app",
  "use",
  "get",
  "req",
  "res",
  "next",
  "throw",
]);

const TYPE_SET = new Set(["string", "number", "boolean", "void", "null", "undefined", "any"]);

function tokenize(line: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < line.length) {
    if (line[i] === "/" && line[i + 1] === "/") {
      tokens.push({ type: "comment", value: line.slice(i) });
      break;
    }

    if (line[i] === '"' || line[i] === "'" || line[i] === "`") {
      const quote = line[i];
      let j = i + 1;
      while (j < line.length && line[j] !== quote) j++;
      tokens.push({ type: "string", value: line.slice(i, j + 1) });
      i = j + 1;
      continue;
    }

    if (/[a-zA-Z_$]/.test(line[i])) {
      let j = i;
      while (j < line.length && /[a-zA-Z0-9_$]/.test(line[j])) j++;
      const word = line.slice(i, j);
      if (KEYWORD_SET.has(word)) {
        tokens.push({ type: "keyword", value: word });
      } else if (TYPE_SET.has(word)) {
        tokens.push({ type: "type", value: word });
      } else {
        tokens.push({ type: "plain", value: word });
      }
      i = j;
      continue;
    }

    if (/[0-9]/.test(line[i])) {
      let j = i;
      while (j < line.length && /[0-9.]/.test(line[j])) j++;
      tokens.push({ type: "plain", value: line.slice(i, j) });
      i = j;
      continue;
    }

    if (/[{}()[\]:;<>,=.+\-*/%!&|?@^~#]/.test(line[i])) {
      tokens.push({ type: "punctuation", value: line[i] });
      i++;
      continue;
    }

    if (/\s/.test(line[i])) {
      let j = i;
      while (j < line.length && /\s/.test(line[j])) j++;
      tokens.push({ type: "plain", value: line.slice(i, j) });
      i = j;
      continue;
    }

    tokens.push({ type: "plain", value: line[i] });
    i++;
  }

  return tokens;
}

const TOKEN_COLORS: Record<TokenType, string> = {
  keyword: "#f59e0b",
  string: "#34d399",
  comment: "#5a5a72",
  type: "#60a5fa",
  punctuation: "#7a7a92",
  plain: "#e0def4",
};

export function CodeBlock({ code, className = "", fontSize = "text-base" }: CodeBlockProps) {
  const lines = code.split("\n");

  return (
    <div
      className={`border-border-card bg-code-bg overflow-auto rounded-xl border ${className}`}
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
    >
      <pre className={`p-7 leading-relaxed ${fontSize} font-mono`}>
        <code>
          {lines.map((line, li) => (
            <div key={li}>
              {tokenize(line).map((tok, ti) => (
                <span key={ti} style={{ color: TOKEN_COLORS[tok.type] }}>
                  {tok.value}
                </span>
              ))}
              {line === "" && "\n"}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
