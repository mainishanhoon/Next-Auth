'use client';

import { Card } from '@/components/ui/card';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export default function CardWrapper({
  children, headerLabel, backButtonLabel, backButtonHref, showSocial
}: CardWrapperProps){
  return(
    <div>Nothing</div>
  )
}
