import React from 'react';
import Link from 'next/link';

interface AboutContentProps {
    content: string;
}

export default function AboutContent({ content }: AboutContentProps) {
    // Parse the markdown content
    const parseContent = (text: string) => {
        const parts: React.ReactNode[] = [];

        // Split by paragraphs
        const paragraphs = text.split('\n\n').filter(p => p.trim());

        paragraphs.forEach((paragraph, pIndex) => {
            // Check if it's a highlight block
            if (paragraph.startsWith(':::highlight') && paragraph.endsWith(':::')) {
                const highlightContent = paragraph
                    .replace(':::highlight\n', '')
                    .replace('\n:::', '')
                    .trim();

                parts.push(
                    <div key={`highlight-${pIndex}`} className="highlight">
                        <p style={{ marginBottom: 0 }}>
                            {parseInlineElements(highlightContent)}
                        </p>
                    </div>
                );
            } else {
                // Regular paragraph
                parts.push(
                    <p key={`p-${pIndex}`}>
                        {parseInlineElements(paragraph.trim())}
                    </p>
                );
            }
        });

        return parts;
    };

    // Parse inline elements (links, bold) and return React elements
    const parseInlineElements = (text: string): React.ReactNode[] => {
        const elements: React.ReactNode[] = [];
        let lastIndex = 0;

        // Combine both patterns for links and bold
        const combinedRegex = /(\[([^\]]+)\]\(([^)]+)\))|(\*\*([^*]+)\*\*)/g;

        let match;
        while ((match = combinedRegex.exec(text)) !== null) {
            // Add text before match
            if (match.index > lastIndex) {
                elements.push(text.substring(lastIndex, match.index));
            }

            if (match[1]) {
                // It's a link [text](url)
                const linkText = match[2];
                const url = match[3];

                if (url.startsWith('/')) {
                    // Internal link
                    elements.push(
                        <Link key={match.index} href={url}>
                            {linkText}
                        </Link>
                    );
                } else {
                    // External link or anchor
                    elements.push(
                        <a key={match.index} href={url}>
                            {linkText}
                        </a>
                    );
                }
            } else if (match[4]) {
                // It's bold **text**
                const boldText = match[5];
                elements.push(<strong key={match.index}>{boldText}</strong>);
            }

            lastIndex = match.index + match[0].length;
        }

        // Add remaining text
        if (lastIndex < text.length) {
            elements.push(text.substring(lastIndex));
        }

        return elements.length > 0 ? elements : [text];
    };

    return <>{parseContent(content)}</>;
}
