import React from 'react';
import { ScrollArea } from './ui/scroll-area';

export default function PageContainer({
  children,
  scrollable = true,
}: {
  children: React.ReactNode;
  scrollable?: boolean;
}) {
  return (
    <>
      {scrollable ? (
        <ScrollArea>
          <div className="h-full px-0.5">{children}</div>
        </ScrollArea>
      ) : (
        <div className="h-full p-4">{children}</div>
      )}
    </>
  );
}
