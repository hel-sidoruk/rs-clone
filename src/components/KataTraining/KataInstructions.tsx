import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { KataAPI } from '../../api';
import useTypedSelector from '../../hooks/useTypedSelector';
import { KataInterface } from '../../types/kata';
import { TagsBlock } from '../Kata/TagsBlock';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeHighlight } from '../Solution/CodeHighlight';

export const KataInstructions = () => {
  const { id } = useParams();
  const [kata, setKata] = useState<KataInterface | null>(null);
  const { katasByID } = useTypedSelector((state) => state.katas);

  useEffect(() => {
    if (id && katasByID) {
      if (katasByID[id]) setKata(katasByID[id]);
      else KataAPI.getOne(id).then((kata) => setKata(kata));
    }
  }, [id, katasByID]);

  return (
    <div className="description">
      <div className="markdown mb-32">
        {kata && (
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /javascript/.exec(className || '');
                return !inline && match ? (
                  <CodeHighlight>{String(children).replace(/\n$/, '')}</CodeHighlight>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
            remarkPlugins={[remarkGfm]}
          >
            {kata.description}
          </ReactMarkdown>
        )}
      </div>
      <hr />
      {kata && <TagsBlock tags={kata.tags} />}
    </div>
  );
};
