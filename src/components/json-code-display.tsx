"use client";

interface JsonCodeDisplayProps {
  data: Record<string, any>;
  fileName?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function JsonCodeDisplay({
  data,
  fileName = "company-profile.json",
  showLineNumbers = true,
  className = "",
}: JsonCodeDisplayProps) {
  const formatJson = (obj: Record<string, any>, indent = 2): string => {
    const jsonString = JSON.stringify(obj, null, indent);
    return jsonString;
  };

  const renderJsonWithHighlight = (jsonString: string) => {
    const lines = jsonString.split("\n");

    return lines.map((line, index) => {
      const lineNumber = index + 1;

      const highlightedLine = line
        .replace(/("[\w]+"):/g, '<span class="text-blue-500">$1</span>:')
        .replace(/: (".*?")/g, ': <span class="text-blue-500">$1</span>')
        .replace(/: (\d+\.?\d*)/g, ': <span class="text-blue-600">$1</span>')
        .replace(
          /: (true|false|null)/g,
          ': <span class="text-blue-700">$1</span>',
        )
        .replace(/(\{|\}|\[|\])/g, '<span class="text-gray-600">$1</span>')
        .replace(/,$/g, '<span class="text-gray-600">,</span>');

      return (
        <div key={index} className="flex">
          {showLineNumbers && (
            <span className="select-none text-gray-500 text-right pr-4 min-w-[3ch]">
              {lineNumber}
            </span>
          )}
          <span
            className="flex-1"
            dangerouslySetInnerHTML={{ __html: highlightedLine }}
          />
        </div>
      );
    });
  };

  const jsonString = formatJson(data);

  return (
    <div
      className={`bg-white rounded-lg shadow-xl overflow-hidden ${className}`}
    >
      <div className="flex items-center px-4 sm:px-6 py-3 border-b border-gray-200 bg-gray-50">
        <span className="text-blue-500 mr-2">{"{}"}</span>
        <span className="text-sm font-medium text-gray-700">{fileName}</span>
      </div>

      <div className="p-4 sm:p-6 bg-gray-50 overflow-x-auto">
        <pre className="font-mono text-xs sm:text-sm leading-relaxed text-left min-w-fit">
          <code className="block">{renderJsonWithHighlight(jsonString)}</code>
        </pre>
      </div>
    </div>
  );
}
