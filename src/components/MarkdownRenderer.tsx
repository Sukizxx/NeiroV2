'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeEmbed from './CodeEmbed';
import type { Components } from 'react-markdown';

interface Props {
  content: string;
}

export default function MarkdownRenderer({ content }: Props) {
  const components: Components = {
    code({ className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      const codeStr = String(children).replace(/\n$/, '');

      if (match) {
        return <CodeEmbed code={codeStr} language={match[1]} />;
      }

      return (
        <code className="bg-[#1A1A1A] text-[#e0e0e0] px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
          {children}
        </code>
      );
    },
    p({ children }) {
      return <p className="mb-3 leading-relaxed text-[#e0e0e0]">{children}</p>;
    },
    h1({ children }) {
      return <h1 className="text-xl font-bold mb-3 mt-4 text-white">{children}</h1>;
    },
    h2({ children }) {
      return <h2 className="text-lg font-bold mb-2 mt-3 text-white">{children}</h2>;
    },
    h3({ children }) {
      return <h3 className="text-base font-semibold mb-2 mt-3 text-white">{children}</h3>;
    },
    ul({ children }) {
      return <ul className="list-disc list-inside mb-3 space-y-1 text-[#e0e0e0]">{children}</ul>;
    },
    ol({ children }) {
      return <ol className="list-decimal list-inside mb-3 space-y-1 text-[#e0e0e0]">{children}</ol>;
    },
    li({ children }) {
      return <li className="leading-relaxed">{children}</li>;
    },
    blockquote({ children }) {
      return (
        <blockquote className="border-l-2 border-[#333] pl-4 my-3 text-[#BFBFBF] italic">
          {children}
        </blockquote>
      );
    },
    a({ href, children }) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
          {children}
        </a>
      );
    },
    table({ children }) {
      return (
        <div className="overflow-x-auto my-3">
          <table className="w-full border-collapse border border-[#333] text-sm">{children}</table>
        </div>
      );
    },
    th({ children }) {
      return <th className="border border-[#333] px-3 py-2 bg-[#1A1A1A] text-left text-white font-medium">{children}</th>;
    },
    td({ children }) {
      return <td className="border border-[#333] px-3 py-2 text-[#BFBFBF]">{children}</td>;
    },
    hr() {
      return <hr className="my-4 border-[#333]" />;
    },
  };

  return (
    <div className="prose-invert max-w-none break-words">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
